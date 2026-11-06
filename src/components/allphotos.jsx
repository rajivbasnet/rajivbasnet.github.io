import React from "react";
import { Link } from "react-router-dom";
import content from "../data/siteContent.json";
import photos from "../travelPhotos";
import PhotoGrid from "./photogrid";

function AllPhotos() {
  const { beyond, travel } = content;
  return (
    <section className="section" aria-labelledby="all-photos-heading">
      <Link to="/beyond-engineering" className="back-link">← {beyond.label}</Link>
      <h2 id="all-photos-heading" className="song-title">{travel.heading}</h2>
      <p className="section-text">{travel.intro}</p>
      <PhotoGrid items={photos} />
    </section>
  );
}

export default AllPhotos;
