import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { kireiComponentsRootListKeys } from 'types';
import { routes } from '../../../../config';
import { DetailLayout } from '../../components/index';
import Preview from './_Preview';
import Playground from './_Playground';

const ModalView = () => (
  <Routes>
    <Route
      path={routes.root.route}
      element={
        <DetailLayout
          route={kireiComponentsRootListKeys.modal}
          title="Modal"
          subtitle={`A modal dialog is a temporary window that appears above the main content, typically to prompt user input or display critical information. It temporarily suspends interaction with the underlying web app until the user completes the required action or dismisses it, providing a focused and interactive user experience.`}
        />
      }
    >
      <Route index element={<Preview />} />
      <Route path={routes.components.detail.playground} element={<Playground />} />
    </Route>
  </Routes>
);

export default ModalView;
