/**
 * Every .json file in src/data/songs/ is one song (files starting with "_" are ignored,
 * e.g. _template.json). Songs are listed in filename order, so prefix names with
 * 01-, 02-, ... to control the order. The file name (without .json) becomes the page URL.
 *
 * File shape:
 *   { "title": "...", "lyrics": ["line1", "line2", "", "line3"] }
 *   - an empty string "" in lyrics starts a new stanza
 *   - optional: "audio": "<url>", "youtubeId": "<id>"
 */
const ctx = require.context("./data/songs", false, /^\.\/[^_][^/]*\.json$/);

const songs = ctx
  .keys()
  .sort()
  .map((key) => {
    const data = ctx(key);
    const song = data.default || data;
    return {
      slug: key.replace(/^\.\//, "").replace(/\.json$/, ""),
      title: song.title,
      lyrics: Array.isArray(song.lyrics) ? song.lyrics : [],
      audio: song.audio,
      youtubeId: song.youtubeId,
    };
  });

export default songs;
