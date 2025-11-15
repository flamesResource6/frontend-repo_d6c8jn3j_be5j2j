import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Platform', href: '#platform' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#resources' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 py-5">
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 grid place-items-center text-white font-bold">
              EF
            </div>
            <span className="text-xl font-semibold tracking-tight text-gray-900">EnvisionFlowc</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#login" className="text-sm font-medium text-gray-700 hover:text-gray-900">Log in</a>
            <a href="#get-started" className="inline-flex items-center rounded-lg bg-gray-900 text-white text-sm font-semibold px-4 py-2 hover:bg-black transition-colors">Get started</a>
          </div>

          <button aria-label="Open menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white/70 backdrop-blur text-gray-700">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-gray-700">
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="#login" className="flex-1 rounded-lg border border-gray-200 px-4 py-2 text-center text-sm font-medium text-gray-700">Log in</a>
              <a href="#get-started" className="flex-1 rounded-lg bg-gray-900 text-white px-4 py-2 text-center text-sm font-semibold">Get started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
