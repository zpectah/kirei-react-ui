import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from 'components';
import {
  BackwardIcon,
  CloseIcon,
  ExpandLessIcon,
  ExpandMoreIcon,
  ForwardIcon,
  HamburgerIcon,
  MoreVerticalIcon,
  MoreHorizontalIcon,
  MinusIcon,
  PlusIcon,
} from 'icons';
import { routes } from '../../../config';
import { View, withPlainLayout } from '../../../Layout';
import { Article } from '../../../components';

const OverviewView = () => {
  return (
    <View
      title="Overview"
      subtitle={`Design systém "Kirei React UI" by byl založen na konceptu jednoduchosti, elegance a čistoty. Jeho hlavním cílem by bylo poskytnout uživatelům příjemný a intuitivní zážitek při vývoji React aplikací.`}
      footer={
        <Button variant="text" as={Link} to={routes.getStarted.routes.installation.root}>
          Installation
        </Button>
      }
    >
      <Article title="Introduction">
        ...TODO...
        <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
          <BackwardIcon />
          <ExpandLessIcon />
          <ExpandMoreIcon />
          <ForwardIcon />
          <CloseIcon />
          <HamburgerIcon />
          <MoreVerticalIcon />
          <MoreHorizontalIcon />
          <MinusIcon />
          <PlusIcon />
        </div>
        <br />
        <br />
        <div>
          <Typography>
            <PlusIcon />
            Typography with icon <PlusIcon />
          </Typography>
        </div>
        <br />
        <br />
      </Article>
      <Article title="Why Kirei React UI?">...TODO...</Article>
    </View>
  );
};

export default withPlainLayout(OverviewView);
