import React from 'react';
// import { useKireiContext } from 'styles';
import { Paper } from 'components';
import { Article, Section, PreviewCode, PreviewCombo } from '../../../../components';

const PreviewView = () => {
  // const { theme } = useKireiContext();

  return (
    <>
      <Section>
        <PreviewCode code={`import { Paper } from 'components';`} />
      </Section>
      <Article>
        <Section title="Paper default">
          <PreviewCombo code="<Paper>...</Paper>">
            <Paper>Paper block</Paper>
            <Paper variant="outlined">Paper block outlined</Paper>
          </PreviewCombo>
          ...
        </Section>
      </Article>

      <Article>
        <Section>
          <Paper>Paper block</Paper>
          <Paper variant="outlined">Paper block outlined</Paper>
        </Section>
      </Article>
    </>
  );
};

export default PreviewView;
