import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, ApiTable } from '../../../components';

const ModalView = () => {
  return (
    <View title="Modal API">
      <Article>
        <ApiTable title="ModalProps" rows={[]} />
      </Article>
    </View>
  );
};

export default withPlainLayout(ModalView);
