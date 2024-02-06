import React from 'react';
import { Outlet } from 'react-router-dom';

const PlainLayout = () => (
  <div>
    <Outlet />
  </div>
);

export default PlainLayout;
