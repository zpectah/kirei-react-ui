import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Container, Stack, Typography } from 'components';
import { meta, routes } from '../../config';
import { CONTAINER_SECONDARY_MAX_WIDTH } from '../../constants';
import { Footer } from '../../Layout';

const Welcome = () => {
  const { t } = useTranslation('common');

  return (
    <article
      style={{
        width: '100%',
        height: '100%',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      <Container maxWidth={CONTAINER_SECONDARY_MAX_WIDTH}>
        <Stack direction="column" alignItems="center" justifyContent="center" gap={6} style={{ textAlign: 'center' }}>
          <Stack direction="column" gap={2}>
            <Typography variant="h1" as="h2">
              {meta.name}
            </Typography>
            <Typography variant="subtitle1" as="h4">
              {t('welcome.subtitle')}
            </Typography>
            <Typography>{t('welcome.description')}</Typography>
          </Stack>
          <Stack gap={4}>
            <Button as={Link} to={routes.getStarted.root} size="large">
              {t('welcome.button.getStarted')}
            </Button>
            <Button as="a" href={meta.gitHubRepository} target="_blank" variant="text" color="neutral" size="large">
              {t('welcome.button.gitHub')}
            </Button>
          </Stack>
          <Footer />
        </Stack>
      </Container>
    </article>
  );
};

export default Welcome;
