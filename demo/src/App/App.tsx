import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UiProvider } from 'styles';
import { routes } from '../config';
import { PageLayout } from '../Layout';
import { Error, Welcome, Components, GetStarted, Customization } from '../views';

const App = () => {
  return (
    <UiProvider applyCSSReset applyGlobalStyles>
      <BrowserRouter>
        <Routes>
          <Route path={routes.welcome.route} element={<PageLayout />}>
            <Route index element={<Welcome />} />
            <Route path={routes.getStarted.route} element={<GetStarted />} />
            <Route path={routes.components.route} element={<Components />} />
            <Route path={routes.customization.route} element={<Customization />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UiProvider>
  );
};

export default App;
