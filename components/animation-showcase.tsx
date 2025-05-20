"use client"

import { useState } from "react"

export default function AnimationShowcase() {
  const [activeAnimation, setActiveAnimation] = useState<string | null>(null)

  const animations = [
    "bounce",
    "flash",
    "pulse",
    "rubberBand",
    "shake",
    "swing",
    "tada",
    "wobble",
    "jello",
    "heartBeat",
  ]

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-6">Interactive Showcase</h2>

      <div className="flex flex-wrap gap-2 mb-8">
        {animations.map((animation) => (
          <button
            key={animation}
            className={`px-4 py-2 rounded ${activeAnimation === animation ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            onClick={() => setActiveAnimation(animation)}
          >
            {animation}
          </button>
        ))}
      </div>

      <div className="border rounded-lg p-12 flex justify-center items-center bg-gray-50 h-64">
        {activeAnimation ? (
          <div className={`text-3xl font-bold mimic-${activeAnimation}`}>Mimic.css Animation!</div>
        ) : (
          <div className="text-gray-400">Select an animation above</div>
        )}
      </div>
    </div>
  )
}
