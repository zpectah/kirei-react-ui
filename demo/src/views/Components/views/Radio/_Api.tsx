import React from 'react';
import { routes } from '../../../../config';
import { Article, ArticleFooter } from '../../../../components';

const ApiView = () => {
  return (
    <>
      <Article>Radio Documentation</Article>

      <ArticleFooter
        backRoute={`${routes.components.routes.radio.root}${routes.components.detail.preview}`}
        backLabel={'Preview'}
        forwardRoute={`${routes.components.routes.radio.root}${routes.components.detail.playground}`}
        forwardLabel={'Playground'}
      />
    </>
  );
};

export default ApiView;
