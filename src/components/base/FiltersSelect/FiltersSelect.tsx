import React, { FC, ReactElement, ChangeEvent } from 'react';

import Select, { SelectChangeEvent } from '@mui/material/Select';

import { FilterSelectStyles } from './styles';

type FiltersProps = {
  children: ReactElement | ReactElement[] | string;
  defaultValue: string;
  value: string;
  onChange?: (e: SelectChangeEvent) => void;
};

export const FiltersSelect: FC<FiltersProps> = ({ children, defaultValue, onChange, value }) => {
  return (
    <Select defaultValue={defaultValue} value={value} sx={FilterSelectStyles} onChange={onChange}>
      {children}
    </Select>
  );
};
