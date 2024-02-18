import React from 'react';
// import { useKireiContext } from 'styles';
import { Container, Paper } from 'components';
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
      <Article
        title="Basics"
        subtitle={`The base container has a limited width according to the defined keys in the theme.`}
      >
        <Section>
          <PreviewCombo code='<Container maxWidth="md">...</Container>'>
            <Container maxWidth="xs">
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} disableElevation isSquare>
                Container: xs
              </Paper>
            </Container>
            <Container maxWidth="sm">
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} disableElevation isSquare>
                Container: sm
              </Paper>
            </Container>
            <Container maxWidth="md">
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} disableElevation isSquare>
                Container: md
              </Paper>
            </Container>
          </PreviewCombo>
        </Section>
        <Section
          title="Fluid Container"
          subtitle={`A fluid container is aligned to the maximum width of its container and ignores the maxWidth attribute.`}
        >
          <PreviewCombo code="<Container isFluid>...</Container>">
            <Container isFluid>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} disableElevation isSquare>
                Fluid Container
              </Paper>
            </Container>
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
