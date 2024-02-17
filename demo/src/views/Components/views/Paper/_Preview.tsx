import React from 'react';
// import { useKireiContext } from 'styles';
import { Paper } from 'components';
import { Article, Section } from '../../../../components';

const PreviewView = () => {
  // const { theme } = useKireiContext();

  return (
    <Article>
      <Section title="Paper default">
        <div>...</div>
        <Paper>Paper block</Paper>
        <Paper color="warning">Paper block</Paper>
        <Paper color="secondary">Paper block</Paper>
      </Section>
    </Article>
  );
};

export default PreviewView;
