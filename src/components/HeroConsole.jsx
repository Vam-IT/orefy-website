import { useEffect, useState } from 'react';
import { EXAMPLE } from '../content/example.js';
import { reducedMotion, useCopy } from './ui.jsx';

export function HeroConsole() {
  const t = useCopy().console;
  const rows = EXAMPLE.hero;
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reducedMotion()) {
      setI(rows.length);
      return;
    }
    const timer = setInterval(() => setI((x) => (x + 1) % (rows.length + 2)), 1100);
    return () => clearInterval(timer);
  }, [rows.length]);
  const count = Math.min(i, rows.length);

  return (
    <div className="console">
      <div className="console-bar">
        <div className="dots"><i /><i /><i /></div>
        <span className="mono">orefy · {t.name}</span>
        <span className="console-example">{t.example}</span>
      </div>
      <div className="split">
        <div>
          <div className="col-h"><span>{t.raw}</span><span>{t.rawTag}</span></div>
          {rows.map((r, n) => (
            <div key={r} className={'res' + (n === i ? ' on' : n < i ? ' is-done' : '')}>
              <i className="k" />
              <span className="n">{r}</span>
              <span className="t">{n < i ? t.codified : t.clickops}</span>
            </div>
          ))}
        </div>
        <div>
          <div className="col-h"><span>{t.refined}</span><span className="refined">{t.refinedTag}</span></div>
          <div className="tree"><span className="cur">network.tf</span> · compute.tf · imports.tf</div>
          <div className="code">
            <span className="kw">module</span> <span className="s">"prod_main"</span> {'{'}{'\n'}
            {'  '}<span className="a">source</span>  = <span className="s">"terraform-aws-…/vpc/aws"</span>{'\n'}
            {'  '}<span className="a">version</span> = <span className="s">"6.7.3"</span>{'\n'}
            {'  '}<span className="a">cidr</span>    = <span className="s">"10.20.0.0/16"</span>{'\n'}
            {'}'}{'\n'}
            <span className="c"># plan: 0 to add, 0 to change</span>
          </div>
        </div>
      </div>
      <div className="console-foot">
        <span>{count}/{rows.length}</span>
        <div className="bar"><i style={{ width: `${Math.round((count / rows.length) * 100)}%` }} /></div>
        <span>{count === rows.length ? t.verified : t.working}</span>
      </div>
    </div>
  );
}
