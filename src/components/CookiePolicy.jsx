import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, Info, BarChart2, Sliders, Users2, Trash2, RefreshCw, Mail } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { setPageMeta } from "../utils/seo";

const sectionsEn = [
  {
    icon: <Info size={22} />,
    title: "What Are Cookies?",
    content: (
      <p>
        Cookies are small text files placed on your device when you visit a website. They help us recognise your browser, remember your preferences, and understand how you interact with our site — so we can continuously improve your experience.
      </p>
    ),
  },
  {
    icon: <Cookie size={22} />,
    title: "Types of Cookies We Use",
    content: (
      <div className="legal-cookie-types">
        <div className="legal-cookie-type">
          <h3>Essential Cookies</h3>
          <p>Necessary for the website to function. They enable core features like your language and cookie preferences. These cannot be disabled.</p>
        </div>
        <div className="legal-cookie-type">
          <h3>Performance Cookies</h3>
          <p>Help us understand how visitors use our site by collecting anonymous usage data. This helps us improve layout and content.</p>
        </div>
        <div className="legal-cookie-type">
          <h3>Functionality Cookies</h3>
          <p>Remember your preferences — like your chosen language and theme — so you don't need to set them again on each visit.</p>
        </div>
      </div>
    ),
  },
  {
    icon: <BarChart2 size={22} />,
    title: "How We Use Cookies",
    content: (
      <ul>
        <li>Remember your language and theme preference between visits.</li>
        <li>Store your cookie consent preferences so we don't ask every time.</li>
        <li>Analyse how visitors navigate the site to improve usability.</li>
        <li>Provide relevant content and personalised recommendations.</li>
        <li>Maintain website security and help prevent fraudulent activity.</li>
      </ul>
    ),
  },
  {
    icon: <Users2 size={22} />,
    title: "Third-Party Cookies",
    content: (
      <p>
        Some features of our website rely on third-party services (such as analytics tools) that may set their own cookies. We don't control these cookies directly. By using our website, you acknowledge that these third-party cookies may be set on your device in accordance with their own privacy policies.
      </p>
    ),
  },
  {
    icon: <Sliders size={22} />,
    title: "Managing Your Cookie Preferences",
    content: (
      <>
        <p>You have several ways to manage cookies:</p>
        <ul>
          <li>Use the <strong>consent banner</strong> when you first visit our website to choose your preferences.</li>
          <li>Adjust your <strong>browser settings</strong> to block or delete cookies at any time.</li>
          <li>Use your browser's privacy/incognito mode to avoid persistent cookies.</li>
        </ul>
        <p className="legal-note">
          <strong>Note:</strong> Disabling certain cookies may affect how some parts of our website work.
        </p>
      </>
    ),
  },
  {
    icon: <Trash2 size={22} />,
    title: "Data Retention",
    content: (
      <div className="legal-retention-grid">
        <div className="legal-retention-item">
          <span className="legal-retention-type">Session Cookies</span>
          <span className="legal-retention-period">Deleted when you close your browser</span>
        </div>
        <div className="legal-retention-item">
          <span className="legal-retention-type">Persistent Cookies</span>
          <span className="legal-retention-period">Stored for up to 12 months</span>
        </div>
        <div className="legal-retention-item">
          <span className="legal-retention-type">Preference Cookies</span>
          <span className="legal-retention-period">Until you change your settings</span>
        </div>
      </div>
    ),
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Updates to This Policy",
    content: (
      <p>
        We may update this Cookie Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. Any changes will be posted on this page with a revised effective date. We recommend checking periodically.
      </p>
    ),
  },
  {
    icon: <Mail size={22} />,
    title: "Questions?",
    content: (
      <p>
        If you have questions about how we use cookies, get in touch:<br />
        <strong>Email:</strong> info@sasasafaris.com<br />
        <strong>Phone:</strong> +254 711 589 004
      </p>
    ),
  },
];

