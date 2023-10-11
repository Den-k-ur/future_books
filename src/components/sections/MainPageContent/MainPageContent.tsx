import Box from '@mui/material/Box';
import React, { FC } from 'react';

import { useSelector } from 'react-redux';
import { BookCard } from 'src/components/base/BookCard';
import { booksSelectors } from 'src/store/books';
import { CardsContainerStyles } from './styles';
import Button from '@mui/material/Button';

export const MainPageContent: FC = () => {
  const books = useSelector(booksSelectors.books);
  console.log(books);

  return (
    <Box sx={CardsContainerStyles}>
      {books &&
        books.map((book, id) => (
          <BookCard
            authors={book.volumeInfo.authors}
            image={book.volumeInfo.imageLinks.thumbnail}
            subject={book.volumeInfo.categories?.[0]}
            title={book.volumeInfo.title}
            key={id}
          />
        ))}
      <Box>
        <Button>sdadsa</Button>
      </Box>
    </Box>
  );
};
