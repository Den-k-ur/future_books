import React, { FC } from 'react';

//MUI components
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

import { SearchBarStyles } from './styles';

type SearchBarProps = {
  onClick?: () => void;
};

export const SearchBar: FC<SearchBarProps> = () => {
  return (
    <TextField
      sx={SearchBarStyles}
      placeholder="Введите название книги"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
