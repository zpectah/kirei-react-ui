import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { kireiComponentsRootListKeys } from 'types';
import { routes } from '../../../../config';
import { DetailLayout } from '../../components/index';
import Preview from './_Preview';
import Playground from './_Playground';

const SwitchView = () => (
  <Routes>
    <Route
      path={routes.root.route}
      element={<DetailLayout route={kireiComponentsRootListKeys.switch} title="Switch" subtitle={`...`} />}
    >
      <Route index element={<Preview />} />
      <Route path={routes.components.detail.playground} element={<Playground />} />
    </Route>
  </Routes>
);

export default SwitchView;
