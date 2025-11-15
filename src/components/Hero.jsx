import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              Financial experiences, reimagined
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
              Your vision. Our flow.
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-7 text-gray-600 max-w-xl">
              Build sleek fintech journeys with a modern design system. Modular components, robust APIs, and a frictionless developer experience.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white text-sm font-semibold px-5 py-3 hover:bg-black">
                Start building
              </a>
              <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-white/80 backdrop-blur ring-1 ring-gray-200 text-gray-900 text-sm font-semibold px-5 py-3 hover:bg-white">
                View demo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(255,255,255,0.75),transparent_60%)]"></div>
    </section>
  )
}
