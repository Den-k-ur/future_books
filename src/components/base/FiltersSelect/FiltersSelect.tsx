import React, { FC, ReactElement } from 'react';

import Select from '@mui/material/Select';

import { FilterSelectStyles } from './styles';

type FiltersProps = {
  children: ReactElement | ReactElement[] | string;
  defaultValue: string;
};

export const FiltersSelect: FC<FiltersProps> = ({ children, defaultValue }) => {
  return (
    <Select defaultValue={defaultValue} sx={FilterSelectStyles}>
      {children}
    </Select>
  );
};
