import React from 'react'

function Consideration() {
  return (
    <div className='mb-7'>

        <div className='mt-14'>
          <p className='font-normal text-xl sm:text-3xl text-[#656565]'>Why Consider Me for this Role ?</p>
        </div>

        <div className='mt-6 grid grid-cols-5 gap-4 mx-20 sm:mx-12'>
            <div className='border border-[#A8A8A8] rounded-xl p-3 col-span-5 sm:col-span-1 hover:shadow-2xl hover:shadow-neutral-800 duration-500'>
                <div className='text-left'>
                  <p className='font-medium text-xl text-[#535353]'>Ability to Transform Design &rarr; code</p>
                </div>
                <div className='text-left mt-1 '>
                  <p className='font-normal text-xs text-[#656565]'>I can transform Wireframe designs into Functional code.</p>
                </div>
                <div className='flex gap-1 items-center mx-5 mt-2 justify-between p-2'>
                  <div>
                    <img src="./design.png" alt="" />
                  </div>
                  <div>
                    <span className='font-medium text-base text-[#535353]'>&rarr;</span>
                  </div>
                  <div>
                    <img src="./code.png" alt="" />
                  </div>
                </div>
            </div>
            <div className='border border-[#A8A8A8] rounded-xl p-3 col-span-5 sm:col-span-1 hover:shadow-2xl hover:shadow-neutral-800 duration-500'>
                <div className='text-left'>
                  <p className='font-medium text-xl text-[#535353]'>Full Stack SkillSet 
                  in the MERN Stack</p>
                </div>
                <div className='text-left mt-1 '>
                  <p className='font-normal text-xs text-[#656565]'>My Expertise relies in the MERN Stack for building web apps.</p>
                </div>
                <div className='flex gap-0 items-center mx-auto justify-evenly mt-7 rounded-lg mb-5'>
                  <div>
                    <img src="./mongo.png" alt="" />
                  </div>
                  <div>
                    <img src="./express.png" alt="" />
                  </div>
                  <div>
                    <img src="./react.png" alt="" />
                  </div>
                  <div>
                    <img src="./node.png" alt="" />
                  </div>
                </div>
            </div>
            <div className='border border-[#A8A8A8] rounded-xl p-3 col-span-5 sm:col-span-1 hover:shadow-2xl hover:shadow-neutral-800 duration-500'>
                <div className='text-left'>
                  <p className='font-medium text-xl text-[#535353]'>Commitment to Delivering Quality</p>
                </div>
                <div className='text-left mt-1 '>
                  <p className='font-normal text-xs text-[#656565]'>I am committed to delivering quality solutions.</p>
                </div>
                <div className='flex items-center mx-auto justify-center mt-3'>
                  <div>
                    <img src="./quality.png" alt="" />
                  </div>
                </div>
            </div>
            <div className='border border-[#A8A8A8] rounded-xl p-3 col-span-5 sm:col-span-1 hover:shadow-2xl hover:shadow-neutral-800 duration-500'>
                <div className='text-left'>
                  <p className='font-medium text-xl text-[#535353]'>Open to Learning
                  New Technologies</p>
                </div>
                <div className='text-left mt-1 '>
                  <p className='font-normal text-xs text-[#656565]'>I believe in continuous learning to grow and deliver solutions.</p>
                </div>
                <div className='flex items-center mx-auto justify-center mt-3'>
                  <div>
                    <img src="./learn.png" alt="" />
                  </div>
                </div>
            </div>
            <div className='border border-[#A8A8A8] rounded-xl p-3 col-span-5 sm:col-span-1 hover:shadow-2xl hover:shadow-neutral-800 duration-500'>
                <div className='text-left'>
                  <p className='font-medium text-xl text-[#535353]'>Proficiency in Responsive Design</p>
                </div>
                <div className='text-left mt-1 '>
                  <p className='font-normal text-xs text-[#656565]'>I craft Web Applications that are responsive in all screen sizes.</p>
                </div>
                <div className='flex items-center mx-auto justify-center mt-3'>
                  <div>
                    <img src="./responsive_design.svg" alt="" />
                  </div>
                </div>
            </div>
            
            
        </div>

    </div>
  )
}

export default Consideration