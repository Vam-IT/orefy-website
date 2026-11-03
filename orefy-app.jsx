const { Button, Badge, Input } = window.OrefyDesignSystem_e8d108;

const T = {
  de: {
    nav: {
      how: "So funktioniert's",
      early: "Early Access",
      badge: "Verfügbar ab Q1 2027",
      contact: "Kontakt",
    },
    hero: {
      over: "Vom ClickOps zum Code",
      h1_pre: "Volle Kontrolle über ",
      h1_em: "Ihre Cloud.",
      lede_pre: "Von manueller ClickOps-Infrastruktur zu ",
      lede_strong: "Best-Practice modularem Infrastructure as Code.",
      cta_contact: "Kontakt aufnehmen",
      cta_how: "Funktionsweise ansehen",
    },
    console: {
      raw_h: "Live-Umgebung",
      raw_tag: "roh",
      refined_h: "Infrastructure as Code",
      refined_tag: "strukturiert",
      codified: "kodifiziert",
      verified: "Verifiziert · Kein Drift",
      codifying: "Wird kodifiziert…",
    },
    steps: [
      {
        k: 'Discover',
        tab: 'Entdecken',
        t: 'Entdecken, was in Ihrer Cloud läuft',
        d: 'Read-only-Scan über alle Accounts und Regionen hinweg. Jede Ressource, wer sie erstellt hat und ob sie überhaupt verwaltet wird.',
        h: 'Inventar · 3 Accounts',
      },
      {
        k: 'Codify',
        tab: 'Kodifizieren',
        t: 'In sauberen, modularen Infrastructure as Code verwandeln',
        d: 'Wiederverwendbare Module, getrennte Umgebungen, lesbare Variablen. Die Struktur, die ein Senior Platform Engineer schreiben würde.',
        h: 'Generierter Code · Terraform / OpenTofu',
      },
      {
        k: 'Verify',
        tab: 'Verifizieren',
        t: 'Sicherstellen, dass sich nichts verändert hat',
        d: 'Jedes Modul wird gegen die Live-Umgebung geplant. Code wird erst übernommen, wenn der Diff exakt null beträgt.',
        h: 'Verifizierung · Plan gegen Live-Zustand',
      },
      {
        k: 'Scan',
        tab: 'Scannen',
        t: 'Auf Sicherheits- und Compliance-Lücken prüfen',
        d: 'Befunde gemappt auf relevante Standards, mit Korrekturen direkt als Code-Änderungen geliefert.',
        h: 'Befunde · 4 offen',
      },
    ],
    how: {
      over: "So funktioniert's",
      h2: "Rohe Infrastruktur rein. Strukturierter Code raus.",
      p: "Vier Schritte von einer unübersichtlichen Cloud-Umgebung zu versioniertem, überprüfbarem und portierbarem Code.",
    },
    cta: {
      over: "Verfügbar ab Q1 2027",
      h2_pre: "Bringen Sie Struktur ",
      h2_em: "ins Chaos.",
      sub: "Gehören Sie zu den ersten Teams, die ihre Cloud wieder voll unter Kontrolle bringen.",
      interest: "Interesse an Early Access? Schreiben Sie uns und wir melden uns bei Ihnen.",
      btn: "Kontakt aufnehmen",
    },
    footer: {
      copy: "© 2026 Orefy · VAMIT UG",
      imprint: "Impressum",
      privacy: "Datenschutz",
      contact: "Kontakt",
    },
  },
  en: {
    nav: {
      how: "How it works",
      early: "Early access",
      badge: "Available from Q1 2027",
      contact: "Contact us",
    },
    hero: {
      over: "From ClickOps to code",
      h1_pre: "Take control of ",
      h1_em: "your cloud.",
      lede_pre: "From ClickOps to ",
      lede_strong: "best-practice modular Infrastructure as Code.",
      cta_contact: "Contact us",
      cta_how: "See how it works",
    },
    console: {
      raw_h: "Live environment",
      raw_tag: "raw",
      refined_h: "Infrastructure as Code",
      refined_tag: "refined",
      codified: "codified",
      verified: "Verified · no drift",
      codifying: "Codifying…",
    },
    steps: [
      {
        k: 'Discover',
        tab: 'Discover',
        t: 'Discover what runs in your environment',
        d: 'Read-only scan across accounts and regions. Every resource, who created it, and whether it is managed at all.',
        h: 'Inventory · 3 accounts',
      },
      {
        k: 'Codify',
        tab: 'Codify',
        t: 'Turn it into clean, modular Infrastructure as Code',
        d: 'Reusable modules, separated environments, readable variables. The structure a senior platform engineer would write.',
        h: 'Generated code · Terraform / OpenTofu',
      },
      {
        k: 'Verify',
        tab: 'Verify',
        t: 'Verify that nothing changed along the way',
        d: 'Each module is planned against the live environment. You ship code only when the diff is zero.',
        h: 'Verification · plan against live state',
      },
      {
        k: 'Scan',
        tab: 'Scan',
        t: 'Scan for security and compliance gaps',
        d: 'Findings mapped to the frameworks you report on, with fixes delivered as code changes.',
        h: 'Findings · 4 open',
      },
    ],
    how: {
      over: "How it works",
      h2: "Raw infrastructure in. Refined code out.",
      p: "Four steps from an environment nobody fully understands to one you can review, version and move.",
    },
    cta: {
      over: "Available from Q1 2027",
      h2_pre: "Refine ",
      h2_em: "the raw.",
      sub: "Be among the first teams to bring their cloud under control.",
      interest: "Interested in early access? Write us and we will get back to you.",
      btn: "Contact us",
    },
    footer: {
      copy: "© 2026 Orefy · VAMIT UG",
      imprint: "Imprint",
      privacy: "Privacy Policy",
      contact: "Contact",
    },
  }
};

