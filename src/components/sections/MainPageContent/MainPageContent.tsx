import Box from '@mui/material/Box';
import React, { FC } from 'react';

import { useSelector } from 'react-redux';
import { BookCard } from 'src/components/base/BookCard';
import { booksSelectors } from 'src/store/books';
import {
  ButtonContainer,
  ButtonStyles,
  CardsContainerStyles,
  LoaderContainer,
  MainPageContainer,
  TotalText,
} from './styles';
import Button from '@mui/material/Button';
import { useMainPage } from './hooks';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { AlertError } from 'src/components/base/AlertError';

export const MainPageContent: FC = () => {
  const books = useSelector(booksSelectors.books);
  const isLoading = useSelector(booksSelectors.isLoading);
  const moreBooksIsLoading = useSelector(booksSelectors.moreBooksIsLoading);

  const { handleGetMoreBooks, possibleCount, handleRoteToDetailInfo } = useMainPage();

  const booksTotal = useSelector(booksSelectors.booksTotal);

  const error = useSelector(booksSelectors.error);
  const hasError = useSelector(booksSelectors.hasError);

  return (
    <Box sx={MainPageContainer}>
      {isLoading ? (
        <Box sx={LoaderContainer}>
          <CircularProgress />
        </Box>
      ) : (
        books && (
          <>
            <Box sx={TotalText}>
              <Typography variant="h5">Total found: {booksTotal}</Typography>
            </Box>
            {hasError && <AlertError severity="error">{error}</AlertError>}
            <Box sx={CardsContainerStyles}>
              {books &&
                books.map((book, id) => (
                  <BookCard
                    authors={book.volumeInfo.authors}
                    image={book.volumeInfo?.imageLinks?.thumbnail}
                    subject={book.volumeInfo.categories?.[0]}
                    title={book.volumeInfo.title}
                    key={id}
                    onClick={() => handleRoteToDetailInfo(book.id)}
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
        )
      )}
    </Box>
  );
};
