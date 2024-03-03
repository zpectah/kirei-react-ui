import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../../config';
import { API_SIDEBAR_NAVIGATION } from '../../constants';
import { ViewLayout } from '../../Layout';
import {
  ButtonView,
  CheckboxView,
  ContainerView,
  ControlLabelView,
  IconButtonView,
  IconsView,
  LinkView,
  ModalView,
  ModalBodyView,
  ModalFooterView,
  ModalHeaderView,
  PaperView,
  RadioView,
  StackView,
  SwitchView,
  TypographyView,
} from './views';

const Api = () => {
  return (
    <Routes>
      <Route path={routes.root.route} element={<ViewLayout items={API_SIDEBAR_NAVIGATION} />}>
        <Route path={routes.api.routes.button.route} element={<ButtonView />} />
        <Route path={routes.api.routes.checkbox.route} element={<CheckboxView />} />
        <Route path={routes.api.routes.container.route} element={<ContainerView />} />
        <Route path={routes.api.routes['control-label'].route} element={<ControlLabelView />} />
        <Route path={routes.api.routes['icon-button'].route} element={<IconButtonView />} />
        <Route path={routes.api.routes.icons.route} element={<IconsView />} />
        <Route path={routes.api.routes.link.route} element={<LinkView />} />
        <Route path={routes.api.routes.modal.route} element={<ModalView />} />
        <Route path={routes.api.routes['modal-body'].route} element={<ModalBodyView />} />
        <Route path={routes.api.routes['modal-footer'].route} element={<ModalFooterView />} />
        <Route path={routes.api.routes['modal-header'].route} element={<ModalHeaderView />} />
        <Route path={routes.api.routes.paper.route} element={<PaperView />} />
        <Route path={routes.api.routes.radio.route} element={<RadioView />} />
        <Route path={routes.api.routes.stack.route} element={<StackView />} />
        <Route path={routes.api.routes.switch.route} element={<SwitchView />} />
        <Route path={routes.api.routes.typography.route} element={<TypographyView />} />
      </Route>
    </Routes>
  );
};

export default Api;
