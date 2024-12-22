import React from 'react'

function Header() {
  return (
    <div>
      <div className='pt-2 pb-2 flex justify-between bg-[#F1F1F1] border-b border-[#A8A8A8]'>
      <div className='flex sm:ml-3 ml-1 border border-[#A8A8A8] bg-white rounded-full p-2 items-center'>
        <div className='sm:ml-1'>
          <img src="./My-image.png" alt="" />
        </div>
        <div>
          <p className='text-sm sm:text-xl md:text-2xl font-medium ml-1 sm:mr-2 sm:ml-2 text-[#4D4D4D]'>
            HEMANT SUTAR
          </p>
        </div>
      </div>
      <div className='flex sm:mr-3 mr-1 items-center'>
        <p className='text-[#4D4D4D]'>
          Visit my :
        </p>
        <div className=' mx-2 cursor-pointer'>
          <a href="https://github.com/HemantSuthar7" target='blank'>
            <img src="./github.png" alt="" />
          </a>
        </div>
        <div className='mr-1 cursor-pointer'>
          <a href="https://www.linkedin.com/in/hemant-suthar-web7/" target='blank'>
            <img src="./linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Header