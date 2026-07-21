/**
 * Wooden sign hanging from a tree branch on two ropes.
 */
export default function TreeSign() {
  return (
    <aside className="tree-sign" aria-label="Site status">
      <div className="tree-sign-hang">
        <div className="tree-sign-ropes" aria-hidden="true">
          <span className="tree-sign-rope tree-sign-rope-l" />
          <span className="tree-sign-rope tree-sign-rope-r" />
        </div>
        <div className="tree-sign-board">
          <p className="tree-sign-text">UNDER DEVELOPMENT</p>
        </div>
      </div>
    </aside>
  )
}
