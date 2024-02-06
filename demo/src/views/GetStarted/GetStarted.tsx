import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GET_STARTED_SIDEBAR_NAVIGATION } from '../../constants';
import { ViewLayout } from '../../Layout';
import { OverviewView, InstallationView, UsageView } from './views';

const GetStarted = () => {
  return (
    <Routes>
      <Route path="/" element={<ViewLayout items={GET_STARTED_SIDEBAR_NAVIGATION} />}>
        {/*<Route index element={<div>some usage index view </div>} />*/}
        <Route path="/overview/*" element={<OverviewView />} />
        <Route path="/installation/*" element={<InstallationView />} />
        <Route path="/usage/*" element={<UsageView />} />
      </Route>
    </Routes>
  );
};

export default GetStarted;
