import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { booksSelectors } from 'src/store/books';

export const useDetailedPage = () => {
  const books = useSelector(booksSelectors.books);
  const navigate = useNavigate();
  const { id } = useParams();

  const currentBook = books.find((book) => book.id === id);

  const authors = currentBook?.volumeInfo.authors?.join(', ');
  const img = currentBook?.volumeInfo.imageLinks?.thumbnail;
  const title = currentBook?.volumeInfo.title;
  const categories = currentBook?.volumeInfo.categories;
  const description = currentBook?.volumeInfo.description;

  useEffect(() => {
    if (books?.length === 0) {
      navigate('/', { replace: true });
    }
  }, [books, navigate]);

  const handleOnClick = () => {
    navigate('/');
  };

  return {
    authors,
    img,
    title,
    categories,
    description,
    handleOnClick,
  };
};
