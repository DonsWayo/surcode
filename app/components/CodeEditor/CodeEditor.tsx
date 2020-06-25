import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import styles from './CodeEditor.css';

require('codemirror/mode/javascript/javascript');

export default function CodeEditor() {
  const [code, setCode] = useState('');

  return (
    <CodeMirror
      className={styles.editorView}
      value={code}
      options={{
        mode: 'javascript',
        theme: 'material',
        lineNumbers: true,
      }}
      onBeforeChange={(editor, data, value) => {
        setCode(value);
      }}
    />
  );
}
