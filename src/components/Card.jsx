import React from 'react'

function Card({fName, Lname, gender, phone, image}) {
  return (
    <div className='mx-auto flex justify-center duration-500'>
      <div className='flex border border-[#515151] rounded-xl shadow-md shadow-zinc-800 sm:p-6 p-4 hover:shadow-2xl hover:shadow-zinc-800 duration-500 mx-auto'>
        <div className='rounded-md'>
          <img src={image} alt="person image" className='rounded-md'/>
        </div>

        <div>
          <div className='flex-col flex items-start ml-5 sm:mr-5'>
            <div className='mt-3 sm:text-lg text-base text-left'>
                <span className='font-semibold'>
                  {fName}
                </span>
                <span className='font-semibold ml-1'>
                  {Lname}
                </span>
            </div>

            <div className='text-base font-normal'>
              <span className='text-[#515151]'>{gender}</span> 
            </div>
            
            <div className='flex mt-6 items-center'>
              <div>
                  <img src="./contact_icon.svg" alt="" />
              </div>
              <div>
                <span className='text-[#515151] text-sm font-normal ml-1 mb-1'>{phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        
        
    </div>
  )
}

export default Card