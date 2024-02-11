import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { kireiComponentsRootListKeys } from 'types';
import { routes } from '../../../../config';
import { DetailLayout } from '../../components/index';
import Preview from './_Preview';
import Api from './_Api';
import Playground from './_Playground';

const ButtonView = () => (
  <Routes>
    <Route
      path={routes.root.route}
      element={
        <DetailLayout
          route={kireiComponentsRootListKeys.button}
          title="Button"
          subtitle={`A web button on a page serves to trigger a specific action or navigate to another part of the website. Users click on it to submit forms, confirm actions, or proceed to another page, making it an interactive element facilitating user interaction and navigation.`}
        />
      }
    >
      <Route index element={<Preview />} />
      <Route path={routes.components.detail.api} element={<Api />} />
      <Route path={routes.components.detail.playground} element={<Playground />} />
    </Route>
  </Routes>
);

export default ButtonView;
