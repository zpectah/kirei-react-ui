import React from 'react';
import { routes } from '../../../../config';
import { Article, ArticleFooter } from '../../../../components';

const ApiView = () => {
  return (
    <>
      <Article>Checkbox Documentation</Article>

      <ArticleFooter
        backRoute={`${routes.components.routes.checkbox.root}${routes.components.detail.preview}`}
        backLabel={'Preview'}
        forwardRoute={`${routes.components.routes.checkbox.root}${routes.components.detail.playground}`}
        forwardLabel={'Playground'}
      />
    </>
  );
};

export default ApiView;
