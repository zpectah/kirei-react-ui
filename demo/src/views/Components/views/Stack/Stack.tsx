import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { kireiComponentsRootListKeys } from 'types';
import { DetailLayout } from '../../components/index';
import Preview from './_Preview';
import Api from './_Api';
import Playground from './_Playground';

const StackView = () => (
  <Routes>
    <Route
      path="/"
      element={
        <DetailLayout
          route={kireiComponentsRootListKeys.stack}
          title="Stack"
          subtitle="Morbi hendrerit, vivamus consectetur ollicitudin sed sollicitudin condimentum pulvinar, purus proin proin cras dictum. "
        />
      }
    >
      <Route index element={<Preview />} />
      <Route path="/api" element={<Api />} />
      <Route path="/playground" element={<Playground />} />
    </Route>
  </Routes>
);

export default StackView;
