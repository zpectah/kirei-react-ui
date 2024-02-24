import React from 'react';
import { routes } from '../../../../config';
import { Article, ArticleFooter } from '../../../../components';

const PlaygroundView = () => {
  return (
    <>
      <Article>IconButton Playground</Article>

      <ArticleFooter
        backRoute={`${routes.components.routes['icon-button'].root}${routes.components.detail.api}`}
        backLabel={'API'}
      />
    </>
  );
};

export default PlaygroundView;
