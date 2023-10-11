import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';
import { BooksInfoBlock, CardImageStyles, CardStyles, SubjectStyles } from './styles';

type BookCardProps = {
  image?: string;
  title?: string;
  authors: string[];
  subject?: string;
};

export const BookCard: FC<BookCardProps> = ({ authors, image, subject, title }) => {
  return (
    <Box sx={CardStyles}>
      <Box sx={CardImageStyles}>
        <img src={image} />
      </Box>
      <Box sx={BooksInfoBlock}>
        <Typography sx={SubjectStyles}>{subject && subject}</Typography>
        <Typography>{title}</Typography>

        {authors && <Typography variant="caption">{authors.join(', ')}</Typography>}
      </Box>
    </Box>
  );
};
