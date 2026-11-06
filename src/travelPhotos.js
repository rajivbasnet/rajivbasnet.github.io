import content from "./data/siteContent.json";

/**
 * Travel photos are bundled from two folders (nothing is sent to any outside service):
 *   src/assets/travel/         web-sized photos (~1600px), shown in the viewer
 *   src/assets/travel-thumbs/  small thumbnails (~720px), shown in the slider and grid
 * Files are matched by name and listed in filename order, so prefix with 01-, 02-, ...
 * to control the order. A photo without a thumbnail falls back to the full image.
 * Captions go in siteContent.json under travel.captions, keyed by file name.
 * Your original full-resolution photos stay in src/components/images/travel/ and are
 * not imported anywhere, so they are never bundled into the site.
 */
const full = require.context("./assets/travel", false, /\.(jpe?g|png|webp|avif)$/i);
const thumbs = require.context("./assets/travel-thumbs", false, /\.(jpe?g|png|webp|avif)$/i);

const url = (mod) => (typeof mod === "string" ? mod : mod.default);
const thumbKeys = new Set(thumbs.keys());

const photos = full
  .keys()
  .sort()
  .map((key) => {
    const name = key.replace("./", "");
    return {
      name,
      src: url(full(key)),
      thumb: thumbKeys.has(key) ? url(thumbs(key)) : url(full(key)),
      caption: content.travel.captions[name] || "",
    };
  });

export default photos;
