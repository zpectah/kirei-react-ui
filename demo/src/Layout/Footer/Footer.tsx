import React from 'react';
import { useTranslation } from 'react-i18next';
import { useKireiContext } from 'styles';
import { Container } from 'components';
import { meta } from '../../config';

const Footer = () => {
  const { t } = useTranslation('common');
  const { theme } = useKireiContext();

  return (
    <footer>
      <Container>
        <div
          style={{
            width: '100%',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '.5rem',
            color: theme.palette.text.muted.current,
            ...theme.typography.caption,
          }}
        >
          &copy; {meta.copyrightYear} {meta.name} - {t('label.allRights')}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
