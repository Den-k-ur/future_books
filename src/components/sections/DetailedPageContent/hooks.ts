import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { BooksServices, booksSelectors } from 'src/store/books';
import { useAppDispatch } from 'src/store/hooks';

export const useDetailedPage = () => {
  const book = useSelector(booksSelectors.detailBookInfo);
  const isError = useSelector(booksSelectors.detailBookInfoIsError);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (!book) {
      dispatch(BooksServices.getDetailBook({ id: id as string }));
    }
  }, [book, id]);

  if (isError) {
    navigate('/404');
  }

  const authors = book?.authors?.join(', ');
  const img = book?.imageLinks?.thumbnail;
  const title = book?.title;
  const categories = book?.categories;
  const description = book?.description;

  return {
    authors,
    img,
    title,
    categories,
    description,
  };
};