const STEP_PANELS = {
  Discover: DiscoverPanel,
  Codify: CodifyPanel,
  Verify: VerifyPanel,
  Scan: ScanPanel,
};

function HeroConsole({ lang = 'de' }) {
  const t = T[lang].console;
  const res = ['vpc-0a3f91c2', 'subnet-private-a', 'prod-orders-db', 'alb-checkout', 'ecs-cluster-core', 's3-media-uploads'];
  const [i, setI] = React.useState(0);
  React.useEffect(() => { const timer = setInterval(() => setI(x => (x + 1) % (res.length + 2)), 1100); return () => clearInterval(timer); }, []);
  const pct = Math.min(100, Math.round((i / res.length) * 100));

  return (
    <div className="console">
      <div className="console-bar"><div className="dots"><i></i><i></i><i></i></div><span className="mono">orefy · prod-eu</span></div>
      <div className="split">
        <div>
          <div className="col-h"><span>{t.raw_h}</span><span className="mono">{t.raw_tag}</span></div>
          {res.map((r, n) => (
            <div key={r} className={'res' + (n === i ? ' on' : n < i ? ' done' : '')}>
              <i className="k"></i>
              <span className="n">{r}</span>
              <span className="t">{n < i ? t.codified : 'clickops'}</span>
            </div>
          ))}
        </div>
        <div>
          <div className="col-h"><span>{t.refined_h}</span><span className="mono" style={{ color: 'var(--ore-400)' }}>{t.refined_tag}</span></div>
          <div className="tree">modules/<span className="cur">network</span> · database · compute</div>
          <div className="code">
<span className="kw">module</span> <span className="s">"network"</span> {'{'}{'\n'}
{'  '}<span className="a">source</span> = <span className="s">"./modules/network"</span>{'\n'}
{'  '}<span className="a">cidr</span>   = <span className="s">"10.20.0.0/16"</span>{'\n'}
{'  '}<span className="a">azs</span>    = local.azs{'\n'}
{'}'}{'\n'}
<span className="c"># plan: 0 to add, 0 to change</span>
          </div>
        </div>
      </div>
      <div className="console-foot">
        <span className="mono">{Math.min(i, res.length)}/{res.length}</span>
        <div className="bar"><i style={{ width: pct + '%' }}></i></div>
        <span>{pct === 100 ? t.verified : t.codifying}</span>
      </div>
    </div>
  );
}

