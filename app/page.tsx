"use client"

import { useState } from "react"

export default function Home() {
  const [selectedAnimation, setSelectedAnimation] = useState("boomerang")
  const [isAnimating, setIsAnimating] = useState(false)

  const handleMimic = () => {
    // Reset animation state first to ensure it triggers again even if same animation is selected
    setIsAnimating(false)

    // Force a reflow before setting isAnimating to true
    setTimeout(() => {
      setIsAnimating(true)

      // Reset animation after it completes
      setTimeout(() => {
        setIsAnimating(false)
      }, 3000)
    }, 10)
  }

  return (
    <main className="container">
      <div className="content">
        <h1 className={`title ${isAnimating ? `mimic${selectedAnimation}` : "mimicTitleGradient"}`}>Mimic.css</h1>
        <p className="subtitle">Everyone else is doing it.</p>

        <div className="controls">
          <select
            className="select-animation"
            value={selectedAnimation}
            onChange={(e) => setSelectedAnimation(e.target.value)}
          >
            <option value="boomerang">boomerang</option>
            <option value="gettinInYoFace">gettinInYoFace</option>
            <option value="airplanePropeller">airplanePropeller</option>
            <option value="pulsate">pulsate</option>
            <option value="iWanChuBack">iWanChuBack</option>
            <option value="lawnMower">lawnMower</option>
            <option value="swivelChair">swivelChair</option>
            <option value="candleInTheWind">candleInTheWind</option>
            <option value="nope">nope</option>
            <option value="heartBeat">heartBeat</option>
            <option value="sleepyEyes">sleepyEyes</option>
            <option value="plummit">plummit</option>
            <option value="dropItLikeItsHot">dropItLikeItsHot</option>
            <option value="gettinLifted">gettinLifted</option>
            <option value="glaucoma">glaucoma</option>
            <option value="chameleon">chameleon</option>
            <option value="backdrop">backdrop</option>
            <option value="acidTrip">acidTrip</option>
            <option value="spinner">spinner</option>
            <option value="pageTurn">pageTurn</option>
            <option value="typewriter">typewriter</option>
            <option value="glitch">glitch</option>
            <option value="origami">origami</option>
            <option value="liquid">liquid</option>
            <option value="shatter">shatter</option>
            <option value="elastic">elastic</option>
            <option value="pixelate">pixelate</option>
            <option value="spotlight">spotlight</option>
            <option value="gravity">gravity</option>
            <option value="spiral">spiral</option>
          </select>
          <button className="mimic-button mimicBorderGradient" onClick={handleMimic}>
            Mimic
          </button>
        </div>

        <div className="footer">
          <p>Something by Eric Treacy</p>
          <a href="https://github.com/erictreacy/mimic.css" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </main>
  )
}
