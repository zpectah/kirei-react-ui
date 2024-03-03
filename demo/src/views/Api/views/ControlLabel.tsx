import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, ApiTable } from '../../../components';

const ControlLabelView = () => {
  return (
    <View title="ControlLabel API">
      <Article>
        <ApiTable title="ControlLabelProps" rows={[]} />
      </Article>
    </View>
  );
};

export default withPlainLayout(ControlLabelView);
