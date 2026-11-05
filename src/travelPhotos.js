/**
 * Every image dropped into src/assets/travel/ is picked up automatically
 * (jpg, jpeg, png, webp, avif), in filename order. Prefix names with numbers
 * (01-..., 02-...) to control the order. Optional captions go in
 * siteContent.json under travel.captions, keyed by file name.
 */
const ctx = require.context("./assets/travel", false, /\.(jpe?g|png|webp|avif)$/i);

const photos = ctx
  .keys()
  .sort()
  .map((key) => {
    const mod = ctx(key);
    return { name: key.replace("./", ""), src: typeof mod === "string" ? mod : mod.default };
  });

export default photos;
