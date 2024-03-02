import React from 'react';
import { routes } from '../../../../config';
import { Article, ArticleFooter } from '../../../../components';

const PlaygroundView = () => {
  return (
    <>
      <Article>Checkbox Playground</Article>

      <ArticleFooter
        backRoute={`${routes.components.routes.checkbox.root}${routes.components.detail.api}`}
        backLabel={'API'}
      />
    </>
  );
};

export default PlaygroundView;