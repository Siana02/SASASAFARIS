import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Eye, Lock, Share2, Settings, UserCheck, Baby, RefreshCw, Mail } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { setPageMeta } from "../utils/seo";

const sectionsEn = [
  {
    icon: <Eye size={22} />,
    title: "Information We Collect",
    content: (
      <ul>
        <li><strong>Personal Information:</strong> Name, email, phone number, address, and other contact details when you make an inquiry, booking, or contact us.</li>
        <li><strong>Travel Details:</strong> Preferences, travel dates, destinations, number of travellers, and special requests.</li>
        <li><strong>Payment Information:</strong> Billing details and transaction data (handled securely via third-party processors — we never store card numbers).</li>
        <li><strong>Website Usage Data:</strong> Cookies, IP address, browser type, device info, and pages visited.</li>
        <li><strong>Social Media:</strong> Information shared via our social channels or integrations.</li>
      </ul>
    ),
  },
  {
    icon: <Settings size={22} />,
    title: "How We Use Your Information",
    content: (
      <ul>
        <li>To respond to your inquiries and provide safari services.</li>
        <li>To personalise your travel experience and improve our offerings.</li>
        <li>To process bookings, payments, and confirmations.</li>
        <li>To communicate important updates and news.</li>
        <li>To comply with legal requirements and prevent fraud.</li>
      </ul>
    ),
  },
  {
    icon: <Share2 size={22} />,
    title: "Sharing & Disclosure",
    content: (
      <ul>
        <li>We do <strong>not</strong> sell your personal data — ever.</li>
        <li>We may share information with trusted partners (accommodation providers, payment processors) only as needed for your safari experience.</li>
        <li>Legal or regulatory requirements may require disclosure in certain circumstances.</li>
      </ul>
    ),
  },
  {
    icon: <Shield size={22} />,
    title: "Cookies & Tracking",
    content: (
      <p>
        Our website uses cookies and similar technologies for analytics, site functionality, and enhancing your experience. You can adjust your browser settings to manage cookies — though some features may be affected. See our <Link to="/cookies">Cookie Policy</Link> for full details.
      </p>
    ),
  },
  {
    icon: <Lock size={22} />,
    title: "Data Security",
    content: (
      <p>
        We implement industry-standard security measures including encryption and secure third-party services to protect your personal information. No online transmission is 100% secure, but we take every precaution we can.
      </p>
    ),
  },
  {
    icon: <UserCheck size={22} />,
    title: "Your Rights & Choices",
    content: (
      <ul>
        <li>You may request access, correction, or deletion of your personal information at any time.</li>
        <li>You can unsubscribe from marketing communications via the link in any email.</li>
        <li>Contact us for any privacy-related requests — we respond within 5 business days.</li>
      </ul>
    ),
  },
  {
    icon: <Baby size={22} />,
    title: "Children's Privacy",
    content: (
      <p>
        Our services are intended for adults. We do not knowingly collect personal information from anyone under 18 years of age. If you believe a minor has submitted information to us, please contact us immediately.
      </p>
    ),
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We'll post any updates on this page with a revised effective date. We encourage you to review it periodically.
      </p>
    ),
  },
  {
    icon: <Mail size={22} />,
    title: "Contact Us",
    content: (
      <p>
        Questions, concerns, or requests? Reach our privacy team at:<br />
        <strong>Email:</strong> info@sasasafaris.com<br />
        <strong>Phone:</strong> +254 711 589 004<br />
        <strong>Address:</strong> Jacaranda, Watamu, Kenya
      </p>
    ),
  },
];

