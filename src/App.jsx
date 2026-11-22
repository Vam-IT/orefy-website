import { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react';
import { Contact, EMAIL } from './components/Contact.jsx';
import { Demo, demoUrl } from './components/Demo.jsx';
import { HeroConsole } from './components/HeroConsole.jsx';
import { Pipeline } from './components/Pipeline.jsx';
import { ButtonLink, CopyProvider, Icon, SectionHead } from './components/ui.jsx';

// The legal texts are long, so they only load when someone opens them.
const LegalDialog = lazy(() => import('./components/Legal.jsx'));

const LOGO = '/assets/orefy-logo-dark.svg';
const SECTIONS = ['how', 'demo', 'security', 'faq', 'contact'];

function Nav({ t }) {
  const bar = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  useEffect(() => {
    let queued = 0;
    const measure = () => {
      queued = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.current.style.setProperty('--p', max > 0 ? Math.min(1, scrollY / max) : 0);
      setScrolled(scrollY > 24);
      let current = '';
      for (const id of SECTIONS) if (document.getElementById(id).getBoundingClientRect().top <= innerHeight * 0.4) current = id;
      setActive(current);
    };
    const onScroll = () => { queued ||= requestAnimationFrame(measure); };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => { removeEventListener('scroll', onScroll); cancelAnimationFrame(queued); };
  }, []);
  return (
    <nav ref={bar} className={'nav' + (scrolled ? ' scrolled' : '')} aria-label={t.nav.label}>
      <div className="wrap">
        <a href="#top" className="nav-logo"><img src={LOGO} alt="Orefy" width="88" height="26" /></a>
        <div className="nav-links">
          {SECTIONS.map((id) => <a key={id} href={`#${id}`} className={`to-${id}` + (active === id ? ' active' : '')}>{t.nav[id]}</a>)}
        </div>
        <a className="nav-lang" href={t.other.path} hrefLang={t.other.lang} lang={t.other.lang} title={t.other.label}>{t.other.short}</a>
        <span className="nav-prog" />
      </div>
    </nav>
  );
}

function Hero({ t }) {
  return (
    <header className="hero" id="top" data-theme="dark">
      <div className="wrap hero-grid">
        <div>
          <span className="over">{t.hero.over}</span>
          <h1>{t.hero.h1} <em>{t.hero.h1Em}</em></h1>
          <p className="lede">{t.hero.lede} <strong>{t.hero.ledeStrong}</strong></p>
          <div className="cta-row">
            <ButtonLink href="#demo" arrow>{t.hero.demo}</ButtonLink>
            <ButtonLink href="#contact" glass>{t.hero.contact}</ButtonLink>
          </div>
          <ul className="hero-facts">{t.hero.facts.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
        <HeroConsole />
      </div>
      <div className="hero-foot">
        <div className="wrap">{t.steps.map((s, n) => <a key={s.id} href="#how"><span>0{n + 1}</span>{s.tab}</a>)}</div>
      </div>
    </header>
  );
}

function Security({ t }) {
  return (
    <section className="block security" id="security">
      <div className="wrap">
        <SectionHead over={t.security.over} title={t.security.h2} text={t.security.p} />
        <ul className="promises">
          {t.security.items.map((x) => <li key={x.title}><Icon name="checkCircle" size={22} /><h3>{x.title}</h3><p>{x.text}</p></li>)}
        </ul>
        <div className="company">
          <div>
            <span className="over">{t.company.over}</span>
            <h3>{t.company.h2}</h3>
            <p>{t.company.p}</p>
            <a href="https://vam-it.com/" target="_blank" rel="noopener">{t.company.link} ↗</a>
          </div>
          <div className="pilot">
            <h3>{t.company.pilotTitle}</h3>
            <p>{t.company.pilotText}</p>
            <a href="#contact">{t.company.pilotLink}<Icon name="arrow" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq({ t }) {
  return (
    <section className="faq" id="faq">
      <div className="wrap faq-grid">
        <div><span className="over">{t.faq.over}</span><h2>{t.faq.h2}</h2></div>
        <div>
          {t.faq.items.map((x) => <details key={x.q}><summary>{x.q}</summary><p>{x.a}</p></details>)}
        </div>
      </div>
    </section>
  );
}

function Footer({ t, openLegal }) {
  const open = (kind) => (e) => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    openLegal(kind);
  };
  return (
    <footer data-theme="dark">
      <div className="wrap">
        <img src={LOGO} alt="Orefy" width="74" height="22" />
        <span>{t.footer.copy}</span>
        <div className="links">
          <a href={demoUrl(t.lang)} target="_blank" rel="noopener">{t.footer.demo}</a>
          <a href={`/imprint.html?lang=${t.lang}`} onClick={open('imprint')}>{t.footer.imprint}</a>
          <a href={`/privacy.html?lang=${t.lang}`} onClick={open('privacy')}>{t.footer.privacy}</a>
          <a href={`mailto:${EMAIL}`}>{t.footer.contact}</a>
        </div>
      </div>
    </footer>
  );
}

export function App({ copy: t }) {
  const [legal, setLegal] = useState(null);
  const [legalLang, setLegalLang] = useState(t.lang);
  const close = useCallback(() => setLegal(null), []);
  useEffect(() => {
    // Links to #imprint and #privacy from before the standalone pages existed keep working.
    const fromHash = () => { if (location.hash === '#imprint' || location.hash === '#privacy') setLegal(location.hash.slice(1)); };
    fromHash();
    addEventListener('hashchange', fromHash);
    return () => removeEventListener('hashchange', fromHash);
  }, []);

  return (
    <CopyProvider value={t}>
      <Nav t={t} />
      <main>
        <Hero t={t} />
        <section className="block" id="how">
          <div className="wrap">
            <SectionHead over={t.how.over} title={t.how.h2} text={t.how.p} />
            <Pipeline />
            <a className="how-demo" href="#demo">{t.how.tryIt}<Icon name="arrow" /></a>
          </div>
        </section>
        <Demo />
        <Security t={t} />
        <Faq t={t} />
        <section className="cta" id="contact" data-theme="dark">
          <div className="wrap cta-box">
            <div>
              <span className="over">{t.contact.over}</span>
              <h2>{t.contact.h2} <em>{t.contact.h2Em}</em></h2>
              <p className="sub">{t.contact.sub}</p>
            </div>
            <Contact />
          </div>
        </section>
      </main>
      <Footer t={t} openLegal={setLegal} />
      {legal && (
        <Suspense fallback={null}>
          <LegalDialog kind={legal} lang={legalLang} onLangChange={setLegalLang} onClose={close} />
        </Suspense>
      )}
    </CopyProvider>
  );
}
