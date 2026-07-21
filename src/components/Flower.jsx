/**
 * Meadow flower — hover grows; click opens simple white panel.
 */
export default function Flower({ section, open, onClick }) {
  const { flower, label, id } = section

  return (
    <li
      className={`flower ${open ? 'is-open' : ''}`}
      style={{
        left: flower.left,
        bottom: flower.bottom,
        '--petal': flower.petal,
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
            src={`/flower-${id}.png?v=3`}
            alt=""
            draggable={false}
          />
        </span>
        <span className="flower-label">{label}</span>
      </button>
    </li>
  )
}
