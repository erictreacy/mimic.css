import AnimationShowcase from "@/components/animation-showcase"
import Link from "next/link"

export default function AdvancedPage() {
  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 mimic-fadeIn">Advanced Animations</h1>

      <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
        ← Back to home
      </Link>

      <AnimationShowcase />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="border rounded-lg p-6 hover-trigger">
          <h3 className="text-xl font-semibold mb-4">Hover Animations</h3>
          <p className="mb-4">Hover over this card to see the animation.</p>
          <div className="h-32 bg-blue-100 rounded flex items-center justify-center">
            <span className="mimic-tada text-xl font-bold">Hover Effect!</span>
          </div>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Animation Sequence</h3>
          <div className="space-y-4">
            <div className="mimic-fadeInLeft" style={{ animationDelay: "0.2s" }}>
              First item appears
            </div>
            <div className="mimic-fadeInLeft" style={{ animationDelay: "0.4s" }}>
              Second item follows
            </div>
            <div className="mimic-fadeInLeft" style={{ animationDelay: "0.6s" }}>
              Third item completes the sequence
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
