type LSDEState<T> = {
  isLoading: boolean;
  isSuccess: boolean;
  error: Nullable<string>;
  data: Nullable<T>;
};
