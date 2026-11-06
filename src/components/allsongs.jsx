import React from "react";
import { Link } from "react-router-dom";
import content from "../data/siteContent.json";
import songs from "../songs";
import SongList from "./songlist";

function AllSongs() {
  const { beyond } = content;
  return (
    <section className="section" aria-labelledby="all-songs-heading">
      <Link to="/beyond-engineering" className="back-link">← {beyond.label}</Link>
      <h2 id="all-songs-heading" className="song-title">{beyond.subheading}</h2>
      <p className="section-text">{beyond.intro}</p>
      <SongList songs={songs} />
    </section>
  );
}

export default AllSongs;
