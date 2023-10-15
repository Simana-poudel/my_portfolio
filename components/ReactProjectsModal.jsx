'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Image from 'next/image';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height:'90%',
  overflow: 'auto'
};

export default function ReactProjectsModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
        <div className="z-10 max-w-6xl mx-auto w-full items-center justify-center font-mono text-sm py-6 ">
        <div className=''>
          <h1 className='text-5xl font-extrabold mb-6'>React js Projects</h1>
          <p className='max-w-[600px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam inventore odio, alias laborum sunt dignissimos.
          </p>
        </div>
        <div data-aos="fade-right" className='pt-14 grid grid-cols-3 gap-6'>
          <div className='flex-col justify-center'>
            <Image
            className='rounded-lg'
            src='/portfolio1.jpg'
            alt='Portfolio image 1'
            width={300}
            height={300}
            />
            <div className='flex-col pt-2'>
              <div className='py-2'>
                <p className='text-description'>April 07,2021 <span className='ml-2'>.Design</span></p>
                <h1 className='text-blue font-bold text-xl'>React js library</h1>
              </div>
            </div>
          </div>
          <div className='flex-col justify-center'>
            <Image
            className='rounded-lg'
            src='/portfolio1.jpg'
            alt='Portfolio image 1'
            width={300}
            height={300}
            />
            <div className='flex-col pt-2'>
              <div className='py-2'>
                <p className='text-description'>April 07,2021 <span className='ml-2'>.Design</span></p>
                <h1 className='text-blue font-bold text-xl'>React js library</h1>
              </div>
            </div>
          </div>
          <div className='flex-col justify-center'>
            <Image
            className='rounded-lg'
            src='/portfolio1.jpg'
            alt='Portfolio image 1'
            width={300}
            height={300}
            />
            <div className='flex-col pt-2'>
              <div className='py-2'>
                <p className='text-description'>April 07,2021 <span className='ml-2'>.Design</span></p>
                <h1 className='text-blue font-bold text-xl'>React js library</h1>
              </div>
            </div>
          </div>
          
        </div>
      </div>
        </Box>
      </Modal>
    </div>
  );
}