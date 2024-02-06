import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UiComponentsList } from 'types';
import { Button } from 'components';
import { routes } from '../../../../config';
import { DETAIL_NAVIGATION } from '../../../../constants';

export interface ViewNavigationProps {
  route: UiComponentsList;
}

const ViewNavigation = ({ route }: ViewNavigationProps) => {
  const { pathname } = useLocation();

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
      {DETAIL_NAVIGATION.map((item) => {
        const rootPath = `${routes.components.routes[route]}${item.path}`;

        return (
          <Button
            key={item.key}
            as={Link}
            to={rootPath}
            variant={pathname === rootPath ? 'outlined' : 'text'}
            color="neutral"
            size="small"
          >
            {item.label}
          </Button>
        );
      })}
    </div>
  );
};

export default ViewNavigation;
