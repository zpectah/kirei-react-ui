import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../../config';
import { COMPONENTS_SIDEBAR_NAVIGATION } from '../../constants';
import { ViewLayout } from '../../Layout';
import {
  ButtonView,
  ContainerView,
  StackView,
  LinkView,
  TypographyView,
  ModalView,
  IconsView,
  PaperView,
  IconButtonView,
} from './views';

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
        <Route path={routes.components.routes.icons.route} element={<IconsView />} />
        <Route path={routes.components.routes.paper.route} element={<PaperView />} />
        <Route path={routes.components.routes['icon-button'].route} element={<IconButtonView />} />
      </Route>
    </Routes>
  );
};

export default Components;
