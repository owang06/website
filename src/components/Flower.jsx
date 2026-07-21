/**
 * Meadow flower — varied size/type; click opens zoom panel.
 */
export default function Flower({ section, open, onClick }) {
  const { flower, label, id } = section
  const size = flower.size ?? 1
  const rotate = flower.rotate ?? 0

  return (
    <li
      className={`flower ${open ? 'is-open' : ''}`}
      style={{
        left: flower.left,
        bottom: flower.bottom,
        '--petal': flower.petal,
        '--flower-scale': size,
        '--flower-rotate': `${rotate}deg`,
      }}
    >
      <button
        type="button"
        className="flower-hit"
        onClick={onClick}
        aria-label={`Open ${label}`}
        aria-expanded={open}
        aria-controls={open ? `panel-${id}` : undefined}
      >
        <span className="flower-plant" aria-hidden="true">
          <img
            className="flower-art"
            src={`/flower-${id}.png?v=27`}
            alt=""
            draggable={false}
          />
        </span>
      </button>
    </li>
  )
}
