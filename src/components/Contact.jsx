import { useRef, useState } from 'react';
import { Icon, useCopy } from './ui.jsx';

export const EMAIL = 'info@orefy.cloud';

// There is no server. The form writes an e-mail that the visitor sends; copying covers visitors without a mail program.
export function Contact() {
  const { lang, contact: t } = useCopy();
  const form = useRef(null);
  const [note, setNote] = useState(null);

  const compose = () => {
    const data = new FormData(form.current);
    const lines = [[t.name, 'name'], [t.company, 'company'], [t.size, 'size']]
      .filter(([, key]) => data.get(key))
      .map(([label, key]) => `${label}: ${data.get(key)}`);
    return [...lines, '', data.get('body')].join('\n').trim();
  };
  const submit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(compose())}`;
    setNote('opened');
  };
  const copy = async () => {
    if (!form.current.reportValidity()) return;
    try {
      await navigator.clipboard.writeText(`${EMAIL}\n${t.subject}\n\n${compose()}`);
      setNote('copied');
    } catch {
      setNote('copyFailed');
    }
  };

  return (
    <form className="form" ref={form} action={`mailto:${EMAIL}`} method="get" onSubmit={submit}>
      <div className="form-row">
        <label className="field"><span>{t.name}</span><input name="name" autoComplete="name" required maxLength={100} /></label>
        <label className="field"><span>{t.company}</span><input name="company" autoComplete="organization" required maxLength={100} /></label>
      </div>
      <label className="field">
        <span>{t.size}</span>
        <select name="size" defaultValue="">
          <option value="">{t.sizeEmpty}</option>
          {t.sizes.map((x) => <option key={x}>{x}</option>)}
        </select>
      </label>
      <label className="field"><span>{t.message}</span><textarea name="body" rows={3} maxLength={1200} /></label>
      <div className="form-actions">
        <button className="btn btn-prem" type="submit">{t.send}<Icon name="arrow" /></button>
        <button className="btn btn-glass" type="button" onClick={copy}>{t.copy}</button>
      </div>
      <p className="form-note" role="status">{note && t[note]}</p>
      <p className="form-hint">
        {t.hint} <a href={`/privacy.html?lang=${lang}`}>{t.privacy}</a> · <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
    </form>
  );
}
