import React from 'react';

// mui components
import Alert, { AlertProps } from '@mui/material/Alert';

export const AlertError: React.FC<AlertProps> = (props) => {
  return <Alert severity="error" {...props} />;
};
