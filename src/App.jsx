import { useState } from 'react'
import { sections } from './data/sections'
import Garden from './components/Garden'
import IntroGate from './components/IntroGate'
import BloomView from './components/BloomView'
import './App.css'

/**
 * Root app — intro gate, then garden.
 * Flower open = fullscreen bloom zoom (content in the flower center).
 * Framer Motion later: AnimatePresence on gate + bloom.
 */
function App() {
  const [entered, setEntered] = useState(false)
  const [openSectionId, setOpenSectionId] = useState(null)

  const openSection = sections.find((s) => s.id === openSectionId) ?? null

  return (
    <div
      className={`app ${entered ? 'has-entered' : 'is-gated'} ${openSection ? 'has-bloom' : ''}`}
    >
      <Garden
        sections={sections}
        openSectionId={openSectionId}
        openSection={openSection}
        onFlowerClick={(id) => setOpenSectionId(id)}
        interactive={entered}
      />

      {openSection && (
        <BloomView section={openSection} onClose={() => setOpenSectionId(null)} />
      )}

      {!entered && <IntroGate onEnter={() => setEntered(true)} />}
    </div>
  )
}

export default App
