import React, { useCallback, useState } from "react";
import Lightbox from "./lightbox";

/**
 * Two-column grid where every photo keeps its own proportions (nothing is cropped).
 * Filled left to right in order: 1 left, 2 right, 3 left, ...
 */
function PhotoGrid({ items }) {
  const [open, setOpen] = useState(null);

  const columns = [0, 1].map((c) =>
    items.map((item, index) => ({ item, index })).filter(({ index }) => index % 2 === c)
  );

  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (step) => setOpen((i) => (i === null ? i : (i + step + items.length) % items.length)),
    [items.length]
  );

  return (
    <>
      <div className="gallery">
        {columns.map((column, c) => (
          <ul className="gallery-col" key={c}>
            {column.map(({ item, index }) => (
              <li key={item.name}>
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
        ))}
      </div>
      {open !== null && <Lightbox items={items} index={open} onClose={close} onMove={move} />}
    </>
  );
}

export default PhotoGrid;
