import React from "react";
import { Link, useParams } from "react-router-dom";
import content from "../data/siteContent.json";
import songs from "../songs";

/** Splits a lyrics array into stanzas; an empty string marks a stanza break. */
function toStanzas(lines) {
  const stanzas = [];
  let current = [];
  lines.forEach((line) => {
    if (line === "") {
      if (current.length) stanzas.push(current);
      current = [];
    } else {
      current.push(line);
    }
  });
  if (current.length) stanzas.push(current);
  return stanzas;
}

function SongPage() {
  const { slug } = useParams();
  const song = songs.find((s) => s.slug === slug);

  if (!song) {
    return (
      <section className="section">
        <Link to="/beyond-engineering" className="back-link">← Songwriting</Link>
        <h2 className="song-title">Song not found</h2>
        <p className="section-text">That page doesn’t exist. Head back to the songs list.</p>
      </section>
    );
  }

  const stanzas = toStanzas(song.lyrics);
  const index = songs.indexOf(song);
  const prev = songs[index - 1];
  const next = songs[index + 1];

  return (
    <section className="section" aria-labelledby="song-title">
      <Link to="/beyond-engineering" className="back-link">← Songwriting</Link>
      <h2 id="song-title" className="song-title" lang="ne">{song.title}</h2>

      {song.audio && (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <audio className="media" controls preload="none" src={song.audio} />
      )}
      {song.youtubeId && (
        <div className="video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${song.youtubeId}`}
            title={`${song.title} (video)`}
            loading="lazy"
            allow="encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {stanzas.length === 0 ? (
        <div className="callout">
          <p className="section-text">{content.beyond.pendingText}</p>
        </div>
      ) : (
        <div className="lyrics" lang="ne">
          {stanzas.map((lines, i) => (
            <p key={i}>{lines.join("\n")}</p>
          ))}
        </div>
      )}

      {(prev || next) && (
        <nav className="song-nav" aria-label="More songs">
          {prev ? (
            <Link to={`/beyond-engineering/${prev.slug}`} className="song-nav-link">
              <span className="song-nav-label">← Previous</span>
              <span lang="ne">{prev.title}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link to={`/beyond-engineering/${next.slug}`} className="song-nav-link song-nav-link--next">
              <span className="song-nav-label">Next →</span>
              <span lang="ne">{next.title}</span>
            </Link>
          ) : <span />}
        </nav>
      )}
    </section>
  );
}

export default SongPage;
