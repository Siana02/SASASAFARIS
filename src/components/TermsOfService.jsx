import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CreditCard, XCircle, Edit3, UmbrellaIcon, Syringe, FileText,
  Bird, MessageSquare, AlertTriangle, HelpCircle, Shield, RefreshCw,
} from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

const sectionsEn = [
  {
    id: "booking",
    icon: <CreditCard size={20} />,
    title: "Booking & Payment",
    content: (
      <ul>
        <li>All bookings must be confirmed in writing (email or booking form).</li>
        <li>A <strong>deposit of at least 30%</strong> is required to secure your booking; the balance is due prior to safari commencement or as agreed in writing.</li>
        <li>Payments are accepted via secure online transfer, credit/debit card, or as specified on your invoice.</li>
        <li>All prices are quoted in USD unless otherwise stated and may be subject to change due to currency fluctuations or government taxes.</li>
      </ul>
    ),
  },
  {
    id: "cancellations",
    icon: <XCircle size={20} />,
    title: "Cancellations & Refunds",
    content: (
      <>
        <p>All cancellations must be submitted in writing. The following charges apply:</p>
        <div className="legal-cancellation-table">
          <div className="legal-canc-row header">
            <span>Notice Period</span>
            <span>Charge</span>
          </div>
          <div className="legal-canc-row">
            <span>More than 60 days before safari</span>
            <span className="legal-canc-good">Full refund minus bank fees</span>
          </div>
          <div className="legal-canc-row">
            <span>30 – 59 days before</span>
            <span className="legal-canc-warn">20% of total cost retained</span>
          </div>
          <div className="legal-canc-row">
            <span>15 – 29 days before</span>
            <span className="legal-canc-warn">50% of total cost retained</span>
          </div>
          <div className="legal-canc-row">
            <span>Less than 15 days / No show</span>
            <span className="legal-canc-bad">100% of total cost retained</span>
          </div>
        </div>
        <p>Refunds will be processed within 21 business days of the cancellation date.</p>
      </>
    ),
  },
  {
    id: "changes",
    icon: <Edit3 size={20} />,
    title: "Changes & Alterations",
    content: (
      <ul>
        <li>SASA Safaris reserves the right to alter itineraries or substitute accommodations due to circumstances beyond our control (e.g., weather, safety, availability).</li>
        <li>Any significant changes will be communicated promptly, and alternatives provided where possible.</li>
        <li>Client-initiated changes may incur additional costs.</li>
      </ul>
    ),
  },
  {
    id: "insurance",
    icon: <UmbrellaIcon size={20} />,
    title: "Travel Insurance",
    content: (
      <ul>
        <li>Comprehensive travel insurance is <strong>mandatory</strong> for all clients, covering medical emergencies, cancellation, theft, and personal liability.</li>
        <li>SASA Safaris is not liable for any losses not covered by your insurance policy.</li>
      </ul>
    ),
  },
  {
    id: "health",
    icon: <Syringe size={20} />,
    title: "Health, Safety & Vaccinations",
    content: (
      <ul>
        <li>Clients are responsible for ensuring all necessary vaccinations and health precautions are in place prior to travel.</li>
        <li>SASA Safaris adheres to strict safety standards and partners only with reputable, licensed suppliers.</li>
        <li>Any medical condition must be disclosed at booking — we will do our utmost to accommodate special needs.</li>
      </ul>
    ),
  },
  {
    id: "documents",
    icon: <FileText size={20} />,
    title: "Passports, Visas & Documentation",
    content: (
      <ul>
        <li>Clients are solely responsible for obtaining valid passports, visas, and travel permits.</li>
        <li>SASA Safaris will provide guidance but bears no responsibility if a client is denied entry due to insufficient documentation.</li>
      </ul>
    ),
  },
  {
    id: "wildlife",
    icon: <Bird size={20} />,
    title: "Wildlife & Environment",
    content: (
      <ul>
        <li>Wildlife sightings are never guaranteed — they depend entirely on nature and cannot be predicted.</li>
        <li>Clients must follow our guides' instructions at all times for their safety and the protection of wildlife.</li>
        <li>SASA Safaris promotes responsible tourism. Clients are expected to respect all local environments, wildlife, and cultures.</li>
      </ul>
    ),
  },
  {
    id: "requests",
    icon: <MessageSquare size={20} />,
    title: "Special Requests",
    content: (
      <ul>
        <li>All special requests (dietary, mobility, etc.) must be submitted in writing at the time of booking.</li>
        <li>While we strive to accommodate every request, they cannot be guaranteed and may incur additional charges.</li>
      </ul>
    ),
  },
  {
    id: "liability",
    icon: <AlertTriangle size={20} />,
    title: "Liability & Force Majeure",
    content: (
      <ul>
        <li>SASA Safaris is not responsible for any loss, injury, accident, delay, or expense resulting from circumstances beyond our control — including but not limited to war, terrorism, natural disaster, or government actions.</li>
        <li>Our liability is limited to the value of the safari booked.</li>
      </ul>
    ),
  },
  {
    id: "complaints",
    icon: <HelpCircle size={20} />,
    title: "Complaints & Disputes",
    content: (
      <ul>
        <li>Complaints must be reported immediately to SASA Safaris so we can address them on the spot.</li>
        <li>If unresolved during your trip, complaints must be submitted in writing within <strong>14 days</strong> after your safari.</li>
        <li>All disputes are subject to the laws and jurisdiction of Kenya.</li>
      </ul>
    ),
  },
  {
    id: "privacy",
    icon: <Shield size={20} />,
    title: "Privacy & Cookies",
    content: (
      <p>
        Your personal information is handled in accordance with our{" "}
        <Link to="/privacy">Privacy Policy</Link>. Information about cookies and tracking technologies is available in our{" "}
        <Link to="/cookies">Cookie Policy</Link>.
      </p>
    ),
  },
  {
    id: "updates",
    icon: <RefreshCw size={20} />,
    title: "Updates to These Terms",
    content: (
      <p>
        SASA Safaris reserves the right to update these terms and conditions at any time. We recommend reviewing this page periodically. Continued use of our services constitutes acceptance of any revised terms.
      </p>
    ),
  },
];

