import { NextResponse } from "next/server"

// This is a simple API route that returns a list of available animations
export async function GET() {
  const animations = {
    attention_seekers: [
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
    ],
    fading_entrances: ["fadeIn", "fadeInDown", "fadeInLeft", "fadeInRight", "fadeInUp"],
    fading_exits: ["fadeOut", "fadeOutDown", "fadeOutLeft", "fadeOutRight", "fadeOutUp"],
    // Add more categories as needed
  }

  return NextResponse.json(animations)
}
