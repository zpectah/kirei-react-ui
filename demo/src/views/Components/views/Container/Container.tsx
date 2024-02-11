import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { kireiComponentsRootListKeys } from 'types';
import { routes } from '../../../../config';
import { DetailLayout } from '../../components/index';
import Preview from './_Preview';
import Api from './_Api';
import Playground from './_Playground';

const ContainerView = () => (
  <Routes>
    <Route
      path={routes.root.route}
      element={
        <DetailLayout
          route={kireiComponentsRootListKeys.container}
          title="Container"
          subtitle={`The container horizontally aligns your content, serving as the fundamental building block for layout structuring, particularly focusing on centering content within a given space.`}
        />
      }
    >
      <Route index element={<Preview />} />
      <Route path={routes.components.detail.api} element={<Api />} />
      <Route path={routes.components.detail.playground} element={<Playground />} />
    </Route>
  </Routes>
);

export default ContainerView;
