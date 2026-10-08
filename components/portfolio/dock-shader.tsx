"use client"

import { useEffect, useRef } from "react"

export function DockShader({ light }: { light: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext("2d")
    if (!context) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let frame = 0
    let pointer = { x: 0.5, y: 0.5 }
    const resize = () => { const ratio = window.devicePixelRatio || 1; canvas.width = canvas.clientWidth * ratio; canvas.height = canvas.clientHeight * ratio; context.setTransform(ratio, 0, 0, ratio, 0, 0) }
    const move = (event: PointerEvent) => { const rect = canvas.getBoundingClientRect(); pointer = { x: (event.clientX - rect.left) / rect.width, y: (event.clientY - rect.top) / rect.height } }
    const draw = (time: number) => {
      const width = canvas.clientWidth, height = canvas.clientHeight
      context.clearRect(0, 0, width, height)
      const gradient = context.createLinearGradient(0, 0, width, height)
      if (light) { gradient.addColorStop(0, "rgba(231,243,255,.88)"); gradient.addColorStop(.5, "rgba(135,181,239,.35)"); gradient.addColorStop(1, "rgba(245,248,255,.86)") } else { gradient.addColorStop(0, "rgba(255,255,255,.12)"); gradient.addColorStop(.5, "rgba(190,198,207,.12)"); gradient.addColorStop(1, "rgba(0,0,0,.18)") }
      context.fillStyle = gradient; context.fillRect(0, 0, width, height)
      context.globalAlpha = light ? .22 : .18
      for (let x = 3; x < width; x += 5) for (let y = 3; y < height; y += 5) { const distance = Math.hypot(x / width - pointer.x, y / height - pointer.y); const shimmer = Math.sin(time / 900 + x * .08 + y * .05) * .5 + .5; context.fillStyle = light ? `rgba(30,86,150,${.2 + shimmer * .25})` : `rgba(255,255,255,${.15 + shimmer * .3})`; context.fillRect(x, y, 1, 1) }
      context.globalAlpha = 1
      if (!reduced) frame = requestAnimationFrame(draw)
    }
    resize(); draw(0); window.addEventListener("resize", resize); canvas.addEventListener("pointermove", move)
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); canvas.removeEventListener("pointermove", move) }
  }, [light])

  return <canvas ref={canvasRef} className="dock-shader" aria-hidden="true" />
}

export default DockShader
