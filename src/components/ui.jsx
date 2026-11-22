import { createContext, useContext } from 'react';

// Small versions of the design-system components the page uses; their styles live in styles.css.

const Copy = createContext(null);
export const CopyProvider = Copy.Provider;
export const useCopy = () => useContext(Copy);

export const ICON = {
  arrow: ['M5 12h14', 'm12 5 7 7-7 7'],
  check: ['M20 6 9 17l-5-5'],
  checkCircle: ['M21.8 10A10 10 0 1 1 17 3.3', 'm9 11 3 3L22 4'],
};

export function Icon({ name, size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICON[name].map((d) => <path key={d} d={d} />)}
    </svg>
  );
}

export function Badge({ tone = 'neutral', dot = false, children }) {
  return <span className={`badge badge-${tone}`}>{dot && <i />}{children}</span>;
}

/** "development" or "planned". */
export function Status({ value }) {
  const { status } = useCopy();
  return <span className={`state state-${value}`}>{status[value]}</span>;
}

/** A link that looks like a button. Never put a <button> inside an <a>. */
export function ButtonLink({ glass, arrow, children, ...rest }) {
  return (
    <a className={`btn ${glass ? 'btn-glass' : 'btn-prem'}`} {...rest}>
      {children}{arrow && <Icon name="arrow" />}
    </a>
  );
}

export function SectionHead({ over, title, em, text }) {
  return (
    <div className="sec-head">
      <div><span className="over">{over}</span><h2>{title}{em && <>{' '}<em>{em}</em></>}</h2></div>
      {text && <p>{text}</p>}
    </div>
  );
}

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
