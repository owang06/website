/**
 * Flower open view — camera zooms into the flower filling the screen,
 * with a simple white content box on top (no circular bloom frame).
 */
export default function BloomView({ section, onClose }) {
  const { id, content } = section

  return (
    <div className="panel-stage" role="presentation" onClick={onClose}>
      <div className="panel-zoom" onClick={(e) => e.stopPropagation()}>
        <img
          className="panel-zoom-flower"
          src={`/flower-${id}.png?v=27`}
          alt=""
          draggable={false}
          aria-hidden="true"
        />

        <article
          id={`panel-${id}`}
          className="content-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`panel-title-${id}`}
        >
          <button
            type="button"
            className="content-panel-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
          <p className="content-panel-eyebrow">OWEN&apos;S GARDEN</p>
          <h2 id={`panel-title-${id}`} className="content-panel-title">
            {content.title}
          </h2>
          <p className="content-panel-body">{content.body}</p>
        </article>
      </div>
    </div>
  )
}