function Pipeline({ lang = 'de' }) {
  const steps = T[lang].steps;
  const [a, setA] = React.useState(0);
  const [key, setKey] = React.useState(0);
  React.useEffect(() => { const timer = setTimeout(() => setA(x => (x + 1) % steps.length), 7000); return () => clearTimeout(timer); }, [a, key, steps.length]);

  const S = steps[a];
  const P = STEP_PANELS[S.k];

  return (
    <div className="pipe">
      <div className="steps">
        {steps.map((s, n) => (
          <button key={s.k + key} className={'step' + (n === a ? ' on' : '')} onClick={() => { setA(n); setKey(k => k + 1); }}>
            <span className="num">0{n + 1}</span>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
            <span className="prog"></span>
          </button>
        ))}
      </div>
      <div className="panel">
        <div className="panel-h"><Badge tone="ore">{'0' + (a + 1) + ' ' + s_tab(S)}</Badge><strong>{S.h}</strong></div>
        <div className="panel-b" key={a + lang}><P lang={lang} /></div>
      </div>
    </div>
  );
}

function s_tab(s) {
  return s.tab || s.k;
}

function Contact({ lang = 'de' }) {
  const t = T[lang].cta;
  return (
    <div className="form">
      <span style={{ fontSize: 14, color: 'var(--text-body)' }}>{t.interest}</span>
      <a href="mailto:info@orefy.cloud" className="form-btn-link" style={{ textDecoration: 'none' }}>
        <Button size="lg" iconRight={<Ico d={I.arrow} />}>{t.btn}</Button>
      </a>
      <span className="mono" style={{ fontSize: 12, color: 'var(--text-muted)' }}>info@orefy.cloud</span>
    </div>
  );
}

function Modal({ title, children, onClose }) {
  React.useEffect(() => {
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
          <h2 id="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Schließen">✕</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}

function ImprintContent({ lang = 'de' }) {
  if (lang === 'en') {
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
        <a href="imprint.html" target="_blank" rel="noopener noreferrer">Open in standalone tab ↗</a>
      </p>
    </>);
  }

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
      <a href="imprint.html" target="_blank" rel="noopener noreferrer">In separatem Tab öffnen ↗</a>
    </p>
  </>);
}

