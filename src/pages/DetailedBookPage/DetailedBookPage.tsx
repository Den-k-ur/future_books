import Box from '@mui/material/Box';
import React, { FC } from 'react';
import { DetailedPageContent } from 'src/components/sections/DetailedPageContent';
import { PageContiner } from './styles';

export const DetailedBookPage: FC = () => {
  return (
    <Box sx={PageContiner}>
      <DetailedPageContent />
    </Box>
  );
};
