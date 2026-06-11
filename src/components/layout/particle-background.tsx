"use client"

import React, { useEffect, useRef } from "react"

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
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

        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`
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

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw base grid
      ctx.fillStyle = "rgba(255, 255, 255, 0.01)" // Very faint base background for all squares
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
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("resize", initSquares)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 mix-blend-plus-lighter"
      style={{
        maskImage:
          "radial-gradient(ellipse at top, black 10%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at top, black 10%, transparent 80%)",
      }}
    />
  )
}
