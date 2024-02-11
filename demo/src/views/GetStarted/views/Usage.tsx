import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components';
import { routes } from '../../../config';
import { View, withPlainLayout } from '../../../Layout';
import { Article } from '../../../components';

const UsageView = () => {
  return (
    <View
      title="Usage"
      subtitle="Proin cras dictum, pharetra sagittis libero sollicitudin nunc vitae et elit, ultricies tellus sollicitudin lectus. Lorem fringilla porttitor, odio morbi suspendisse non congue dui imperdiet ut hendrerit integer, fermentum nibh maximus et iaculis ut hendrerit. Interdum dignissim, dolor quis fermentum lorem ipsum nulla turpis nulla accumsan, elit fusce gravida ac nec nulla."
      footer={
        <Button variant="text" as={Link} to={routes.components.root}>
          Components
        </Button>
      }
    >
      <Article title="Using your first component">...TODO...</Article>
      <Article title="Style overrides">...TODO...</Article>
      <Article title="Theming">...TODO...</Article>
    </View>
  );
};

export default withPlainLayout(UsageView);
