import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BooksServices, booksActions, booksSelectors } from 'src/store/books';
import { useAppDispatch } from 'src/store/hooks';

export const useBackToMainButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const searchText = useSelector(booksSelectors.searchText);
  const filter = useSelector(booksSelectors.filter);
  const subject = useSelector(booksSelectors.subject);
  const handleBackToMain = useCallback(() => {
    dispatch(booksActions.setInitialStateDetailBookInfo());
    dispatch(
      BooksServices.getBooksInfo({
        searchText: searchText,
        sort: filter,
        subject: subject,
      }),
    );
    navigate('/');
  }, []);

  return {
    handleBackToMain,
  };
};
