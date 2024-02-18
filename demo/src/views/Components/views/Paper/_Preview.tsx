import React from 'react';
// import { useKireiContext } from 'styles';
import { Paper } from 'components';
import { routes } from '../../../../config';
import { Article, ArticleFooter, Section } from '../../../../components';
import { PreviewCode, PreviewCombo } from '../../components/index';

const PreviewView = () => {
  // const { theme } = useKireiContext();

  return (
    <>
      <Section>
        <PreviewCode code={`import { Paper } from 'components';`} />
      </Section>
      <Article>
        <Section title="Paper default">
          <PreviewCombo code="<Paper>...</Paper>">...</PreviewCombo>

          <div>...</div>
          <Paper>Paper block</Paper>
          <Paper color="warning">Paper block</Paper>
          <Paper color="secondary">Paper block</Paper>
        </Section>
      </Article>

      <ArticleFooter
        forwardRoute={`${routes.components.routes.paper.root}${routes.components.detail.api}`}
        forwardLabel={'API'}
      />
    </>
  );
};

export default PreviewView;
