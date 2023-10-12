import React, { FC } from 'react';
import { AlertError } from 'src/components/base/AlertError';

type AlertErrorProps = {
  hasError: boolean;
  error: string;
};

export const DisplayError: FC<AlertErrorProps> = ({ hasError, error }) => {
  return hasError ? <AlertError severity="error">{error}</AlertError> : <></>;
};