const sectionsIt = [
  {
    id: "booking",
    icon: <CreditCard size={20} />,
    title: "Prenotazione e Pagamento",
    content: (
      <ul>
        <li>Tutte le prenotazioni devono essere confermate per iscritto (email o modulo di prenotazione).</li>
        <li>È richiesto un <strong>deposito di almeno il 30%</strong> per garantire la prenotazione; il saldo è dovuto prima dell'inizio del safari o come concordato per iscritto.</li>
        <li>I pagamenti sono accettati tramite bonifico online sicuro, carta di credito/debito o come specificato nella fattura.</li>
        <li>Tutti i prezzi sono quotati in USD salvo diversa indicazione e possono variare a causa di fluttuazioni valutarie o tasse governative.</li>
      </ul>
    ),
  },
  {
    id: "cancellations",
    icon: <XCircle size={20} />,
    title: "Cancellazioni e Rimborsi",
    content: (
      <>
        <p>Tutte le cancellazioni devono essere comunicate per iscritto. Si applicano le seguenti penali:</p>
        <div className="legal-cancellation-table">
          <div className="legal-canc-row header">
            <span>Periodo di Preavviso</span>
            <span>Penale</span>
          </div>
          <div className="legal-canc-row">
            <span>Più di 60 giorni prima del safari</span>
            <span className="legal-canc-good">Rimborso completo meno le spese bancarie</span>
          </div>
          <div className="legal-canc-row">
            <span>30 – 59 giorni prima</span>
            <span className="legal-canc-warn">20% del costo totale trattenuto</span>
          </div>
          <div className="legal-canc-row">
            <span>15 – 29 giorni prima</span>
            <span className="legal-canc-warn">50% del costo totale trattenuto</span>
          </div>
          <div className="legal-canc-row">
            <span>Meno di 15 giorni / Mancata presentazione</span>
            <span className="legal-canc-bad">100% del costo totale trattenuto</span>
          </div>
        </div>
        <p>I rimborsi saranno elaborati entro 21 giorni lavorativi dalla data di cancellazione.</p>
      </>
    ),
  },
  {
    id: "changes",
    icon: <Edit3 size={20} />,
    title: "Modifiche e Alterazioni",
    content: (
      <ul>
        <li>SASA Safaris si riserva il diritto di modificare gli itinerari o sostituire gli alloggi a causa di circostanze al di fuori del nostro controllo (es. meteo, sicurezza, disponibilità).</li>
        <li>Qualsiasi modifica significativa sarà comunicata tempestivamente e verranno fornite alternative ove possibile.</li>
        <li>Le modifiche richieste dal cliente potrebbero comportare costi aggiuntivi.</li>
      </ul>
    ),
  },
  {
    id: "insurance",
    icon: <UmbrellaIcon size={20} />,
    title: "Assicurazione di Viaggio",
    content: (
      <ul>
        <li>Un'assicurazione di viaggio completa è <strong>obbligatoria</strong> per tutti i clienti, coprendo emergenze mediche, cancellazione, furto e responsabilità civile.</li>
        <li>SASA Safaris non è responsabile per eventuali perdite non coperte dalla tua polizza assicurativa.</li>
      </ul>
    ),
  },
  {
    id: "health",
    icon: <Syringe size={20} />,
    title: "Salute, Sicurezza e Vaccinazioni",
    content: (
      <ul>
        <li>I clienti sono responsabili di assicurarsi che tutte le vaccinazioni necessarie e le precauzioni sanitarie siano adottate prima del viaggio.</li>
        <li>SASA Safaris aderisce a rigidi standard di sicurezza e collabora solo con fornitori affidabili e autorizzati.</li>
        <li>Qualsiasi condizione medica deve essere comunicata al momento della prenotazione — faremo del nostro meglio per soddisfare esigenze speciali.</li>
      </ul>
    ),
  },
  {
    id: "documents",
    icon: <FileText size={20} />,
    title: "Passaporti, Visti e Documentazione",
    content: (
      <ul>
        <li>I clienti sono esclusivamente responsabili dell'ottenimento di passaporti, visti e permessi di viaggio validi.</li>
        <li>SASA Safaris fornirà orientamento ma non si assume alcuna responsabilità se un cliente viene respinto a causa di documentazione insufficiente.</li>
      </ul>
    ),
  },
  {
    id: "wildlife",
    icon: <Bird size={20} />,
    title: "Fauna Selvatica e Ambiente",
    content: (
      <ul>
        <li>Gli avvistamenti di fauna selvatica non sono mai garantiti — dipendono interamente dalla natura e non possono essere previsti.</li>
        <li>I clienti devono seguire le istruzioni delle guide in ogni momento per la loro sicurezza e la protezione della fauna.</li>
        <li>SASA Safaris promuove il turismo responsabile. I clienti sono tenuti a rispettare tutti gli ambienti locali, la fauna e le culture.</li>
      </ul>
    ),
  },
  {
    id: "requests",
    icon: <MessageSquare size={20} />,
    title: "Richieste Speciali",
    content: (
      <ul>
        <li>Tutte le richieste speciali (alimentari, di mobilità, ecc.) devono essere presentate per iscritto al momento della prenotazione.</li>
        <li>Pur cercando di soddisfare ogni richiesta, queste non possono essere garantite e potrebbero comportare costi aggiuntivi.</li>
      </ul>
    ),
  },
  {
    id: "liability",
    icon: <AlertTriangle size={20} />,
    title: "Responsabilità e Forza Maggiore",
    content: (
      <ul>
        <li>SASA Safaris non è responsabile per alcuna perdita, infortunio, incidente, ritardo o spesa derivante da circostanze al di fuori del nostro controllo — inclusi ma non limitati a guerra, terrorismo, catastrofe naturale o azioni governative.</li>
        <li>La nostra responsabilità è limitata al valore del safari prenotato.</li>
      </ul>
    ),
  },
  {
    id: "complaints",
    icon: <HelpCircle size={20} />,
    title: "Reclami e Controversie",
    content: (
      <ul>
        <li>I reclami devono essere segnalati immediatamente a SASA Safaris affinché possiamo risolverli sul posto.</li>
        <li>Se irrisolti durante il viaggio, i reclami devono essere presentati per iscritto entro <strong>14 giorni</strong> dal safari.</li>
        <li>Tutte le controversie sono soggette alle leggi e alla giurisdizione del Kenya.</li>
      </ul>
    ),
  },
  {
    id: "privacy",
    icon: <Shield size={20} />,
    title: "Privacy e Cookie",
    content: (
      <p>
        Le tue informazioni personali sono gestite in conformità con la nostra{" "}
        <Link to="/privacy">Informativa sulla Privacy</Link>. Le informazioni sui cookie e le tecnologie di tracciamento sono disponibili nella nostra{" "}
        <Link to="/cookies">Politica sui Cookie</Link>.
      </p>
    ),
  },
  {
    id: "updates",
    icon: <RefreshCw size={20} />,
    title: "Aggiornamenti a Questi Termini",
    content: (
      <p>
        SASA Safaris si riserva il diritto di aggiornare questi termini e condizioni in qualsiasi momento. Ti consigliamo di rivedere periodicamente questa pagina. L'uso continuato dei nostri servizi costituisce accettazione dei termini rivisti.
      </p>
    ),
  },
];

