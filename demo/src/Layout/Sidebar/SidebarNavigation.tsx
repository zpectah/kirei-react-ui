import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUiContext } from 'styles';

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

  const { pathname } = useLocation();
  const { theme } = useUiContext();

  return (
    <div style={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', gap: theme.spacing.get(1) }}>
      {items.map(({ key, label, path }) => (
        <Link
          key={key}
          to={path}
          style={{
            padding: theme.spacing.get(1),
            color: pathname === path ? theme.palette.primary.main : theme.palette.neutral.main,
          }}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default SidebarNavigation;
