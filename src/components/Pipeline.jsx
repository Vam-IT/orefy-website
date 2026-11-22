import { useEffect, useRef, useState } from 'react';
import { PANELS } from './Panels.jsx';
import { Badge, Status, reducedMotion, useCopy } from './ui.jsx';

// Both layouts are in the HTML and CSS shows one of them, so the prerendered page is right at every width.

/** Advances the steps while the element is on screen and nobody is using it. */
function useSteps(count, ms) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(false);
  const [visible, setVisible] = useState(false);
  const root = useRef(null);
  useEffect(() => {
    setAuto(!reducedMotion());
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.15 });
    io.observe(root.current);
    return () => io.disconnect();
  }, []);
  const running = auto && visible;
  useEffect(() => {
    if (!running) return;
    const timer = setTimeout(() => setActive((x) => (x + 1) % count), ms);
    return () => clearTimeout(timer);
  }, [active, running, count, ms]);
  // Choosing a step ends the rotation: the visitor is reading.
  const choose = (n) => { setAuto(false); setActive(n); };
  return { active, choose, running, root };
}

function PanelHead({ step, badge }) {
  const { status } = useCopy();
  return (
    <div className="panel-h">
      {badge}
      <strong>{step.panel}</strong>
      <span className="example">{status.example}</span>
    </div>
  );
}

function Desktop() {
  const { steps } = useCopy();
  const { active, choose, running, root } = useSteps(steps.length, 7000);
  return (
    <div className={'pipe' + (running ? ' auto' : '')} ref={root}>
      <div className="steps">
        {steps.map((s, n) => (
          <button key={s.id} type="button" className={'step' + (n === active ? ' on' : '')} aria-expanded={n === active} onClick={() => choose(n)}>
            <span className="num">0{n + 1}</span>
            <span className="step-title">{s.title}</span>
            <Status value={s.status} />
            <span className="step-text">{s.text}</span>
            <span className="prog" />
          </button>
        ))}
      </div>
      <div className="panel">
        <PanelHead step={steps[active]} badge={<Badge tone="ore">{`0${active + 1} ${steps[active].tab}`}</Badge>} />
        {steps.map((s, n) => {
          const Panel = PANELS[s.id];
          return <div key={s.id} className="panel-b" hidden={n !== active}><Panel /></div>;
        })}
      </div>
    </div>
  );
}

function Mobile() {
  const { steps, how } = useCopy();
  const { active, choose, running, root } = useSteps(steps.length, 8000);
  const touch = useRef(null);
  const go = (n) => {
    choose(n);
    const navH = parseInt(getComputedStyle(root.current).getPropertyValue('--nav-h'), 10);
    const top = root.current.getBoundingClientRect().top;
    if (top < navH) window.scrollTo({ top: window.scrollY + top - navH });
  };
  const onTouchStart = (e) => {
    const p = e.touches[0];
    touch.current = e.target.closest('.code-l,.table-wrap') ? null : { x: p.clientX, y: p.clientY };
  };
  const onTouchEnd = (e) => {
    if (!touch.current) return;
    const p = e.changedTouches[0];
    const dx = p.clientX - touch.current.x;
    const dy = p.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    go(Math.min(steps.length - 1, Math.max(0, active + (dx < 0 ? 1 : -1))));
  };
  return (
    <div className={'mpipe' + (running ? ' auto' : '')} ref={root}>
      <div className="mstepper">
        {steps.map((s, n) => (
          <button key={s.id} type="button" className={n === active ? 'on' : n < active ? 'is-done' : undefined} aria-current={n === active ? 'step' : undefined} onClick={() => go(n)}>
            <i />{s.tab}
          </button>
        ))}
      </div>
      {steps.map((s, n) => {
        const Panel = PANELS[s.id];
        return (
          <div key={s.id} className="mstep" hidden={n !== active} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <div className="mstep-top"><span className="mstep-count">{how.step} {n + 1} {how.of} {steps.length}</span><Status value={s.status} /></div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <div className="panel"><PanelHead step={s} /><div className="panel-b"><Panel /></div></div>
          </div>
        );
      })}
    </div>
  );
}

export const Pipeline = () => <><Desktop /><Mobile /></>;
