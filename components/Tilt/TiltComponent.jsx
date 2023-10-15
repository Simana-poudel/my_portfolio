'use client'
import React, { useState } from 'react'
import Tilt from "react-parallax-tilt";
import "./TiltComponent.css";
import Image from 'next/image';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import ReactProjectsModal from '@components/ReactProjectsModal';
import NextProjectsModal from '@components/NextProjectsModal';
import MernProjectsModal from '@components/MernProjectsModal';
import SocketProjectsModal from '@components/SocketProjectsModal';

const TiltComponent = () => {
  const [openReactModal, setOpenReactModal] = useState(false);
  const [openNextModal  , setopenNextModal  ] = useState(false)
  const [openMernModal  , setOpenMernModal  ] = useState(false)
  const [openSocketModal  , setOpenSocketModal  ] = useState(false)


  function handleOpenReactModal() {
    setOpenReactModal(true);
  }

  function handleCloseReactModal() {
    setOpenReactModal(false);
  }

  function handleOpenNextModal() {
    setopenNextModal(true);
  }

  function handleCloseNextModal() {
    setopenNextModal(false);
  }

  function handleOpenMernModal() {
    setOpenMernModal(true);
  }

  function handleCloseMernModal() {
    setOpenMernModal(false);
  }

  function handleOpenSocketModal() {
    setOpenSocketModal(true);
  }

  function handleCloseSocketModal() {
    setOpenSocketModal(false);
  }



    return (
      <>
      {/* deskop navigation */}
      <div className='md:flex hidden grid grid-cols-4 gap-8 mt-16'>
        <div className='cursor-pointer' onClick={handleOpenReactModal} >
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
        {openReactModal ? <div onClick={handleCloseReactModal}> <ReactProjectsModal /></div> : null}
        
        <div className='cursor-pointer' onClick={handleOpenNextModal} >
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
        {openNextModal ? <div onClick={handleCloseNextModal}> <NextProjectsModal /></div> : null}


        <div className='cursor-pointer' onClick={handleOpenMernModal} >
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
        {openMernModal ? <div onClick={handleCloseMernModal}> <MernProjectsModal /></div> : null}

        
        <div className='cursor-pointer' onClick={handleOpenSocketModal} >
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
        {openSocketModal ? <div onClick={handleCloseSocketModal}> <SocketProjectsModal /></div> : null}
      </div>

      {/* mobile navigation */}
      <div className='md:hidden flex grid grid-cols-2 gap-4 mt-16'>
        <div className='cursor-pointer' onClick={handleOpenReactModal} >
          <Tilt glareEnable={true} tiltMaxAngleX={10} 
          tiltMaxAngleY={10} perspective={1000} 
           scale={1.15} transitionSpeed={2500}>
              <div className='tiltComponent pl-7 hover:bg-black hover:text-white'>
                  <div className='py-11 px-5'>
                    {/* Your Code Here */}
                    <MiscellaneousServicesOutlinedIcon />
                    <h1 className='mb-5 font-semibold text-xl'>Reactjs projects</h1>
                    <p>Learn More </p>
                  </div>
              </div>
          </Tilt>
        </div>
        {openReactModal ? <div onClick={handleCloseReactModal}> <ReactProjectsModal /></div> : null}
        
        <div className='cursor-pointer' onClick={handleOpenNextModal} >
          <Tilt glareEnable={true} tiltMaxAngleX={10} 
          tiltMaxAngleY={10} perspective={1000} 
           scale={1.15} transitionSpeed={2500}>
              <div className='tiltComponent pl-7 hover:bg-black hover:text-white'>
                  <div className='py-11 px-5'>
                    {/* Your Code Here */}
                    <MiscellaneousServicesOutlinedIcon />
                    <h1 className='mb-5 font-semibold text-xl'>Nextjs projects</h1>
                    <p>Learn More </p>
                  </div>
              </div>
          </Tilt>
        </div>
        {openNextModal ? <div onClick={handleCloseNextModal}> <NextProjectsModal /></div> : null}


        <div className='cursor-pointer' onClick={handleOpenMernModal} >
          <Tilt glareEnable={true} tiltMaxAngleX={10} 
          tiltMaxAngleY={10} perspective={1000} 
           scale={1.15} transitionSpeed={2500}>
              <div className='tiltComponent pl-7 hover:bg-black hover:text-white'>
                  <div className='py-11 px-5'>
                    {/* Your Code Here */}
                    <MiscellaneousServicesOutlinedIcon />
                    <h1 className='mb-5 font-semibold text-xl'>Mern Stack Projects</h1>
                    <p>Learn More </p>
                  </div>
              </div>
          </Tilt>
        </div>
        {openMernModal ? <div onClick={handleCloseMernModal}> <MernProjectsModal /></div> : null}

        
        <div className='cursor-pointer' onClick={handleOpenSocketModal} >
          <Tilt glareEnable={true} tiltMaxAngleX={10} 
          tiltMaxAngleY={10} perspective={1000} 
           scale={1.15} transitionSpeed={2500}>
              <div className='tiltComponent pl-7 hover:bg-black hover:text-white'>
                  <div className='py-11 px-5'>
                    {/* Your Code Here */}
                    <MiscellaneousServicesOutlinedIcon />
                    <h1 className='mb-5 font-semibold text-xl'>Project with Socket</h1>
                    <p>Learn More </p>
                  </div>
              </div>
          </Tilt>
        </div>
        {openSocketModal ? <div onClick={handleCloseSocketModal}> <SocketProjectsModal /></div> : null}
      </div>
      </>
    )
}
  
export default TiltComponent;