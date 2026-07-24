import { useEffect } from 'react'
import SkyTitle from './SkyTitle'
import Flower from './Flower'
import TreeSign from './TreeSign'

/**
 * Depth stack (back → front):
 * sky → far → hills → mid → near grass → flowers → title → tree + sign
 *
 * Background drifts more; grass & flowers are separate opposite/soft layers;
 * tree is frontmost and almost still.
 */
export default function Garden({
  sections,
  openSectionId,
  openSection,
  onFlowerClick,
  interactive,
}) {
  const focusStyle = openSection
    ? {
        '--focus-x': openSection.flower.left,
        '--focus-y': `calc(100% - ${openSection.flower.bottom})`,
      }
    : undefined

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined

    const handleMouseMove = (event) => {
      const xValue = event.clientX - window.innerWidth / 2
      const yValue = event.clientY - window.innerHeight / 2

      document.querySelectorAll('.parallax').forEach((el) => {
        const speedX = Number(el.dataset.speedx) || 0
        const speedY = Number(el.dataset.speedy) || 0
        const scale = Number(el.dataset.scale) || 1
        const dir = Number(el.dataset.dir) || 1
        el.style.transform = `translate(${dir * -xValue * speedX}px, ${dir * -yValue * speedY}px) scale(${scale})`
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main
      className={`garden ${openSectionId ? 'is-focused' : ''} ${interactive ? '' : 'is-locked'}`}
      style={focusStyle}
      aria-label="Owen's Garden"
      aria-hidden={!interactive}
    >
      <div className="scene" aria-hidden="true">
        <div
          className="layer layer-sky parallax"
          data-speedx="0.08"
          data-speedy="0.08"
          data-scale="1.22"
        >
          <img src="/layer-sky.png?v=36" alt="" draggable={false} />
        </div>
        <div
          className="layer layer-far parallax"
          data-speedx="0.12"
          data-speedy="0.12"
          data-scale="1.22"
        >
          <img src="/layer-far.png?v=36" alt="" draggable={false} />
        </div>
        <div
          className="layer layer-hills parallax"
          data-speedx="0.16"
          data-speedy="0.16"
          data-scale="1.22"
        >
          <img src="/layer-hills.png?v=36" alt="" draggable={false} />
        </div>
        <div
          className="layer layer-mid parallax"
          data-speedx="0.2"
          data-speedy="0.2"
          data-scale="1.24"
        >
          <img src="/layer-mid.png?v=36" alt="" draggable={false} />
        </div>

        {/* Near grass — own layer, opposite + soft */}
        <div
          className="layer layer-grass parallax"
          data-speedx="0.025"
          data-speedy="0.025"
          data-scale="1.2"
          data-dir="-1"
        >
          <img src="/layer-grass.png?v=36" alt="" draggable={false} />
        </div>
      </div>

      <SkyTitle />

      {/* Flowers — separate layer from grass (clearly different speed) */}
      <div
        className="meadow parallax"
        data-speedx="0.11"
        data-speedy="0.11"
        data-dir="-1"
      >
        <ul className="flower-bed" role="list">
          {sections.map((section) => (
            <Flower
              key={section.id}
              section={section}
              open={openSectionId === section.id}
              onClick={() => interactive && onFlowerClick(section.id)}
            />
          ))}
        </ul>
      </div>

      {/* Front-most tree — almost still */}
      <div
        className="layer layer-tree parallax"
        data-speedx="0.012"
        data-speedy="0.012"
        data-dir="-1"
        aria-hidden="true"
      >
        <img src="/layer-tree.png?v=40" alt="" draggable={false} />
      </div>

      {interactive && <TreeSign />}

      <div className="mist-veil" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
    </main>
  )
}
