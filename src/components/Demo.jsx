import { useEffect, useRef, useState } from 'react';
import { Icon, SectionHead, Status, useCopy } from './ui.jsx';

export const demoUrl = (lang) => `https://demo.orefy.cloud/?lang=${lang}`;

/**
 * Nothing is requested from demo.orefy.cloud before the visitor clicks.
 * On phones, with modifier keys and without JavaScript the link opens the demo in a new tab.
 */
export function Demo() {
  const { lang, demo: t } = useCopy();
  const [running, setRunning] = useState(false);
  const frame = useRef(null);
  const url = demoUrl(lang);
  // The embed skips the demo's start page: the section around it already is that start page.
  const runUrl = `${url}#/run`;
  useEffect(() => {
    if (!running) return;
    frame.current.focus({ preventScroll: true });
    frame.current.closest('.demo-window').scrollIntoView({ block: 'start' });
  }, [running]);
  const start = (e) => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
    if (window.matchMedia('(max-width: 760px)').matches) return;
    e.preventDefault();
    setRunning(true);
  };
  const poster = (width) => `/assets/demo-${lang}-${width}.webp`;

  return (
    <section className="demo" id="demo" data-theme="dark">
      <div className="wrap">
        <SectionHead over={t.over} title={t.h2} em={t.h2Em} text={t.p} />
        <ol className="demo-points">
          {t.points.map((x, n) => (
            <li key={x.title}>
              <span className="demo-num">0{n + 1}</span>
              <h3>{x.title}{x.planned && <Status value="planned" />}</h3>
              <p>{x.text}</p>
            </li>
          ))}
        </ol>
        <div className="demo-window">
          <div className="console-bar">
            <div className="dots"><i /><i /><i /></div>
            <span className="mono">demo.orefy.cloud</span>
            <a className="demo-open" href={url} target="_blank" rel="noopener">{t.open} ↗</a>
          </div>
          <div className={running ? 'demo-stage running' : 'demo-stage'}>
            {running ? (
              <iframe ref={frame} src={runUrl} title={t.frame} allow="clipboard-write" />
            ) : (
              <a className="demo-poster" href={runUrl} target="_blank" rel="noopener" onClick={start}>
                <img
                  loading="lazy" decoding="async" width="1440" height="900" alt={t.poster}
                  sizes="(max-width: 760px) 60vw, (max-width: 1200px) 92vw, 1136px"
                  srcSet={`${poster(640)} 640w, ${poster(1440)} 1440w`} src={poster(1440)}
                />
                <span className="demo-start">{t.start}<Icon name="arrow" /></span>
              </a>
            )}
          </div>
        </div>
        <p className="demo-note">{t.note}</p>
      </div>
    </section>
  );
}
