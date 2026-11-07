const { Button, Badge, Input } = window.OrefyDesignSystem_e8d108;

const T = {
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
      step: "Step",
      of: "of",
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
      copy: "© 2026 Orefy · VAMIT UG (haftungsbeschränkt)",
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

function HeroConsole({ lang = 'en' }) {
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

function DesktopPipeline({ lang = 'en' }) {
  const steps = T[lang].steps;
  const [a, setA] = React.useState(0);
  const [key, setKey] = React.useState(0);
  React.useEffect(() => { const timer = setTimeout(() => setA(x => (x + 1) % steps.length), 7000); return () => clearTimeout(timer); }, [a, key, steps.length]);

  const S = steps[a];

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
        {steps.map((s, n) => {
          const P = STEP_PANELS[s.k];
          return (
            <div className="panel-b" key={s.k + lang} style={n === a ? undefined : { display: 'none' }} aria-hidden={n !== a}>
              <P lang={lang} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function useIsMobile() {
  const query = '(max-width:960px)';
  const [mobile, setMobile] = React.useState(() => window.matchMedia(query).matches);
  React.useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return mobile;
}

function MobilePipeline({ lang = 'en' }) {
  const steps = T[lang].steps;
  const t = T[lang].how;
  const [a, setA] = React.useState(0);
  const [key, setKey] = React.useState(0);
  const [inView, setInView] = React.useState(true);
  const root = React.useRef(null);
  const touch = React.useRef(null);
  const userNav = React.useRef(false);

  const go = (n) => { userNav.current = true; setA(n); setKey(k => k + 1); };

  React.useEffect(() => {
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.15 });
    io.observe(root.current);
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => setA(x => (x + 1) % steps.length), 8000);
    return () => clearTimeout(timer);
  }, [a, key, inView, steps.length]);

  React.useEffect(() => {
    if (!userNav.current) return;
    userNav.current = false;
    const navH = parseInt(getComputedStyle(root.current).getPropertyValue('--nav-h'), 10);
    const top = root.current.getBoundingClientRect().top;
    if (top < navH) window.scrollTo({ top: window.scrollY + top - navH });
  }, [a]);

  const onTouchStart = (e) => {
    const p = e.touches[0];
    touch.current = e.target.closest('.code-l,.code,.table-wrap') ? null : { x: p.clientX, y: p.clientY };
  };
  const onTouchEnd = (e) => {
    if (!touch.current) return;
    const p = e.changedTouches[0];
    const dx = p.clientX - touch.current.x;
    const dy = p.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    go(Math.min(steps.length - 1, Math.max(0, a + (dx < 0 ? 1 : -1))));
  };

  return (
    <div className="mpipe" ref={root}>
      <div className="mstepper">
        {steps.map((s, n) => (
          <button key={s.k + (n === a ? key : '')} className={(n === a ? 'on' : '') + (n < a ? ' done' : '')} aria-current={n === a ? 'step' : undefined} onClick={() => go(n)}>
            <i></i>{s_tab(s)}
          </button>
        ))}
      </div>
      {steps.map((s, n) => {
        const P = STEP_PANELS[s.k];
        return (
          <div className="mstep" key={s.k} style={n === a ? undefined : { display: 'none' }} aria-hidden={n !== a} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <span className="mstep-count">{t.step} {n + 1} {t.of} {steps.length}</span>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
            <div className="panel">
              <div className="panel-h"><strong>{s.h}</strong></div>
              <div className="panel-b"><P lang={lang} /></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Pipeline({ lang = 'en' }) {
  const mobile = useIsMobile();
  return mobile ? <MobilePipeline lang={lang} /> : <DesktopPipeline lang={lang} />;
}

function s_tab(s) {
  return s.tab || s.k;
}

function Contact({ lang = 'en' }) {
  const t = T[lang].cta;
  return (
    <div className="form">
      <span style={{ fontSize: 14, color: 'var(--text-body)' }}>{t.interest}</span>
      <a href="mailto:info@orefy.cloud" className="form-btn-link" style={{ textDecoration: 'none' }}>
        <Button className="btn-prem" size="lg" iconRight={<Ico d={I.arrow} />}>{t.btn}</Button>
      </a>
      <span className="mono" style={{ fontSize: 12, color: 'var(--text-muted)' }}>info@orefy.cloud</span>
    </div>
  );
}

function Modal({ title, lang, onLangChange, children, onClose }) {
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
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
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
        <a href="imprint.html" target="_blank" rel="noopener noreferrer">In separatem Tab öffnen ↗</a>
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
      <a href="imprint.html" target="_blank" rel="noopener noreferrer">Open in standalone tab ↗</a>
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
        Stand: November 2026 · <a href="privacy.html" target="_blank" rel="noopener noreferrer">In separatem Tab öffnen ↗</a>
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
      Last updated: November 2026 · <a href="privacy.html" target="_blank" rel="noopener noreferrer">Open standalone page ↗</a>
    </p>
  </>);
}

function App() {
  const lang = 'en';

  const [legalLang, setLegalLang] = React.useState(() => {
    try {
      return (typeof navigator !== 'undefined' && navigator.language && navigator.language.toLowerCase().startsWith('de')) ? 'de' : 'en';
    } catch (e) {
      return 'en';
    }
  });

  const [modal, setModal] = React.useState(() => {
    try {
      if (typeof window !== 'undefined' && window.location.hash) {
        if (window.location.hash === '#imprint') return 'imprint';
        if (window.location.hash === '#privacy') return 'privacy';
      }
    } catch (e) {}
    return null;
  });
  const t = T[lang];
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState('');
  const navRef = React.useRef(null);
  React.useEffect(() => {
    const onHash = () => {
      if (window.location.hash === '#imprint') setModal('imprint');
      else if (window.location.hash === '#privacy') setModal('privacy');
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (navRef.current) navRef.current.style.setProperty('--p', max > 0 ? Math.min(1, y / max) : 0);
      let cur = '';
      ['how', 'contact'].forEach(id => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) cur = id;
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (<>
    <nav ref={navRef} className={'nav' + (scrolled ? ' scrolled' : '')} aria-label="Main navigation"><div className="wrap">
      <a href="#top"><img src="assets/orefy-logo-dark.svg" alt="Orefy" width="88" height="26" /></a>
      <div className="nav-links"><a href="#how" className={active === 'how' ? 'active' : ''}>{t.nav.how}</a><a href="#contact" className={active === 'contact' ? 'active' : ''}>{t.nav.early}</a></div>
      <span className="nav-prog"></span>
    </div></nav>

    <main>
      <header className="hero" id="top" data-theme="dark" data-screen-label="Hero">
        <div className="wrap hero-grid">
          <div>
            <span className="over">{t.hero.over}</span>
            <h1 style={{ marginTop: 18 }}>{t.hero.h1_pre}<em>{t.hero.h1_em}</em></h1>
            <p className="lede">{t.hero.lede_pre}<strong>{t.hero.lede_strong}</strong></p>
            <div className="cta-row">
              <a href="#contact" style={{ textDecoration: 'none' }}><Button className="btn-prem" size="lg" iconRight={<Ico d={I.arrow} />}>{t.hero.cta_contact}</Button></a>
              <a href="#how" style={{ textDecoration: 'none' }}><Button className="btn-glass" size="lg" variant="ghost" style={{ color: 'var(--slate-200)' }}>{t.hero.cta_how}</Button></a>
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
            {t.how.p && <p>{t.how.p}</p>}
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
    </main>

    <footer data-theme="dark"><div className="wrap">
      <img src="assets/orefy-logo-dark.svg" alt="Orefy" width="74" height="22" />
      <span>{t.footer.copy}</span>
      <div className="links">
        <a href="imprint.html" onClick={(e) => { if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) { e.preventDefault(); setModal('imprint'); } }}>{t.footer.imprint}</a>
        <a href="privacy.html" onClick={(e) => { if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) { e.preventDefault(); setModal('privacy'); } }}>{t.footer.privacy}</a>
        <a href="mailto:info@orefy.cloud">{t.footer.contact}</a>
      </div>
    </div></footer>

    {modal === 'imprint' && (
      <Modal title={legalLang === 'de' ? 'Impressum' : 'Imprint'} lang={legalLang} onLangChange={setLegalLang} onClose={() => setModal(null)}>
        <ImprintContent lang={legalLang} />
      </Modal>
    )}
    {modal === 'privacy' && (
      <Modal title={legalLang === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'} lang={legalLang} onLangChange={setLegalLang} onClose={() => setModal(null)}>
        <PrivacyContent lang={legalLang} />
      </Modal>
    )}
  </>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
