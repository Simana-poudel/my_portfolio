'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

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

export default function AboutMeModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className='hover:bg-black hover:text-white border-black text-text_color text-lg font-normal px-7 py-3' variant="outlined" onClick={handleOpen}>See More</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <div className='p-4 grid grid-cols-2 gap-4 gap-y-8'>

            <div>
              <div>
                <h1 className='font-bold text-2xl pb-3 mb-8 border-b-4 border-description border-dashed	'>Personal Info</h1>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='text-base font-semibold	text-description'>First Name:<span className='text-blue ml-2'>Simana</span></p>
                </div>
                <div>
                  <p className='text-base font-semibold	text-description'>Last Name:<span className='text-blue ml-2'>Poudel</span></p>
                </div>
                <div>
                  <p className='text-base font-semibold	text-description'>Age:<span className='text-blue ml-2'>22 years</span></p>
                </div>
                <div>
                  <p className='text-base font-semibold	text-description'>Nationality:<span className='text-blue ml-2'>Nepal</span></p>
                </div>
                <div>
                  <p className='text-base font-semibold	text-description'>Freelance:<span className='text-blue ml-2'>Available</span></p>
                </div>
                <div>
                  <p className='text-base font-semibold	text-description'>Address:<span className='text-blue ml-2'>Lekthnath-31, Mohoriya</span></p>
                </div>
                <div>
                  <p className='text-base font-semibold	text-description'>Phone:<span className='text-blue ml-2'>1234567890</span></p>
                </div>
                <div>
                  <p className='text-base font-semibold	text-description'>Email:<span className='text-blue ml-2'>you@mail.com</span></p>
                </div>
                <div>
                  <p className='text-base font-semibold	text-description'>Linkend:<span className='text-blue ml-2'>simana22</span></p>
                </div>
                <div>
                  <p className='text-base font-semibold	text-description'>Languages:<span className='text-blue ml-2'>English, spanish, korean, Hindi</span></p>
                </div>
              </div>
              <Button className='hover:bg-black hover:text-white border-black text-text_color text-base font-normal px-7 py-3' variant="outlined">Download CV</Button>
            </div>

            <div>
              <div>
                <h1 className='font-bold text-2xl pb-3 mb-8 border-b-4 border-description border-dashed	'>Achievements</h1>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div className='border border-description py-5 px-8 '>
                  <p className='text-base font-semibold	text-description'><span className='text-4xl font-semibold text-blue'>06+</span>years of experience</p>
                </div>
                <div className='border border-description py-5 px-8 '>
                  <p className='text-base font-semibold	text-description'><span className='text-4xl font-semibold text-blue'>97+</span>Completed Projects</p>
                </div>
                <div className='border border-description py-5 px-8 '>
                  <p className='text-base font-semibold	text-description'><span className='text-4xl font-semibold text-blue'>81+</span>Happy Customers</p>
                </div>
                <div className='border border-description py-5 px-8 '>
                  <p className='text-base font-semibold	text-description'><span className='text-4xl font-semibold text-blue'>53+</span>Most awards Winners</p>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h1 className='font-bold text-2xl pb-3 mb-8 border-b-4 border-description border-dashed	'>Experience</h1>
              </div>
              <div >
              <div className='flex px-2 items-center bg-white py-4'>
                <div className='bg-blue rounded-full inline-block	h-16 p-4'>
                  <LocalPhoneOutlinedIcon/>
                </div>
                <div className='flex-col pt-2'>
                  <div className='py-2 ml-4'>
                    <p className='bg-gray-300 rounded-full p-2 text-sm inline-block'>2018-Present</p>
                    <h1 className='text-blue font-bold text-xl'>Web Developer - <span className='font-normal'>Websoft</span></h1>
                    <p className='text-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea reprehenderit, dolor sed</p>
                  </div>
                </div>
              </div>
              <div className='flex px-2 items-center bg-white py-4'>
                <div className='bg-blue rounded-full inline-block	h-16 p-4'>
                  <LocalPhoneOutlinedIcon/>
                </div>
                <div className='flex-col pt-2'>
                  <div className='py-2 ml-4'>
                    <p className='bg-gray-300 rounded-full p-2 text-sm inline-block'>2018-Present</p>
                    <h1 className='text-blue font-bold text-xl'>Web Developer - <span className='font-normal'>Websoft</span></h1>
                    <p className='text-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea reprehenderit, dolor sed</p>
                  </div>
                </div>
              </div>
              <div className='flex px-2 items-center bg-white py-4'>
                <div className='bg-blue rounded-full inline-block	h-16 p-4'>
                  <LocalPhoneOutlinedIcon/>
                </div>
                <div className='flex-col pt-2'>
                  <div className='py-2 ml-4'>
                    <p className='bg-gray-300 rounded-full p-2 text-sm inline-block'>2018-Present</p>
                    <h1 className='text-blue font-bold text-xl'>Web Developer - <span className='font-normal'>Websoft</span></h1>
                    <p className='text-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea reprehenderit, dolor sed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div>
              <div>
                <h1 className='font-bold text-2xl pb-3 mb-8 border-b-4 border-description border-dashed	'>Education</h1>
              </div>
              <div >
              <div className='flex px-2 items-center bg-white py-4'>
                <div className='bg-blue rounded-full inline-block	h-16 p-4'>
                  <LocalPhoneOutlinedIcon/>
                </div>
                <div className='flex-col pt-2'>
                  <div className='py-2 ml-4'>
                    <p className='bg-gray-300 rounded-full p-2 text-sm inline-block'>2018</p>
                    <h1 className='text-blue font-bold text-xl uppercase'>Engineering Degree - <span className='font-normal uppercase'>PEC</span></h1>
                    <p className='text-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea reprehenderit, dolor sed</p>
                  </div>
                </div>
              </div>
              <div className='flex px-2 items-center bg-white py-4'>
                <div className='bg-blue rounded-full inline-block	h-16 p-4'>
                  <LocalPhoneOutlinedIcon/>
                </div>
                <div className='flex-col pt-2'>
                  <div className='py-2 ml-4'>
                    <p className='bg-gray-300 rounded-full p-2 text-sm inline-block'>2018</p>
                    <h1 className='text-blue font-bold text-xl uppercase'>Engineering Degree - <span className='font-normal uppercase'>PEC</span></h1>
                    <p className='text-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea reprehenderit, dolor sed</p>
                  </div>
                </div>
              </div>
              <div className='flex px-2 items-center bg-white py-4'>
                <div className='bg-blue rounded-full inline-block	h-16 p-4'>
                  <LocalPhoneOutlinedIcon/>
                </div>
                <div className='flex-col pt-2'>
                  <div className='py-2 ml-4'>
                    <p className='bg-gray-300 rounded-full p-2 text-sm inline-block'>2018</p>
                    <h1 className='text-blue font-bold text-xl uppercase'>Engineering Degree - <span className='font-normal uppercase'>PEC</span></h1>
                    <p className='text-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea reprehenderit, dolor sed</p>
                  </div>
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