import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, ApiTable } from '../../../components';

const CheckboxView = () => {
  return (
    <View title="Checkbox API">
      <Article>
        <ApiTable title="CheckboxProps" rows={[]} />
      </Article>
    </View>
  );
};

export default withPlainLayout(CheckboxView);
