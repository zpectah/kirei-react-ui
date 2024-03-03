import React from 'react';
import { Checkbox } from 'components';
import { Article, Section, PreviewCode, PreviewCombo } from '../../../../components';

const PreviewView = () => {
  return (
    <>
      <Section>
        <PreviewCode code={`import { Checkbox } from 'components';`} />
      </Section>
      <Article title="Basics" subtitle={`...`}>
        <Section title="...">
          <PreviewCombo code={`<Checkbox />`}>
            <Checkbox />
          </PreviewCombo>
          ...
        </Section>
      </Article>
    </>
  );
};

export default PreviewView;
