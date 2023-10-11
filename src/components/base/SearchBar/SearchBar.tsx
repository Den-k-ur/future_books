import React, { ChangeEvent, FC, KeyboardEvent } from 'react';

//MUI components
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

import { SearchBarStyles } from './styles';

type SearchBarProps = {
  placeholder: string;
  value: string;
  onClick?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
};

export const SearchBar: FC<SearchBarProps> = ({
  onClick,
  onChange,
  onKeyDown,
  placeholder,
  value,
}) => {
  return (
    <TextField
      sx={SearchBarStyles}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onKeyDown={onKeyDown}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={onClick}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
