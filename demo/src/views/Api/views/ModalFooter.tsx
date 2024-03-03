import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, ApiTable } from '../../../components';

const ModalFooterView = () => {
  return (
    <View title="ModalFooter API">
      <Article>
        <ApiTable title="ModalFooterProps" rows={[]} />
      </Article>
    </View>
  );
};

export default withPlainLayout(ModalFooterView);
