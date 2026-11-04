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

  const S = steps[a];
  const P = STEP_PANELS[S.k];

  return (
    <div className="mpipe" ref={root}>
      <div className="mstepper">
        {steps.map((s, n) => (
          <button key={s.k + (n === a ? key : '')} className={(n === a ? 'on' : '') + (n < a ? ' done' : '')} aria-current={n === a ? 'step' : undefined} onClick={() => go(n)}>
            <i></i>{s_tab(s)}
          </button>
        ))}
      </div>
      <div className="mstep" key={a} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <span className="mstep-count">{t.step} {a + 1} {t.of} {steps.length}</span>
        <h3>{S.t}</h3>
        <p>{S.d}</p>
        <div className="panel">
          <div className="panel-h"><strong>{S.h}</strong></div>
          <div className="panel-b"><P lang={lang} /></div>
        </div>
      </div>
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

function ImprintContent() {
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

function PrivacyContent() {
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

function App() {
  const lang = 'en';

  const [modal, setModal] = React.useState(null);
  const t = T[lang];
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState('');
  const navRef = React.useRef(null);
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
    <nav ref={navRef} className={'nav' + (scrolled ? ' scrolled' : '')}><div className="wrap">
      <a href="#top"><img src="assets/orefy-logo-dark.svg" alt="orefy" /></a>
      <div className="nav-links"><a href="#how" className={active === 'how' ? 'active' : ''}>{t.nav.how}</a><a href="#contact" className={active === 'contact' ? 'active' : ''}>{t.nav.early}</a></div>
      <span className="nav-prog"></span>
    </div></nav>

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
      <Modal title={'Imprint'} onClose={() => setModal(null)}>
        <ImprintContent />
      </Modal>
    )}
    {modal === 'privacy' && (
      <Modal title={'Privacy Policy'} onClose={() => setModal(null)}>
        <PrivacyContent />
      </Modal>
    )}
  </>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
