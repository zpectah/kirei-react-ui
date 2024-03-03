import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, ApiTable } from '../../../components';

const ContainerView = () => {
  return (
    <View title="Container API">
      <Article>
        <ApiTable title="ContainerProps" rows={[]} />
      </Article>
    </View>
  );
};

export default withPlainLayout(ContainerView);