const CONTACT_EMAIL = "info@sasasafaris.com";
const CONTACT_PHONE = "+254 711 589 004";

export default function TermsOfService() {
  const { currentLanguage } = useLanguage();
  const isIt = currentLanguage === 'it';
  const sections = isIt ? sectionsIt : sectionsEn;
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = isIt ? "Termini e Condizioni — SASA Safaris Africa" : "Terms & Conditions — SASA Safaris Africa";
  }, [isIt]);

  return (
    <main className="legal-page">
      {/* Hero */}
      <div className="legal-hero">
        <div className="legal-hero-icon"><FileText size={40} /></div>
        <h1 className="legal-hero-title">{isIt ? 'Termini e Condizioni' : 'Terms & Conditions'}</h1>
        <p className="legal-hero-subtitle">
          {isIt
            ? 'Si prega di leggere attentamente prima di prenotare. Utilizzando i nostri servizi, accetti di essere vincolato da questi termini.'
            : 'Please read carefully before booking. By using our services, you agree to be bound by these terms.'
          }
        </p>
        <p className="legal-hero-date">{isIt ? 'Ultimo aggiornamento' : 'Last updated'}: {new Date().toLocaleDateString(isIt ? "it-IT" : "en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>
      </div>

      {/* Layout: sidebar TOC + content on desktop */}
      <div className="legal-layout">
        {/* Table of Contents */}
        <aside className="legal-toc">
          <p className="legal-toc-title">{isIt ? 'Contenuti' : 'Contents'}</p>
          <ol className="legal-toc-list">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={activeSection === s.id ? "active" : ""}
                  onClick={() => setActiveSection(s.id)}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        {/* Main Content */}
        <div className="legal-content legal-content--terms">
          <div className="legal-intro-card">
            <p>
              {isIt
                ? 'Questi Termini e Condizioni disciplinano il tuo utilizzo del sito web e dei servizi di SASA Safaris Africa. Effettuando una prenotazione o utilizzando il nostro sito web, confermi di aver letto, compreso e di accettare integralmente questi termini.'
                : 'These Terms & Conditions govern your use of SASA Safaris Africa\'s website and services. By making a booking or using our website, you confirm that you have read, understood, and agree to these terms in full.'
              }
            </p>
          </div>

          <div className="legal-sections">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-section-icon">{s.icon}</div>
                  <h2 className="legal-section-title">{i + 1}. {s.title}</h2>
                </div>
                <div className="legal-section-body">{s.content}</div>
              </section>
            ))}
          </div>

          {/* Contact */}
          <div className="legal-contact-card">
            <h3>{isIt ? 'Hai bisogno di aiuto?' : 'Need Help?'}</h3>
            <p>
              {isIt
                ? <>Per qualsiasi domanda su questi termini, contattaci a{" "}<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> o chiama{" "}<a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}>{CONTACT_PHONE}</a>.</>
                : <>For any questions about these terms, contact us at{" "}<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or call{" "}<a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}>{CONTACT_PHONE}</a>.</>
              }
            </p>
          </div>

          <div className="legal-footer-ctas">
            <Link to="/" className="legal-btn-primary">{isIt ? 'Torna alla Home' : 'Back to Home'}</Link>
            <Link to="/privacy" className="legal-btn-secondary">{isIt ? 'Informativa sulla Privacy' : 'Privacy Policy'}</Link>
            <Link to="/cookies" className="legal-btn-secondary">{isIt ? 'Politica sui Cookie' : 'Cookie Policy'}</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
