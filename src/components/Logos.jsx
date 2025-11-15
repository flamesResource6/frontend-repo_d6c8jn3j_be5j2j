const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_N_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
]

export default function Logos() {
  return (
    <section className="relative py-10 sm:py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500">Trusted by product and design teams</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center gap-6 opacity-70">
          {logos.map((src, i) => (
            <img key={i} src={src} alt="logo" className="mx-auto h-8 object-contain" />
          ))}
        </div>
      </div>
    </section>
  )
}
