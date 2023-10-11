import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { Layout } from 'src/components/environment';
import { ROUTERS } from './constants';

export const AppRoute = () => {
  return (
    <Layout>
      <Routes>
        {ROUTERS.map(({ Element, id, url }) => (
          <Route key={id} path={url} element={<Element />} />
        ))}
      </Routes>
    </Layout>
  );
};
