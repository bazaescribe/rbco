"use client"

import { useEffect, useRef } from "react"

const ProceduralAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Wave parameters
    const waves: {
      amplitude: number
      frequency: number
      speed: number
      phase: number
      y: number
      width: number
      color: string
    }[] = []

    // Create waves
    const createWaves = () => {
      const waveCount = Math.floor(window.innerHeight / 80)

      for (let i = 0; i < waveCount; i++) {
        waves.push({
          amplitude: Math.random() * 30 + 10,
          frequency: Math.random() * 0.01 + 0.005,
          speed: (Math.random() * 0.5 + 0.1) * 0.066, // Reducido a 1/3 de la velocidad original
          phase: Math.random() * Math.PI * 2,
          y: (canvas.height / (waveCount + 1)) * (i + 1),
          width: Math.random() * 1.5 + 0.5,
          color: `rgba(212, 255, 0, ${Math.random() * 0.12 + 0.03})`,
        })
      }
    }

    createWaves()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "#000F0D"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update waves
      waves.forEach((wave) => {
        ctx.beginPath()

        // Start drawing from the left edge
        ctx.moveTo(0, wave.y)

        // Draw the wave across the canvas
        for (let x = 0; x < canvas.width; x += 5) {
          const y = wave.y + Math.sin(x * wave.frequency + wave.phase) * wave.amplitude
          ctx.lineTo(x, y)
        }

        ctx.strokeStyle = wave.color
        ctx.lineWidth = wave.width
        ctx.stroke()

        // Update phase for movement
        wave.phase += wave.speed
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: "#000F0D" }} />
}

export default ProceduralAnimation
