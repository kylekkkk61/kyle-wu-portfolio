# Cloudflare R2 CORS Cache Poisoning & Proxy Solution

This document explains the CORS cache poisoning issue encountered when serving the resume PDF from Cloudflare R2 on `cv.kylewu.me` and details the Cloudflare Worker proxy setup implemented to resolve it.

---

## The Problem: CORS Cache Poisoning

When hosting static assets (like PDFs) on S3/R2 with custom subdomains:
1. **Direct Navigation**: If a user visits the asset URL directly (e.g., typing `https://cv.kylewu.me/kyle-wu-resume.pdf` in the browser address bar), the request does not send an `Origin` header. Cloudflare R2 returns a `200 OK` response **without** the `Access-Control-Allow-Origin` header, and the browser caches this response in its disk cache.
2. **CORS Request Failure**: When the user navigates back to `kylewu.me` and the website tries to load the PDF via AJAX/fetch (which sends an `Origin: https://kylewu.me` header), the browser reuses the cached response from disk. Because the cached response lacks the `Access-Control-Allow-Origin` header, the browser blocks the load, causing a CORS error ("Failed to load PDF").

---

## The Solution: Cloudflare Worker Proxy

To ensure the `Access-Control-Allow-Origin` and `Vary: Origin` headers are **always** present in every response (regardless of whether the request has an `Origin` header), we route `cv.kylewu.me` through a Cloudflare Worker that proxies the R2 bucket.

### Worker Code
Create a Cloudflare Worker with the following JavaScript:

```javascript
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Extract key (e.g., "kyle-wu-resume.pdf") from URL path
    const key = decodeURIComponent(url.pathname.slice(1)); 

    // 1. Handle browser CORS preflight requests (OPTIONS)
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "https://kylewu.me",
          "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    // 2. Limit methods to GET and HEAD
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    // 3. Read directly from the bound R2 Bucket (high speed, inside CF network)
    const object = await env.BUCKET.get(key);

    if (object === null) {
      return new Response("File Not Found", { status: 404 });
    }

    // 4. Set headers from R2 metadata
    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set("etag", object.httpEtag);
    
    // 5. Force CORS & Vary headers to prevent cache poisoning
    headers.set("Access-Control-Allow-Origin", "https://kylewu.me");
    headers.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
    headers.set("Vary", "Origin");

    // 6. Set long browser & CDN cache duration for performance
    headers.set("Cache-Control", "public, max-age=31536000"); 

    return new Response(object.body, { headers });
  },
};
```

---

## Configuration Steps on Cloudflare

1. **Create the Worker**:
   * Go to **Workers & Pages** ➔ **Create** ➔ **Create Worker**.
   * Name it `cv-cors-proxy` and deploy.
   * Edit code, paste the script above, and deploy.
2. **Bind the R2 Bucket**:
   * Go to Worker **Settings** ➔ **Variables** (or Bindings).
   * Under **R2 Bucket Bindings**, add a binding:
     * **Variable name**: `BUCKET` (must match the code).
     * **R2 bucket**: Select your R2 bucket.
3. **Bind Custom Domain**:
   * Go to Worker **Settings** ➔ **Triggers**.
   * Under **Custom Domains**, click **Add Custom Domain**.
   * Input `cv.kylewu.me` and save. *(Note: Delete the existing DNS CNAME or R2 custom domain mapping for `cv.kylewu.me` first if they conflict).*

---

## How to Update the PDF (Developer Workflow)

Since browsers may have already cached the old, CORS-poisoned file, we use a query parameter to force clients to bypass their local cache and hit the new proxy.

1. Upload the new PDF (e.g. `kyle-wu-resume.pdf`) to your Cloudflare R2 bucket.
2. In [src/data/links.ts](file:///Users/kyle/Downloads/kyle-wu-portfolio/src/data/links.ts), increment the version query parameter `?v=X` on the `resumePdf` link:
   ```typescript
   resumePdf: "https://cv.kylewu.me/kyle-wu-resume.pdf?v=2", // Incremented from v=1
   ```
3. Commit and deploy the frontend update. This forces all clients to download the new PDF immediately, while ensuring they cache the new, CORS-enabled response for future visits.
