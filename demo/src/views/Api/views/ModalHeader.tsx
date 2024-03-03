import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, ApiTable } from '../../../components';

const ModalHeaderView = () => {
  return (
    <View title="ModalHeader API">
      <Article>
        <ApiTable title="ModalHeaderProps" rows={[]} />
      </Article>
    </View>
  );
};

export default withPlainLayout(ModalHeaderView);
