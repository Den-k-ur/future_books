import React, { FC, ReactElement } from 'react';

//MUI components
import Box from '@mui/material/Box';

//styles
import { BoxStyles } from './styles';

type LayoutProps = {
  children?: ReactElement | ReactElement[] | string;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <Box sx={BoxStyles}>{children}</Box>;
};
