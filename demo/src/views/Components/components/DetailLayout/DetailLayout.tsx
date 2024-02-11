import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { KireiComponentsRootList } from 'types';
import { View } from '../../../../Layout';
import { ViewNavigation } from '../ViewNavigation';

export interface DetailLayoutProps {
  route: KireiComponentsRootList;
  title: ReactNode;
  subtitle?: ReactNode;
}

const DetailLayout = (props: DetailLayoutProps) => {
  const { route, ...rest } = props;

  return (
    <View {...rest}>
      <ViewNavigation route={route} />
      <Outlet />
    </View>
  );
};

export default DetailLayout;
