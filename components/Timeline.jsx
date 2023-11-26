import Image from 'next/image'
import React from 'react'

const Timeline = () => {
  return (
    <div className='flex flex-col items-center justify-between py-24'>
      {/* desktop navigation */}
      <div className='md:flex hidden'>
        <div className="max-w-6xl mx-auto w-full items-center justify-center font-mono text-sm py-6 ">
          <div className=''>
            <h1 className='text-5xl font-extrabold mb-6'>Timeline</h1>
          </div>
          <div data-aos="fade-right" className='pt-14 relative'>
             {/* Create the vertical line */}
             <div className='timeline-line'></div>
             {/* Add your timeline events or content here */}
            {/* For example, you can create timeline items */}
            <div className=''>

              {/* Timeline item 1 */}
              <div className='timeline-item'>
                {/* Content for timeline item 1 */}
                <div className='flex-col pt-2 mb-10'>
                    <div className='py-2 flex'> 
                      <div className='w-6 h-4 rounded-full border-2 border-black bg-black z-1'></div>
                      <div className='ml-10'>
                        <p className='bg-gray-300 rounded-full p-2 text-sm inline-block'>2018-Present</p>
                        <h1 className='text-blue font-bold text-xl'>Web Developer - <span className='font-normal'>Websoft</span></h1>
                        <p className='text-description w-[60%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea reprehenderit, dolor sed Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere autem reprehenderit sunt dolores architecto assumenda dicta. Aliquam consequatur nesciunt neque.</p>
                      </div>
                    </div>
                  </div>
              </div>

              {/* Timeline item 2 */}
              <div className='timeline-item'>
                {/* Content for timeline item 2 */}
                <div className='flex-col pt-2 mb-10'>
                  <div className='py-2 flex'> 
                    <div className='w-6 h-4 rounded-full border-2 border-black bg-black z-1'></div>
                    <div className='ml-10'>
                      <p className='bg-gray-300 rounded-full p-2 text-sm inline-block'>2017-2022</p>
                      <h1 className='text-blue font-bold text-xl'>Web Developer - <span className='font-normal'>Websoft</span></h1>
                      <p className='text-description w-[60%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea reprehenderit, dolor sed Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere autem reprehenderit sunt dolores architecto assumenda dicta. Aliquam consequatur nesciunt neque.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline item 3 */}
              <div className='timeline-item'>
                {/* Content for timeline item 2 */}
                <div className='flex-col pt-2 mb-10'>
                  <div className='py-2 flex'> 
                    <div className='w-6 h-4 rounded-full border-2 border-black bg-black z-1'></div>
                    <div className='ml-10'>
                      <p className='bg-gray-300 rounded-full p-2 text-sm inline-block'>2016-2017</p>
                      <h1 className='text-blue font-bold text-xl'>Web Developer - <span className='font-normal'>Websoft</span></h1>
                      <p className='text-description w-[60%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea reprehenderit, dolor sed Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere autem reprehenderit sunt dolores architecto assumenda dicta. Aliquam consequatur nesciunt neque.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* mobile navigation */}
      <div className='md:hidden flex'>
        <div className="z-10 px-3 mx-auto w-full items-center justify-center font-mono text-sm">
          <div className=''>
            <h1 className='text-3xl font-extrabold mb-6'>Timeline</h1>
          </div>
          <div data-aos="fade-right" className='pt-14 relative'>
             {/* Create the vertical line */}
             <div className='timeline-line'></div>
             {/* Add your timeline events or content here */}
            {/* For example, you can create timeline items */}
            <div className=''>

              {/* Timeline item 1 */}
              <div className='timeline-item'>
                {/* Content for timeline item 1 */}
                <div className='flex-col pt-2 mb-10'>
                    <div className='py-2 flex'> 
                      <div className='w-6 h-4 rounded-full border-2 border-black bg-black z-1'></div>
                      <div className='ml-10'>
                        <p className='bg-gray-300 rounded-full p-2 text-sm inline-block'>2018-Present</p>
                        <h1 className='text-blue font-bold text-xl'>Web Developer - <span className='font-normal'>Websoft</span></h1>
                        <p className='text-description w-[60%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea reprehenderit, dolor sed Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere autem reprehenderit sunt dolores architecto assumenda dicta. Aliquam consequatur nesciunt neque.</p>
                      </div>
                    </div>
                  </div>
              </div>

              {/* Timeline item 2 */}
              <div className='timeline-item'>
                {/* Content for timeline item 2 */}
                <div className='flex-col pt-2 mb-10'>
                  <div className='py-2 flex'> 
                    <div className='w-6 h-4 rounded-full border-2 border-black bg-black z-1'></div>
                    <div className='ml-10'>
                      <p className='bg-gray-300 rounded-full p-2 text-sm inline-block'>2017-2022</p>
                      <h1 className='text-blue font-bold text-xl'>Web Developer - <span className='font-normal'>Websoft</span></h1>
                      <p className='text-description w-[60%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea reprehenderit, dolor sed Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere autem reprehenderit sunt dolores architecto assumenda dicta. Aliquam consequatur nesciunt neque.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline item 3 */}
              <div className='timeline-item'>
                {/* Content for timeline item 2 */}
                <div className='flex-col pt-2 mb-10'>
                  <div className='py-2 flex'> 
                    <div className='w-6 h-4 rounded-full border-2 border-black bg-black z-1'></div>
                    <div className='ml-10'>
                      <p className='bg-gray-300 rounded-full p-2 text-sm inline-block'>2016-2017</p>
                      <h1 className='text-blue font-bold text-xl'>Web Developer - <span className='font-normal'>Websoft</span></h1>
                      <p className='text-description w-[60%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea reprehenderit, dolor sed Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere autem reprehenderit sunt dolores architecto assumenda dicta. Aliquam consequatur nesciunt neque.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline