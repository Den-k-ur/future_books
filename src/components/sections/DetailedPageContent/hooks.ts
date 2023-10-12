import { useSelector } from 'react-redux';
import { booksSelectors } from 'src/store/books';

export const useDetailedPage = () => {
  const book = useSelector(booksSelectors.detailBookInfo);

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
