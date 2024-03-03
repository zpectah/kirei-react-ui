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
        <Section>
          <PreviewCombo code={`<Radio />`}>
            <Radio />
            <Radio checked />
          </PreviewCombo>
        </Section>
        <Section title="Disabled">
          <PreviewCombo code={`<Radio isDisabled />`}>
            <Radio isDisabled />
            <Radio checked isDisabled />
          </PreviewCombo>
        </Section>
      </Article>
      <Article title="Shape">
        <Section title="Size">
          <PreviewCombo code={`<Radio size="medium" />`}>
            <Radio size="small" />
            <Radio size="medium" />
            <Radio size="large" />
          </PreviewCombo>
        </Section>
      </Article>
      <Article title="Controlled input">...</Article>
    </>
  );
};

export default PreviewView;
