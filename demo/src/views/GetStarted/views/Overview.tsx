import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from 'components';
import { ForwardIcon } from 'icons';
import { routes } from '../../../config';
import { View, withPlainLayout } from '../../../Layout';
import { Article } from '../../../components';

const OverviewView = () => {
  return (
    <View
      title="Overview"
      subtitle={`The design system "Kirei React UI" would be based on the concept of simplicity, elegance and purity. Its main goal would be to provide users with a pleasant and intuitive experience while developing React applications.`}
      footer={
        <Button variant="text" as={Link} to={routes.getStarted.routes.installation.root} endIcon={<ForwardIcon />}>
          Installation
        </Button>
      }
    >
      <Article title="Introduction">
        <Typography>
          Kirei includes a sufficient collection of predefined React components that are ready for prototyping or
          directly for a production environment. We try to make the implementation itself as simple as possible and
          therefore everyone the components really only contain the most necessary properties and the rest is just up to
          your imagination.
        </Typography>
      </Article>
      <Article title="Why Kirei React UI?">
        <ul>
          <li>
            <b>Clean Design</b> - the effort is to create a minimalistic design that can be easily customized.
          </li>
          <li>
            <b>Covering Front End needs</b> - no need to install additional libraries anymore. Kirei UI contains the
            essentials components for creating React applications.
          </li>
          <li>
            <b>Customization</b> - Kirei UI offers very wide customization options not only at the level of the main
            theme, but also for individual components separately.
          </li>
        </ul>
      </Article>
    </View>
  );
};

export default withPlainLayout(OverviewView);
