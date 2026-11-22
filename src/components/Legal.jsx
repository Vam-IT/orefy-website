import { useEffect } from 'react';

// Imprint and privacy policy as dialogs. The same texts exist as imprint.html and privacy.html: change both.

function Modal({ title, lang, onLangChange, children, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <h2 id="modal-title">{title}</h2>
            {onLangChange && (
              <div className="lang-switch">
                <button className={lang === 'de' ? 'on' : ''} onClick={() => onLangChange('de')} aria-label="Deutsch">DE</button>
                <span className="lang-sep" style={{ color: '#2F3642', fontSize: 11, userSelect: 'none' }}>|</span>
                <button className={lang === 'en' ? 'on' : ''} onClick={() => onLangChange('en')} aria-label="English">EN</button>
              </div>
            )}
          </div>
          <button className="modal-close" onClick={onClose} aria-label={lang === 'de' ? 'Schließen' : 'Close'}>✕</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}

function ImprintContent({ lang = 'en' }) {
  if (lang === 'de') {
    return (<>
      <h3>Angaben gemäß § 5 DDG</h3>
      <p>
        <strong>VAMIT UG (haftungsbeschränkt)</strong><br />
        Petersfeldstraße 16<br />
        46395 Bocholt<br />
        Deutschland
      </p>

      <h3>Vertreten durch</h3>
      <p>
        <strong>Geschäftsführer:</strong> Veselin Kolev
      </p>

      <h3>Registereintrag</h3>
      <p>
        <strong>Registergericht:</strong> Amtsgericht Coesfeld<br />
        <strong>Registernummer:</strong> HRB 23796
      </p>

      <h3>Umsatzsteuer-ID</h3>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE462795245
      </p>

      <h3>Kontakt</h3>
      <p>
        <strong>Telefon:</strong> <a href="tel:+4917623204351">+49 176 23204351</a><br />
        <strong>E-Mail:</strong> <a href="mailto:info@orefy.cloud">info@orefy.cloud</a><br />
        <strong>Web:</strong> <a href="https://vam-it.com/" target="_blank" rel="noopener noreferrer">vam-it.com</a>
      </p>

      <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
      <p>
        Veselin Kolev<br />
        Petersfeldstraße 16<br />
        46395 Bocholt<br />
        Deutschland
      </p>
      <p style={{ marginTop: 24, fontSize: 13, color: 'var(--text-muted)' }}>
        <a href="/imprint.html" target="_blank" rel="noopener noreferrer">In separatem Tab öffnen ↗</a>
      </p>
    </>);
  }

  return (<>
    <h3>Information pursuant to Section 5 DDG</h3>
    <p>
      <strong>VAMIT UG (haftungsbeschränkt)</strong><br />
      Petersfeldstraße 16<br />
      46395 Bocholt<br />
      Germany
    </p>

    <h3>Represented by</h3>
    <p>
      <strong>Managing Director:</strong> Veselin Kolev
    </p>

    <h3>Commercial Register</h3>
    <p>
      <strong>Registration Court:</strong> Local Court (Amtsgericht) Coesfeld<br />
      <strong>Registration Number:</strong> HRB 23796
    </p>

    <h3>VAT ID</h3>
    <p>
      VAT identification number pursuant to Section 27a of the German VAT Act (UStG): DE462795245
    </p>

    <h3>Contact</h3>
    <p>
      <strong>Phone:</strong> <a href="tel:+4917623204351">+49 176 23204351</a><br />
      <strong>E-Mail:</strong> <a href="mailto:info@orefy.cloud">info@orefy.cloud</a><br />
      <strong>Web:</strong> <a href="https://vam-it.com/" target="_blank" rel="noopener noreferrer">vam-it.com</a>
    </p>

    <h3>Responsible for Content pursuant to Section 18 (2) MStV</h3>
    <p>
      Veselin Kolev<br />
      Petersfeldstraße 16<br />
      46395 Bocholt<br />
      Germany
    </p>
    <p style={{ marginTop: 24, fontSize: 13, color: 'var(--text-muted)' }}>
      <a href="/imprint.html" target="_blank" rel="noopener noreferrer">Open in standalone tab ↗</a>
    </p>
  </>);
}

function PrivacyContent({ lang = 'en' }) {
  if (lang === 'de') {
    return (<>
      <p>
        Hier informieren wir Sie über die Verarbeitung personenbezogener Daten bei Nutzung unserer Internetseite. Diese Datenschutzerklärung gilt für unsere Internetseite. Wir betreiben keine Social-Media-Profile und keine weiteren Online-Präsenzen, auf die diese Erklärung ebenfalls Anwendung finden müsste.
      </p>

      <h3>I. Grundlegendes</h3>
      <p>
        Personenbezogene Daten sind alle Daten, die auf Sie persönlich beziehbar sind, also u. a. Name, Anschrift, E-Mail-Adresse, IP-Adresse oder auch das Nutzerverhalten.
        Hinsichtlich der verwendeten Begriffe wird auf die Definitionen in Art. 4 DSGVO verwiesen.
      </p>

      <h3>II. Wer ist die verantwortliche Stelle?</h3>
      <p>
        Wir sind für die Verarbeitung Ihrer Daten verantwortlich:<br />
        <strong>VAMIT UG (haftungsbeschränkt)</strong><br />
        Petersfeldstraße 16<br />
        46395 Bocholt<br />
        Deutschland<br />
        Vertreten durch den Geschäftsführer: Veselin Kolev<br />
        Handelsregister: Amtsgericht Coesfeld, HRB 23796<br />
        E-Mail: <a href="mailto:info@orefy.cloud">info@orefy.cloud</a>
      </p>

      <h3>III. Wie erreichen Sie unseren Datenschutzbeauftragten?</h3>
      <p>
        Wir sind gesetzlich nicht dazu verpflichtet, einen Datenschutzbeauftragten zu benennen. Für Fragen rund um die Verarbeitung Ihrer Daten können Sie sich jederzeit gerne direkt an uns wenden (Kontaktdaten siehe oben).
      </p>

      <h3>IV. Wer ist von der Datenverarbeitung betroffen?</h3>
      <p>
        Wenn Sie als Interessent oder sonstiger Besucher unsere Internetseite aufrufen, erfolgt die Verarbeitung Ihrer personenbezogenen Daten im Rahmen der gesetzlichen Vorschriften bzw. dieser Erklärung. Alle Besucher unserer Internetseite werden unter dem Begriff „Nutzer“ zusammengefasst.
      </p>

      <h3>V. Welche Daten verarbeiten wir und zu welchen Zwecken?</h3>
      <p>
        Unsere Internetseite ist eine reine Informationsseite ohne Registrierung, Login, Benutzerkonten oder Bezahlfunktionen.
      </p>
      <p>
        <strong>Hosting über GitHub Pages</strong><br />
        Unsere Website wird über GitHub Pages bereitgestellt, einen Dienst der GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA (Mutterkonzern: Microsoft Corporation). Beim Aufruf der Website übermittelt Ihr Browser automatisch technische Zugriffsdaten an die Server von GitHub. Dazu gehören IP-Adresse, Browsertyp, Betriebssystem, Datum und Uhrzeit des Zugriffs sowie die aufgerufene URL. Dies ist technisch erforderlich, um die Website auszuliefern und ihre Sicherheit zu gewährleisten.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in einer verlässlichen, performanten und sicheren Bereitstellung unseres Online-Angebots. Die Daten werden in die USA übermittelt. GitHub ist unter dem EU-U.S. Data Privacy Framework (DPF) zertifiziert. Für die Übermittlung liegt damit ein Angemessenheitsbeschluss der EU-Kommission vor (Art. 45 DSGVO). Auf Art und Dauer der Speicherung der Zugriffsdaten durch GitHub haben wir keinen Einfluss. Weitere Informationen finden Sie im <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub Privacy Statement</a>.
      </p>
      <p>
        Die Bereitstellung dieser Daten ist für den Aufruf der Website erforderlich. Ohne sie kann die Website nicht angezeigt werden.
      </p>
      <p>
        <strong>Lokale Bereitstellung aller Assets (Keine externen Drittanbieter-Schriften/CDNs):</strong> Sämtliche eingebundenen Schriftarten (Inter, JetBrains Mono), Skripte und Medien werden direkt über unser Repository und GitHub Pages ausgeliefert. Es erfolgt <strong>kein Nachladen von externen Drittanbietern</strong> wie Google Fonts oder externen Content Delivery Networks.
      </p>
      <p>
        <strong>Kontaktaufnahme per E-Mail oder Telefon</strong><br />
        Wenn Sie uns per E-Mail oder telefonisch kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten, um Ihr Anliegen zu bearbeiten. Das sind etwa Name, E-Mail-Adresse, Telefonnummer und der Inhalt Ihrer Nachricht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage mit einem Vertrag oder vorvertraglichen Maßnahmen zusammenhängt, und im Übrigen Art. 6 Abs. 1 lit. f DSGVO (unser berechtigtes Interesse an der Beantwortung von Anfragen).
      </p>
      <p>
        Unser E-Mail-Postfach wird bei der STRATO GmbH, Otto-Ostrowski-Straße 7, 10249 Berlin, betrieben. STRATO verarbeitet die Daten in unserem Auftrag auf Grundlage eines Vertrags zur Auftragsverarbeitung nach Art. 28 DSGVO.
      </p>
      <p>
        <strong>Keine automatisierte Entscheidungsfindung</strong><br />
        Eine automatisierte Entscheidungsfindung einschließlich Profiling (Art. 22 DSGVO) findet nicht statt.
      </p>

      <h3>VI. Setzen wir Cookies ein?</h3>
      <p>
        Unsere Internetseite setzt <strong>weder eigene Cookies noch Cookies von Drittanbietern</strong> ein. Es werden auch keinerlei Daten im Local Storage oder Session Storage auf Ihrem Endgerät gespeichert. Es findet keinerlei webseitenübergreifendes Tracking oder Profiling statt. Ein Cookie-Banner ist daher nach § 25 Abs. 2 TDDDG nicht erforderlich.
      </p>

      <h3>VII. Speicherdauer</h3>
      <p>
        Die Speicherung der Zugriffsdaten durch GitHub richtet sich nach dessen Richtlinien (siehe Abschnitt V). Daten aus einer Kontaktaufnahme löschen wir, sobald Ihre Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen, etwa handels- oder steuerrechtliche Fristen bei geschäftlicher Korrespondenz.
      </p>

      <h3>VIII. Ihre Rechte als betroffene Person</h3>
      <p>Hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten haben Sie uns gegenüber das Recht:</p>
      <ul>
        <li>Auskunft über Ihre von uns verarbeiteten Daten zu verlangen (Art. 15 DSGVO);</li>
        <li>unverzüglich die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO);</li>
        <li>die Löschung Ihrer bei uns gespeicherten Daten zu verlangen (Art. 17 DSGVO);</li>
        <li>die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO);</li>
        <li>Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten (Art. 20 DSGVO);</li>
        <li>sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO).</li>
      </ul>
      <div className="notice-box">
        <strong className="notice-title">Widerspruchsrecht nach Art. 21 DSGVO</strong>
        <p>
          Soweit wir Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeiten, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen diese Verarbeitung einzulegen. Wir verarbeiten Ihre Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen. Ein formloser Widerspruch an <a href="mailto:info@orefy.cloud">info@orefy.cloud</a> genügt.
        </p>
      </div>

      <h3>IX. Bei wem können Sie sich beschweren?</h3>
      <p>
        Zuständige Datenschutz-Aufsichtsbehörde für VAMIT UG (haftungsbeschränkt):<br />
        <strong>Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)</strong><br />
        Kavalleriestraße 2–4, 40213 Düsseldorf<br />
        Internet: <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer">www.ldi.nrw.de</a>
      </p>

      <h3>X. Datensicherheit</h3>
      <p>
        Unsere Internetseite wird ausschließlich verschlüsselt mittels SSL-/TLS-Zertifikat (HTTPS) übertragen.
      </p>
      <p style={{ marginTop: 24, fontSize: 13, color: 'var(--text-muted)' }}>
        Stand: November 2026 · <a href="/privacy.html" target="_blank" rel="noopener noreferrer">In separatem Tab öffnen ↗</a>
      </p>
    </>);
  }

  return (<>
    <p>
      This Privacy Policy informs you about the processing of personal data when using our website. This privacy policy applies to our website. We do not operate any social media profiles or further online presences to which this policy would need to apply.
    </p>

    <h3>I. Fundamentals</h3>
    <p>
      Personal data includes all information relating to an identified or identifiable natural person (e.g. name, address, email address, IP address, user behavior). Regarding the terms used, reference is made to the definitions in Art. 4 GDPR.
    </p>

    <h3>II. Who is the Controller?</h3>
    <p>
      Responsible for data processing on this website is:<br />
      <strong>VAMIT UG (haftungsbeschränkt)</strong><br />
      Petersfeldstraße 16<br />
      46395 Bocholt, Germany<br />
      Represented by Managing Director: Veselin Kolev<br />
      Commercial Register: Local Court Coesfeld, HRB 23796<br />
      E-Mail: <a href="mailto:info@orefy.cloud">info@orefy.cloud</a>
    </p>

    <h3>III. How do you reach our Data Protection Officer?</h3>
    <p>
      We are not legally obliged to appoint a Data Protection Officer. If you have questions regarding the processing of your data, you may contact us directly at any time (contact details see above).
    </p>

    <h3>IV. Who is affected by data processing?</h3>
    <p>
      All visitors to our website are referred to as "Users". Data is processed strictly within the framework of statutory provisions (GDPR, DDG, TDDDG).
    </p>

    <h3>V. What data do we process and for what purposes?</h3>
    <p>
      Our website is purely informational without user accounts, login, registration, or payment processing.
    </p>
    <p>
      <strong>Hosting via GitHub Pages</strong><br />
      Our website is hosted on GitHub Pages, a service provided by GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA (parent company: Microsoft Corporation). When you visit our website, your browser automatically transmits technical access data to GitHub's servers. This includes your IP address, browser type, operating system, date and time of access, and the requested URL. This is technically necessary to deliver the website and keep it secure.
    </p>
    <p>
      The legal basis is Art. 6 (1) (f) GDPR. Our legitimate interest lies in the reliable, performant and secure operation of our website. The data is transferred to the USA. GitHub is certified under the EU-U.S. Data Privacy Framework (DPF), so the transfer is covered by an adequacy decision of the European Commission (Art. 45 GDPR). We have no influence on how long GitHub stores this access data. For more information, see the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub Privacy Statement</a>.
    </p>
    <p>
      Providing this data is required to access the website. Without it, the website cannot be displayed.
    </p>
    <p>
      <strong>Local Delivery of Assets (No Third-Party CDNs or Fonts):</strong> All typography (Inter, JetBrains Mono), scripts, and assets are served directly through our repository on GitHub Pages. There is <strong>no dynamic loading from third parties</strong> such as Google Fonts or external CDNs.
    </p>
    <p>
      <strong>Contact via E-Mail or Phone</strong><br />
      If you contact us by email or phone, we process the data you provide in order to handle your inquiry. This includes your name, email address, phone number and the content of your message. The legal basis is Art. 6 (1) (b) GDPR where your inquiry relates to a contract or pre-contractual measures, and otherwise Art. 6 (1) (f) GDPR (our legitimate interest in responding to inquiries).
    </p>
    <p>
      Our email mailbox is hosted by STRATO GmbH, Otto-Ostrowski-Straße 7, 10249 Berlin, Germany. STRATO processes the data on our behalf under a data processing agreement pursuant to Art. 28 GDPR.
    </p>
    <p>
      <strong>No Automated Decision-Making</strong><br />
      No automated decision-making, including profiling (Art. 22 GDPR), takes place.
    </p>

    <h3>VI. Do we use Cookies?</h3>
    <p>
      Our website sets <strong>neither first-party nor third-party cookies</strong>. No data is stored in Local Storage or Session Storage on your device. No cross-site profiling or tracking takes place. Therefore, a cookie consent banner is not required under Section 25 (2) TDDDG.
    </p>

    <h3>VII. Storage Duration</h3>
    <p>
      GitHub's storage of access data is governed by its own policies (see Section V). We delete data from inquiries once they have been fully resolved, unless statutory retention obligations apply, such as commercial or tax-law retention periods for business correspondence.
    </p>

    <h3>VIII. What are your Rights?</h3>
    <p>Under the GDPR, you have the following rights towards us:</p>
    <ul>
      <li>Right of Access (Art. 15 GDPR);</li>
      <li>Right to Rectification of inaccurate data (Art. 16 GDPR);</li>
      <li>Right to Erasure ("Right to be forgotten") (Art. 17 GDPR);</li>
      <li>Right to Restriction of processing (Art. 18 GDPR);</li>
      <li>Right to Data Portability (Art. 20 GDPR);</li>
      <li>Right to lodge a complaint with a supervisory authority (Art. 77 GDPR).</li>
    </ul>
    <div className="notice-box">
      <strong className="notice-title">Right to Object pursuant to Art. 21 GDPR</strong>
      <p>
        Where we process your data on the basis of Art. 6 (1) (f) GDPR, you have the right to object to this processing at any time on grounds relating to your particular situation. We will then no longer process your data, unless we can demonstrate compelling legitimate grounds for the processing that override your interests, rights and freedoms, or the processing serves the establishment, exercise or defence of legal claims. An informal objection sent to <a href="mailto:info@orefy.cloud">info@orefy.cloud</a> is sufficient.
      </p>
    </div>

    <h3>IX. Competent Supervisory Authority</h3>
    <p>
      Competent supervisory authority for VAMIT UG (haftungsbeschränkt):<br />
      <strong>Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)</strong><br />
      Kavalleriestraße 2–4, 40213 Düsseldorf, Germany<br />
      Website: <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer">www.ldi.nrw.de</a>
    </p>

    <h3>X. Data Security</h3>
    <p>
      Our website is transmitted strictly encrypted using modern SSL/TLS (HTTPS).
    </p>
    <p style={{ marginTop: 24, fontSize: 13, color: 'var(--text-muted)' }}>
      Last updated: November 2026 · <a href="/privacy.html" target="_blank" rel="noopener noreferrer">Open standalone page ↗</a>
    </p>
  </>);
}

export default function LegalDialog({ kind, lang, onLangChange, onClose }) {
  const de = lang === 'de';
  const title = kind === 'imprint' ? (de ? 'Impressum' : 'Imprint') : (de ? 'Datenschutzerklärung' : 'Privacy Policy');
  return (
    <Modal title={title} lang={lang} onLangChange={onLangChange} onClose={onClose}>
      {kind === 'imprint' ? <ImprintContent lang={lang} /> : <PrivacyContent lang={lang} />}
    </Modal>
  );
}
