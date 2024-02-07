import React from 'react';
import { Link } from 'react-router-dom';
import { Link as UiLink } from 'components';
import { routes } from '../../../config';
import { View, withPlainLayout } from '../../../Layout';
import { Article } from '../../../components';

const InstallationView = () => {
  return (
    <View
      title="Installation"
      subtitle="Scelerisque libero, cursus quam ut nisl mauris sapien lorem sed vitae augue, sapien et fusce gravida quis orci. Ut id ante leo vitae, aenean cras dictum suscipit in nisi posuere lorem fringilla iaculis, ut venenatis commodo at nullam mauris eu."
      footer={
        <UiLink as={Link} to={routes.getStarted.routes.usage}>
          Usage
        </UiLink>
      }
    >
      <Article title="Get NPM package">...TODO...</Article>
      <Article title="Clone GitHub repositiory">...TODO...</Article>
    </View>
  );
};

export default withPlainLayout(InstallationView);
