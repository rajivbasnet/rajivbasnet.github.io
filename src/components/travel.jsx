import React, { useCallback, useEffect, useRef, useState } from "react";
import content from "../data/siteContent.json";
import photos from "../travelPhotos";
import MoreButton from "./morebutton";

const PREVIEW = 3;

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

  return (
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
    </div>
  );
}

function Travel() {
  const { travel } = content;
  const items = photos.map((p) => ({ ...p, caption: travel.captions[p.name] || "" }));
  const [open, setOpen] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, PREVIEW);

  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (step) => setOpen((i) => (i === null ? i : (i + step + items.length) % items.length)),
    [items.length]
  );

  return (
    <div id="travel" className="subsection panel panel--travel" aria-labelledby="travel-heading">
      <h3 id="travel-heading" className="subheading">{travel.heading}</h3>
      <p className="section-text">{travel.intro}</p>

      {items.length === 0 ? (
        <div className="callout">
          <p className="section-text"><strong>{travel.emptyTitle}</strong></p>
        </div>
      ) : (
        <ul className="gallery">
          {visible.map((item, i) => (
            <li key={item.name}>
              <figure className="photo">
                <button type="button" className="photo-btn" onClick={() => setOpen(i)} aria-label={`Open photo${item.caption ? `: ${item.caption}` : ` ${i + 1}`}`}>
                  <img src={item.src} alt={item.caption || ""} loading="lazy" decoding="async" />
                </button>
                {item.caption && <figcaption>{item.caption}</figcaption>}
              </figure>
            </li>
          ))}
        </ul>
      )}
      <MoreButton total={items.length} preview={PREVIEW} expanded={expanded} onToggle={() => setExpanded((e) => !e)} />

      {open !== null && <Lightbox items={items} index={open} onClose={close} onMove={move} />}
    </div>
  );
}

export default Travel;
