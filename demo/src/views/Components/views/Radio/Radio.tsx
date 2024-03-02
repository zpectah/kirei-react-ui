import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { kireiComponentsRootListKeys } from 'types';
import { routes } from '../../../../config';
import { DetailLayout } from '../../components/index';
import Preview from './_Preview';
import Api from './_Api';
import Playground from './_Playground';

const RadioView = () => (
  <Routes>
    <Route
      path={routes.root.route}
      element={<DetailLayout route={kireiComponentsRootListKeys.radio} title="Radio" subtitle={`...`} />}
    >
      <Route index element={<Preview />} />
      <Route path={routes.components.detail.api} element={<Api />} />
      <Route path={routes.components.detail.playground} element={<Playground />} />
    </Route>
  </Routes>
);

export default RadioView;
