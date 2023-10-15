import Image from 'next/image'
import React from 'react'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-between py-24'>
      <div className="z-10 max-w-6xl mx-auto w-full items-center justify-center font-mono text-sm py-6 ">
        <div className=''>
          <h1 className='text-5xl font-extrabold mb-6'>Contact</h1>
          <p className='max-w-[600px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam inventore odio, alias laborum sunt dignissimos.
          </p>
        </div>
        <div data-aos="fade-right" className='pt-14 grid grid-cols-3 gap-6 '>
          
          <div className='flex px-8 items-center bg-background-1 py-12'>
            <div className='bg-blue rounded-full inline-block	h-16 p-4'>
            <LocalPhoneOutlinedIcon/>
            </div>
            <div className='flex-col pt-2'>
              <div className='py-2 ml-4'>
                <h1 className='text-blue font-bold text-xl'>Phone</h1>
                <p className='text-description'>+9815116528</p>
                <p className='text-description'>+9815116528</p>

              </div>
            </div>
          </div>

          <div className='flex px-8 items-center bg-background-1 py-12'>
            <div className='bg-blue rounded-full inline-block	h-16 p-4'>
            <EmailOutlinedIcon/>
            </div>
            <div className='flex-col pt-2'>
              <div className='py-2 ml-4'>
                <h1 className='text-blue font-bold text-xl'>Email</h1>
                <p className='text-description'>Poudelsimana22@gmail.com</p>
                <p className='text-description'>simana7@gmail.com</p>

              </div>
            </div>
          </div>

          <div className='flex px-8 items-center bg-background-1 py-12'>
            <div className='bg-blue rounded-full inline-block	h-16 p-4'>
            <HomeOutlinedIcon/>
            </div>
            <div className='flex-col pt-2'>
              <div className='py-2 ml-4'>
                <h1 className='text-blue font-bold text-xl'>Address</h1>
                <p className='text-description'>Kaski</p>
                <p className='text-description'>Pokhara-31, Mohoriya</p>
              </div>
            </div>
          </div>
        </div>
          <div data-aos="fade-right" className='grid grid-cols-2 gap-4 mt-16 '>
            <div className='bg-background-1'>
            <div className='p-8'>
              <div className=''>
                <p className='mb-5 text-xl text-description'>I am always open to discussing product <br/>
                <span className='font-bold text-xl text-black'>design work or partnerships.</span> </p>
              </div>
              <div className='py-6'>
                <div className='mb-4'>
                  <TextField className='w-full' id="standard-basic" label="Name *" variant="standard" />
                </div>
                <div className='mb-4'>
                  <TextField className='w-full' id="standard-basic" label="Email" variant="standard" />
                </div>
                <div className='mb-4'>
                  <TextField className='w-full' id="standard-basic" label="Message" variant="standard" />
                </div>
              </div>
              <Button className='hover:bg-black hover:text-white border-black text-text_color text-lg font-normal px-7 py-3' variant="outlined">Submit</Button>
              </div>
            </div>
            <div className='overflow-hidden'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14067.796929164293!2d84.0919920150659!3d28.178459379276706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995980202647001%3A0x88b3c3625fbda20e!2sBegnas%20Lake!5e0!3m2!1sen!2snp!4v1695893460754!5m2!1sen!2snp" width="570" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact