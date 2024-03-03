import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, ApiTable } from '../../../components';

const StackView = () => {
  return (
    <View title="Stack API">
      <Article>
        <ApiTable title="StackProps" rows={[]} />
      </Article>
    </View>
  );
};

export default withPlainLayout(StackView);
