import React from 'react'
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import ArticleIcon from '@mui/icons-material/Article';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = () => {
  return (
    <div className=''>
      {/* desktop view */}
      <div className='md:flex hidden z-10 max-w-6xl mx-auto w-full items-center justify-between font-mono text-sm py-6 grid gap-4 grid-col-'>
        <div>
          <Image 
          src={'/logo.png'}
          alt='Simana logo'
          height={100}
          width={100}
          />
        </div>
        <div className='flex'>
          <div className='flex mr-3 px-5 py-3 rounded-lg hover:cursor-pointer	 hover:bg-background-1'>
            <HouseOutlinedIcon />
            <div className='ml-2 text-base '>Home</div>
          </div>

          <div className='flex mr-3 px-5 py-3 rounded-lg hover:cursor-pointer	 hover:bg-background-1'>
            <PersonOutlineOutlinedIcon />
            <div className='ml-2 text-base'>About</div>
          </div>

          <div className='flex mr-3 px-5 py-3 rounded-lg hover:cursor-pointer	 hover:bg-background-1'>
            <MiscellaneousServicesOutlinedIcon />
            <div className='ml-2 text-base'>Services</div>
          </div>

          <div className='flex mr-3 px-5 py-3 rounded-lg hover:cursor-pointer	 hover:bg-background-1'>
            <ArticleIcon />
            <div className='ml-2 text-base'>Portfolio</div>
          </div>

          <div className='flex mr-3 px-5 py-3 rounded-lg hover:cursor-pointer	 hover:bg-background-1'>
            <ManageAccountsIcon />
            <div className='ml-2 text-base'>Testimonial</div>
          </div>

          <div className='flex mr-3 px-5 py-3 rounded-lg hover:cursor-pointer	 hover:bg-background-1'>
            <ContactPageOutlinedIcon />
            <div className='ml-2 text-base'>Contact</div>
          </div>
        </div>
      </div>

{/* mobile view */}
      <div className='md:hidden z-10 max-w-6xl mx-auto w-full items-center justify-between font-mono text-sm flex py-4'>
        <div>
          <Image 
          src={'/logo.png'}
          alt='Simana logo'
          height={100}
          width={100}
          />
        </div>
        <div className='mr-4'>
          <MenuIcon />
        </div>
      </div>
      
    </div>
  )
}

export default Navigation