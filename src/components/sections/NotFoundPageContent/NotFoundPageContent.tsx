import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';
import { NotFoundContainer } from './styles';
import { BackToMainButton } from 'src/components/base/BackToMainButton';

export const NotFoundPageContent: FC = () => {
  return (
    <Box sx={NotFoundContainer}>
      <Typography>404</Typography>
      <Typography> PAGE NOT FOUND</Typography>
      <BackToMainButton />
    </Box>
  );
};
