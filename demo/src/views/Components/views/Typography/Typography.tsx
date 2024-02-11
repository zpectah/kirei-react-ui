import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { kireiComponentsListKeys } from 'types';
import { DetailLayout } from '../../components/index';
import Preview from './_Preview';
import Api from './_Api';
import Playground from './_Playground';

const TypographyView = () => (
  <Routes>
    <Route
      path="/"
      element={
        <DetailLayout
          route={kireiComponentsListKeys.typography}
          title="Typography"
          subtitle="Condimentum euismod, dolor quis luctus at non congue lorem ipsum dolor sit amet sed ac tristique, dolor sit amet tristique vivamus vel arcu."
        />
      }
    >
      <Route index element={<Preview />} />
      <Route path="api" element={<Api />} />
      <Route path="playground" element={<Playground />} />
    </Route>
  </Routes>
);

export default TypographyView;