function PrivacyContent({ lang = 'de' }) {
  if (lang === 'en') {
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
        <strong>Completely Local Delivery (No Third-Country Transfers):</strong> All content, including typography (Inter, JetBrains Mono), scripts, and assets, is delivered <strong>entirely locally</strong> from our web server. When browsing our website, <strong>no data or IP addresses are transferred to external third parties (such as Google Fonts or external CDNs)</strong>.
      </p>
      <p>
        <strong>Server Log Files:</strong> When you access our website, technical connection data is automatically processed to display the website and ensure IT stability and security:
      </p>
      <ul>
        <li>IP address of the requesting device</li>
        <li>Date and time of server access</li>
        <li>Name and URL of the requested file</li>
        <li>Access status / HTTP response code</li>
        <li>Transferred data volume</li>
        <li>Referrer URL (previously visited page)</li>
        <li>Browser type, version, and operating system</li>
      </ul>
      <p>
        The processing of server log data is strictly necessary for delivering the website and maintaining security. Legal basis is <strong>Art. 6 (1) (f) GDPR</strong> (legitimate interest).
      </p>
      <p>
        <strong>Contact via E-Mail:</strong> If you contact us via email (e.g. at <a href="mailto:info@orefy.cloud">info@orefy.cloud</a>), we process the data you voluntarily provide (email address, name, message content) to handle your inquiry. Legal basis: Art. 6 (1) (f) GDPR or Art. 6 (1) (b) GDPR for contract-related requests.
      </p>

      <h3>VI. Do we use Cookies?</h3>
      <p>
        Our website sets <strong>neither first-party nor third-party cookies</strong>. No tracking or marketing data is stored in Local Storage or Session Storage. No cross-site profiling or tracking takes place. Therefore, a cookie consent banner is not required under Section 25 (2) TDDDG.
      </p>

      <h3>VII. Storage Duration</h3>
      <p>
        Server log files are processed short-term for IT security purposes and deleted routinely. Inquiries via email are deleted once the matter is conclusively resolved and no statutory retention requirements apply.
      </p>

      <h3>VIII. What are your Rights?</h3>
      <p>Under the GDPR, you have the following rights towards us:</p>
      <ul>
        <li>Right of Access (Art. 15 GDPR);</li>
        <li>Right to Rectification of inaccurate data (Art. 16 GDPR);</li>
        <li>Right to Erasure ("Right to be forgotten") (Art. 17 GDPR);</li>
        <li>Right to Restriction of processing (Art. 18 GDPR);</li>
        <li>Right to Data Portability (Art. 20 GDPR);</li>
        <li>Right to lodge a complaint with a supervisory authority (Art. 77 GDPR);</li>
        <li><strong>Right to Object on grounds relating to your particular situation (Art. 21 GDPR).</strong></li>
      </ul>

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
        Status: November 2026 · <a href="privacy.html" target="_blank" rel="noopener noreferrer">Open standalone page ↗</a>
      </p>
    </>);
  }

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
      <strong>Vollständig lokale Auslieferung (Keine Drittlandübermittlung):</strong> Sämtliche Inhalte (einschließlich Schriftarten wie Inter und JetBrains Mono sowie Skripte und Bilder) werden <strong>vollständig lokal</strong> von unserem Webserver ausgeliefert. Beim bloßen Aufruf der Seite werden <strong>keine Daten an externe Dritte (wie Google Fonts oder externe CDNs)</strong> übertragen.
    </p>
    <p>
      <strong>Server-Logfiles:</strong> Beim Besuch unserer Internetseite werden nur die personenbezogenen Daten verarbeitet, die Ihr Browser automatisch an den Server übermittelt. Dies sind technisch erforderliche Daten, um unsere Internetseite anzuzeigen und Stabilität sowie IT-Sicherheit zu gewährleisten:
    </p>
    <ul>
      <li>IP-Adresse des anfragenden Rechners/Endgeräts</li>
      <li>Datum und Uhrzeit der Anfrage</li>
      <li>Name und URL der abgerufenen Datei</li>
      <li>Zugriffsstatus / HTTP-Statuscode</li>
      <li>Übertragene Datenmenge</li>
      <li>Website, von der die Anfrage kommt (Referrer-URL)</li>
      <li>Verwendeter Browser und Betriebssystem</li>
    </ul>
    <p>
      Die Verarbeitung dieser Daten in Server-Logfiles ist erforderlich, um unsere Internetseite bereitzustellen und den sicheren Betrieb zu gewährleisten. Rechtsgrundlage ist <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse).
    </p>
    <p>
      <strong>Kontaktaufnahme per E-Mail:</strong> Wenn Sie uns per E-Mail kontaktieren (z. B. an <a href="mailto:info@orefy.cloud">info@orefy.cloud</a>), verarbeiten wir die von Ihnen freiwillig mitgeteilten Daten (Ihre E-Mail-Adresse, Name und den Inhalt Ihrer Nachricht), um Ihr Anliegen zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO bzw. Art. 6 Abs. 1 lit. b DSGVO (bei vertragsbezogenen Anfragen).
    </p>

    <h3>VI. Setzen wir Cookies ein?</h3>
    <p>
      Unsere Internetseite setzt <strong>weder eigene Cookies noch Cookies von Drittanbietern</strong> ein. Es werden auch keine Daten im Local Storage oder Session Storage zu Tracking- oder Werbezwecken gespeichert. Es findet keinerlei webseitenübergreifendes Tracking oder Profiling statt. Ein Cookie-Banner ist daher nach § 25 Abs. 2 TDDDG nicht erforderlich.
    </p>

    <h3>VII. Speicherdauer</h3>
    <p>
      Server-Logfiles werden ausschließlich kurzfristig zu Zwecken der Systemsicherheit verarbeitet und routinemäßig gelöscht. Daten aus einer E-Mail-Kontaktaufnahme löschen wir, sobald die Bearbeitung Ihrer Anfrage abgeschlossen ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
    </p>

    <h3>VIII. Was sind Ihre Rechte?</h3>
    <p>Hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten haben Sie uns gegenüber das Recht:</p>
    <ul>
      <li>Auskunft über Ihre von uns verarbeiteten Daten zu verlangen (Art. 15 DSGVO);</li>
      <li>unverzüglich die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO);</li>
      <li>die Löschung Ihrer bei uns gespeicherten Daten zu verlangen (Art. 17 DSGVO);</li>
      <li>die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO);</li>
      <li>Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten (Art. 20 DSGVO);</li>
      <li>sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO);</li>
      <li><strong>aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Widerspruch einzulegen (Art. 21 DSGVO).</strong></li>
    </ul>

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
      Stand: November 2026 · <a href="privacy.html" target="_blank" rel="noopener noreferrer">In separatem Tab öffnen ↗</a>
    </p>
  </>);
}

