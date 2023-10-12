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
import { useBookCard } from './hooks';

type BookCardProps = {
  image: string;
  title: string;
  authors: string[];
  subject?: string;
  id: string;
};

export const BookCard: FC<BookCardProps> = ({ authors, image, subject, title, id }) => {
  const { handleRoteToDetailInfo } = useBookCard(id);
  return (
    <Box sx={CardStyles} onClick={handleRoteToDetailInfo}>
      <Box sx={CardImageStyles}>{image ? <img src={image} /> : <Box sx={BlankImageStyles} />}</Box>
      <Box sx={BooksInfoBlock}>
        <Typography sx={SubjectStyles}>{subject && subject}</Typography>
        <Typography>{title && title}</Typography>

        {authors && (
          <Typography sx={AuthorsStyles} variant="caption">
            {authors.join(', ')}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
