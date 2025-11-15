import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import FeatureCards from './components/FeatureCards'

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Logos />
      <FeatureCards />
      <footer className="py-12 text-center text-sm text-gray-500 bg-white">
        © 2025 EnvisionFlowc. All rights reserved.
      </footer>
    </div>
  )
}

export default App
