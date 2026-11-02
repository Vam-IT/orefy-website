const { Button, Badge, Input } = window.OrefyDesignSystem_e8d108;

const STEPS = [
  { k: 'Discover', t: 'Discover what runs in your environment', d: 'Read-only scan across accounts and regions. Every resource, who created it, and whether it is managed at all.', P: DiscoverPanel, h: 'Inventory · 3 accounts' },
  { k: 'Codify', t: 'Turn it into clean, modular Infrastructure as Code', d: 'Reusable modules, separated environments, readable variables. The structure a senior platform engineer would write.', P: CodifyPanel, h: 'Generated code · Terraform / OpenTofu' },
  { k: 'Verify', t: 'Verify that nothing changed along the way', d: 'Each module is planned against the live environment. You ship code only when the diff is zero.', P: VerifyPanel, h: 'Verification · plan against live state' },
  { k: 'Scan', t: 'Scan for security and compliance gaps', d: 'Findings mapped to the frameworks you report on, with fixes delivered as code changes.', P: ScanPanel, h: 'Findings · 4 open' },
];

const LINES = [[18, 8, 22], [26, 60, 14], [34, 30, 8], [62, 70, 18], [70, 12, 10], [78, 44, 26], [86, 80, 12]];

function HeroConsole() {
  const res = ['vpc-0a3f91c2', 'subnet-private-a', 'prod-orders-db', 'alb-checkout', 'ecs-cluster-core', 's3-media-uploads'];
  const [i, setI] = React.useState(0);
  React.useEffect(() => { const t = setInterval(() => setI(x => (x + 1) % (res.length + 2)), 1100); return () => clearInterval(t); }, []);
  const pct = Math.min(100, Math.round((i / res.length) * 100));
  return (
    <div className="console">
      <div className="console-bar"><div className="dots"><i></i><i></i><i></i></div><span className="mono">orefy · prod-eu</span></div>
      <div className="split">
        <div>
          <div className="col-h"><span>Live environment</span><span className="mono">raw</span></div>
          {res.map((r, n) => <div key={r} className={'res' + (n === i ? ' on' : n < i ? ' done' : '')}><i className="k"></i><span className="n">{r}</span><span className="t">{n < i ? 'codified' : 'clickops'}</span></div>)}
        </div>
        <div>
          <div className="col-h"><span>Infrastructure as Code</span><span className="mono" style={{ color: 'var(--ore-400)' }}>refined</span></div>
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
      <div className="console-foot"><span className="mono">{Math.min(i, res.length)}/{res.length}</span><div className="bar"><i style={{ width: pct + '%' }}></i></div><span>{pct === 100 ? 'Verified · no drift' : 'Codifying…'}</span></div>
    </div>
  );
}

function Pipeline() {
  const [a, setA] = React.useState(0);
  const [key, setKey] = React.useState(0);
  React.useEffect(() => { const t = setTimeout(() => setA(x => (x + 1) % STEPS.length), 7000); return () => clearTimeout(t); }, [a, key]);
  const S = STEPS[a]; const P = S.P;
  return (
    <div className="pipe">
      <div className="steps">
        {STEPS.map((s, n) => <button key={s.k + key} className={'step' + (n === a ? ' on' : '')} onClick={() => { setA(n); setKey(k => k + 1); }}>
          <span className="num">0{n + 1}</span><h3>{s.t}</h3><p>{s.d}</p><span className="prog"></span></button>)}
      </div>
      <div className="panel">
        <div className="panel-h"><Badge tone="ore">{'0' + (a + 1) + ' ' + S.k}</Badge><strong>{S.h}</strong></div>
        <div className="panel-b" key={a}><P /></div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="form">
      <span style={{ fontSize: 14, color: 'var(--text-body)' }}>Interested in early access? Write us and we will get back to you.</span>
      <a href="mailto:info@orefy.cloud" style={{ textDecoration: 'none' }}><Button size="lg" iconRight={<Ico d={I.arrow} />}>Contact us</Button></a>
      <span className="mono" style={{ fontSize: 12, color: 'var(--text-muted)' }}>info@orefy.cloud</span>
    </div>
  );
}

function App() {
  return (<>
    <nav className="nav"><div className="wrap">
      <a href="#top"><img src="assets/orefy-logo-dark.svg" alt="orefy" /></a>
      <div className="nav-links"><a href="#how">How it works</a><a href="#contact">Early access</a></div>
      <div className="nav-r"><span data-theme="dark"><Badge tone="ore" dot>Available from Q1 2027</Badge></span>
        <Button size="sm" onClick={() => window.scrollTo({ top: document.getElementById('contact').offsetTop - 64, behavior: 'smooth' })}>Contact us</Button></div>
    </div></nav>

    <header className="hero" id="top" data-theme="dark" data-screen-label="Hero">
      <div className="wrap hero-grid">
        <div>
          <span className="over">From ClickOps to code</span>
          <h1 style={{ marginTop: 18 }}>Take control of <em>your cloud.</em></h1>
          <p className="lede">From ClickOps to <strong>best-practice modular Infrastructure as Code.</strong></p>
          <div className="cta-row">
            <a href="#contact" style={{ textDecoration: 'none' }}><Button size="lg" iconRight={<Ico d={I.arrow} />}>Contact us</Button></a>
            <a href="#how" style={{ textDecoration: 'none' }}><Button size="lg" variant="ghost" style={{ color: 'var(--slate-200)' }}>See how it works</Button></a>
          </div>
        </div>
        <HeroConsole />
      </div>
      <div className="hero-foot"><div className="wrap">
        {STEPS.map((s, n) => <a key={s.k} href="#how"><span>0{n + 1}</span>{s.k}</a>)}
      </div></div>
    </header>

    <section className="block" id="how" data-screen-label="How it works">
      <div className="wrap">
        <div className="sec-head">
          <div><span className="over">How it works</span><h2>Raw infrastructure in. Refined code out.</h2></div>
          <p>Four steps from an environment nobody fully understands to one you can review, version and move.</p>
        </div>
        <Pipeline />
      </div>
    </section>

    <section className="cta" id="contact" data-theme="dark" data-screen-label="Waitlist">
      <div className="wrap cta-box">
        <div><span className="over">Available from Q1 2027</span><h2 style={{ marginTop: 14 }}>Refine <em>the raw.</em></h2><p className="sub">Be among the first teams to bring their cloud under control.</p></div>
        <Contact />
      </div>
    </section>

    <footer data-theme="dark"><div className="wrap">
      <img src="assets/orefy-logo-dark.svg" alt="orefy" />
      <span>© 2026 Orefy</span>
      <div className="links"><a href="#">Imprint</a><a href="#">Privacy</a><a href="mailto:info@orefy.cloud">Contact</a></div>
    </div></footer>
  </>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
