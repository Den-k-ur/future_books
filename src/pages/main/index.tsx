import React, { FC } from 'react';
import { Header } from 'src/components/base/Header';
import { MainPageContent } from 'src/components/sections/MainPageContent';

const MainPage: FC = () => {
  return (
    <>
      <Header />
      <MainPageContent />
    </>
  );
};

export default MainPage;
