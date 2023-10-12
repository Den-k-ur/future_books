import Box from '@mui/material/Box';
import React, { FC } from 'react';
import { useDetailedPage } from './hooks';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { AuthorsStyles, DetailedPageContentContainer, InfoBlock, SubjectStyles } from './styles';
import { useSelector } from 'react-redux';
import { booksSelectors } from 'src/store/books';
import { BackToMainButton } from 'src/components/base/BackToMainButton';
import { AlertError } from 'src/components/base/AlertError';
import { Loader } from 'src/components/base/Loader';

export const DetailedPageContent: FC = () => {
  const { authors, categories, description, img, title } = useDetailedPage();

  const isLoading = useSelector(booksSelectors.detailBookIsLoading);

  const hasError = useSelector(booksSelectors.detailBookInfoIsError);
  const error = useSelector(booksSelectors.detailBookInfoError);

  return (
    <Box sx={DetailedPageContentContainer}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {hasError && <AlertError severity="error">{error}</AlertError>}
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
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{description}</ReactMarkdown>
            <BackToMainButton />
          </Box>
        </>
      )}
    </Box>
  );
};
