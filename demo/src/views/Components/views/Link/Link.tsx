import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { kireiComponentsRootListKeys } from 'types';
import { routes } from '../../../../config';
import { DetailLayout } from '../../components/index';
import Preview from './_Preview';
import Api from './_Api';
import Playground from './_Playground';

const LinkView = () => (
  <Routes>
    <Route
      path={routes.root.route}
      element={
        <DetailLayout
          route={kireiComponentsRootListKeys.link}
          title="Link"
          subtitle={`A hyperlink, or simply a link, directs users to another webpage or resource upon clicking. It serves as a navigational tool, allowing users to access related content or external resources seamlessly within the context of the current webpage.`}
        />
      }
    >
      <Route index element={<Preview />} />
      <Route path={routes.components.detail.api} element={<Api />} />
      <Route path={routes.components.detail.playground} element={<Playground />} />
    </Route>
  </Routes>
);

export default LinkView;
