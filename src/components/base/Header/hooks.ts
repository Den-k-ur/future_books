import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { BooksServices, booksActions, booksSelectors } from 'src/store/books';
import { useAppDispatch } from 'src/store/hooks';

export const useHeader = () => {
  const dispatch = useAppDispatch();

  const searchText = useSelector(booksSelectors.searchText);
  const filter = useSelector(booksSelectors.filter);
  const subject = useSelector(booksSelectors.subject);

  const handleChangeSearchText = useCallback((searchText: string) => {
    dispatch(booksActions.setSearchText(searchText));
  }, []);

  const handleChangeFilter = useCallback((filter: string) => {
    dispatch(booksActions.setFilter(filter));
  }, []);
  const handleChangeSubject = useCallback((subject: string) => {
    if (subject !== 'All') {
      dispatch(booksActions.setSubject(subject));
    } else dispatch(booksActions.setSubject(''));
  }, []);

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
  };
};
