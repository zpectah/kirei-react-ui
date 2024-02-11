import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../../config';
import { COMPONENTS_SIDEBAR_NAVIGATION } from '../../constants';
import { ViewLayout } from '../../Layout';
import { ButtonView, ContainerView, StackView, LinkView, TypographyView, ModalView } from './views';

const Components = () => {
  return (
    <Routes>
      <Route path={routes.root.route} element={<ViewLayout items={COMPONENTS_SIDEBAR_NAVIGATION} />}>
        <Route path={routes.components.routes.button.route} element={<ButtonView />} />
        <Route path={routes.components.routes.link.route} element={<LinkView />} />
        <Route path={routes.components.routes.container.route} element={<ContainerView />} />
        <Route path={routes.components.routes.stack.route} element={<StackView />} />
        <Route path={routes.components.routes.typography.route} element={<TypographyView />} />
        <Route path={routes.components.routes.modal.route} element={<ModalView />} />
      </Route>
    </Routes>
  );
};

export default Components;
