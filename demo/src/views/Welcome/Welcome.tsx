import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Stack, Typography } from 'components';
import { meta, routes } from '../../config';
import { HEADER_DESKTOP_HEIGHT } from '../../constants';
import { Footer } from '../../Layout';

const Welcome = () => {
  return (
    <article
      style={{
        width: '100%',
        height: `calc(100% - ${HEADER_DESKTOP_HEIGHT})`,
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      <Container maxWidth="md">
        <Stack direction="column" alignItems="center" justifyContent="center" gap={6} style={{ textAlign: 'center' }}>
          <Stack direction="column" gap={2}>
            <Typography variant="h1" as="h2">
              {meta.name}
            </Typography>
            <Typography variant="subtitle1" as="h4">
              {meta.title}
            </Typography>
            <Typography>{meta.description}</Typography>
          </Stack>
          <Stack gap={4}>
            <Button as={Link} to={routes.getStarted.root} size="large">
              Get started
            </Button>
            <Button as="a" href={meta.gitHubRepository} target="_blank" variant="text" color="neutral" size="large">
              Github
            </Button>
          </Stack>
          <Footer />
        </Stack>
      </Container>
    </article>
  );
};

export default Welcome;
