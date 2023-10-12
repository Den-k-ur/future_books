import { BookInfo, BooksDTO } from 'src/models/books.dto';

export type BooksState = {
  hasError: boolean;
  error: Nullable<string>;
  isSuccess: boolean;
  isLoading: boolean;
  booksInfo: BooksDTO;
  detailBookInfo: LSDEState<BookInfo>;
  searchText: string;
  filter: string;
  subject: string;
  maxResults: number;
  page: number;
  moreButtons: {
    hasError: boolean;
    error: Nullable<string>;
    isSuccess: boolean;
    isLoading: boolean;
  };
};
