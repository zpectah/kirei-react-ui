import React from 'react';
import { useTranslation } from 'react-i18next';
import { useUiContext } from 'styles';
import { meta } from '../../config';

const Footer = () => {
  const { t } = useTranslation('common');
  const { theme } = useUiContext();

  return (
    <footer
      style={{
        width: '100%',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '.5rem',
        color: theme.palette.text.muted,
        ...theme.typography.caption,
      }}
    >
      &copy; {meta.copyrightYear} {meta.name} - {t('label.allRights')}
    </footer>
  );
};

export default Footer;
