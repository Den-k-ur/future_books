import Button from '@mui/material/Button';
import React, { FC } from 'react';
import { useBackToMainButton } from './hooks';
import { ButtonStyle } from './styles';

export const BackToMainButton: FC = () => {
  const { handleBackToMain } = useBackToMainButton();
  return (
    <Button sx={ButtonStyle} onClick={handleBackToMain} variant="contained">
      Back
    </Button>
  );
};
