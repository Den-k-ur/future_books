import React, { FC, ReactElement } from 'react';

//MUI components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//components

import { Header } from 'src/components/base/Header';

//styles
import { BoxStyles } from './styles';

type LayoutProps = {
  children?: ReactElement | ReactElement[] | string;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <Box sx={BoxStyles}>{children}</Box>;
};
