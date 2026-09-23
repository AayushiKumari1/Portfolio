import React from 'react';

const TOKEN = /(\/\/.*$)|("[^"]*"|'[^']*')|\b(import|from|class|async|await|const|return|new|function|export)\b|\b([A-Za-z_$][\w$]*)(?=\()/g;

function highlightLine(line) {
  const out = [];
  let last = 0;
  let key = 0;
  let m;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(line)) !== null) {
    if (m.index > last) out.push(line.slice(last, m.index));
    const cls = m[1] ? 'tk-c' : m[2] ? 'tk-s' : m[3] ? 'tk-k' : 'tk-f';
    out.push(<span key={key++} className={cls}>{m[0]}</span>);
    last = m.index + m[0].length;
  }
  if (last < line.length) out.push(line.slice(last));
  return out;
}

/** A small editor-style window with syntax colors and line numbers. */
export default function CodeWindow({ file, code, caret = false, minLines = 0, className = '' }) {
  const lines = code.split('\n');
  const style = minLines ? { minHeight: `calc(${minLines} * 1.8em + 2.6rem)` } : undefined;
  return (
    <div className={'code ' + className} aria-hidden="true">
      <div className="code-bar">
        <span className="dot d1" /><span className="dot d2" /><span className="dot d3" />
        <span className="code-file">{file}</span>
      </div>
      <pre style={style}>
        <code>
          {lines.map((line, i) => (
            <span className="ln" key={i}>
              {highlightLine(line)}
              {caret && i === lines.length - 1 ? <span className="caret" /> : null}
              {'\n'}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
