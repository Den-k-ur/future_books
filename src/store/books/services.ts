import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import api from 'src/api';
import { API_KEY, BASE_URL } from 'src/api/constants';
import { BookInfo, BooksDTO } from 'src/models/books.dto';

type searchParams = {
  subject: string;
  searchText: string;
  sort: string;
  startIndex: number;
};

type searchDetailBook = {
  id: string;
};

export const BooksServices = {
  getBooksInfo: createAsyncThunk<BooksDTO, Omit<searchParams, 'startIndex'>>(
    'books',
    async (values, { rejectWithValue }) => {
      try {
        const response = await api.get(
          `${BASE_URL}?key=${API_KEY}&q=${values.searchText}+subject:${values.subject}&orderBy=${values.sort}&maxResults=30`,
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
  getMoreBooks: createAsyncThunk<BooksDTO, searchParams>(
    'getMoreBooks',
    async (values, { rejectWithValue }) => {
      try {
        const response = await api.get(
          `${BASE_URL}?key=${API_KEY}&q=${values.searchText}+subject:${values.subject}&orderBy=${values.sort}&maxResults=30&startIndex=${values.startIndex}`,
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
  getDetailBook: createAsyncThunk<BookInfo, searchDetailBook>(
    'getDetailBook',
    async (values, { rejectWithValue }) => {
      try {
        const response = await api.get(`${BASE_URL}/${values.id}?key=${API_KEY}`);
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
