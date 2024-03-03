import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, ApiTable } from '../../../components';

const SwitchView = () => {
  return (
    <View title="Switch API">
      <Article>
        <ApiTable title="SwitchProps" rows={[]} />
      </Article>
    </View>
  );
};

export default withPlainLayout(SwitchView);
