import { BooksDTO } from 'src/models/books.dto';

export type BooksState = {
  hasError: boolean;
  error: string | null;
  isSuccess: boolean;
  isLoading: boolean;
  booksInfo: BooksDTO | null;
};
