import Image from 'next/image'
import React from 'react'

const HomeComponent = () => {
  return (
    <div className='flex min-h-screen items-center justify-between p-24 bg-background-1'>
      <div className="z-10 max-w-6xl mx-auto w-full items-center justify-center font-mono text-sm flex py-6 ">
        <div className='flex-col '>
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

    </div>
  )
}

export default HomeComponent