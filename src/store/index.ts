import { combineReducers, configureStore } from '@reduxjs/toolkit';

import reducers from './reducers';

const combinedReducer = combineReducers(reducers);

const reducer: typeof combinedReducer = (state, action) => {
  return combinedReducer(state, action);
};

export const makeStore = () => configureStore({ reducer });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
