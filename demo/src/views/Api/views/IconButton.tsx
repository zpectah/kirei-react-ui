import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, ApiTable } from '../../../components';

const IconButtonView = () => {
  return (
    <View title="IconButton API">
      <Article>
        <ApiTable title="IconButtonProps" rows={[]} />
      </Article>
    </View>
  );
};

export default withPlainLayout(IconButtonView);
