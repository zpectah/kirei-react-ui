import React from 'react';
import { routes } from '../../../../config';
import { Article, ArticleFooter } from '../../../../components';
import { IconsPreviewList } from './components';

const PreviewView = () => {
  return (
    <>
      <Article>
        <IconsPreviewList />
      </Article>

      <ArticleFooter
        forwardRoute={`${routes.components.routes.icons.root}${routes.components.detail.api}`}
        forwardLabel={'API'}
      />
    </>
  );
};

export default PreviewView;
