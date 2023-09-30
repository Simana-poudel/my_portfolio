import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <div className='flex flex-col items-center justify-between py-24'>
      <div className="z-10 max-w-6xl mx-auto w-full items-center justify-center font-mono text-sm py-6 ">
        <div className=''>
          <h1 className='text-5xl font-extrabold mb-6'>Blog</h1>
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
    </div>
  )
}

export default Blog