import { useSelector } from 'react-redux';
import { booksSelectors } from 'src/store/books';

export const BOOKS_CATEGORIES = [
  { id: '001', value: 'All' },
  { id: '002', value: 'art' },
  { id: '003', value: 'biography' },
  { id: '004', value: 'computers' },
  { id: '005', value: 'history' },
  { id: '006', value: 'medical' },
  { id: '007', value: 'poetry' },
];

export const BOOKS_FILTERS = [
  { id: '001', value: 'relevance' },
  { id: '002', value: 'newest' },
];
