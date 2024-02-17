import React from 'react';
// import { useKireiContext } from 'styles';
import { Container } from 'components';
import { Article, Section } from '../../../../components';
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
    </>
  );
};

export default PreviewView;
