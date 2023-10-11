import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';
import {
  AuthorsStyles,
  BlankImageStyles,
  BooksInfoBlock,
  CardImageStyles,
  CardStyles,
  SubjectStyles,
} from './styles';

type BookCardProps = {
  image: string;
  title: string;
  authors: string[];
  subject?: string;
  onClick?: () => void;
};

export const BookCard: FC<BookCardProps> = ({ authors, image, subject, title, onClick }) => {
  return (
    <Box sx={CardStyles} onClick={onClick}>
      <Box sx={CardImageStyles}>{image ? <img src={image} /> : <Box sx={BlankImageStyles} />}</Box>
      <Box sx={BooksInfoBlock}>
        <Typography sx={SubjectStyles}>{subject && subject}</Typography>
        <Typography>{title}</Typography>

        {authors && (
          <Typography sx={AuthorsStyles} variant="caption">
            {authors.join(', ')}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
