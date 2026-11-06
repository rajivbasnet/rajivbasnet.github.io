import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

/** Full-screen photo viewer. Esc closes; left/right arrows step through `items`. */
function Lightbox({ items, index, onClose, onMove }) {
  const closeRef = useRef(null);
  const item = items[index];

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current && closeRef.current.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onMove(-1);
      if (e.key === "ArrowRight") onMove(1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused && previouslyFocused.focus && previouslyFocused.focus();
    };
  }, [onClose, onMove]);

  // Rendered into <body> so no page container (animated/transformed sections) can clip or offset it.
  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={onClose}>
      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.caption || "Travel photo"} />
        {item.caption && <figcaption>{item.caption}</figcaption>}
      </figure>
      <button ref={closeRef} type="button" className="lightbox-btn lightbox-close" onClick={onClose} aria-label="Close">×</button>
      {items.length > 1 && (
        <>
          <button type="button" className="lightbox-btn lightbox-prev" onClick={(e) => { e.stopPropagation(); onMove(-1); }} aria-label="Previous photo">‹</button>
          <button type="button" className="lightbox-btn lightbox-next" onClick={(e) => { e.stopPropagation(); onMove(1); }} aria-label="Next photo">›</button>
        </>
      )}
    </div>,
    document.body
  );
}

export default Lightbox;
