import React from 'react';
import { Switch } from 'components';
import { Article, Section, PreviewCode, PreviewCombo } from '../../../../components';

const PreviewView = () => {
  return (
    <>
      <Section>
        <PreviewCode code={`import { Switch } from 'components';`} />
      </Section>
      <Article title="Basics" subtitle={`...`}>
        <Section title="...">
          <PreviewCombo code={`<Switch />`}>
            <Switch />
          </PreviewCombo>
          ...
        </Section>
      </Article>
    </>
  );
};

export default PreviewView;
