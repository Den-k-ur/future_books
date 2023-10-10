import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import api from 'src/api';
import { API_KEY, BASE_URL } from 'src/api/constants';
import { BooksDTO } from 'src/models/books.dto';

type searchParams = {
  subject: string;
  searchText: string;
  sort: string;
};

export const BooksServices = {
  booksInfo: createAsyncThunk<BooksDTO, searchParams>(
    'books',
    async (values, { rejectWithValue }) => {
      try {
        const response = await api.get(
          `${BASE_URL}key=${API_KEY}&q=${values.searchText}+subject:${values.subject}&rderBy=${values.sort}`,
        );
        return response.data;
      } catch (err) {
        const error = err as AxiosError;
        if (!error.response) {
          throw err;
        }
        return rejectWithValue(error.response);
      }
    },
  ),
};
