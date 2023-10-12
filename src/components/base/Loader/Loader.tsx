import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React, { FC } from 'react';
import { LoaderContainer } from './styles';

export const Loader: FC = () => {
  return (
    <Box sx={LoaderContainer}>
      <CircularProgress />
    </Box>
  );
};
