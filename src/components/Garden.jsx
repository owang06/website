import SkyTitle from './SkyTitle'
import Flower from './Flower'

/**
 * Multi-layer painted meadow (back → front):
 * sky → hills/trees → mid (house/pond/horses) → grass → flowers → giant tree
 * Framer Motion later: parallax per layer on pointer move.
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

  return (
    <main
      className={`garden ${openSectionId ? 'is-focused' : ''} ${interactive ? '' : 'is-locked'}`}
      style={focusStyle}
      aria-label="Owen's Garden"
      aria-hidden={!interactive}
    >
      <div className="scene" aria-hidden="true">
        <div className="layer layer-sky">
          <img src="/layer-sky.png" alt="" draggable={false} />
        </div>
        <div className="layer layer-hills">
          <img src="/layer-hills.png" alt="" draggable={false} />
        </div>
        <div className="layer layer-mid">
          <img src="/layer-mid.png" alt="" draggable={false} />
        </div>
        <div className="layer layer-grass">
          <img src="/layer-grass.png" alt="" draggable={false} />
        </div>
      </div>

      <SkyTitle />

      <div className="meadow">
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

        {interactive && <p className="hint">OPEN A FLOWER TO EXPLORE</p>}
      </div>

      {/* Foreground giant tree — sits above flowers */}
      <div className="layer layer-tree" aria-hidden="true">
        <img src="/layer-tree.png" alt="" draggable={false} />
      </div>

      <div className="vignette" aria-hidden="true" />
    </main>
  )
}
