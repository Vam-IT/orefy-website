import { EXAMPLE } from '../content/example.js';
import { Badge, Icon, useCopy } from './ui.jsx';

function Discover() {
  const t = useCopy().panels;
  return (
    <>
      <div className="stats">
        <div><b>{EXAMPLE.resources}</b><span>{t.resources}</span></div>
        <div><b>1</b><span>{t.accounts}</span></div>
        <div><b>1</b><span>{t.regions}</span></div>
        <div><b>{EXAMPLE.share}%</b><span>{t.unmanaged}</span></div>
      </div>
      <div className="table-wrap">
        <table className="t">
          <thead><tr><th>{t.resource}</th><th>{t.type}</th><th>{t.managedBy}</th></tr></thead>
          <tbody>
            {EXAMPLE.inventory.map(([name, type, by]) => (
              <tr key={name}>
                <td className="mono">{name}</td>
                <td>{type}</td>
                <td><Badge tone={by === 'iac' ? 'success' : 'warning'} dot>{by === 'iac' ? 'Terraform' : 'ClickOps'}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function Codify() {
  return (
    <div className="two">
      <ul className="ftree">
        {EXAMPLE.files.map((f) => <li key={f} className={f === 'network.tf' ? 'cur' : undefined}>{f}</li>)}
      </ul>
      <div className="code-l" tabIndex={0}>
        <div className="code">
          <span className="c"># network.tf</span>{'\n'}
          <span className="kw">module</span> <span className="s">"prod_main"</span> {'{'}{'\n'}
          {'  '}<span className="a">source</span>  = <span className="s">"terraform-aws-modules/vpc/aws"</span>{'\n'}
          {'  '}<span className="a">version</span> = <span className="s">"6.7.3"</span>{'\n'}
          {'  '}<span className="a">name</span>    = <span className="s">"prod-main"</span>{'\n'}
          {'  '}<span className="a">cidr</span>    = <span className="s">"10.20.0.0/16"</span>{'\n'}
          {'}'}{'\n\n'}
          <span className="c"># imports.tf</span>{'\n'}
          <span className="kw">import</span> {'{'}{'\n'}
          {'  '}<span className="a">to</span> = module.prod_main.aws_vpc.this[0]{'\n'}
          {'  '}<span className="a">id</span> = <span className="s">"vpc-07c1e9a4f2d83b51"</span>{'\n'}
          {'}'}
        </div>
      </div>
    </div>
  );
}

function Verify() {
  const t = useCopy().panels;
  return (
    <div className="verify">
      <div className="ok">
        <Icon name="checkCircle" size={22} />
        <div><b>{t.okTitle}</b><span>{t.okText}</span></div>
      </div>
      <div>
        <div className="diffrow diffhead"><span>{t.service}</span><span>{t.resources}</span><span>{t.drift}</span><span>{t.result}</span></div>
        {EXAMPLE.verified.map(([name, count]) => (
          <div className="diffrow" key={name}>
            <span className="strong">{name}</span><span>{count}</span><span>0</span>
            <span className="match"><Icon name="check" size={14} />{t.match}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Scan() {
  const t = useCopy().panels;
  return (
    <>
      <div className="fw">{t.frameworks.map((x) => <span className="tag" key={x}>{x}</span>)}</div>
      {t.findings.map(([tone, level, title, where, control]) => (
        <div className="finding" key={title}>
          <Badge tone={tone}>{level}</Badge>
          <div><b>{title}</b><small>{where}</small></div>
          <span className="ctl">{control}</span>
        </div>
      ))}
      <p className="scan-note">{t.scanNote}</p>
    </>
  );
}

export const PANELS = { discover: Discover, codify: Codify, verify: Verify, scan: Scan };
