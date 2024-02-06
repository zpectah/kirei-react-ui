import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, Section } from '../../../components';

const ComponentsView = () => {
  return (
    <View
      title="Components"
      subtitle="Suspendisse tellus, aliquet nunc ut enim et pharetra libero sed nulla a arcu augue, mauris sapien urna condimentum. Accumsan auctor, ullamcorper augue lacinia ligula curabitur libero vitae maximus, ut ipsum accumsan consectetur. "
    >
      <Article>
        <Section>...Components...</Section>
      </Article>
    </View>
  );
};

export default withPlainLayout(ComponentsView);
