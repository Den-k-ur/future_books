import { useCallback, useState } from 'react';
import { BooksServices } from 'src/store/books';
import { useAppDispatch } from 'src/store/hooks';

export const useHeader = () => {
  const dispatch = useAppDispatch();
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('relevance');
  const [subject, setSubject] = useState('');

  const handleChangeSearchText = useCallback((searchText: string) => {
    setSearchText(searchText);
  }, []);

  const handleChangeFilter = useCallback((filter: string) => {
    setFilter(filter);
  }, []);
  const handleChangeSubject = useCallback((subject: string) => {
    if (subject !== 'All') {
      setSubject(subject);
    } else setSubject('');
  }, []);

  const handleSearchBook = useCallback(() => {
    dispatch(BooksServices.booksInfo({ searchText: searchText, sort: filter, subject: subject }));
  }, [searchText, filter, subject]);

  return {
    handleChangeSearchText,
    handleChangeFilter,
    handleChangeSubject,
    handleSearchBook,
  };
};
