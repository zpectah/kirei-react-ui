import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, Section } from '../../../components';

const ThemeView = () => {
  return (
    <View
      title="Theme"
      subtitle="Enim ultrices, volutpat sapien semper ac nibh enim in quis suscipit, varius aliquam lorem ipsum dolor sit amet dolor ut. Pharetra quis orci, placerat potenti leo vitae eget venenatis nullam tortor, donec varius et iaculis molestie."
    >
      <Article>
        <Section>...Theme...</Section>
      </Article>
    </View>
  );
};

export default withPlainLayout(ThemeView);
