import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='flex flex-col items-center justify-between py-24'>
      <div className="z-10 max-w-6xl mx-auto w-full items-center justify-center font-mono text-sm py-6 ">
        <div className=''>
          <h1 className='text-5xl font-extrabold mb-6'>Portfolio</h1>
          <p className='max-w-[600px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam inventore odio, alias laborum sunt dignissimos.
          </p>
        </div>
        <div data-aos="fade-right" className='pt-14 grid grid-cols-3 gap-6'>
          <div>
            <Image 
            className='rounded-lg'
            src='/portfolio1.jpg'
            alt='Portfolio image 1'
            width={400}
            height={400}
            />
          </div>
          <div>
            <Image 
            className='rounded-lg'
            src='/portfolio1.jpg'
            alt='Portfolio image 1'
            width={400}
            height={400}
            />
          </div>
          <div>
            <Image 
            className='rounded-lg'
            src='/portfolio1.jpg'
            alt='Portfolio image 1'
            width={400}
            height={400}
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Portfolio