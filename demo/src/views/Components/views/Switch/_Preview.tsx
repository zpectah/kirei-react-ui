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
        <Section>
          <PreviewCombo code={`<Switch />`}>
            <Switch />
            <Switch checked />
          </PreviewCombo>
        </Section>
        <Section title="Disabled">
          <PreviewCombo code={`<Switch isDisabled />`}>
            <Switch isDisabled />
            <Switch checked isDisabled />
          </PreviewCombo>
        </Section>
      </Article>
      <Article title="Shape">
        <Section title="Size">
          <PreviewCombo code={`<Switch size="medium" />`}>
            <Switch size="small" />
            <Switch size="medium" />
            <Switch size="large" />
          </PreviewCombo>
        </Section>
      </Article>
      <Article title="Controlled input">...</Article>
    </>
  );
};

export default PreviewView;
