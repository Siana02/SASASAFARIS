import React from "react";

import {
  Amboseli,
  ClassicMaasaiMara,
  CoastalExperience,
  FamilySafari,
  GreatRiftValley,
  KenyanCoast,
  MaasaiMara,
  RomanticSafari,
  SafariHero,
  VacationHero,
  WildebeestMigration,
  WildernessExplorer,
} from "../assets/images";

const safariImages = [
  SafariHero,
  VacationHero,
  ClassicMaasaiMara,
  Amboseli,
  FamilySafari,
  RomanticSafari,
  CoastalExperience,
  WildebeestMigration,
  KenyanCoast,
  GreatRiftValley,
  MaasaiMara,
  WildernessExplorer,
];

const Gallery = () => (
  <section className="gallery-page">
    <h1 className="gallery-title">
      Memories <span role="img" aria-label="love">❤️</span>
    </h1>
    <div className="gallery-grid">
      {safariImages.map((src, idx) => (
        <div className="gallery-img-container" key={idx}>
          <img src={src} alt={`Safari memory ${idx + 1}`} loading="lazy" />
        </div>
      ))}
    </div>
    {/* Upload/infinite scroll functionality can be added later */}
  </section>
);

export default Gallery;