const sectionsIt = [
  {
    icon: <Info size={22} />,
    title: "Cosa Sono i Cookie?",
    content: (
      <p>
        I cookie sono piccoli file di testo che vengono salvati sul tuo dispositivo quando visiti un sito web. Ci aiutano a riconoscere il tuo browser, ricordare le tue preferenze e capire come interagisci con il nostro sito — così da migliorare continuamente la tua esperienza.
      </p>
    ),
  },
  {
    icon: <Cookie size={22} />,
    title: "Tipi di Cookie Che Utilizziamo",
    content: (
      <div className="legal-cookie-types">
        <div className="legal-cookie-type">
          <h3>Cookie Essenziali</h3>
          <p>Necessari per il funzionamento del sito web. Abilitano le funzionalità di base come la lingua e le preferenze sui cookie. Non possono essere disabilitati.</p>
        </div>
        <div className="legal-cookie-type">
          <h3>Cookie di Prestazione</h3>
          <p>Ci aiutano a capire come i visitatori usano il nostro sito raccogliendo dati di utilizzo anonimi. Ci aiutano a migliorare il layout e i contenuti.</p>
        </div>
        <div className="legal-cookie-type">
          <h3>Cookie di Funzionalità</h3>
          <p>Ricordano le tue preferenze — come la lingua scelta e il tema — così non devi impostarle di nuovo ad ogni visita.</p>
        </div>
      </div>
    ),
  },
  {
    icon: <BarChart2 size={22} />,
    title: "Come Utilizziamo i Cookie",
    content: (
      <ul>
        <li>Ricordare la tua preferenza di lingua e tema tra una visita e l'altra.</li>
        <li>Memorizzare le tue preferenze sul consenso ai cookie così da non doverlo chiedere ogni volta.</li>
        <li>Analizzare come i visitatori navigano il sito per migliorarne l'usabilità.</li>
        <li>Fornire contenuti pertinenti e raccomandazioni personalizzate.</li>
        <li>Mantenere la sicurezza del sito e contribuire a prevenire attività fraudolente.</li>
      </ul>
    ),
  },
  {
    icon: <Users2 size={22} />,
    title: "Cookie di Terze Parti",
    content: (
      <p>
        Alcune funzionalità del nostro sito si basano su servizi di terze parti (come strumenti di analisi) che possono impostare i propri cookie. Non controlliamo direttamente questi cookie. Utilizzando il nostro sito, riconosci che questi cookie di terze parti possono essere impostati sul tuo dispositivo in conformità con le loro politiche sulla privacy.
      </p>
    ),
  },
  {
    icon: <Sliders size={22} />,
    title: "Gestione delle Preferenze sui Cookie",
    content: (
      <>
        <p>Hai diversi modi per gestire i cookie:</p>
        <ul>
          <li>Usa il <strong>banner di consenso</strong> quando visiti per la prima volta il nostro sito per scegliere le tue preferenze.</li>
          <li>Regola le <strong>impostazioni del browser</strong> per bloccare o eliminare i cookie in qualsiasi momento.</li>
          <li>Usa la modalità privacy/incognito del browser per evitare i cookie persistenti.</li>
        </ul>
        <p className="legal-note">
          <strong>Nota:</strong> Disabilitare certi cookie può influire sul funzionamento di alcune parti del nostro sito.
        </p>
      </>
    ),
  },
  {
    icon: <Trash2 size={22} />,
    title: "Conservazione dei Dati",
    content: (
      <div className="legal-retention-grid">
        <div className="legal-retention-item">
          <span className="legal-retention-type">Cookie di Sessione</span>
          <span className="legal-retention-period">Eliminati alla chiusura del browser</span>
        </div>
        <div className="legal-retention-item">
          <span className="legal-retention-type">Cookie Persistenti</span>
          <span className="legal-retention-period">Conservati fino a 12 mesi</span>
        </div>
        <div className="legal-retention-item">
          <span className="legal-retention-type">Cookie di Preferenza</span>
          <span className="legal-retention-period">Fino a quando non cambi le impostazioni</span>
        </div>
      </div>
    ),
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Aggiornamenti a Questa Politica",
    content: (
      <p>
        Potremmo aggiornare questa Politica sui Cookie di volta in volta per riflettere cambiamenti nelle nostre pratiche o per motivi legali e normativi. Qualsiasi modifica sarà pubblicata su questa pagina con una data di entrata in vigore rivista. Ti consigliamo di controllare periodicamente.
      </p>
    ),
  },
  {
    icon: <Mail size={22} />,
    title: "Domande?",
    content: (
      <p>
        Se hai domande su come utilizziamo i cookie, contattaci:<br />
        <strong>Email:</strong> info@sasasafaris.com<br />
        <strong>Telefono:</strong> +254 711 589 004
      </p>
    ),
  },
];

export default function CookiePolicy() {
  const { currentLanguage } = useLanguage();
  const isIt = currentLanguage === 'it';
  const sections = isIt ? sectionsIt : sectionsEn;

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta(
      isIt ? "Politica sui Cookie — SASA Safaris Africa" : "Cookie Policy — Sasa Safaris Africa",
      "Read the Sasa Safaris Africa Cookie Policy. Learn what cookies we use, why we use them and how you can control your cookie preferences.",
      'https://www.sasasafaris.com/cookies'
    );
  }, [isIt]);

  return (
    <main className="legal-page">
      {/* Hero */}
      <div className="legal-hero">
        <div className="legal-hero-icon"><Cookie size={40} /></div>
        <h1 className="legal-hero-title">{isIt ? 'Politica sui Cookie' : 'Cookie Policy'}</h1>
        <p className="legal-hero-subtitle">
          {isIt
            ? 'Utilizziamo i cookie per offrirti la migliore esperienza possibile. Ecco una spiegazione chiara e diretta di come lo facciamo.'
            : "We use cookies to give you the best possible experience. Here's a plain-English explanation of exactly how."
          }
        </p>
        <p className="legal-hero-date">{isIt ? 'Ultimo aggiornamento' : 'Last updated'}: {new Date().toLocaleDateString(isIt ? "it-IT" : "en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>
      </div>

      {/* Content */}
      <div className="legal-content">
        <div className="legal-intro-card">
          <p>
            {isIt
              ? 'Questa Politica sui Cookie spiega come SASA Safaris Africa utilizza i cookie e tecnologie di tracciamento simili sul nostro sito web. Illustra inoltre i tuoi diritti e le tue scelte riguardo ai cookie.'
              : 'This Cookie Policy explains how SASA Safaris Africa uses cookies and similar tracking technologies on our website. It also outlines your rights and choices regarding cookies.'
            }
          </p>
        </div>

        <div className="legal-sections">
          {sections.map((s, i) => (
            <section key={i} className="legal-section">
              <div className="legal-section-header">
                <div className="legal-section-icon">{s.icon}</div>
                <h2 className="legal-section-title">{s.title}</h2>
              </div>
              <div className="legal-section-body">{s.content}</div>
            </section>
          ))}
        </div>

        <div className="legal-footer-ctas">
          <Link to="/" className="legal-btn-primary">{isIt ? 'Torna alla Home' : 'Back to Home'}</Link>
          <Link to="/privacy" className="legal-btn-secondary">{isIt ? 'Informativa sulla Privacy' : 'Privacy Policy'}</Link>
          <Link to="/terms" className="legal-btn-secondary">{isIt ? 'Termini di Servizio' : 'Terms of Service'}</Link>
        </div>
      </div>
    </main>
  );
}
