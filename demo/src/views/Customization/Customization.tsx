import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../../config';
import { CUSTOMIZATION_SIDEBAR_NAVIGATION } from '../../constants';
import { ViewLayout } from '../../Layout';
import { ThemeView, BreakpointsView, PaletteView, TypographyView, ComponentsView } from './views';

const Customization = () => {
  return (
    <Routes>
      <Route path={routes.root.route} element={<ViewLayout items={CUSTOMIZATION_SIDEBAR_NAVIGATION} />}>
        <Route path={routes.customization.routes.theme.route} element={<ThemeView />} />
        <Route path={routes.customization.routes.breakpoints.route} element={<BreakpointsView />} />
        <Route path={routes.customization.routes.palette.route} element={<PaletteView />} />
        <Route path={routes.customization.routes.typography.route} element={<TypographyView />} />
        <Route path={routes.customization.routes.components.route} element={<ComponentsView />} />
      </Route>
    </Routes>
  );
};

export default Customization;
