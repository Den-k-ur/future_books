import Box from '@mui/material/Box';
import React, { FC } from 'react';

import { useSelector } from 'react-redux';
import { BookCard } from 'src/components/base/BookCard';
import { booksSelectors } from 'src/store/books';
import {
  ButtonContainer,
  ButtonStyles,
  CardsContainerStyles,
  MainPageContainer,
  TotalText,
} from './styles';
import Button from '@mui/material/Button';
import { useMainPage } from './hooks';
import Typography from '@mui/material/Typography';
import { AlertError } from 'src/components/base/AlertError';
import { Loader } from 'src/components/base/Loader';

export const MainPageContent: FC = () => {
  const books = useSelector(booksSelectors.books);
  const isLoading = useSelector(booksSelectors.isLoading);
  const moreBooksIsLoading = useSelector(booksSelectors.moreBooksIsLoading);

  const { handleGetMoreBooks, possibleCount } = useMainPage();

  const booksTotal = useSelector(booksSelectors.booksTotal);

  const error = useSelector(booksSelectors.error);
  const hasError = useSelector(booksSelectors.hasError);

  return (
    <Box sx={MainPageContainer}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Box sx={TotalText}>
            <Typography variant="h5">Total found: {booksTotal}</Typography>
          </Box>
          {hasError && <AlertError severity="error">{error}</AlertError>}
          <Box sx={CardsContainerStyles}>
            {books &&
              books.length > 0 &&
              books.map(({ volumeInfo: { authors, categories, imageLinks, title }, id }) => (
                <BookCard
                  authors={authors}
                  image={imageLinks?.thumbnail}
                  subject={categories?.[0]}
                  title={title}
                  key={id}
                  id={id}
                />
              ))}
          </Box>
          {books && books.length > 0 && (
            <Box sx={ButtonContainer}>
              <Button
                sx={ButtonStyles}
                variant="contained"
                disabled={moreBooksIsLoading || booksTotal <= possibleCount}
                onClick={handleGetMoreBooks}
              >
                {moreBooksIsLoading ? 'Loading...' : 'Load'}
              </Button>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};
