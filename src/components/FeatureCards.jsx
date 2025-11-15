export default function FeatureCards() {
  const features = [
    {
      title: 'Design system',
      desc: 'A cohesive visual language for fintech products with accessibility baked-in.',
    },
    {
      title: 'Component library',
      desc: 'Production-ready components for dashboards, onboarding, and payments.',
    },
    {
      title: 'Developer-first',
      desc: 'Clean APIs, great docs, and everything you need to ship fast.',
    },
  ]

  return (
    <section id="solutions" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-orange-500 to-pink-500 text-white grid place-items-center font-semibold">
                {f.title[0]}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              <a href="#" className="mt-4 inline-block text-sm font-semibold text-gray-900">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
