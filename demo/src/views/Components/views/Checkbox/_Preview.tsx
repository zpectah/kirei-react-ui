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
        <Section>
          <PreviewCombo code={`<Checkbox />`}>
            <Checkbox />
            <Checkbox checked />
          </PreviewCombo>
        </Section>
        <Section title="Disabled">
          <PreviewCombo code={`<Checkbox isDisabled />`}>
            <Checkbox isDisabled />
            <Checkbox checked isDisabled />
          </PreviewCombo>
        </Section>
      </Article>
      <Article title="Shape">
        <Section title="Size">
          <PreviewCombo code={`<Checkbox size="medium" />`}>
            <Checkbox size="small" />
            <Checkbox size="medium" />
            <Checkbox size="large" />
          </PreviewCombo>
        </Section>
      </Article>
      <Article title="Controlled input">...</Article>
    </>
  );
};

export default PreviewView;
