import Box from '@mui/material/Box';
import React, { FC } from 'react';
import { ButtonContainer, ButtonStyles } from './styles';
import Button from '@mui/material/Button';

type LoadButtonProps = {
  disabled: boolean;
  onclick: () => void;
  isLoading: boolean;
};

export const LoadButton: FC<LoadButtonProps> = ({ disabled, isLoading, onclick }) => {
  return (
    <Box sx={ButtonContainer}>
      <Button sx={ButtonStyles} variant="contained" disabled={disabled} onClick={onclick}>
        {isLoading ? 'Loading...' : 'Load'}
      </Button>
    </Box>
  );
};
