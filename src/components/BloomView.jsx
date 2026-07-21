/**
 * Simple white content panel opened from a flower.
 * Framer Motion later: fade/scale in.
 */
export default function BloomView({ section, onClose }) {
  const { id, content } = section

  return (
    <div className="panel-stage" role="presentation" onClick={onClose}>
      <article
        id={`panel-${id}`}
        className="content-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`panel-title-${id}`}
        onClick={(e) => e.stopPropagation()}
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
  )
}
