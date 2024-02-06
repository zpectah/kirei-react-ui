import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { uiComponentsListKeys } from 'types';
import { DetailLayout } from '../../components/index';
import Preview from './_Preview';
import Api from './_Api';
import Playground from './_Playground';

const ButtonView = () => (
  <Routes>
    <Route
      path="/"
      element={
        <DetailLayout
          route={uiComponentsListKeys.button}
          title="Button"
          subtitle="Rhoncus at condimentum, ipsum tempus a et nisi porttitor lectus quis porta arcu, nisl vel purus molestie id dolor semper. Lorem proin, porttitor et quam urna magna et sem odio sem odio, et nisi nisi nunc dui scelerisque."
        />
      }
    >
      <Route index element={<Preview />} />
      <Route path="api" element={<Api />} />
      <Route path="playground" element={<Playground />} />
    </Route>
  </Routes>
);

export default ButtonView;
