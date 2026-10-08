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
      context.save()
      context.globalCompositeOperation = "screen"
      const waveTime = reduced ? 0 : time / 850
      for (let band = 0; band < 3; band++) {
        context.beginPath()
        for (let x = -8; x <= width + 8; x += 4) {
          const y = height * (.28 + band * .24) + Math.sin(x * .035 + waveTime + band) * 4 + Math.sin(x * .012 - waveTime * .7) * 3 + (pointer.x - .5) * 8
          if (x === -8) context.moveTo(x, y); else context.lineTo(x, y)
        }
        context.strokeStyle = light ? `rgba(75,145,230,${.16 - band * .025})` : `rgba(225,232,238,${.13 - band * .02})`
        context.lineWidth = 5 - band
        context.filter = "blur(3px)"
        context.stroke()
      }
      context.filter = "none"
      context.globalAlpha = light ? .25 : .2
      for (let x = 3; x < width; x += 5) for (let y = 3; y < height; y += 5) { const shimmer = Math.sin(waveTime + x * .08 + y * .05) * .5 + .5; context.fillStyle = light ? `rgba(30,86,150,${.16 + shimmer * .24})` : `rgba(255,255,255,${.12 + shimmer * .28})`; context.fillRect(x, y, 1, 1) }
      context.restore()
      if (!reduced) frame = requestAnimationFrame(draw)
    }
    resize(); draw(0); window.addEventListener("resize", resize); canvas.addEventListener("pointermove", move)
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); canvas.removeEventListener("pointermove", move) }
  }, [light])

  return <canvas ref={canvasRef} className="dock-shader" aria-hidden="true" />
}

export default DockShader
