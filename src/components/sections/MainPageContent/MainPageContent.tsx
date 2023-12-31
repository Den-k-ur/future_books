import Box from '@mui/material/Box';
import React, { FC } from 'react';

import { useSelector } from 'react-redux';
import { BookCard } from 'src/components/base/BookCard';
import { booksSelectors } from 'src/store/books';
import { CardsContainerStyles, MainPageContainer, TotalText } from './styles';
import { useMainPage } from './hooks';
import Typography from '@mui/material/Typography';
import { DisplayError } from 'src/components/base/DisplayError';
import { LayoutWithLoader } from 'src/components/environment/LayoutWithLoader';
import { LoadButton } from 'src/components/base/LoadButton';
import Grid from '@mui/material/Grid';

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
      <LayoutWithLoader isLoading={isLoading}>
        <>
          <Box sx={TotalText}>
            <Typography variant="h5">Total found: {booksTotal}</Typography>
          </Box>
          <DisplayError error={error} hasError={hasError} />
          {books.length > 0 && (
            <>
              <Box sx={CardsContainerStyles}>
                <Grid container spacing={2}>
                  {books.map(({ volumeInfo: { authors, categories, imageLinks, title }, id }) => (
                    <Grid item xs={6} sm={4} md={3} lg={2} key={id}>
                      <BookCard
                        authors={authors}
                        image={imageLinks?.thumbnail}
                        subject={categories?.[0]}
                        title={title}
                        key={id}
                        id={id}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <LoadButton
                disabled={moreBooksIsLoading || booksTotal <= possibleCount}
                isLoading={moreBooksIsLoading}
                onclick={handleGetMoreBooks}
              />
            </>
          )}
        </>
      </LayoutWithLoader>
    </Box>
  );
};
