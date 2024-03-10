import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components';
import { ForwardIcon } from 'icons';
import { routes } from '../../../config';
import { View, withPlainLayout } from '../../../Layout';
import { Article, PreviewCode } from '../../../components';

const UsageView = () => {
  return (
    <View
      title="Usage"
      subtitle={`Learn how to handle Kirei UI components`}
      footer={
        <Button variant="text" as={Link} to={routes.components.root} endIcon={<ForwardIcon />}>
          Components
        </Button>
      }
    >
      <Article title="Using your first component">
        <PreviewCode
          code={`import React from 'react';
import { Button } from 'components';

const ComponentWithButton = () => {
    return <Button>Hello World</Button>
};

export default ComponentWithButton;`}
        />
      </Article>
      <Article title="Style overrides">
        <PreviewCode code={`...TODO...`} />
      </Article>
      <Article title="Theming">
        <PreviewCode code={`...TODO...`} />
      </Article>
    </View>
  );
};

export default withPlainLayout(UsageView);
