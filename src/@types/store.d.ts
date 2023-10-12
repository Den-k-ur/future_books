type LSDEState<T> = {
  isLoading: boolean;
  isSuccess: boolean;
  error: Nullable<string>;
  isError: boolean;
  data: Nullable<T>;
};
