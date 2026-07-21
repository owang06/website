/**
 * Wooden intro sign — only status + enter.
 */
export default function IntroGate({ onEnter }) {
  return (
    <div className="intro-gate" role="dialog" aria-modal="true" aria-labelledby="intro-title">
      <div className="intro-box">
        <div className="intro-box-face">
          <span className="intro-nail intro-nail-tl" aria-hidden="true" />
          <span className="intro-nail intro-nail-tr" aria-hidden="true" />
          <span className="intro-nail intro-nail-bl" aria-hidden="true" />
          <span className="intro-nail intro-nail-br" aria-hidden="true" />
          <h1 id="intro-title" className="intro-title">
            UNDER DEVELOPMENT
          </h1>
          <button type="button" className="intro-enter" onClick={onEnter}>
            ENTER
          </button>
        </div>
      </div>
    </div>
  )
}
