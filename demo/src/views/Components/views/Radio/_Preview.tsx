import React from 'react';
import { Radio } from 'components';
import { routes } from '../../../../config';
import { Article, ArticleFooter, Section } from '../../../../components';
import { PreviewCode, PreviewCombo } from '../../components/index';

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

      <ArticleFooter
        forwardRoute={`${routes.components.routes.radio.root}${routes.components.detail.api}`}
        forwardLabel={'API'}
      />
    </>
  );
};

export default PreviewView;
