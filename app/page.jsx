import About from '@components/About'
import Blog from '@components/Blog'
import Contact from '@components/Contact'
import HomeComponent from '@components/HomeComponent'
import Portfolio from '@components/Portfolio'
import Service from '@components/Service'
import Testimonial from '@components/Testimonial'
import React from 'react'

const page = () => {
  return (
      <main className="">
      <div >
      <HomeComponent />
      <About />
      <Service />
      <Portfolio />
      <Testimonial />
      <Blog />
      <Contact />
      </div>
    </main>
  )
}

export default page