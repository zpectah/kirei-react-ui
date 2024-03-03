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
            <Paper variant="glass">Paper block glass</Paper>
          </PreviewCombo>
          ...
        </Section>
      </Article>

      <Article>
        <Section>
          <Paper>Paper block</Paper>
          <Paper variant="outlined">Paper block outlined</Paper>
          <Paper variant="glass">Paper block glass</Paper>
        </Section>
        <Section>
          <Paper color="primary">Paper block</Paper>
          <Paper color="primary" variant="outlined">
            Paper block outlined
          </Paper>
          <Paper color="primary" variant="glass">
            Paper block glass
          </Paper>
        </Section>
        <Section>
          <Paper color="secondary">Paper block</Paper>
          <Paper color="secondary" variant="outlined">
            Paper block outlined
          </Paper>
          <Paper color="secondary" variant="glass">
            Paper block glass
          </Paper>
        </Section>
        <Section>
          <Paper color="tertiary">Paper block</Paper>
          <Paper color="tertiary" variant="outlined">
            Paper block outlined
          </Paper>
          <Paper color="tertiary" variant="glass">
            Paper block glass
          </Paper>
        </Section>
      </Article>
      <Article>
        <Section>
          <Paper color="success">Paper block</Paper>
          <Paper color="success" variant="outlined">
            Paper block outlined
          </Paper>
          <Paper color="success" variant="glass">
            Paper block glass
          </Paper>
        </Section>
        <Section>
          <Paper color="info">Paper block</Paper>
          <Paper color="info" variant="outlined">
            Paper block outlined
          </Paper>
          <Paper color="info" variant="glass">
            Paper block glass
          </Paper>
        </Section>
        <Section>
          <Paper color="warning">Paper block</Paper>
          <Paper color="warning" variant="outlined">
            Paper block outlined
          </Paper>
          <Paper color="warning" variant="glass">
            Paper block glass
          </Paper>
        </Section>
        <Section>
          <Paper color="error">Paper block</Paper>
          <Paper color="error" variant="outlined">
            Paper block outlined
          </Paper>
          <Paper color="error" variant="glass">
            Paper block glass
          </Paper>
        </Section>
      </Article>
      <Article>
        <Section>
          <Paper color="inverted">Paper block</Paper>
          <Paper color="inverted" variant="outlined">
            Paper block outlined
          </Paper>
          <Paper color="inverted" variant="glass">
            Paper block glass
          </Paper>
        </Section>
        <Section>
          <Paper color="neutral">Paper block</Paper>
          <Paper color="neutral" variant="outlined">
            Paper block outlined
          </Paper>
          <Paper color="neutral" variant="glass">
            Paper block glass
          </Paper>
        </Section>
        <Section>
          <Paper color="light">Paper block</Paper>
          <Paper color="light" variant="outlined">
            Paper block outlined
          </Paper>
          <Paper color="light" variant="glass">
            Paper block glass
          </Paper>
        </Section>
        <Section>
          <Paper color="dark">Paper block</Paper>
          <Paper color="dark" variant="outlined">
            Paper block outlined
          </Paper>
          <Paper color="dark" variant="glass">
            Paper block glass
          </Paper>
        </Section>
      </Article>
    </>
  );
};

export default PreviewView;
