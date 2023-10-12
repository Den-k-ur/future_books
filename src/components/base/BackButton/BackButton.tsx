import Button from '@mui/material/Button';
import React, { FC } from 'react';
import { useBackButton } from './hooks';
import { ButtonStyle } from './styles';

export const BackButton: FC = () => {
  const { handleBack } = useBackButton();
  return (
    <Button sx={ButtonStyle} onClick={handleBack} variant="contained">
      Back
    </Button>
  );
};
