import { BookInfo, BooksDTO } from 'src/models/books.dto';

export type BooksState = {
  hasError: boolean;
  error: string | null;
  isSuccess: boolean;
  isLoading: boolean;
  booksInfo: BooksDTO;
  detailBookInfo: BookInfo | null;
  searchText: string;
  filter: string;
  subject: string;
  maxResults: number;
  page: number;
  moreButtons: {
    hasError: boolean;
    error: string | null;
    isSuccess: boolean;
    isLoading: boolean;
  };
};
