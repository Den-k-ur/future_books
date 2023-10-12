import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';
import { NotFoundContainer } from './styles';
import { BackButton } from 'src/components/base/BackButton';

export const NotFoundPageContent: FC = () => {
  return (
    <Box sx={NotFoundContainer}>
      <Typography>404</Typography>
      <Typography> PAGE NOT FOUND</Typography>
      <BackButton />
    </Box>
  );
};
