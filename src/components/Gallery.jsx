import React, { useState } from "react";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";

import {
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
  ElephantSunset,
  CuteGiraffe,
  WatamuMain,
  SafariBlue2,
  GedeRuins,
  TsavoEast1,
  TsavoEast2,
  WatamuCulturalTour1,
  WatamuCulturalTour2,
  HellsKitchen,
  DolphinSafariBlue1,
} from "../assets/images";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "wildlife", label: "Wildlife" },
  { key: "safari", label: "Safari" },
  { key: "coast", label: "Coast & Beach" },
  { key: "landscape", label: "Landscapes" },
];

const galleryImages = [
  { src: WildebeestMigration, label: "Wildebeest Migration", category: "wildlife", featured: true },
  { src: ElephantSunset, label: "Elephants at Sunset", category: "wildlife" },
  { src: ClassicMaasaiMara, label: "Classic Maasai Mara", category: "safari" },
  { src: CuteGiraffe, label: "Giraffe in the Wild", category: "wildlife" },
  { src: CoastalExperience, label: "Coastal Experience", category: "coast", featured: true },
  { src: Amboseli, label: "Amboseli National Park", category: "safari" },
  { src: FamilySafari, label: "Family Safari", category: "safari" },
  { src: WatamuMain, label: "Watamu Beach", category: "coast" },
  { src: GreatRiftValley, label: "Great Rift Valley", category: "landscape", featured: true },
  { src: RomanticSafari, label: "Romantic Safari", category: "safari" },
  { src: KenyanCoast, label: "Kenyan Coast", category: "coast" },
  { src: MaasaiMara, label: "Maasai Mara", category: "wildlife" },
  { src: TsavoEast1, label: "Tsavo East", category: "safari", featured: true },
  { src: WildernessExplorer, label: "Wilderness Explorer", category: "safari" },
  { src: SafariBlue2, label: "Safari Blue", category: "coast" },
  { src: GedeRuins, label: "Gede Ruins", category: "landscape" },
  { src: HellsKitchen, label: "Hell's Kitchen", category: "landscape" },
  { src: TsavoEast2, label: "Tsavo East Sunset", category: "landscape" },
  { src: DolphinSafariBlue1, label: "Dolphin Safari", category: "coast" },
  { src: WatamuCulturalTour1, label: "Watamu Culture", category: "landscape" },
  { src: WatamuCulturalTour2, label: "Cultural Tour", category: "landscape" },
  { src: SafariHero, label: "Safari Adventure", category: "safari" },
  { src: VacationHero, label: "Vacation Paradise", category: "coast" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="gallery-page">
      {/* ── Hero ── */}
      <div
        className="gallery-hero"
        style={{ backgroundImage: `url(${SafariHero})` }}
      >
        <div className="gallery-hero__overlay" aria-hidden="true" />
        <div className="gallery-hero__content">
          <p className="gallery-hero__eyebrow">Our World</p>
          <h1 className="gallery-hero__title">Safari Memories</h1>
          <div className="gallery-hero__ornament" aria-hidden="true">
            <span className="gallery-hero__orn-line" />
            <span className="gallery-hero__orn-diamond">◆</span>
            <span className="gallery-hero__orn-line" />
          </div>
          <p className="gallery-hero__subtitle">
            Moments captured across Kenya's most breathtaking landscapes
          </p>
        </div>
      </div>

      {/* ── Category filters ── */}
      <div className="gallery-filters" role="group" aria-label="Filter gallery by category">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            className={`gallery-filter-btn${activeCategory === cat.key ? " active" : ""}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ── Masonry grid ── */}
      <div className="gallery-grid">
        {filtered.map((img, idx) => (
          <div
            className={`gallery-item${img.featured ? " gallery-item--featured" : ""}`}
            key={img.src}
          >
            <LazyImage src={img.src} alt={img.label} />
            <div className="gallery-item__overlay" aria-hidden="true">
              <span className="gallery-item__label">{img.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA ── */}
      <div className="gallery-cta">
        <h2 className="gallery-cta__title">Ready to Create Your Own Memories?</h2>
        <p className="gallery-cta__text">
          Let us craft your perfect African adventure
        </p>
        <Link to="/packages" className="gallery-cta__btn">
          Explore Packages
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
