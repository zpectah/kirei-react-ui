import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, ApiTable } from '../../../components';

const TypographyView = () => {
  return (
    <View title="Typography API">
      <Article>
        <ApiTable title="TypographyProps" rows={[]} />
      </Article>
    </View>
  );
};

export default withPlainLayout(TypographyView);
