import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PlainLayout } from './index.ts';

const withPlainLayout = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLoading extends React.Component<P> {
    render() {
      const { ...props } = this.props;
      return (
        <Routes>
          <Route path="/" element={<PlainLayout />}>
            <Route index element={<Component {...(props as P)} />} />
          </Route>
        </Routes>
      );
    }
  };

export default withPlainLayout;
