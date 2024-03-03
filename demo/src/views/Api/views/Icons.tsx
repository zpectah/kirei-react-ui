import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, ApiTable } from '../../../components';

const IconsView = () => {
  return (
    <View title="Icons API">
      <Article>
        <ApiTable title="IconsProps" rows={[]} />
      </Article>
    </View>
  );
};

export default withPlainLayout(IconsView);
