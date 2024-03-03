import React from 'react';
import { IconButton } from 'components';
import { CloseIcon } from 'icons';
import { Article, Section, PreviewCode, PreviewCombo } from '../../../../components';

const PreviewView = () => {
  return (
    <>
      <Section>
        <PreviewCode code={`import { IconButton } from 'components';`} />
      </Section>
      <Article title="Basics" subtitle={`...`}>
        <Section title="...">
          <PreviewCombo code='<Stack direction="row">...</Stack>'>
            <IconButton variant="text">
              <CloseIcon />
            </IconButton>
            <IconButton variant="outlined">
              <CloseIcon />
            </IconButton>
            <IconButton variant="contained">
              <CloseIcon />
            </IconButton>
          </PreviewCombo>
          <PreviewCombo code='<Stack direction="row">...</Stack>'>
            <IconButton size="small" variant="text">
              <CloseIcon />
            </IconButton>
            <IconButton size="small" variant="outlined">
              <CloseIcon />
            </IconButton>
            <IconButton size="small" variant="contained">
              <CloseIcon />
            </IconButton>
          </PreviewCombo>
          <PreviewCombo code='<Stack direction="row">...</Stack>'>
            <IconButton size="large" variant="text">
              <CloseIcon />
            </IconButton>
            <IconButton size="large" variant="outlined">
              <CloseIcon />
            </IconButton>
            <IconButton size="large" variant="contained">
              <CloseIcon />
            </IconButton>
          </PreviewCombo>
          ...
        </Section>
      </Article>
    </>
  );
};

export default PreviewView;
