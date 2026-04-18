import React, { useState } from "react";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
import { useLanguage } from "../hooks/useLanguage";

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
  { key: "all",       tKey: "filterAll" },
  { key: "wildlife",  tKey: "filterWildlife" },
  { key: "safari",    tKey: "filterSafari" },
  { key: "coast",     tKey: "filterCoast" },
  { key: "landscape", tKey: "filterLandscape" },
];

const galleryImages = [
  { src: WildebeestMigration,   key: "img_wildebeest",    category: "wildlife",  featured: true },
  { src: ElephantSunset,        key: "img_elephants",     category: "wildlife" },
  { src: ClassicMaasaiMara,     key: "img_maasai",        category: "safari" },
  { src: CuteGiraffe,           key: "img_giraffe",       category: "wildlife" },
  { src: CoastalExperience,     key: "img_coastal",       category: "coast",     featured: true },
  { src: Amboseli,              key: "img_amboseli",      category: "safari" },
  { src: FamilySafari,          key: "img_family",        category: "safari" },
  { src: WatamuMain,            key: "img_watamu",        category: "coast" },
  { src: GreatRiftValley,       key: "img_rift",          category: "landscape", featured: true },
  { src: RomanticSafari,        key: "img_romantic",      category: "safari" },
  { src: KenyanCoast,           key: "img_kenyanCoast",   category: "coast" },
  { src: MaasaiMara,            key: "img_mara",          category: "wildlife" },
  { src: TsavoEast1,            key: "img_tsavo1",        category: "safari",    featured: true },
  { src: WildernessExplorer,    key: "img_wilderness",    category: "safari" },
  { src: SafariBlue2,           key: "img_safariBlue",    category: "coast" },
  { src: GedeRuins,             key: "img_gede",          category: "landscape" },
  { src: HellsKitchen,          key: "img_hellsKitchen",  category: "landscape" },
  { src: TsavoEast2,            key: "img_tsavo2",        category: "landscape" },
  { src: DolphinSafariBlue1,    key: "img_dolphin",       category: "coast" },
  { src: WatamuCulturalTour1,   key: "img_culture1",      category: "landscape" },
  { src: WatamuCulturalTour2,   key: "img_culture2",      category: "landscape" },
  { src: SafariHero,            key: "img_safariAdventure", category: "safari" },
  { src: VacationHero,          key: "img_vacation",      category: "coast" },
];

const Gallery = () => {
  const { t } = useLanguage();
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
          <p className="gallery-hero__eyebrow">{t('galleryPage.eyebrow')}</p>
          <h1 className="gallery-hero__title">{t('galleryPage.title')}</h1>
          <div className="gallery-hero__ornament" aria-hidden="true">
            <span className="gallery-hero__orn-line" />
            <span className="gallery-hero__orn-diamond">◆</span>
            <span className="gallery-hero__orn-line" />
          </div>
          <p className="gallery-hero__subtitle">
            {t('galleryPage.subtitle')}
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
            {t(`galleryPage.${cat.tKey}`)}
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
            <LazyImage src={img.src} alt={t(`galleryPage.${img.key}`)} />
            <div className="gallery-item__overlay" aria-hidden="true">
              <span className="gallery-item__label">{t(`galleryPage.${img.key}`)}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA ── */}
      <div className="gallery-cta">
        <h2 className="gallery-cta__title">{t('galleryPage.ctaTitle')}</h2>
        <p className="gallery-cta__text">
          {t('galleryPage.ctaText')}
        </p>
        <Link to="/#destinations" className="gallery-cta__btn">
          {t('galleryPage.ctaBtn')}
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
