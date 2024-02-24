import React from 'react';
import { IconButton } from 'components';
import { CloseIcon } from 'icons';
import { routes } from '../../../../config';
import { Article, ArticleFooter, Section } from '../../../../components';
import { PreviewCode, PreviewCombo } from '../../components/index';

const PreviewView = () => {
  return (
    <>
      <Section>
        <PreviewCode code={`import { Stack } from 'components';`} />
      </Section>
      <Article title="Basics" subtitle={`...`}>
        <Section title="...">
          <PreviewCombo code='<Stack direction="row">...</Stack>'>...</PreviewCombo>
          ...
          <br />
          <IconButton>
            <CloseIcon />
          </IconButton>
          <br />
        </Section>
      </Article>

      <ArticleFooter
        forwardRoute={`${routes.components.routes['icon-button'].root}${routes.components.detail.api}`}
        forwardLabel={'API'}
      />
    </>
  );
};

export default PreviewView;
