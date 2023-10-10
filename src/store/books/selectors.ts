import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const root = (store: RootState) => store.books;

export const isLoading = createSelector(root, (data) => data.isLoading);

export const error = createSelector(root, (data) => data.error);

export const hasError = createSelector(root, (data) => data.hasError);

export const isSuccess = createSelector(root, (data) => data.isSuccess);

export const booksRoot = createSelector(root, (data) => data.booksInfo);

export const booksTotal = createSelector(booksRoot, (data) => data?.totalItems);

export const title = createSelector(booksRoot, (data) => data?.items);
