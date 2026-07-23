"use client"

import { useEffect, useRef } from "react"

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number | undefined
    let isRunning = false
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const size = 12 // Size of each square
    const gap = 1 // Gap between squares
    const spacing = size + gap

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    class TwinklingSquare {
      col: number
      row: number
      duration: number
      startTime: number
      maxOpacity: number

      constructor(cols: number, rows: number, timeOffset = 0) {
        this.col = Math.floor(Math.random() * cols)
        this.row = Math.floor(Math.random() * rows)
        this.duration = Math.random() * 4000 + 3000 // 3 to 7 seconds
        this.startTime = Date.now() - timeOffset
        this.maxOpacity = Math.random() * 0.06 + 0.02 // Very subtle peak opacity (0.02 to 0.08)
      }

      update(cols: number, rows: number, now: number) {
        const progress = (now - this.startTime) / this.duration
        if (progress >= 1) {
          // Respawn
          this.col = Math.floor(Math.random() * cols)
          this.row = Math.floor(Math.random() * rows)
          this.duration = Math.random() * 4000 + 3000
          this.startTime = now
          this.maxOpacity = Math.random() * 0.06 + 0.02
        }
      }

      draw(ctx: CanvasRenderingContext2D, now: number) {
        const progress = (now - this.startTime) / this.duration
        if (progress < 0 || progress > 1) return

        // Sine wave for smooth fade in and out
        const currentOpacity = Math.sin(progress * Math.PI) * this.maxOpacity

        const x = this.col * spacing
        const y = this.row * spacing

        const isDark =
          typeof document !== "undefined" &&
          document.documentElement.classList.contains("dark")
        const colorRgb = isDark ? "255, 255, 255" : "44, 42, 41"

        ctx.fillStyle = `rgba(${colorRgb}, ${currentOpacity})`
        ctx.fillRect(x, y, size, size)
      }
    }

    let cols = Math.ceil(canvas.width / spacing)
    let rows = Math.ceil(canvas.height / spacing)
    let activeSquares: TwinklingSquare[] = []

    // Initialize squares (around 4% of the grid will be twinkling at any time)
    const initSquares = () => {
      cols = Math.ceil(canvas.width / spacing)
      rows = Math.ceil(canvas.height / spacing)
      const totalGridCells = cols * rows
      const targetSquareCount = Math.floor(totalGridCells * 0.04)

      activeSquares = []
      for (let i = 0; i < targetSquareCount; i++) {
        // Distribute start times so they don't all blink together
        const timeOffset = Math.random() * 7000
        activeSquares.push(new TwinklingSquare(cols, rows, timeOffset))
      }
    }

    initSquares()

    window.addEventListener("resize", initSquares)

    const drawFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw base grid
      const isDark =
        typeof document !== "undefined" &&
        document.documentElement.classList.contains("dark")
      const baseColorRgb = isDark ? "255, 255, 255" : "44, 42, 41"
      ctx.fillStyle = `rgba(${baseColorRgb}, 0.01)` // Very faint base background for all squares
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Cut out the gaps to form discrete squares
      for (let c = 1; c <= cols; c++) {
        ctx.clearRect(c * spacing - gap, 0, gap, canvas.height)
      }
      for (let r = 1; r <= rows; r++) {
        ctx.clearRect(0, r * spacing - gap, canvas.width, gap)
      }

      // Draw twinkling squares
      const now = Date.now()
      for (let i = 0; i < activeSquares.length; i++) {
        activeSquares[i].update(cols, rows, now)
        activeSquares[i].draw(ctx, now)
      }
    }

    const animate = () => {
      if (!isRunning) return
      drawFrame()
      animationFrameId = requestAnimationFrame(animate)
    }

    const stopAnimation = () => {
      isRunning = false
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId)
        animationFrameId = undefined
      }
    }

    const startAnimation = () => {
      if (motionQuery.matches || document.hidden || isRunning) return
      isRunning = true
      animate()
    }

    const syncAnimation = () => {
      if (motionQuery.matches || document.hidden) {
        stopAnimation()
        drawFrame()
      } else {
        startAnimation()
      }
    }

    document.addEventListener("visibilitychange", syncAnimation)
    motionQuery.addEventListener("change", syncAnimation)
    window.addEventListener("resize", syncAnimation)
    syncAnimation()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("resize", initSquares)
      document.removeEventListener("visibilitychange", syncAnimation)
      motionQuery.removeEventListener("change", syncAnimation)
      window.removeEventListener("resize", syncAnimation)
      stopAnimation()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 dark:mix-blend-plus-lighter mix-blend-normal"
      style={{
        maskImage:
          "radial-gradient(ellipse at top, black 10%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at top, black 10%, transparent 80%)",
      }}
    />
  )
}
