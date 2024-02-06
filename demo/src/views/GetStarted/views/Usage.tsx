import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, Section } from '../../../components';

const UsageView = () => {
  return (
    <View
      title="Usage"
      subtitle="Proin cras dictum, pharetra sagittis libero sollicitudin nunc vitae et elit, ultricies tellus sollicitudin lectus. Lorem fringilla porttitor, odio morbi suspendisse non congue dui imperdiet ut hendrerit integer, fermentum nibh maximus et iaculis ut hendrerit. Interdum dignissim, dolor quis fermentum lorem ipsum nulla turpis nulla accumsan, elit fusce gravida ac nec nulla."
    >
      <Article>
        <Section>...UsageView...</Section>
      </Article>
    </View>
  );
};

export default withPlainLayout(UsageView);
