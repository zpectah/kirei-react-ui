import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components';
import { routes } from '../../../config';
import { View, withPlainLayout } from '../../../Layout';
import { Article } from '../../../components';

const OverviewView = () => {
  return (
    <View
      title="Overview"
      subtitle={`Design systém "Kirei React UI" by byl založen na konceptu jednoduchosti, elegance a čistoty. Jeho hlavním cílem by bylo poskytnout uživatelům příjemný a intuitivní zážitek při vývoji React aplikací.`}
      footer={
        <Button variant="text" as={Link} to={routes.getStarted.routes.installation}>
          Installation
        </Button>
      }
    >
      <Article title="Introduction">...TODO...</Article>
      <Article title="Why Kirei React UI?">...TODO...</Article>
    </View>
  );
};

export default withPlainLayout(OverviewView);
