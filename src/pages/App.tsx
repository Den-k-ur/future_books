import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { Layout } from 'src/components/environment';
import { MainPageContent } from 'src/components/sections/MainPageContent';

function App() {
  return (
    <div className="App">
      <Layout>
        <MainPageContent />
      </Layout>
    </div>
  );
}

export default App;
