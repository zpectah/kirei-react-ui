import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, ApiTable } from '../../../components';

const ButtonView = () => {
  return (
    <View title="Button API">
      <Article>
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
    </View>
  );
};

export default withPlainLayout(ButtonView);
