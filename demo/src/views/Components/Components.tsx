import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { COMPONENTS_SIDEBAR_NAVIGATION } from '../../constants';
import { ViewLayout } from '../../Layout';
import { ButtonView, ContainerView, StackView, LinkView, TypographyView, ModalView } from './views';

const Components = () => {
  return (
    <Routes>
      <Route path="/" element={<ViewLayout items={COMPONENTS_SIDEBAR_NAVIGATION} />}>
        {/*<Route index element={<div>some components index view </div>} />*/}
        <Route path="/button/*" element={<ButtonView />} />
        <Route path="/link/*" element={<LinkView />} />
        <Route path="/container/*" element={<ContainerView />} />
        <Route path="/stack/*" element={<StackView />} />
        <Route path="/typography/*" element={<TypographyView />} />
        <Route path="/modal/*" element={<ModalView />} />
      </Route>
    </Routes>
  );
};

export default Components;
