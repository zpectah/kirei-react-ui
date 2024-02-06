import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { uiComponentsListKeys } from 'types';
import { DetailLayout } from '../../components/index';
import Preview from './_Preview';
import Api from './_Api';
import Playground from './_Playground';

const LinkView = () => (
  <Routes>
    <Route
      path="/"
      element={
        <DetailLayout
          route={uiComponentsListKeys.link}
          title="Link"
          subtitle="Mauris ullamcorper, nulla a urna posuere vestibulum bibendum proin porttitor, pellentesque commodo molestie libero. Lorem mauris, tempus vitae aliquet quis orci fermentum vulputate fusce gravida."
        />
      }
    >
      <Route index element={<Preview />} />
      <Route path="api" element={<Api />} />
      <Route path="playground" element={<Playground />} />
    </Route>
  </Routes>
);

export default LinkView;
