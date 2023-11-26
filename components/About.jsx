'use client';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import AboutMeModal from './AboutMeModal';


const About = () => {

  const [abouts, setAbouts] = useState([]); // Initialize state to store abouts data

  
  useEffect(() => {
    // Fetch and set the abouts data when the component mounts
    async function fetchAbouts() {
      const response = await fetch('/api/about', {
        cache: "no-store", // so that everytime we hit this end point, we get updated data
      });
      const data = await response.json();
      console.log(data);
      setAbouts(data.abouts);
    };

    fetchAbouts();
  }, []);

  if (!abouts) {
    // Render a loading state or handle the absence of data
    return <div>Loading...</div>;
  }


  return (
    <>
    {abouts.map(t => (

    <div className='flex min-h-screen flex-col items-center justify-between py-24' id='about'>
      {/* desktop navigation */}
      <div className="md:flex hidden max-w-6xl mx-auto w-full items-center justify-center font-mono text-sm py-6 ">
        <div className='overflow-hidden'>
          <div className='font-bold	text-5xl'>About Me</div>
            <div className='flex justify-between pt-12'>
              <div data-aos="fade-right" className='w-1/2'>
                <div className='mb-14 '>
                  <h3 className='text-2xl font-normal mb-4'>Hi, Im <span className='font-semibold'>Simana Poudel</span></h3>
                  <p className='max-w-[90%] text-lg font-normal text-description leading-8'>{t.description}</p>
                </div>
                <div>
                  <h3 className='font-semibold text-2xl font-normal mb-4'>{t.question}</h3>
                  <p className='max-w-[90%] text-lg font-normal text-description leading-8'>{t.questionDescription}</p>
                </div>
                <div className='grid grid-cols-2 gap-4 pt-10'>
                {t.skills.map((skill) => (
                  <div className='mb-7 pr-5' key={skill.name}>
                  <span className='text-base font-semibold mb-2'>{skill.name}</span>
                  <div className='w-full h-4 border-2 p-0.5 border-description'>
                    <div className={`bg-blue h-full w-[${skill.percentage}%]`}></div>
                  </div>
                </div>
                ))}
                </div>
                <AboutMeModal />
              </div>
              <div data-aos="fade-left" className='md:w-1/2 justify-end grid mt-4 md:mt-0 md:ml-4 flex relative'>
                <Image 
                className='justify-self-end rounded-lg'
                src='/about-me.jpg'
                width={520}
                height={720}
                alt='About me Image'
                />
              <div className=' absolute flex bottom-0 left-0 bg-blue px-6 py-6 h-64 rounded-full'>
                <div className='mt-[30%]'>
                  <div className='flex items-center justify-center text-white text-5xl font-bold'>3+ Years</div>
                    <p className='flex items-center justify-center text-white text-lg font-medium'>of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* mobile navigation */}
      <div className="md:hidden z-10 max-w-6xl mx-auto w-full items-center justify-center font-mono text-sm py-6 px-4 ">
        <div className='font-bold	text-3xl'>About Me</div>
          <div className=' justify-between pt-8'>
          <div data-aos="fade-left" className='md:w-1/2 justify-end grid mt-4 md:mt-0 md:ml-4 flex relative'>
              <Image 
              className='justify-self-end rounded-lg'
              src='/about-me.jpg'
              width={520}
              height={720}
              alt='About me Image'
              />
            <div className=' absolute flex bottom-0 left-0 bg-blue px-6 py-6 h-44 rounded-full'>
              <div className='mt-[30%]'>
                <div className='flex items-center justify-center text-white text-2xl font-bold'>3+ Years</div>
                  <p className='flex items-center justify-center text-white text-base font-medium'>of Experience</p>
                </div>
              </div>
            </div>

            <div data-aos="fade-right" className=''>
              <div className='my-14 '>
                <h3 className='text-xl font-normal mb-4'>Hi, Im <span className='font-semibold'>Simana Poudel</span></h3>
                <p className=' text-base font-normal text-description leading-8'>{t.description}</p>
              </div>
              <div>
                <h3 className='font-semibold text-xl font-normal mb-4'>{t.question}</h3>
                <p className='max-w-[90%] text-base font-normal text-description leading-8'>{t.questionDescription}</p>
              </div>
              <div className='grid grid-cols-1 gap-4 pt-10'>
              {t.skills.map((skill) => (
                <div className='mb-7 pr-5' key={skill.name}>
                <span className='text-base font-semibold mb-2'>{skill.name}</span>
                <div className='w-full h-4 border-2 p-0.5 border-description'>
                  <div className={`bg-blue h-full w-[${skill.percentage}%]`}></div>
                </div>
              </div>
              ))}
              </div>
              <AboutMeModal />
            </div>
            
          </div>
      </div>
    </div>
    ))}
    </>
  )
}

export default About