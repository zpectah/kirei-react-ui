import React from 'react';
import { Switch } from 'components';
import { routes } from '../../../../config';
import { Article, ArticleFooter, Section } from '../../../../components';
import { PreviewCode, PreviewCombo } from '../../components/index';

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

      <ArticleFooter
        forwardRoute={`${routes.components.routes.switch.root}${routes.components.detail.api}`}
        forwardLabel={'API'}
      />
    </>
  );
};

export default PreviewView;
