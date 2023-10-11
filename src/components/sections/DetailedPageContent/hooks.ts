import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { booksActions, booksSelectors } from 'src/store/books';
import { useAppDispatch } from 'src/store/hooks';

export const useDetailedPage = () => {
  const dispatch = useAppDispatch();
  const book = useSelector(booksSelectors.detailBookInfo);
  const navigate = useNavigate();

  const authors = book?.authors?.join(', ');
  const img = book?.imageLinks?.thumbnail;
  const title = book?.title;
  const categories = book?.categories;
  const description = book?.description;

  const handleOnClick = useCallback(() => {
    dispatch(booksActions.setInitialStateDetailBookInfo());
    navigate('/');
  }, []);

  return {
    authors,
    img,
    title,
    categories,
    description,
    handleOnClick,
  };
};
