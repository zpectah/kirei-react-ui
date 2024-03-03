import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, ApiTable } from '../../../components';

const RadioView = () => {
  return (
    <View title="Radio API">
      <Article>
        <ApiTable title="RadioProps" rows={[]} />
      </Article>
    </View>
  );
};

export default withPlainLayout(RadioView);