const sectionsIt = [
  {
    icon: <Eye size={22} />,
    title: "Informazioni che Raccogliamo",
    content: (
      <ul>
        <li><strong>Dati Personali:</strong> Nome, email, numero di telefono, indirizzo e altri dati di contatto quando effettui una richiesta, una prenotazione o ci contatti.</li>
        <li><strong>Dettagli di Viaggio:</strong> Preferenze, date di viaggio, destinazioni, numero di viaggiatori e richieste speciali.</li>
        <li><strong>Dati di Pagamento:</strong> Dati di fatturazione e informazioni sulle transazioni (gestiti in modo sicuro da processori terzi — non memorizziamo mai i numeri di carta).</li>
        <li><strong>Dati di Utilizzo del Sito:</strong> Cookie, indirizzo IP, tipo di browser, informazioni sul dispositivo e pagine visitate.</li>
        <li><strong>Social Media:</strong> Informazioni condivise tramite i nostri canali social o integrazioni.</li>
      </ul>
    ),
  },
  {
    icon: <Settings size={22} />,
    title: "Come Utilizziamo le Tue Informazioni",
    content: (
      <ul>
        <li>Per rispondere alle tue richieste e fornire servizi safari.</li>
        <li>Per personalizzare la tua esperienza di viaggio e migliorare le nostre offerte.</li>
        <li>Per elaborare prenotazioni, pagamenti e conferme.</li>
        <li>Per comunicare aggiornamenti importanti e notizie.</li>
        <li>Per rispettare i requisiti legali e prevenire le frodi.</li>
      </ul>
    ),
  },
  {
    icon: <Share2 size={22} />,
    title: "Condivisione e Divulgazione",
    content: (
      <ul>
        <li>Non vendiamo i tuoi dati personali — <strong>mai</strong>.</li>
        <li>Potremmo condividere informazioni con partner fidati (fornitori di alloggi, processori di pagamento) solo se necessario per la tua esperienza safari.</li>
        <li>Requisiti legali o normativi potrebbero richiedere la divulgazione in determinate circostanze.</li>
      </ul>
    ),
  },
  {
    icon: <Shield size={22} />,
    title: "Cookie e Tracciamento",
    content: (
      <p>
        Il nostro sito web utilizza cookie e tecnologie simili per l'analisi, le funzionalità del sito e per migliorare la tua esperienza. Puoi regolare le impostazioni del browser per gestire i cookie — anche se alcune funzionalità potrebbero essere influenzate. Consulta la nostra <Link to="/cookies">Politica sui Cookie</Link> per tutti i dettagli.
      </p>
    ),
  },
  {
    icon: <Lock size={22} />,
    title: "Sicurezza dei Dati",
    content: (
      <p>
        Implementiamo misure di sicurezza standard del settore, inclusa la crittografia e servizi terzi sicuri, per proteggere le tue informazioni personali. Nessuna trasmissione online è sicura al 100%, ma prendiamo ogni precauzione possibile.
      </p>
    ),
  },
  {
    icon: <UserCheck size={22} />,
    title: "I Tuoi Diritti e Scelte",
    content: (
      <ul>
        <li>Puoi richiedere l'accesso, la correzione o la cancellazione delle tue informazioni personali in qualsiasi momento.</li>
        <li>Puoi annullare l'iscrizione alle comunicazioni di marketing tramite il link in qualsiasi email.</li>
        <li>Contattaci per qualsiasi richiesta relativa alla privacy — rispondiamo entro 5 giorni lavorativi.</li>
      </ul>
    ),
  },
  {
    icon: <Baby size={22} />,
    title: "Privacy dei Minori",
    content: (
      <p>
        I nostri servizi sono destinati agli adulti. Non raccogliamo consapevolmente informazioni personali da persone di età inferiore ai 18 anni. Se ritieni che un minore ci abbia inviato informazioni, contattaci immediatamente.
      </p>
    ),
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Modifiche a Questa Informativa",
    content: (
      <p>
        Potremmo aggiornare questa Informativa sulla Privacy di volta in volta per riflettere cambiamenti nelle nostre pratiche o nei requisiti legali. Pubblicheremo eventuali aggiornamenti su questa pagina con una data di entrata in vigore rivista. Ti incoraggiamo a rivederla periodicamente.
      </p>
    ),
  },
  {
    icon: <Mail size={22} />,
    title: "Contattaci",
    content: (
      <p>
        Domande, preoccupazioni o richieste? Contatta il nostro team per la privacy a:<br />
        <strong>Email:</strong> info@sasasafaris.com<br />
        <strong>Telefono:</strong> +254 711 589 004<br />
        <strong>Indirizzo:</strong> Jacaranda, Watamu, Kenya
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  const { currentLanguage } = useLanguage();
  const isIt = currentLanguage === 'it';
  const sections = isIt ? sectionsIt : sectionsEn;

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta(
      isIt ? "Informativa sulla Privacy — SASA Safaris Africa" : "Privacy Policy — Sasa Safaris Africa",
      "Read the Sasa Safaris Africa Privacy Policy. Learn how we collect, use and protect your personal data when you use our safari booking services.",
      'https://www.sasasafaris.com/privacy'
    );
  }, [isIt]);

  return (
    <main className="legal-page">
      {/* Hero */}
      <div className="legal-hero">
        <div className="legal-hero-icon"><Shield size={40} /></div>
        <h1 className="legal-hero-title">{isIt ? 'Informativa sulla Privacy' : 'Privacy Policy'}</h1>
        <p className="legal-hero-subtitle">
          {isIt
            ? 'La tua privacy è profondamente importante per noi. Ecco esattamente come raccogliamo, utilizziamo e proteggiamo le tue informazioni.'
            : "Your privacy matters deeply to us. Here's exactly how we collect, use, and protect your information."
          }
        </p>
        <p className="legal-hero-date">{isIt ? 'Ultimo aggiornamento' : 'Last updated'}: {new Date().toLocaleDateString(isIt ? "it-IT" : "en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>
      </div>

      {/* Content */}
      <div className="legal-content">
        <div className="legal-intro-card">
          <p>
            {isIt
              ? 'SASA Safaris Africa è impegnata a proteggere le tue informazioni personali e il tuo diritto alla privacy. Questa informativa spiega quali informazioni raccogliamo, perché le raccogliamo e quali diritti hai in relazione ad esse.'
              : 'SASA Safaris Africa is committed to protecting your personal information and your right to privacy. This policy explains what information we collect, why we collect it, and what rights you have in relation to it.'
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
          <Link to="/cookies" className="legal-btn-secondary">{isIt ? 'Politica sui Cookie' : 'Cookie Policy'}</Link>
          <Link to="/terms" className="legal-btn-secondary">{isIt ? 'Termini di Servizio' : 'Terms of Service'}</Link>
        </div>
      </div>
    </main>
  );
}
