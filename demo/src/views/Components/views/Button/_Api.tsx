import React from 'react';
import { routes } from '../../../../config';
import { Article, ArticleFooter } from '../../../../components';
import { ApiTable } from '../../components/index';

const ApiView = () => {
  return (
    <>
      <Article title="Button API">
        <ApiTable
          title="ButtonProps"
          rows={[
            {
              key: 1,
              name: 'Children',
              type: 'ReactNode',
              // defaults: '',
              // description: '',
            },
            {
              key: 2,
              name: 'Variant',
              type: 'text|outlined|contained',
              defaults: 'contained',
              // description: '',
            },
            {
              key: 3,
              name: 'Color',
              type: 'primary|secondary|tertiary, success|info|warning|error, dark|light|neutral|inverted',
              defaults: 'primary',
              // description: '',
            },
            {
              key: 4,
              name: 'Size',
              type: 'small|medium|large',
              defaults: 'medium',
              // description: '',
            },
          ]}
        />
      </Article>

      <ArticleFooter
        backRoute={`${routes.components.routes.button.root}${routes.components.detail.preview}`}
        backLabel={'Preview'}
        forwardRoute={`${routes.components.routes.button.root}${routes.components.detail.playground}`}
        forwardLabel={'Playground'}
      />
    </>
  );
};

export default ApiView;
