"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function PlaygroundPage() {
  const [selectedAnimation, setSelectedAnimation] = useState("boomerang")
  const [duration, setDuration] = useState(1)
  const [delay, setDelay] = useState(0)
  const [iterations, setIterations] = useState(1)
  const [direction, setDirection] = useState("normal")
  const [fillMode, setFillMode] = useState("both")
  const [timingFunction, setTimingFunction] = useState("ease")
  const [isAnimating, setIsAnimating] = useState(false)
  const [cssCode, setCssCode] = useState("")
  const [htmlCode, setHtmlCode] = useState("")

  // All animations
  const animations = [
    "boomerang",
    "gettinInYoFace",
    "airplanePropeller",
    "pulsate",
    "iWanChuBack",
    "lawnMower",
    "swivelChair",
    "candleInTheWind",
    "nope",
    "heartBeat",
    "sleepyEyes",
    "plummit",
    "dropItLikeItsHot",
    "gettinLifted",
    "glaucoma",
    "chameleon",
    "backdrop",
    "acidTrip",
    "spinner",
    "pageTurn",
    "typewriter",
    "glitch",
    "origami",
    "liquid",
    "shatter",
    "elastic",
    "pixelate",
    "spotlight",
    "gravity",
    "spiral",
  ]

  // Timing functions
  const timingFunctions = ["ease", "ease-in", "ease-out", "ease-in-out", "linear", "step-start", "step-end"]

  // Animation directions
  const directions = ["normal", "reverse", "alternate", "alternate-reverse"]

  // Fill modes
  const fillModes = ["none", "forwards", "backwards", "both"]

  // Play animation
  const playAnimation = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsAnimating(true)
    }, 10)
  }

  // Generate code snippets
  useEffect(() => {
    const css = `.mimic${selectedAnimation} {
  animation-name: mimic${selectedAnimation};
  animation-duration: ${duration}s;
  animation-delay: ${delay}s;
  animation-iteration-count: ${iterations === "infinite" ? "infinite" : iterations};
  animation-direction: ${direction};
  animation-fill-mode: ${fillMode};
  animation-timing-function: ${timingFunction};
}`

    const html = `<div class="mimic${selectedAnimation}">Your content here</div>`

    setCssCode(css)
    setHtmlCode(html)
  }, [selectedAnimation, duration, delay, iterations, direction, fillMode, timingFunction])

  return (
    <div className="container">
      <div className="content playground-content">
        <h1 className="title">Animation Playground</h1>
        <p className="subtitle">Customize and test animations</p>

        <div className="playground-layout">
          <div className="controls-panel">
            <div className="control-group">
              <label htmlFor="animation">Animation:</label>
              <select
                id="animation"
                value={selectedAnimation}
                onChange={(e) => setSelectedAnimation(e.target.value)}
                className="select-animation"
              >
                {animations.map((anim) => (
                  <option key={anim} value={anim}>
                    {anim}
                  </option>
                ))}
              </select>
            </div>

            <div className="control-group">
              <label htmlFor="duration">Duration (s):</label>
              <input
                id="duration"
                type="number"
                min="0.1"
                step="0.1"
                value={duration}
                onChange={(e) => setDuration(Number.parseFloat(e.target.value))}
                className="number-input"
              />
            </div>

            <div className="control-group">
              <label htmlFor="delay">Delay (s):</label>
              <input
                id="delay"
                type="number"
                min="0"
                step="0.1"
                value={delay}
                onChange={(e) => setDelay(Number.parseFloat(e.target.value))}
                className="number-input"
              />
            </div>

            <div className="control-group">
              <label htmlFor="iterations">Iterations:</label>
              <select
                id="iterations"
                value={iterations}
                onChange={(e) => setIterations(e.target.value)}
                className="select-animation"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="infinite">infinite</option>
              </select>
            </div>

            <div className="control-group">
              <label htmlFor="direction">Direction:</label>
              <select
                id="direction"
                value={direction}
                onChange={(e) => setDirection(e.target.value)}
                className="select-animation"
              >
                {directions.map((dir) => (
                  <option key={dir} value={dir}>
                    {dir}
                  </option>
                ))}
              </select>
            </div>

            <div className="control-group">
              <label htmlFor="fillMode">Fill Mode:</label>
              <select
                id="fillMode"
                value={fillMode}
                onChange={(e) => setFillMode(e.target.value)}
                className="select-animation"
              >
                {fillModes.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </div>

            <div className="control-group">
              <label htmlFor="timingFunction">Timing Function:</label>
              <select
                id="timingFunction"
                value={timingFunction}
                onChange={(e) => setTimingFunction(e.target.value)}
                className="select-animation"
              >
                {timingFunctions.map((timing) => (
                  <option key={timing} value={timing}>
                    {timing}
                  </option>
                ))}
              </select>
            </div>

            <button className="play-button" onClick={playAnimation}>
              Play Animation
            </button>
          </div>

          <div className="preview-panel">
            <div className="preview-container">
              <div
                className={isAnimating ? "animated-element" : "static-element"}
                style={
                  isAnimating
                    ? {
                        animationName: `mimic${selectedAnimation}`,
                        animationDuration: `${duration}s`,
                        animationDelay: `${delay}s`,
                        animationIterationCount: iterations === "infinite" ? "infinite" : iterations,
                        animationDirection: direction,
                        animationFillMode: fillMode,
                        animationTimingFunction: timingFunction,
                      }
                    : {}
                }
              >
                Mimic.css
              </div>
            </div>

            <div className="code-snippets">
              <div className="code-block">
                <h3>CSS</h3>
                <pre>{cssCode}</pre>
              </div>
              <div className="code-block">
                <h3>HTML</h3>
                <pre>{htmlCode}</pre>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation-links">
          <Link href="/">&larr; Home</Link>
          <Link href="/categories">Categories &rarr;</Link>
        </div>
      </div>
    </div>
  )
}
