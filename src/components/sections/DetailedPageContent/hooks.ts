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
    console.log(book);
    if (!book) {
      dispatch(BooksServices.getDetailBook({ id: id as string }));
    }
  }, []);

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
