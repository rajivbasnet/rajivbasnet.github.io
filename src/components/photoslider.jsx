import React, { useCallback, useEffect, useRef, useState } from "react";
import Lightbox from "./lightbox";

/**
 * Horizontal slider showing two photos at a time (one on phones). The arrows slide one
 * photo at a time; swiping works on touch screens. Clicking a photo opens the large viewer.
 */
function PhotoSlider({ items, children }) {
  const trackRef = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const [open, setOpen] = useState(null);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft <= 2,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2,
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update, items.length]);

  const slide = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.querySelector("li");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = first ? first.getBoundingClientRect().width + gap : el.clientWidth;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * step, behavior: reduce ? "auto" : "smooth" });
  };

  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (step) => setOpen((i) => (i === null ? i : (i + step + items.length) % items.length)),
    [items.length]
  );

  return (
    <div className="slider" role="group" aria-roledescription="carousel" aria-label="Travel photos">
      <ul className="slider-track" ref={trackRef} onScroll={update}>
        {items.map((item, index) => (
          <li className="slide" key={item.name}>
            <figure className="photo">
              <button
                type="button"
                className="photo-btn"
                onClick={() => setOpen(index)}
                aria-label={`Open photo${item.caption ? `: ${item.caption}` : ` ${index + 1}`}`}
              >
                <img src={item.thumb} alt={item.caption || ""} decoding="async" />
              </button>
              {item.caption && <figcaption>{item.caption}</figcaption>}
            </figure>
          </li>
        ))}
      </ul>

      {/* Bottom row: whatever is passed as children (e.g. a "More" link) on the left, arrows on the right. */}
      {(children || items.length > 2) && (
        <div className="slider-footer">
          <div className="slider-footer-start">{children}</div>
          {items.length > 2 && (
            <div className="slider-controls">
              <button type="button" className="slider-btn" onClick={() => slide(-1)} disabled={edge.start} aria-label="Previous photos">‹</button>
              <button type="button" className="slider-btn" onClick={() => slide(1)} disabled={edge.end} aria-label="Next photos">›</button>
            </div>
          )}
        </div>
      )}

      {open !== null && <Lightbox items={items} index={open} onClose={close} onMove={move} />}
    </div>
  );
}

export default PhotoSlider;
