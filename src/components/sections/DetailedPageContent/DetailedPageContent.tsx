import Box from '@mui/material/Box';
import React, { FC } from 'react';
import { useDetailedPage } from './hooks';
import Typography from '@mui/material/Typography';
import {
  AuthorsStyles,
  ButtonStyle,
  DetailedPageContentContainer,
  InfoBlock,
  SubjectStyles,
} from './styles';
import Button from '@mui/material/Button';

export const DetailedPageContent: FC = () => {
  const { authors, categories, description, img, title, handleOnClick } = useDetailedPage();

  return (
    <Box sx={DetailedPageContentContainer}>
      <Box>
        <img src={img} alt="" />
      </Box>
      <Box sx={InfoBlock}>
        <Typography variant="caption" sx={SubjectStyles}>
          {categories}
        </Typography>
        <Typography variant="h5">{title}</Typography>
        <Typography sx={AuthorsStyles} variant="body2">
          {authors}
        </Typography>
        <Typography>{description}</Typography>
        <Button sx={ButtonStyle} onClick={handleOnClick} variant="contained">
          Back
        </Button>
      </Box>
    </Box>
  );
};
