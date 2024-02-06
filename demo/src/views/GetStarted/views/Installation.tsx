import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, Section } from '../../../components';

const InstallationView = () => {
  return (
    <View
      title="Installation"
      subtitle="Scelerisque libero, cursus quam ut nisl mauris sapien lorem sed vitae augue, sapien et fusce gravida quis orci. Ut id ante leo vitae, aenean cras dictum suscipit in nisi posuere lorem fringilla iaculis, ut venenatis commodo at nullam mauris eu."
    >
      <Article>
        <Section>...installation...</Section>
      </Article>
    </View>
  );
};

export default withPlainLayout(InstallationView);
