import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../../config';
import { GET_STARTED_SIDEBAR_NAVIGATION } from '../../constants';
import { ViewLayout } from '../../Layout';
import { OverviewView, InstallationView, UsageView } from './views';

const GetStarted = () => {
  return (
    <Routes>
      <Route path={routes.root.route} element={<ViewLayout items={GET_STARTED_SIDEBAR_NAVIGATION} />}>
        <Route path={routes.getStarted.routes.overview.route} element={<OverviewView />} />
        <Route path={routes.getStarted.routes.installation.route} element={<InstallationView />} />
        <Route path={routes.getStarted.routes.usage.route} element={<UsageView />} />
      </Route>
    </Routes>
  );
};

export default GetStarted;
