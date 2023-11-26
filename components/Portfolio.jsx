import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div id='portfolio' className='flex flex-col items-center justify-between py-24 bg-background-1'>
      {/* desktop navigation */}
      <div className='md:flex hidden'>
        <div className=" max-w-6xl mx-auto w-full items-center justify-center font-mono text-sm py-6 ">
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

{/* mobile navigation */}
      <div className='md:hidden flex mx-3'>
        <div className="z-10 max-w-6xl mx-auto w-full items-center justify-center font-mono text-sm py-6 ">
          <div className=''>
            <h1 className='text-3xl font-extrabold mb-4'>Portfolio</h1>
            <p className='max-w-[600px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam inventore odio, alias laborum sunt dignissimos.
            </p>
          </div>
          <div data-aos="fade-right" className='pt-14 grid grid-cols-1 gap-4'>
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
    </div>
  )
}

export default Portfolio