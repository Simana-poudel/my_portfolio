'use client'
import React from 'react'
import Tilt from "react-parallax-tilt";
import "./TiltComponent.css";
import Image from 'next/image';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';

const TiltComponent = () => {
    return (
      <div className='grid grid-cols-4 gap-8 mt-16'>
        
        <div className=''>
          <Tilt glareEnable={true} tiltMaxAngleX={10} 
          tiltMaxAngleY={10} perspective={1000} 
           scale={1.15} transitionSpeed={2500}>
              <div className='tiltComponent pl-7 hover:bg-black hover:text-white'>
                  <div className='py-11 px-10'>
                    {/* Your Code Here */}
                    <MiscellaneousServicesOutlinedIcon />
                    <h1 className='mb-5 font-semibold text-2xl'>Reactjs projects</h1>
                    <p>Learn More </p>
                  </div>
              </div>
          </Tilt>
        </div>
        
        <div className=''>
          <Tilt glareEnable={true} tiltMaxAngleX={10} 
          tiltMaxAngleY={10} perspective={1000} 
           scale={1.15} transitionSpeed={2500}>
              <div className='tiltComponent pl-7 hover:bg-black hover:text-white'>
                  <div className='py-11 px-10'>
                    {/* Your Code Here */}
                    <MiscellaneousServicesOutlinedIcon />
                    <h1 className='mb-5 font-semibold text-2xl'>Nextjs projects</h1>
                    <p>Learn More </p>
                  </div>
              </div>
          </Tilt>
        </div>
        
        <div className=''>
          <Tilt glareEnable={true} tiltMaxAngleX={10} 
          tiltMaxAngleY={10} perspective={1000} 
           scale={1.15} transitionSpeed={2500}>
              <div className='tiltComponent pl-7 hover:bg-black hover:text-white'>
                  <div className='py-11 px-10'>
                    {/* Your Code Here */}
                    <MiscellaneousServicesOutlinedIcon />
                    <h1 className='mb-5 font-semibold text-2xl'>Mern Stack Projects</h1>
                    <p>Learn More </p>
                  </div>
              </div>
          </Tilt>
        </div>
        
        <div className=''>
          <Tilt glareEnable={true} tiltMaxAngleX={10} 
          tiltMaxAngleY={10} perspective={1000} 
           scale={1.15} transitionSpeed={2500}>
              <div className='tiltComponent pl-7 hover:bg-black hover:text-white'>
                  <div className='py-11 px-10'>
                    {/* Your Code Here */}
                    <MiscellaneousServicesOutlinedIcon />
                    <h1 className='mb-5 font-semibold text-2xl'>Project with Socket</h1>
                    <p>Learn More </p>
                  </div>
              </div>
          </Tilt>
        </div>
      </div>
    )
}
  
export default TiltComponent;