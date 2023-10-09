import React, { FC } from 'react';

//MUI components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//styles
import { HeaderStyles } from './styles';

export const Header: FC = () => {
  return (
    <Box sx={HeaderStyles}>
      <Typography variant="h3">Search for Books</Typography>
    </Box>
  );
};
