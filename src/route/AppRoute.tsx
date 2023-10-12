import { Route, Routes, useNavigate } from 'react-router-dom';
import React from 'react';
import { Layout } from 'src/components/environment';
import { ROUTERS } from './constants';
import globalRouter from 'src/utils/globalRouter';

export const AppRoute = () => {
  const navigate = useNavigate();
  globalRouter.navigate = navigate;
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
