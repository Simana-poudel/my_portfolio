import Image from 'next/image'
import React from 'react'

const HomeComponent = () => {
  return (
    <div className='flex flex-col items-center justify-between bg-background-1 py-12' id='home'>
      {/* desktop navigation */}
      <div className="md:flex hidden ">
        <div className='flex-col max-w-6xl mx-auto w-full items-center justify-center font-mono text-sm flex'>
          <div data-aos="fade-up" className='mb-4 flex justify-center'>
            <div>
              <Image 
              className='rounded-full mb-4'
              src='/myprofile.jpg'
              alt='Profile Photo'
              width={300}
              height={300}
              />
              <h5  className='text-text_color leading-6 font-medium text-xl'>Hello I'm Simana Poudel.</h5>
            </div>
          </div>
          <div  data-aos="fade-up" className='flex-col justify-center text-center '>
            <h1 className='text-4xl	font-bold	leading-5	mt-3 mb-4 animated-text'>Full Stack Developer</h1>
            <p className='mb-8 text-text_color text-lg max-w-[500px]'>I'm a Freelancer Full Stack Mern Developer based In USA, over 6 years of professional experience.</p>
            <div>
              icons
            </div>
            <div className='px-8 py-2 mt-6 border-2 inline-block rounded-full text-lg font-medium border-black hover:bg-black hover:text-white hover:cursor-pointer'>
              <a href="/Simana-cv.pdf" download>Downoad CV</a>
            </div>
          </div>
          </div>
      </div>

      {/* mobile navigation */}
      <div className="md:hidden z-10 mx-auto w-full items-center justify-center font-mono text-sm flex py-3 ">
        <div className='flex-col '>
          <div  className='mb-4 flex justify-center'>
            <div>
              <Image 
              className='rounded-full mb-4'
              src='/myprofile.jpg'
              alt='Profile Photo'
              width={250}
              height={250}
              />
              <h5  className='text-text_color leading-6 font-medium text-base text-center'>Hello I'm Simana Poudel.</h5>
            </div>
          </div>
          <div  data-aos="fade-up" className='flex-col justify-center text-center '>
            <h1 className='text-xl	font-bold	leading-5	mt-3 mb-4 animated-text'>Full Stack Developer</h1>
            <p className='mb-8 text-text_color text-base max-w-[400px]'>I'm a Freelancer Full Stack Mern Developer based In USA, over 6 years of professional experience.</p>
            <div>
              icons
            </div>
            <div className='px-8 py-2 mt-6 border-2 inline-block rounded-full text-base font-medium border-black hover:bg-black hover:text-white hover:cursor-pointer'>
              <a href="/Simana-cv.pdf" download>Downoad CV</a>
            </div>
          </div>
          </div>
      </div>

    </div>
  )
}

export default HomeComponent