import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BooksServices, booksSelectors } from 'src/store/books';
import { useAppDispatch } from 'src/store/hooks';

export const useDetailedPage = () => {
  const book = useSelector(booksSelectors.detailBookInfo);

  const dispatch = useAppDispatch();

  const { id } = useParams();
  useEffect(() => {
    if (!book) {
      dispatch(BooksServices.getDetailBook({ id: id as string }));
    }
  }, []);

  const { authors, imageLinks, title, description, categories } = book || {};

  return {
    authors: authors?.join(', '),
    img: imageLinks?.thumbnail,
    title,
    categories,
    description,
  };
};
