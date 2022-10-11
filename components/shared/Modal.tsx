import * as React from 'react';
import { Box, Modal } from '@mui/material';

import Image from 'next/image';
import SwprilDP from '../../assets/images/swpril.jpeg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  padding: '2rem 3rem',
  outline: 'none'
};

const BasicModal = ({
  open,
  handleClose
}: {
  open: boolean;
  handleClose: () => void;
}) => (
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby='profile picture modal'
    aria-describedby='a mirror selfie of swpril ahuja'>
    <Box sx={style}>
      <Image src={SwprilDP} alt='swpril ahuja image' />
    </Box>
  </Modal>
);

export default React.memo(BasicModal);
