import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, ApiTable } from '../../../components';

const PaperView = () => {
  return (
    <View title="Paper API">
      <Article>
        <ApiTable title="PaperProps" rows={[]} />
      </Article>
    </View>
  );
};

export default withPlainLayout(PaperView);
