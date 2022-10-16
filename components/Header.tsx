import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  styled
} from '@mui/material';
import Image from 'next/image';

import SwprilDP from '../assets/images/swpril.jpeg';
import { color } from '../styles/color';
import Modal from './shared/Modal';

const StyledAppBar = styled(AppBar)(() => ({
  background: color.themeGray,
  color: 'white',
  display: 'flex',
  alignItems: 'center'
}));

export const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = React.useCallback(() => setOpen(true), []);
  const handleClose = React.useCallback(() => setOpen(false), []);

  const [time, setTime] = React.useState<{ minutes: number; hours: number }>(
    {} as any
  );

  React.useEffect(() => {
    setTime({ minutes: new Date().getMinutes(), hours: new Date().getHours() });
  }, []);

  return (
    <>
      <StyledAppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }} onClick={handleOpen}>
                <Avatar>
                  <Image
                    src={SwprilDP}
                    alt='Swpril Ahuja profile picture'
                    width={96}
                    height={120}
                  />
                </Avatar>
              </IconButton>
            </Box>

            <Box className='mx-2'>
              <Typography
                variant='subtitle1'
                noWrap
                component='p'
                sx={{ mr: 2, display: { md: 'flex' }, lineHeight: 'initial' }}>
                Swpril Ahuja
              </Typography>
              <Typography
                variant='caption'
                noWrap
                component='p'
                sx={{
                  mr: 2,
                  display: { md: 'flex' },
                  color: color.themeLightGray
                }}>
                last seen today at {time.hours}:
                {time.minutes < 10 ? '0' + time.minutes : time.minutes}
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>

      <Modal open={open} handleClose={handleClose} />
    </>
  );
};
