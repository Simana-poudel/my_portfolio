import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center justify-between py-24 bg-background-1'>
      <div className="z-10 max-w-6xl mx-auto w-full items-center justify-center font-mono text-sm py-6 ">
        <div className=''>
          <h1 className='text-5xl font-extrabold mb-6'>Testimonials</h1>
          <p className='max-w-[600px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam inventore odio, alias laborum sunt dignissimos.
          </p>
        </div>
        <div data-aos="fade-right" className='pt-14 grid grid-cols-2 gap-6'>
          
          <div className='bg-white px-4'>
            <div className='px-12 py-12 mb-8 flex-col'>
              <div className='grid grid-cols-2 gap-0 mb-9'>
                <div className='flex'>
                  <Image 
                  className='rounded-full'
                    src='/myprofile.jpg'
                    width={70}
                    height={70}
                    alt='Testimonial Image'
                  />
                  <div className='ml-4 py-4' >
                    <h1>Asmita Poudel</h1>
                    <p className='text-description'>Marketing Manager</p>
                  </div>
                </div>
                <div className='flex justify-end'>
                  <Image 
                  className=''
                    src='/quote.svg'
                    width={90}
                    height={80}
                    alt='Testimonial Image'
                  />
                </div>
              </div>
              <p className='text-description'>Lorem ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing. sit amet consectetur adipisicing elit. Ullam inventore odio, alias laborum sunt dignissimos.</p>
            </div>
          </div>

          <div className='bg-white px-4'>
            <div className='px-12 py-12 mb-8 flex-col'>
              <div className='grid grid-cols-2 gap-0 mb-9'>
                <div className='flex'>
                  <Image 
                  className='rounded-full'
                    src='/myprofile.jpg'
                    width={70}
                    height={70}
                    alt='Testimonial Image'
                  />
                  <div className='ml-4 py-4' >
                    <h1>Asmita Poudel</h1>
                    <p className='text-description'>Marketing Manager</p>
                  </div>
                </div>
                <div className='flex justify-end'>
                  <Image 
                  className=''
                    src='/quote.svg'
                    width={90}
                    height={80}
                    alt='Testimonial Image'
                  />
                </div>
              </div>
              <p className='text-description'>Lorem ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing. sit amet consectetur adipisicing elit. Ullam inventore odio, alias laborum sunt dignissimos.</p>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  )
}

export default Testimonial