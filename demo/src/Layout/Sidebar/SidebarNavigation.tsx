import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useKireiContext } from 'styles';

export interface SidebarNavigationItemProps {
  key: number;
  label: string;
  path: string;
}

export interface SidebarNavigationProps {
  items: SidebarNavigationItemProps[];
}

const SidebarNavigation = (props: SidebarNavigationProps) => {
  const { items = [] } = props;

  const { t } = useTranslation('common');
  const { pathname } = useLocation();
  const { theme } = useKireiContext();

  return (
    <div style={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', gap: theme.spacing.get(1) }}>
      {items.map(({ key, label, path }) => {
        const regex = new RegExp('^' + path + '(/|$)');
        const isActive = regex.test(pathname);

        return (
          <Link
            key={key}
            to={path}
            style={{
              padding: theme.spacing.get(1),
              color: isActive ? theme.palette.primary.main : theme.palette.neutral.main,
            }}
          >
            {t(label)}
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarNavigation;
