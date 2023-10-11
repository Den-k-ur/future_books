import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { MAX_RESULTS } from 'src/api/constants';
import { BooksServices, booksActions, booksSelectors } from 'src/store/books';
import { useAppDispatch } from 'src/store/hooks';

export const useMainPage = () => {
  const dispatch = useAppDispatch();
  const currentPage = useSelector(booksSelectors.page);

  const searchText = useSelector(booksSelectors.searchText);
  const filter = useSelector(booksSelectors.filter);
  const subject = useSelector(booksSelectors.subject);
  const navigate = useNavigate();

  const startIndex = (currentPage + 1) * MAX_RESULTS;

  const possibleCount = currentPage * MAX_RESULTS;

  const handleGetMoreBooks = useCallback(() => {
    dispatch(
      BooksServices.getMoreBooks({
        searchText: searchText,
        sort: filter,
        subject: subject,
        startIndex: startIndex,
      }),
    );
    dispatch(booksActions.setPage(currentPage + 1));
  }, [currentPage, searchText, filter, subject, startIndex]);

  const handleGetDetailInfo = useCallback((id: string) => {
    dispatch(BooksServices.getDetailBook({ id: id }));
    navigate(`/book/${id}`);
  }, []);

  return {
    handleGetMoreBooks,
    possibleCount,
    handleGetDetailInfo,
  };
};
