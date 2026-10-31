import { useEffect, useRef } from 'react'

function SplashCursor({ COLOR = '#ffffff' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (
      !canvas ||
      !context ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      return undefined
    }

    const points = []
    let animationFrame = 0
    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * pixelRatio
      canvas.height = window.innerHeight * pixelRatio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }
    const addPoint = (event) => {
      points.push({ x: event.clientX, y: event.clientY, age: 0 })
      if (points.length > 32) points.shift()
    }
    const drawTrail = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (let index = points.length - 1; index >= 0; index -= 1) {
        const point = points[index]
        point.age += 1
        const opacity = Math.max(0, 1 - point.age / 34)
        const radius = Math.max(1, 13 * opacity)
        context.beginPath()
        context.arc(point.x, point.y, radius, 0, Math.PI * 2)
        context.globalAlpha = opacity * 0.22
        context.fillStyle = COLOR
        context.shadowBlur = 18 * opacity
        context.shadowColor = COLOR
        context.fill()
        if (opacity === 0) points.splice(index, 1)
      }
      context.globalAlpha = 1
      context.shadowBlur = 0
      animationFrame = window.requestAnimationFrame(drawTrail)
    }

    resizeCanvas()
    drawTrail()
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('pointermove', addPoint, { passive: true })
    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('pointermove', addPoint)
    }
  }, [COLOR])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50"
    />
  )
}

export default SplashCursor
