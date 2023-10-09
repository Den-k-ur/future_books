import React, { FC } from 'react';

//MUI components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//components

import { Header } from 'src/components/base/Header';

//styles
import { BoxStyles } from './styles';

export const Layout: FC = () => {
  return (
    <Box sx={BoxStyles}>
      <Header />
    </Box>
  );
};
