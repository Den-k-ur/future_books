import NotFound from 'src/pages/notFound';
import DetailedBookPage from '../pages/detailedBookPage';
import MainPage from 'src/pages/main';

export const PATHS = {
  MAIN: '/',
  BOOKS: '/book',
  BOOKS_DETAIL: '/:id',
  PAGE_404: '*',
};

export const ROUTERS = [
  {
    url: PATHS.MAIN,
    Element: MainPage,
    id: '000',
  },
  {
    url: PATHS.BOOKS + PATHS.BOOKS_DETAIL,
    Element: DetailedBookPage,
    id: '001',
  },
  {
    url: PATHS.PAGE_404,
    Element: NotFound,
    id: '002',
  },
];
