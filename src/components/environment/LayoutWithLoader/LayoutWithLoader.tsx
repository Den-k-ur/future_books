import Box from '@mui/material/Box';
import React, { FC, ReactElement } from 'react';
import { Loader } from 'src/components/base/Loader';
import { LayoutWithLoaderContainer } from './styles';

type LayoutWithLoaderProps = {
  isLoading: boolean;
  children: ReactElement | ReactElement[] | string;
};

export const LayoutWithLoader: FC<LayoutWithLoaderProps> = ({ isLoading, children }) => {
  return (
    <>
      {isLoading ? (
        <Box sx={LayoutWithLoaderContainer}>
          <Loader />
        </Box>
      ) : (
        children
      )}
    </>
  );
};
