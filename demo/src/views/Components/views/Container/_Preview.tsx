import React from 'react';
// import { useKireiContext } from 'styles';
import { Container } from 'components';
import { routes } from '../../../../config';
import { Article, ArticleFooter, Section } from '../../../../components';
import { PreviewCode, PreviewCombo } from '../../components/index';

const PreviewView = () => {
  // const { theme } = useKireiContext();

  return (
    <>
      <Section>
        <PreviewCode code={`import { Container } from 'components';`} />
      </Section>
      <Article>
        <Section title="Container default">
          <PreviewCombo code="<Container>...</Container>">
            <Container maxWidth="xs">XS container</Container>
            <Container maxWidth="sm">SM container</Container>
            <Container maxWidth="md">MD container</Container>
          </PreviewCombo>
        </Section>
      </Article>

      <ArticleFooter
        forwardRoute={`${routes.components.routes.container.root}${routes.components.detail.api}`}
        forwardLabel={'API'}
      />
    </>
  );
};

export default PreviewView;
