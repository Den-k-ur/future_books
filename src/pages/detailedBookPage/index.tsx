import Box from '@mui/material/Box';
import React, { FC } from 'react';
import { DetailedPageContent } from 'src/components/sections/DetailedPageContent';
import { PageContiner } from './styles';

const DetailedBookPage: FC = () => {
  return (
    <Box sx={PageContiner}>
      <DetailedPageContent />
    </Box>
  );
};

export default DetailedBookPage;
