import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'src/api';
import { API_KEY, BASE_URL } from 'src/api/constants';
import { BookInfo, BooksDTO } from 'src/models/books.dto';
import { returnError } from 'src/utils/returnError';

type searchParams = {
  subject: string;
  searchText: string;
  sort: string;
  startIndex: number;
};

type searchDetailBook = {
  id: string;
};

const getBooksBaseAPI = (values: Omit<searchParams, 'startIndex'>) => {
  const sub = values.subject && values.subject !== 'All' ? `+subject:${values.subject}` : '';
  return `${BASE_URL}?key=${API_KEY}&q=${values.searchText}${sub}&orderBy=${values.sort}&maxResults=30`;
};

export const BooksServices = {
  getBooksInfo: createAsyncThunk<BooksDTO, Omit<searchParams, 'startIndex'>>(
    'books',
    async (values, { rejectWithValue }) => {
      if (values.searchText !== '') {
        try {
          const response = await api.get(`${getBooksBaseAPI(values)}`);
          return response.data;
        } catch (err) {
          return returnError(err, rejectWithValue);
        }
      } else {
        return { totalItems: 0, items: [] };
      }
    },
  ),
  getMoreBooks: createAsyncThunk<BooksDTO, searchParams>(
    'getMoreBooks',
    async (values, { rejectWithValue }) => {
      try {
        const response = await api.get(
          `${getBooksBaseAPI(values)}&startIndex=${values.startIndex}`,
        );
        return response.data;
      } catch (err) {
        return returnError(err, rejectWithValue);
      }
    },
  ),
  getDetailBook: createAsyncThunk<BookInfo, searchDetailBook>(
    'getDetailBook',
    async (values, { rejectWithValue }) => {
      try {
        const response = await api.get(`${BASE_URL}/${values.id}?key=${API_KEY}`);
        return response.data;
      } catch (err) {
        return returnError(err, rejectWithValue);
      }
    },
  ),
};
