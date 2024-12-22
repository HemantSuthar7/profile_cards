import React from 'react'

function Connect_btn() {
  return (
    <div className='mb-10 mt-14 mx-2'>

         <div className='flex justify-center'>

            <div className='flex justify-between sm:pt-5 pt-3 sm:pb-5 pb-3 sm:pl-4 pl-2 sm:pr-7 pr-3 rounded-full items-center border border-[#A8A8A8] bg-[#F1F1F1]'>
                <div className='mx-2'>
                  <a href="https://www.linkedin.com/in/hemant-suthar-web7/" target="_blank">
                  <button className='text-[#006DD8] pt-1 pb-1 pl-4 pr-4 rounded-full border border-[#006DD8] hover:bg-[#b2c7dc] font-normal text-xl duration-500'>Connect</button>
                  </a>
                </div>

                <div className='mx-2'>
                  <span className='text-[#656565] text-xl sm:text-2xl'>with me on :</span>
                </div>

                <div className='mx-2'>
                  <a href="https://www.linkedin.com/in/hemant-suthar-web7/" target='blank'>
                    <img src="./linkedin.png" alt="" />
                  </a>
                </div>
            </div>

          </div>
          <div className='sm:mt-2 mt-1'>
              <span className='text-xs font-normal text-[#656565]'>or just continue our conversation on internshala</span>
          </div>
    </div>
   
  )
}

export default Connect_btn