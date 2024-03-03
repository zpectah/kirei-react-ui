import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { KireiProvider } from 'styles';
import { routes } from '../config';
import { PageLayout } from '../Layout';
import { Error, Welcome, Components, GetStarted, Customization, Api } from '../views';
import '../i18n';

const App = () => {
  return (
    <KireiProvider applyCSSReset applyGlobalStyles>
      <BrowserRouter>
        <Routes>
          <Route path={routes.root.route} element={<PageLayout />}>
            <Route index element={<Welcome />} />
            <Route path={routes.getStarted.route} element={<GetStarted />} />
            <Route path={routes.components.route} element={<Components />} />
            <Route path={routes.api.route} element={<Api />} />
            <Route path={routes.customization.route} element={<Customization />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </KireiProvider>
  );
};

export default App;
