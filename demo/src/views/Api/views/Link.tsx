import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, ApiTable } from '../../../components';

const LinkView = () => {
  return (
    <View title="Link API">
      <Article>
        <ApiTable title="LinkProps" rows={[]} />
      </Article>
    </View>
  );
};

export default withPlainLayout(LinkView);
