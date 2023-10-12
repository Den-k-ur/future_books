import React, { FC } from 'react';
import { SelectWithTextStyles } from './styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FiltersSelect } from 'src/components/base/FiltersSelect';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';

type FiltersBlockProps = {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  selectItem: Record<string, string>[];
  name: string;
  defaultValue: string;
};

export const FiltersBlock: FC<FiltersBlockProps> = ({
  onChange,
  selectItem,
  value,
  name,
  defaultValue,
}) => {
  return (
    <Box sx={SelectWithTextStyles}>
      <Typography>{name} </Typography>
      <FiltersSelect value={value} onChange={onChange} defaultValue={defaultValue}>
        {selectItem.map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.value}
          </MenuItem>
        ))}
      </FiltersSelect>
    </Box>
  );
};
