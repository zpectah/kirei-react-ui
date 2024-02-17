import React from 'react';
import SyntaxHighlighter, { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export interface PreviewCodeProps {
  code: string;
  language?: SyntaxHighlighterProps['language'];
}

const PreviewCode = (props: PreviewCodeProps) => {
  const { code, language = 'jsx' } = props;

  return (
    <SyntaxHighlighter language={language} style={dracula} customStyle={{ margin: 0, padding: '1.5rem' }}>
      {code}
    </SyntaxHighlighter>
  );
};

export default PreviewCode;
