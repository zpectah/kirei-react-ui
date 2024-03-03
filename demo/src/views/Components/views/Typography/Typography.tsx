import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { kireiComponentsRootListKeys } from 'types';
import { routes } from '../../../../config';
import { DetailLayout } from '../../components/index';
import Preview from './_Preview';
import Playground from './_Playground';

const TypographyView = () => (
  <Routes>
    <Route
      path={routes.root.route}
      element={
        <DetailLayout
          route={kireiComponentsRootListKeys.typography}
          title="Typography"
          subtitle={`The Typography component leverages predefined styles from the theme and offers a selected set of font sizes and styles, contributing to a consistent text appearance across the application.`}
        />
      }
    >
      <Route index element={<Preview />} />
      <Route path={routes.components.detail.playground} element={<Playground />} />
    </Route>
  </Routes>
);

export default TypographyView;
