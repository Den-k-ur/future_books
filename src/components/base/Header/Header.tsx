import React, { FC } from 'react';

//MUI components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';

//styles
import { FiltersBlockStyles, HeaderStyles, SelectWithTextStyles } from './styles';

//components
import { SearchBar } from 'src/components/base/SearchBar';

import { useHeader } from './hooks';
import { FiltersBlock } from '../FiltersBlock';

export const Header: FC = () => {
  const {
    handleSearchBook,
    handleChangeSearchText,
    handleKeyDownSearch,
    searchText,
    selectValues,
  } = useHeader();

  return (
    <Box sx={HeaderStyles}>
      <Typography variant="h3">Search for Books</Typography>
      <SearchBar
        onClick={handleSearchBook}
        placeholder="Enter book title"
        onChange={handleChangeSearchText}
        onKeyDown={handleKeyDownSearch}
        value={searchText}
      />
      <Box sx={FiltersBlockStyles}>
        {selectValues.map((value) => (
          <FiltersBlock
            onChange={value.onChange}
            name={value.name}
            selectItem={value.selectItem}
            value={value.value}
            key={value.id}
            defaultValue={value.defaultValue}
          />
        ))}
      </Box>
    </Box>
  );
};
