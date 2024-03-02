import React from 'react';
import { Checkbox } from 'components';
import { routes } from '../../../../config';
import { Article, ArticleFooter, Section } from '../../../../components';
import { PreviewCode, PreviewCombo } from '../../components/index';

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

      <ArticleFooter
        forwardRoute={`${routes.components.routes.checkbox.root}${routes.components.detail.api}`}
        forwardLabel={'API'}
      />
    </>
  );
};

export default PreviewView;
