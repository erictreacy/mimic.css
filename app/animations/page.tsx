"use client"

import { useState } from "react"
import Link from "next/link"

// Animation classes from mimic.css
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
  // New animations
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

export default function AnimationsPage() {
  const [currentAnimation, setCurrentAnimation] = useState("")

  const handleAnimationClick = (animation: string) => {
    setCurrentAnimation(animation)

    // Reset animation after it completes
    setTimeout(() => {
      setCurrentAnimation("")
    }, 3000)
  }

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Mimic.css Animations</h1>
        <p className="subtitle">Click on an animation to see it in action</p>

        <div className="demo-box">
          <div className={`demo-element ${currentAnimation ? `mimic${currentAnimation}` : ""}`}>
            {currentAnimation || "Click an animation below"}
          </div>
        </div>

        <div className="animation-grid">
          {animations.map((animation) => (
            <button key={animation} className="animation-button" onClick={() => handleAnimationClick(animation)}>
              {animation}
            </button>
          ))}
        </div>

        <div className="back-link">
          <Link href="/">&larr; Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
