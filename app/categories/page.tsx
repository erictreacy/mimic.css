"use client"

import { useState } from "react"
import Link from "next/link"

// Animation categories
const animationCategories = {
  "Attention Seekers": ["boomerang", "pulsate", "nope", "heartBeat", "chameleon", "glitch", "elastic"],
  "Entrances & Exits": ["gettinInYoFace", "candleInTheWind", "dropItLikeItsHot", "gettinLifted", "plummit", "gravity"],
  "Rotations & Spins": ["airplanePropeller", "lawnMower", "swivelChair", "spinner", "pageTurn", "spiral", "origami"],
  "Special Effects": [
    "iWanChuBack",
    "sleepyEyes",
    "glaucoma",
    "backdrop",
    "acidTrip",
    "typewriter",
    "liquid",
    "shatter",
    "pixelate",
    "spotlight",
  ],
}

export default function CategoriesPage() {
  const [currentAnimation, setCurrentAnimation] = useState("")
  const [currentCategory, setCurrentCategory] = useState("Attention Seekers")

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
        <h1 className="title">Animation Categories</h1>
        <p className="subtitle">Explore animations by category</p>

        <div className="category-tabs">
          {Object.keys(animationCategories).map((category) => (
            <button
              key={category}
              className={`category-tab ${currentCategory === category ? "active-tab" : ""}`}
              onClick={() => setCurrentCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="demo-box">
          <div className={`demo-element ${currentAnimation ? `mimic${currentAnimation}` : ""}`}>
            {currentAnimation || "Click an animation below"}
          </div>
        </div>

        <div className="animation-grid">
          {animationCategories[currentCategory as keyof typeof animationCategories].map((animation) => (
            <button key={animation} className="animation-button" onClick={() => handleAnimationClick(animation)}>
              {animation}
            </button>
          ))}
        </div>

        <div className="navigation-links">
          <Link href="/">&larr; Home</Link>
          <Link href="/animations">All Animations &rarr;</Link>
        </div>
      </div>
    </div>
  )
}
