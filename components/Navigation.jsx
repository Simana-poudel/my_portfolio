'use client';
import React, { useState, useEffect } from 'react';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import ArticleIcon from '@mui/icons-material/Article';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-scroll";

const Navigation = () => {

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const projectSection = document.getElementById('project');
      const portfolioSection = document.getElementById('portfolio');
      const testimonialSection = document.getElementById('testimonial');
      const contactSection = document.getElementById('contact');

      const sections = [
        { section: 'home', ref: homeSection },
        { section: 'about', ref: aboutSection },
        { section: 'project', ref: projectSection },
        { section: 'portfolio', ref: portfolioSection },
        { section: 'testimonial', ref: testimonialSection },
        { section: 'contact', ref: contactSection },
      ];

      for (const { section, ref } of sections) {
        if (ref && ref.getBoundingClientRect().top <= 0) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (section) => {
    return section === activeSection ? 'cursor-pointer bg-background-1' : '';
  };


  return (
    <div className='sticky top-0 bg-white z-10'>
      {/* desktop view */}
      <div className='md:flex bg-white hidden z-10 max-w-6xl mx-auto w-full items-center justify-between font-mono text-sm py-6 grid gap-4 grid-col-'>
        <div>
          <Image 
          src={'/logo.png'}
          alt='Simana logo'
          height={100}
          width={100}
          />
        </div>
        <div className='flex'>
          <div className={`flex mr-3 px-5 py-3 rounded-lg hover:cursor-pointer hover:bg-background-1 ${isActive('home')}`}>
            <HouseOutlinedIcon />
            <div className='ml-2 text-base '>
              <Link 
              to="home" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500}
              >
              Home
              </Link>
            </div>
          </div>

          <div className={`flex mr-3 px-5 py-3 rounded-lg hover:cursor-pointer hover:bg-background-1 ${isActive('about')}`}>
            <PersonOutlineOutlinedIcon />
            <div className='ml-2 text-base'>
              <Link 
              to="about"
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500}
              >
              About
              </Link>
            </div>
          </div>

          <div className={`flex mr-3 px-5 py-3 rounded-lg hover:cursor-pointer hover:bg-background-1 ${isActive('project')}`}>
            <MiscellaneousServicesOutlinedIcon />
            <div className='ml-2 text-base'>
            <Link 
              to="project"
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500}
              >
              Projects
              </Link>
            </div>
          </div>

          <div className={`flex mr-3 px-5 py-3 rounded-lg hover:cursor-pointer hover:bg-background-1 ${isActive('portfolio')}`}>
            <ArticleIcon />
            <div className='ml-2 text-base'>
            <Link 
              to="portfolio"
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500}
              >
              Portfolio
              </Link>
            </div>
          </div>

          <div className={`flex mr-3 px-5 py-3 rounded-lg hover:cursor-pointer hover:bg-background-1 ${isActive('testimonial')}`}>
            <ManageAccountsIcon />
            <div className='ml-2 text-base'>
            <Link 
              to="testimonial"
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500}
              >
              Testimonial
              </Link>
            </div>
          </div>

          <div className={`flex mr-3 px-5 py-3 rounded-lg hover:cursor-pointer hover:bg-background-1 ${isActive('contact')}`}>
            <ContactPageOutlinedIcon />
            <div className='ml-2 text-base'>
            <Link 
              to="contact"
              spy={true} 
              smooth={true} 
              offset={-150} 
              duration={500}
              >
              Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

{/* mobile view */}
      <div className='md:hidden z-10 max-w-6xl mx-auto w-full items-center justify-between font-mono text-sm flex py-4'>
        <div>
          <Image 
          src={'/logo.png'}
          alt='Simana logo'
          height={100}
          width={100}
          />
        </div>
        <div className='mr-4'>
          <MenuIcon />
        </div>
      </div>
      
    </div>
  )
}

export default Navigation