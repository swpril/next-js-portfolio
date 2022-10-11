import * as React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';

import { color } from '../styles/color';
import { TextField } from './shared/TextField';

export const Footer = () => {
  function handleMessageSubmit() {}
  return (
    <AppBar
      position='absolute'
      sx={{
        top: 'auto',
        left: 'auto',
        bottom: 0,
        background: color.themeGray,
        maxWidth: '768px'
      }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}>
        <TextField />
        <IconButton onClick={handleMessageSubmit}>
          <svg viewBox='0 0 24 24' width='24' height='24'>
            <path
              fill='white'
              d='M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z'></path>
          </svg>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
