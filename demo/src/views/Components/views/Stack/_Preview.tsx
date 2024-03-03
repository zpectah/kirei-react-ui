import React from 'react';
import { Paper, Stack } from 'components';
import { Article, Section, PreviewCode, PreviewCombo } from '../../../../components';

const PreviewView = () => {
  return (
    <>
      <Section>
        <PreviewCode code={`import { Stack } from 'components';`} />
      </Section>
      <Article title="Basics" subtitle={`Stack uses all CSS FlexBox properties and does not modify it in any way.`}>
        <Section title="Horizontally">
          <PreviewCombo code='<Stack direction="row">...</Stack>'>
            <Stack gap={4} direction="row">
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item
              </Paper>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item
              </Paper>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item
              </Paper>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item
              </Paper>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item
              </Paper>
            </Stack>
          </PreviewCombo>
        </Section>
        <Section title="Vertically">
          <PreviewCombo code='<Stack direction="column">...</Stack>'>
            <Stack gap={4} direction="column" style={{ width: '100%' }}>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item
              </Paper>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item
              </Paper>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item
              </Paper>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item
              </Paper>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item
              </Paper>
            </Stack>
          </PreviewCombo>
        </Section>
      </Article>
      <Article
        title="Flexbox"
        subtitle={`Items inside the Stack component are controlled and aligned according to CSS properties.`}
      >
        <Section
          title="Wrap"
          subtitle={`Items inside the Stack component can be wrapped as needed. The behavior of individual items is already under your control and almost any element can be used.`}
        >
          <PreviewCombo code='<Stack wrap="wrap">...</Stack>'>
            <Stack gap={4} wrap="wrap">
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item 1
              </Paper>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item 2
              </Paper>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item 3
              </Paper>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item 4
              </Paper>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item 5
              </Paper>
            </Stack>
          </PreviewCombo>
        </Section>
        <Section title="Direction" subtitle={`We can also set the items in reverse order.`}>
          <PreviewCombo code='<Stack wrap="wrap" direction="column-reverse">...</Stack>'>
            <Stack gap={4} wrap="wrap" direction="row-reverse">
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item 1
              </Paper>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item 2
              </Paper>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item 3
              </Paper>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item 4
              </Paper>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item 5
              </Paper>
            </Stack>
          </PreviewCombo>
        </Section>
        <Section title="Gap" subtitle={`The gap value is based on the definition in the main theme object.`}>
          <PreviewCombo code="<Stack gap={2}>...</Stack>">
            <Stack gap={2} wrap="wrap">
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item 1
              </Paper>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item 2
              </Paper>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item 3
              </Paper>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item 4
              </Paper>
              <Paper style={{ textAlign: 'center', padding: '.5rem' }} elevation={0} isSquare>
                Item 5
              </Paper>
            </Stack>
          </PreviewCombo>
        </Section>
      </Article>
    </>
  );
};

export default PreviewView;