function App() {
  const [lang, setLangState] = React.useState(() => {
    try {
      return localStorage.getItem('orefy_lang') || (navigator.language.startsWith('de') ? 'de' : 'en');
    } catch (e) {
      return 'de';
    }
  });

  const setLang = (l) => {
    setLangState(l);
    try { localStorage.setItem('orefy_lang', l); } catch (e) {}
  };

  const [modal, setModal] = React.useState(null);
  const t = T[lang];

  return (<>
    <nav className="nav"><div className="wrap">
      <a href="#top"><img src="assets/orefy-logo-dark.svg" alt="orefy" /></a>
      <div className="nav-links"><a href="#how">{t.nav.how}</a><a href="#contact">{t.nav.early}</a></div>
      <div className="nav-r">
        <div className="lang-switch">
          <button className={lang === 'de' ? 'on' : ''} onClick={() => setLang('de')} aria-label="Deutsch">DE</button>
          <span className="lang-sep">|</span>
          <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')} aria-label="English">EN</button>
        </div>
        <span className="nav-badge" data-theme="dark"><Badge tone="ore" dot>{t.nav.badge}</Badge></span>
        <Button size="sm" onClick={() => window.scrollTo({ top: document.getElementById('contact').offsetTop - 64, behavior: 'smooth' })}>{t.nav.contact}</Button>
      </div>
    </div></nav>

    <header className="hero" id="top" data-theme="dark" data-screen-label="Hero">
      <div className="wrap hero-grid">
        <div>
          <span className="over">{t.hero.over}</span>
          <h1 style={{ marginTop: 18 }}>{t.hero.h1_pre}<em>{t.hero.h1_em}</em></h1>
          <p className="lede">{t.hero.lede_pre}<strong>{t.hero.lede_strong}</strong></p>
          <div className="cta-row">
            <a href="#contact" style={{ textDecoration: 'none' }}><Button size="lg" iconRight={<Ico d={I.arrow} />}>{t.hero.cta_contact}</Button></a>
            <a href="#how" style={{ textDecoration: 'none' }}><Button size="lg" variant="ghost" style={{ color: 'var(--slate-200)' }}>{t.hero.cta_how}</Button></a>
          </div>
        </div>
        <HeroConsole lang={lang} />
      </div>
      <div className="hero-foot"><div className="wrap">
        {t.steps.map((s, n) => <a key={s.k} href="#how"><span>0{n + 1}</span>{s_tab(s)}</a>)}
      </div></div>
    </header>

    <section className="block" id="how" data-screen-label="How it works">
      <div className="wrap">
        <div className="sec-head">
          <div><span className="over">{t.how.over}</span><h2>{t.how.h2}</h2></div>
          <p>{t.how.p}</p>
        </div>
        <Pipeline lang={lang} />
      </div>
    </section>

    <section className="cta" id="contact" data-theme="dark" data-screen-label="Waitlist">
      <div className="wrap cta-box">
        <div>
          <span className="over">{t.cta.over}</span>
          <h2 style={{ marginTop: 14 }}>{t.cta.h2_pre}<em>{t.cta.h2_em}</em></h2>
          <p className="sub">{t.cta.sub}</p>
        </div>
        <Contact lang={lang} />
      </div>
    </section>

    <footer data-theme="dark"><div className="wrap">
      <img src="assets/orefy-logo-dark.svg" alt="orefy" />
      <span>{t.footer.copy}</span>
      <div className="links">
        <a href="#imprint" onClick={(e) => { e.preventDefault(); setModal('imprint'); }}>{t.footer.imprint}</a>
        <a href="#privacy" onClick={(e) => { e.preventDefault(); setModal('privacy'); }}>{t.footer.privacy}</a>
        <a href="mailto:info@orefy.cloud">{t.footer.contact}</a>
      </div>
    </div></footer>

    {modal === 'imprint' && (
      <Modal title={lang === 'de' ? 'Impressum' : 'Imprint'} onClose={() => setModal(null)}>
        <ImprintContent lang={lang} />
      </Modal>
    )}
    {modal === 'privacy' && (
      <Modal title={lang === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'} onClose={() => setModal(null)}>
        <PrivacyContent lang={lang} />
      </Modal>
    )}
  </>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
