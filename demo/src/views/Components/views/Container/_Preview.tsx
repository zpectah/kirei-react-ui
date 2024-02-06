import React from 'react';
// import { useUiContext } from 'styles';
import { Container } from 'components';
import { Article, Section } from '../../../../components';

const PreviewView = () => {
  // const { theme } = useUiContext();

  return (
    <Article>
      <Section title="Container default">
        ...Section default...
        <Container maxWidth="xs">XS container</Container>
        <Container maxWidth="sm">SM container</Container>
        <Container maxWidth="md">MD container</Container>
        <Container maxWidth="lg">LG container</Container>
        <Container isFluid>Fluid container</Container>
      </Section>
    </Article>
  );
};

export default PreviewView;
