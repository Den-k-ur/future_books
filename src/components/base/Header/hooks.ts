import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { BooksServices, booksActions, booksSelectors } from 'src/store/books';
import { useAppDispatch } from 'src/store/hooks';

export const useHeader = () => {
  const dispatch = useAppDispatch();

  const searchText = useSelector(booksSelectors.searchText);
  const filter = useSelector(booksSelectors.filter);
  const subject = useSelector(booksSelectors.subject);

  const handleChangeSearchText = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;

    dispatch(booksActions.setSearchText(target.value));
  }, []);

  const handleChangeFilter = useCallback(
    (event: SelectChangeEvent) => {
      dispatch(booksActions.setFilter(event.target.value));
      dispatch(
        BooksServices.getBooksInfo({
          searchText: searchText,
          sort: event.target.value,
          subject: subject,
        }),
      );
    },
    [searchText, subject],
  );
  const handleChangeSubject = useCallback(
    (event: SelectChangeEvent) => {
      if (event.target.value !== 'All') {
        dispatch(booksActions.setSubject(event.target.value));
        dispatch(
          BooksServices.getBooksInfo({
            searchText: searchText,
            sort: filter,
            subject: event.target.value,
          }),
        );
      } else {
        dispatch(booksActions.setSubject(''));
        dispatch(
          BooksServices.getBooksInfo({
            searchText: searchText,
            sort: filter,
            subject: event.target.value,
          }),
        );
      }
    },
    [searchText, filter],
  );

  const handleKeyDownSearch = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        dispatch(
          BooksServices.getBooksInfo({ searchText: searchText, sort: filter, subject: subject }),
        );
      }
    },
    [searchText, filter, subject],
  );

  const handleSearchBook = useCallback(() => {
    dispatch(
      BooksServices.getBooksInfo({ searchText: searchText, sort: filter, subject: subject }),
    );
  }, [searchText, filter, subject]);

  return {
    handleChangeSearchText,
    handleChangeFilter,
    handleChangeSubject,
    handleSearchBook,
    handleKeyDownSearch,
  };
};
