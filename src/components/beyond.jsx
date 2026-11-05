import React from "react";
import { Link } from "react-router-dom";
import content from "../data/siteContent.json";
import Travel from "./travel";
import songs from "../songs";
import SongList from "./songlist";

// Songs shown on this page; the rest live on the "all songs" page.
const PREVIEW = 2;

function Beyond() {
  const { beyond } = content;

  return (
    <section className="section" aria-labelledby="beyond-heading">
      <h2 id="beyond-heading" className="section-heading">{beyond.heading}</h2>
      <div className="note">
        {beyond.note.map((paragraph, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>

      <div id="songwriting" className="panel panel--songs">
        <h3 className="subheading">{beyond.subheading}</h3>
        <p className="section-text">{beyond.intro}</p>

        <SongList songs={songs.slice(0, PREVIEW)} />
        {songs.length > PREVIEW && (
          <Link to="/beyond-engineering/songs" className="more-btn">
            More ({songs.length - PREVIEW}) <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>

      <Travel />
    </section>
  );
}

export default Beyond;
