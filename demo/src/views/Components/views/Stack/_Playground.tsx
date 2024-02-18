import React from 'react';
import { routes } from '../../../../config';
import { Article, ArticleFooter } from '../../../../components';

const PlaygroundView = () => {
  return (
    <>
      <Article>ContainerPlayground</Article>

      <ArticleFooter
        backRoute={`${routes.components.routes.stack.root}${routes.components.detail.api}`}
        backLabel={'API'}
      />
    </>
  );
};

export default PlaygroundView;
