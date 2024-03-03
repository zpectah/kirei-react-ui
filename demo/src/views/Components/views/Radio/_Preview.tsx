import React from 'react';
import { Radio } from 'components';
import { Article, Section, PreviewCode, PreviewCombo } from '../../../../components';

const PreviewView = () => {
  return (
    <>
      <Section>
        <PreviewCode code={`import { Radio } from 'components';`} />
      </Section>
      <Article title="Basics" subtitle={`...`}>
        <Section title="...">
          <PreviewCombo code={`<Radio />`}>
            <Radio />
          </PreviewCombo>
          ...
        </Section>
      </Article>
    </>
  );
};

export default PreviewView;
