import React from 'react';
import { Outlet } from 'react-router-dom';
import { HEADER_DESKTOP_HEIGHT } from '../../constants';
import { Header } from './../Header';

const Layout = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <Header />
      <main
        style={{
          width: '100%',
          height: `calc(100% - ${HEADER_DESKTOP_HEIGHT})`,
          position: 'fixed',
          top: HEADER_DESKTOP_HEIGHT,
          left: 0,
          overflow: 'auto',
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
