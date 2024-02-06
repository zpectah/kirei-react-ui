import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CUSTOMIZATION_SIDEBAR_NAVIGATION } from '../../constants';
import { ViewLayout } from '../../Layout';
import { ThemeView, BreakpointsView, PaletteView, TypographyView, ComponentsView } from './views';

const Customization = () => {
  return (
    <Routes>
      <Route path="/" element={<ViewLayout items={CUSTOMIZATION_SIDEBAR_NAVIGATION} />}>
        {/*<Route index element={<div>some customization index view </div>} />*/}
        <Route path="/theme/*" element={<ThemeView />} />
        <Route path="/breakpoints/*" element={<BreakpointsView />} />
        <Route path="/palette/*" element={<PaletteView />} />
        <Route path="/typography/*" element={<TypographyView />} />
        <Route path="/components/*" element={<ComponentsView />} />
      </Route>
    </Routes>
  );
};

export default Customization;
