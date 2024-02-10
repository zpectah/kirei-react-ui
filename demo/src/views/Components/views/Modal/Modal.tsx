import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { uiComponentsListKeys } from 'types';
import { DetailLayout } from '../../components/index';
import Preview from './_Preview';
import Api from './_Api';
import Playground from './_Playground';

const ModalView = () => (
  <Routes>
    <Route
      path="/"
      element={
        <DetailLayout
          route={uiComponentsListKeys.modal}
          title="Modal"
          subtitle="Nulla a lacinia, eget tellus varius dui sed felis a molestie, bibendum dolor ut aliquam id dolor. Ut sed vitae, ipsum potenti et libero vitae semper fusce vitae nibh, magna et at nullam donec mauris."
        />
      }
    >
      <Route index element={<Preview />} />
      <Route path="api" element={<Api />} />
      <Route path="playground" element={<Playground />} />
    </Route>
  </Routes>
);

export default ModalView;
