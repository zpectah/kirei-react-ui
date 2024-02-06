import React from 'react';
import { Stack } from 'components';
import { Article, Section } from '../../../../components';

const PreviewView = () => {
  return (
    <Article>
      <Section>
        <Stack gap={4} direction="row">
          <div>item 1</div>
          <div>item 2</div>
          <div>item 3</div>
          <div>item 4</div>
          <div>item 5</div>
        </Stack>
      </Section>
    </Article>
  );
};

export default PreviewView;
