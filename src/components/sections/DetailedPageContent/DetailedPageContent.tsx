import Box from '@mui/material/Box';
import React, { FC } from 'react';
import { useDetailedPage } from './hooks';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import {
  AuthorsStyles,
  DetailedPageContentContainer,
  InfoBlock,
  LoaderContainer,
  SubjectStyles,
} from './styles';
import { useSelector } from 'react-redux';
import { booksSelectors } from 'src/store/books';
import CircularProgress from '@mui/material/CircularProgress';
import { BackButton } from 'src/components/base/BackButton';

export const DetailedPageContent: FC = () => {
  const { authors, categories, description, img, title } = useDetailedPage();

  const isLoading = useSelector(booksSelectors.detailBookIsLoading);

  return (
    <Box sx={DetailedPageContentContainer}>
      {isLoading ? (
        <Box sx={LoaderContainer}>
          <CircularProgress />
        </Box>
      ) : (
        <>
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
            <BackButton />
          </Box>
        </>
      )}
    </Box>
  );
};
