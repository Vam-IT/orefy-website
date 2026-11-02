/* @ds-bundle: {"format":4,"namespace":"OrefyDesignSystem_e8d108","components":[{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Tooltip","sourcePath":"components/display/Tooltip.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/display/Badge.jsx":"b6ba400c458e","components/display/Card.jsx":"0e6b7876b1eb","components/display/Tabs.jsx":"fc9b29e3ab8e","components/display/Tag.jsx":"018f5561c8fd","components/display/Tooltip.jsx":"25da0cd53ac4","components/feedback/Dialog.jsx":"9271a786add7","components/feedback/Toast.jsx":"d0cc7c05a7f1","components/forms/Button.jsx":"b836d24de948","components/forms/Checkbox.jsx":"89cc31c6f796","components/forms/IconButton.jsx":"ea37d5edc1be","components/forms/Input.jsx":"d27239179fd5","components/forms/Radio.jsx":"dc91d9361fb2","components/forms/Select.jsx":"c0b7cdbaac91","components/forms/Switch.jsx":"0a3b1373c4d6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OrefyDesignSystem_e8d108 = window.OrefyDesignSystem_e8d108 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Badge.jsx
try { (() => {
const T = {
  neutral: ['var(--slate-100)', 'var(--slate-700)'],
  ore: ['var(--accent-soft)', 'var(--accent-text)'],
  success: ['var(--success-soft)', 'var(--success-text)'],
  warning: ['var(--warning-soft)', 'var(--warning-text)'],
  danger: ['var(--danger-soft)', 'var(--danger-text)'],
  info: ['var(--info-soft)', 'var(--info-text)']
};
const D = {
  neutral: 'var(--slate-400)',
  ore: 'var(--accent)',
  success: 'var(--success)',
  warning: 'var(--warning)',
  danger: 'var(--danger)',
  info: 'var(--info)'
};
function Badge({
  tone = 'neutral',
  dot = false,
  children
}) {
  const [bg, fg] = T[tone] || T.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 20,
      padding: '0 8px',
      borderRadius: 'var(--radius-sm)',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: D[tone]
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  title,
  subtitle,
  actions,
  children,
  padding = 20,
  variant = 'default',
  style
}) {
  const bg = variant === 'sunken' ? 'var(--surface-sunken)' : 'var(--surface-card)';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: variant === 'raised' ? 'var(--shadow-md)' : variant === 'sunken' ? 'none' : 'var(--shadow-sm)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-body)',
      overflow: 'hidden',
      ...style
    }
  }, (title || actions) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12,
      padding: `${padding}px ${padding}px 0`
    }
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, actions)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  variant = 'underline'
}) {
  const pill = variant === 'segmented';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: pill ? 2 : 20,
      padding: pill ? 3 : 0,
      background: pill ? 'var(--surface-sunken)' : 'transparent',
      border: pill ? '1px solid var(--border-subtle)' : 0,
      borderBottom: pill ? '1px solid var(--border-subtle)' : '1px solid var(--border-default)',
      borderRadius: pill ? 'var(--radius-md)' : 0,
      width: pill ? 'fit-content' : 'auto',
      fontFamily: 'var(--font-sans)'
    }
  }, tabs.map(t => {
    const id = typeof t === 'string' ? t : t.id;
    const l = typeof t === 'string' ? t : t.label;
    const c = typeof t === 'object' ? t.count : undefined;
    const on = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(id),
      style: pill ? {
        height: 28,
        padding: '0 12px',
        border: 0,
        borderRadius: 'var(--radius-sm)',
        background: on ? 'var(--surface-card)' : 'transparent',
        boxShadow: on ? 'var(--shadow-sm)' : 'none',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        font: 'inherit',
        fontSize: 13,
        fontWeight: 600,
        cursor: 'pointer'
      } : {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 40,
        padding: 0,
        marginBottom: -1,
        border: 0,
        borderBottom: `2px solid ${on ? 'var(--accent)' : 'transparent'}`,
        background: 'transparent',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        font: 'inherit',
        fontSize: 14,
        fontWeight: 600,
        cursor: 'pointer'
      }
    }, l, c != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 500,
        padding: '2px 6px',
        borderRadius: 'var(--radius-sm)',
        background: on ? 'var(--accent-soft)' : 'var(--slate-100)',
        color: on ? 'var(--accent-text)' : 'var(--text-muted)'
      }
    }, c));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  selected = false,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 26,
      padding: onRemove ? '0 6px 0 10px' : '0 10px',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${selected ? 'var(--accent-soft-border)' : 'var(--border-default)'}`,
      background: selected ? 'var(--accent-soft)' : h && onClick ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: selected ? 'var(--accent-text)' : 'var(--text-body)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      cursor: onClick ? 'pointer' : 'default'
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      width: 16,
      height: 16,
      padding: 0,
      border: 0,
      borderRadius: '50%',
      background: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/display/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children,
  placement = 'top'
}) {
  const [o, setO] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 6px)'
  } : {
    bottom: 'calc(100% + 6px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setO(true),
    onMouseLeave: () => setO(false),
    onFocus: () => setO(true),
    onBlur: () => setO(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, o && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      padding: '6px 8px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--slate-900)',
      color: 'var(--slate-0)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.3,
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      zIndex: 50,
      pointerEvents: 'none'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  description,
  children,
  footer,
  onClose,
  width = 440,
  inline = false
}) {
  if (!open) return null;
  const panel = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxWidth: 'calc(100vw - 32px)',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 0',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: '-0.015em',
      color: 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--text-muted)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close",
    onClick: onClose,
    style: {
      width: 28,
      height: 28,
      flex: 'none',
      border: 0,
      borderRadius: 'var(--radius-sm)',
      background: 'transparent',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), children && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px 0'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      padding: 20
    }
  }, footer), !footer && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 20
    }
  }));
  if (inline) return panel;
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--overlay-scrim)',
      backdropFilter: 'blur(2px)'
    }
  }, panel);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const I = {
  success: 'var(--success)',
  danger: 'var(--danger)',
  info: 'var(--info)',
  neutral: 'var(--accent)'
};
function Toast({
  tone = 'neutral',
  title,
  message,
  action,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      width: 360,
      maxWidth: '100%',
      padding: '12px 14px',
      background: 'var(--slate-900)',
      color: 'var(--slate-100)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      marginTop: 6,
      flex: 'none',
      borderRadius: '50%',
      background: I[tone] || I.neutral
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: '#fff'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontSize: 13,
      lineHeight: 1.45,
      color: 'var(--slate-300)'
    }
  }, message)), action && /*#__PURE__*/React.createElement("button", {
    onClick: action.onClick,
    style: {
      border: 0,
      background: 'transparent',
      color: 'var(--ore-300)',
      font: 'inherit',
      fontSize: 13,
      fontWeight: 700,
      cursor: 'pointer',
      padding: '2px 0'
    }
  }, action.label), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: 0,
      background: 'transparent',
      color: 'var(--slate-400)',
      cursor: 'pointer',
      padding: 2,
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 'var(--control-h-sm)',
    px: '10px',
    fs: '13px',
    gap: '6px'
  },
  md: {
    h: 'var(--control-h-md)',
    px: '14px',
    fs: '14px',
    gap: '8px'
  },
  lg: {
    h: 'var(--control-h-lg)',
    px: '18px',
    fs: '15px',
    gap: '8px'
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--accent)',
    fg: 'var(--text-on-accent)',
    bd: 'transparent',
    hbg: 'var(--accent-hover)',
    abg: 'var(--accent-press)'
  },
  secondary: {
    bg: 'var(--surface-card)',
    fg: 'var(--text-strong)',
    bd: 'var(--border-default)',
    hbg: 'var(--surface-sunken)',
    abg: 'var(--slate-100)'
  },
  ink: {
    bg: 'var(--slate-900)',
    fg: 'var(--slate-0)',
    bd: 'transparent',
    hbg: 'var(--slate-800)',
    abg: 'var(--slate-950)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--text-body)',
    bd: 'transparent',
    hbg: 'var(--surface-sunken)',
    abg: 'var(--slate-100)'
  },
  danger: {
    bg: 'var(--danger)',
    fg: '#fff',
    bd: 'transparent',
    hbg: 'var(--red-700)',
    abg: 'var(--red-700)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  children,
  style,
  onClick,
  type = 'button',
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [a, setA] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setA(false);
    },
    onMouseDown: () => setA(true),
    onMouseUp: () => setA(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.h,
      padding: `0 ${s.px}`,
      width: fullWidth ? '100%' : undefined,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fs,
      fontWeight: 600,
      letterSpacing: '-0.005em',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      background: disabled ? 'var(--surface-sunken)' : a ? v.abg : h ? v.hbg : v.bg,
      color: disabled ? 'var(--text-subtle)' : v.fg,
      border: `1px solid ${disabled ? 'var(--border-subtle)' : v.bd}`,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transform: a && !disabled ? 'translateY(1px)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-out),transform var(--dur-fast)',
      outline: 'none',
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled,
  indeterminate = false
}) {
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: disabled ? 'var(--text-subtle)' : 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 16,
      height: 16,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      background: on ? 'var(--accent)' : 'var(--surface-card)',
      border: `1px solid ${on ? 'var(--accent-press)' : 'var(--border-strong)'}`,
      opacity: disabled ? .5 : 1,
      transition: 'background var(--dur-fast)'
    }
  }, checked && !indeterminate && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--slate-900)",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })), indeterminate && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 2,
      background: 'var(--slate-900)',
      borderRadius: 1
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked)
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const d = {
    sm: 28,
    md: 36,
    lg: 44
  }[size] || 36;
  const bg = variant === 'secondary' ? h ? 'var(--surface-sunken)' : 'var(--surface-card)' : variant === 'primary' ? h ? 'var(--accent-hover)' : 'var(--accent)' : h ? 'var(--surface-sunken)' : 'transparent';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      borderRadius: 'var(--radius-md)',
      border: variant === 'secondary' ? '1px solid var(--border-default)' : '1px solid transparent',
      background: disabled ? 'transparent' : bg,
      color: disabled ? 'var(--text-subtle)' : variant === 'primary' ? 'var(--text-on-accent)' : 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--dur-fast)',
      ...style
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  size = 'md',
  style,
  disabled,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const h = {
    sm: 'var(--control-h-sm)',
    md: 'var(--control-h-md)',
    lg: 'var(--control-h-lg)'
  }[size];
  const bc = error ? 'var(--danger)' : f ? 'var(--accent)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 12px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${bc}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: f ? error ? '0 0 0 3px rgba(194,65,45,.18)' : 'var(--shadow-focus)' : 'var(--shadow-xs)',
      transition: 'box-shadow var(--dur-fast),border-color var(--dur-fast)',
      color: 'var(--text-muted)'
    }
  }, prefix, /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 0,
      background: 'transparent',
      font: 'inherit',
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, rest)), suffix), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--danger-text)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  options = [],
  value,
  onChange,
  name,
  disabled,
  direction = 'column'
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 16 : 10,
      fontFamily: 'var(--font-sans)'
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    const on = v === value;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      onClick: () => !disabled && onChange && onChange(v),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 14,
        color: disabled ? 'var(--text-subtle)' : 'var(--text-body)',
        cursor: disabled ? 'not-allowed' : 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        height: 16,
        borderRadius: '50%',
        flex: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--surface-card)',
        border: `1px solid ${on ? 'var(--accent-press)' : 'var(--border-strong)'}`
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--accent)'
      }
    })), l);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", {
    disabled: disabled,
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 'var(--control-h-md)',
      padding: '0 34px 0 12px',
      font: 'inherit',
      fontSize: 14,
      color: 'var(--text-strong)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-xs)',
      cursor: 'pointer',
      outline: 'none'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  label,
  disabled,
  size = 'md'
}) {
  const w = size === 'sm' ? 28 : 36,
    h = size === 'sm' ? 16 : 20,
    k = h - 4;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: disabled ? 'var(--text-subtle)' : 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      position: 'relative',
      width: w,
      height: h,
      flex: 'none',
      borderRadius: 999,
      background: checked ? 'var(--accent)' : 'var(--slate-300)',
      opacity: disabled ? .5 : 1,
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? w - k - 2 : 2,
      width: k,
      height: k,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 1px 2px rgba(22,24,29,.25)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
