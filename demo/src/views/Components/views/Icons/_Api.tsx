import React from 'react';
import { routes } from '../../../../config';
import { Article, ArticleFooter } from '../../../../components';

const ApiView = () => {
  return (
    <>
      <Article>Icons Documentation</Article>

      <ArticleFooter
        backRoute={`${routes.components.routes.icons.root}${routes.components.detail.preview}`}
        backLabel={'Preview'}
        forwardRoute={`${routes.components.routes.icons.root}${routes.components.detail.playground}`}
        forwardLabel={'Playground'}
      />
    </>
  );
};

export default ApiView;
