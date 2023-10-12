import { AxiosError } from 'axios';

export const returnError = (err: unknown, rejectWithValue: (value: unknown) => void) => {
  if (err instanceof AxiosError && err.response) {
    return rejectWithValue(err.response.data.error.message);
  }
  throw err;
};
