import React from "react";
import { Link } from "react-router-dom";
import content from "../data/siteContent.json";
import photos from "../travelPhotos";
import PhotoSlider from "./photoslider";

function Travel() {
  const { travel } = content;

  return (
    <div id="travel" className="subsection panel panel--travel" aria-labelledby="travel-heading">
      <h3 id="travel-heading" className="subheading">{travel.heading}</h3>
      <p className="section-text">{travel.intro}</p>

      {photos.length === 0 ? (
        <div className="callout">
          <p className="section-text"><strong>{travel.emptyTitle}</strong></p>
        </div>
      ) : (
        <PhotoSlider items={photos}>
          {photos.length > 2 && (
            <Link to="/beyond-engineering/travel" className="more-btn">
              View all ({photos.length}) <span aria-hidden="true">→</span>
            </Link>
          )}
        </PhotoSlider>
      )}
    </div>
  );
}

export default Travel;
