import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components';
import { ForwardIcon } from 'icons';
import { routes, meta } from '../../../config';
import { View, withPlainLayout } from '../../../Layout';
import { Article, PreviewCode } from '../../../components';

const InstallationView = () => {
  return (
    <View
      title="Installation"
      subtitle="Install the Kirei React UI package"
      footer={
        <Button variant="text" as={Link} to={routes.getStarted.routes.usage.root} endIcon={<ForwardIcon />}>
          Usage
        </Button>
      }
    >
      <Article title="Get NPM package">
        <PreviewCode code={`yarn add @kirei-react-ui`} language="node" />
      </Article>
      <Article title="Clone GitHub repositiory">
        <PreviewCode code={`git clone ${meta.gitHubRepository}`} language="node" />
      </Article>
    </View>
  );
};

export default withPlainLayout(InstallationView);
