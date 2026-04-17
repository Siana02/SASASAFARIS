import React, { useEffect, useRef } from "react";
import { MessageSquare, Compass, CheckCircle2, Globe } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

const STEPS = [
  { num: "01", Icon: MessageSquare, titleKey: "howWeWork.step1Title", descKey: "howWeWork.step1Desc" },
  { num: "02", Icon: Compass,       titleKey: "howWeWork.step2Title", descKey: "howWeWork.step2Desc" },
  { num: "03", Icon: CheckCircle2,  titleKey: "howWeWork.step3Title", descKey: "howWeWork.step3Desc" },
  { num: "04", Icon: Globe,         titleKey: "howWeWork.step4Title", descKey: "howWeWork.step4Desc" },
];

const CARD_STAGGER_DELAY_S = 0.14;

const HowWeWork = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".hww-card").forEach((card, i) => {
              card.style.transitionDelay = `${i * CARD_STAGGER_DELAY_S}s`;
              card.classList.add("hww-card--in");
            });
          }
        });
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hww-section" ref={sectionRef}>
      <div className="hww-inner">
        <p className="hww-eyebrow">{t("howWeWork.eyebrow")}</p>
        <h2 className="hww-title">{t("howWeWork.title")}</h2>
        <div className="hww-ornament">
          <span className="hww-orn-line" />
          <span className="hww-orn-diamond" />
          <span className="hww-orn-line" />
        </div>
        <div className="hww-steps">
          {STEPS.map(({ num, Icon, titleKey, descKey }, i) => (
            <React.Fragment key={num}>
              <div className="hww-card">
                <span className="hww-num">{num}</span>
                <div className="hww-icon-ring">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <div className="hww-card-title">{t(titleKey)}</div>
                <div className="hww-card-desc">{t(descKey)}</div>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hww-connector" aria-hidden="true">
                  <span className="hww-arrow">›</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
