import About from '@components/About'
import Blog from '@components/Blog'
import Contact from '@components/Contact'
import HomeComponent from '@components/HomeComponent'
import Portfolio from '@components/Portfolio'
import Service from '@components/Service'
import Testimonial from '@components/Testimonial'
import Timeline from '@components/Timeline'
import React from 'react'

const page = () => {
  return (
      <main className="">
      <div >
      <HomeComponent />
      <About />
      <Service />
      <Timeline/>
      <Portfolio />
      <Blog />
      <Testimonial />
      <Contact />
      </div>
    </main>
  )
}

export default page