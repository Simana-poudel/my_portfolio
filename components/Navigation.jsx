import React from 'react'
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import ArticleIcon from '@mui/icons-material/Article';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';

const Navigation = () => {
  return (
    <div className=''>
      <div className='z-10 max-w-6xl mx-auto w-full items-center justify-between font-mono text-sm lg:flex flex py-6'>
        <div>
          Simana
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
    </div>
  )
}

export default Navigation