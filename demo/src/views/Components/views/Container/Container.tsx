import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { uiComponentsListKeys } from 'types';
import { DetailLayout } from '../../components/index';
import Preview from './_Preview';
import Api from './_Api';
import Playground from './_Playground';

const ContainerView = () => (
  <Routes>
    <Route
      path="/"
      element={
        <DetailLayout
          route={uiComponentsListKeys.container}
          title="Container"
          subtitle="Adipiscing pharetra, felis scelerisque magna et felis scelerisque in ex sem proin sollicitudin etiam, feugiat vitae massa dolor quis ut."
        />
      }
    >
      <Route index element={<Preview />} />
      <Route path="api" element={<Api />} />
      <Route path="playground" element={<Playground />} />
    </Route>
  </Routes>
);

export default ContainerView;
