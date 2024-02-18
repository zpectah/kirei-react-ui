import React from 'react';
import { Stack } from 'components';
import { routes } from '../../../../config';
import { Article, ArticleFooter, Section } from '../../../../components';
import { PreviewCode, PreviewCombo } from '../../components/index';

const PreviewView = () => {
  return (
    <>
      <Section>
        <PreviewCode code={`import { Stack } from 'components';`} />
      </Section>
      <Article>
        <Section title="Title ... todo">
          <PreviewCombo code="<Stack>...</Stack>">
            <Stack gap={4} direction="row">
              <div>item 1</div>
              <div>item 2</div>
              <div>item 3</div>
              <div>item 4</div>
              <div>item 5</div>
            </Stack>
          </PreviewCombo>
        </Section>
        <Section title="Title ... todo">
          <PreviewCombo code="<Stack>...</Stack>">
            <Stack gap={4} wrap="wrap">
              <div>item 1</div>
              <div>item 2</div>
              <div>item 3</div>
              <div>item 4</div>
              <div>item 5</div>
              <div>item 6</div>
              <div>item 7</div>
              <div>item 8</div>
              <div>item 9</div>
              <div>item 10</div>
            </Stack>
          </PreviewCombo>
        </Section>
      </Article>

      <ArticleFooter
        forwardRoute={`${routes.components.routes.stack.root}${routes.components.detail.api}`}
        forwardLabel={'API'}
      />
    </>
  );
};

export default PreviewView;
