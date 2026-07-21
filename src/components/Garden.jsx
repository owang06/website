import SkyTitle from './SkyTitle'
import Flower from './Flower'
import TreeSign from './TreeSign'

/**
 * Multi-layer meadow (back → front):
 * sky → far (mountains/castle) → hills → mid (barn/pond/animals) → grass → flowers → tree
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
          <img src="/layer-sky.png?v=36" alt="" draggable={false} />
        </div>
        <div className="layer layer-far">
          <img src="/layer-far.png?v=36" alt="" draggable={false} />
        </div>
        <div className="layer layer-hills">
          <img src="/layer-hills.png?v=36" alt="" draggable={false} />
        </div>
        <div className="layer layer-mid">
          <img src="/layer-mid.png?v=36" alt="" draggable={false} />
        </div>
        <div className="layer layer-grass">
          <img src="/layer-grass.png?v=36" alt="" draggable={false} />
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
      </div>

      <div className="layer layer-tree" aria-hidden="true">
        <img src="/layer-tree.png?v=40" alt="" draggable={false} />
      </div>

      {interactive && <TreeSign />}

      <div className="mist-veil" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
    </main>
  )
}
