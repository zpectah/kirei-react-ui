import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components';
import { ForwardIcon } from 'icons';
import { routes } from '../../../config';
import { View, withPlainLayout } from '../../../Layout';
import { Article } from '../../../components';

const InstallationView = () => {
  return (
    <View
      title="Installation"
      subtitle="Scelerisque libero, cursus quam ut nisl mauris sapien lorem sed vitae augue, sapien et fusce gravida quis orci. Ut id ante leo vitae, aenean cras dictum suscipit in nisi posuere lorem fringilla iaculis, ut venenatis commodo at nullam mauris eu."
      footer={
        <Button variant="text" as={Link} to={routes.getStarted.routes.usage.root} endIcon={<ForwardIcon />}>
          Usage
        </Button>
      }
    >
      <Article title="Get NPM package">...TODO...</Article>
      <Article title="Clone GitHub repositiory">...TODO...</Article>
    </View>
  );
};

export default withPlainLayout(InstallationView);
