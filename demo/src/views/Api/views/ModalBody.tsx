import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, ApiTable } from '../../../components';

const ModalBodyView = () => {
  return (
    <View title="ModalBody API">
      <Article>
        <ApiTable title="ModalBodyProps" rows={[]} />
      </Article>
    </View>
  );
};

export default withPlainLayout(ModalBodyView);
