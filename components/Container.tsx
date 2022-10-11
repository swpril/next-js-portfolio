import React from 'react';

import { Box, styled } from '@mui/material';

import { Header } from './Header';
import { Footer } from './Footer';
import BG_IMG from '../assets/images/bg.webp';

const StyledBox = styled(Box)(() => ({
  height: '100vh',
  flexBasis: '100px',
  background: `url(${BG_IMG.src})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'relative'
}));

export const Container = () => {
  return (
    <StyledBox>
      <Header />
      <Footer />
    </StyledBox>
  );
};
