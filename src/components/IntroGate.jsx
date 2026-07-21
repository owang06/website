/**
 * Clean intro gate — blocky type, simple panel.
 */
export default function IntroGate({ onEnter }) {
  return (
    <div className="intro-gate" role="dialog" aria-modal="true" aria-labelledby="intro-title">
      <div className="intro-box">
        <p className="intro-eyebrow">OWEN&apos;S GARDEN</p>
        <h1 id="intro-title" className="intro-title">
          STILL UNDER DEVELOPMENT
        </h1>
        <p className="intro-copy">
          The meadow is planted, but a few beds are still sprouting. Come wander anyway.
        </p>
        <button type="button" className="intro-enter" onClick={onEnter}>
          ENTER
        </button>
      </div>
    </div>
  )
}
