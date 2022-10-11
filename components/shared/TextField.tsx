import * as React from 'react';
import { TextField as MuiTextField, styled } from '@mui/material';
import { color } from '../../styles/color';

const StyledTextField = styled(MuiTextField)((props: any) => {
  return {
    ...props,
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      outline: 'none',
      backgroundColor: color.darkGray,
      color: 'white',
      border: 'none'
    },
    '& .MuiOutlinedInput-root:hover': {
      outline: 'none',
      border: 'none'
    },
    '& .MuiOutlinedInput-root:focus': {
      outline: 'none'
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent'
    }
  };
});

export const TextField = () => {
  return (
    <StyledTextField
      size='small'
      placeholder='enter your message'
      inputProps={{ color: 'white' }}
      sx={{
        width: '90%',
        borderRadius: '0',
        color: 'white'
      }}
    />
  );
};
