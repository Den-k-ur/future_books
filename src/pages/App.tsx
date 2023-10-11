import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { Layout } from 'src/components/environment';
import { MainPageContent } from 'src/components/sections/MainPageContent';
import { DetailedBookPage } from './DetailedBookPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPageContent />} />
        <Route path="book/:id" element={<DetailedBookPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
