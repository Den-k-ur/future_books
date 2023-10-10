import React, { FC } from 'react';

//MUI components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';

//styles
import { FiltersBlockStyles, HeaderStyles, SelectWithTextStyles } from './styles';

//components
import { SearchBar } from 'src/components/base/SearchBar';
import { FiltersSelect } from 'src/components/base/FiltersSelect';

import { BOOKS_CATEGORIES, BOOKS_FILTERS } from './constants';

export const Header: FC = () => {
  return (
    <Box sx={HeaderStyles}>
      <Typography variant="h3">Search for Books</Typography>
      <SearchBar />
      <Box sx={FiltersBlockStyles}>
        <Box sx={SelectWithTextStyles}>
          <Typography>Category: </Typography>
          <FiltersSelect defaultValue="All">
            {BOOKS_CATEGORIES.map((category) => (
              <MenuItem key={category.id} value={category.category}>
                {category.category}
              </MenuItem>
            ))}
          </FiltersSelect>
        </Box>
        <Box sx={SelectWithTextStyles}>
          <Typography>Order by: </Typography>
          <FiltersSelect defaultValue="relevance">
            {BOOKS_FILTERS.map((filter) => (
              <MenuItem key={filter.id} value={filter.filter}>
                {filter.filter}
              </MenuItem>
            ))}
          </FiltersSelect>
        </Box>
      </Box>
    </Box>
  );
};
