import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from 'components';
import { PRIMARY_NAVIGATION } from '../../constants';

const HeaderNavigation = () => {
  const { t } = useTranslation('common');
  const { pathname } = useLocation();

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
      {PRIMARY_NAVIGATION.map((item) => {
        const regex = new RegExp('^' + item.prefix + '(/|$)');
        const isActive = regex.test(pathname);

        return (
          <Button key={item.key} as={Link} to={item.path} variant={isActive ? 'outlined' : 'text'} color="light">
            {t(item.label)}
          </Button>
        );
      })}
    </div>
  );
};

export default HeaderNavigation;
