import React from "react";
import { Link } from "react-router-dom";

/** Blog-style list of songs; shared by the Beyond Eng preview and the "all songs" page. */
function SongList({ songs }) {
  return (
    <ul className="song-list">
      {songs.map((song) => (
        <li key={song.slug}>
          <Link to={`/beyond-engineering/${song.slug}`} className="song-card">
            <span className="song-card-main">
              <span className="song-card-title" lang="ne">{song.title}</span>
            </span>
            <span className="song-card-arrow" aria-hidden="true">→</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SongList;
