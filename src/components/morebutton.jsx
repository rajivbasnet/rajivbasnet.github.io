import React from "react";

/** Shown only when there is more than the preview; toggles between "More" and "Show less". */
function MoreButton({ total, preview, expanded, onToggle }) {
  if (total <= preview) return null;
  return (
    <button type="button" className="more-btn" aria-expanded={expanded} onClick={onToggle}>
      {expanded ? "Show less" : <>More ({total - preview}) <span aria-hidden="true">→</span></>}
    </button>
  );
}

export default MoreButton;
