'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import ReactProjectsModal from './ReactProjectsModal';

const Blog = () => {
const [openBlog, setOpenBlog] = useState(false);

  function handleOpenBlog() {
    setOpenBlog(true);
  }

  function handleCloseBlog() {
    setOpenBlog(false);
  }
  return (
    <div className='flex flex-col items-center justify-between py-24'>
      {/* desktop navigation */}
      <div className='md:flex hidden'>
        <div className="z-10 max-w-6xl mx-auto w-full items-center justify-center font-mono text-sm py-6 ">
          <div className=''>
            <h1 className='text-5xl font-extrabold mb-6'>Blog</h1>
            <p className='max-w-[600px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam inventore odio, alias laborum sunt dignissimos.
            </p>
          </div>
          <div data-aos="fade-right" className='pt-14 grid grid-cols-3 gap-6'>
            <div className='flex-col justify-center hover:cursor-pointer' onClick={handleOpenBlog}>
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
      </div>

      {/* mobile navigation */}
      <div className='md:hidden flex mx-6'>
        <div className="z-10 mx-auto w-full items-center justify-center font-mono text-sm py-6 ">
          <div className=''>
            <h1 className='text-3xl font-extrabold mb-6'>Blog</h1>
            <p className='max-w-[600px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam inventore odio, alias laborum sunt dignissimos.
            </p>
          </div>
          <div data-aos="fade-right" className='pt-14 grid grid-cols-1 gap-6'>
            <div className='flex-col justify-center hover:cursor-pointer' onClick={handleOpenBlog}>
              <Image
              className='rounded-lg'
              src='/portfolio1.jpg'
              alt='Portfolio image 1'
              width={350}
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
              width={350}
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
              width={350}
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
      </div>
      
      {openBlog ? <div onClick={handleCloseBlog}> <ReactProjectsModal /></div> : null}
    </div>
  )
}

export default Blog