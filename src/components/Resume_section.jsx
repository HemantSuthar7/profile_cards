import React from 'react'

function Resume_section() {
  return (
    <div className='flex justify-center'>
      <div className="">
        <div className="mt-2 sm:mb-4 mb-3">
          <p className="font-normal text-xl sm:text-3xl text-[#656565]">
            You can also :
          </p>
        </div>

        <div className="flex items-center sm:p-4 p-2 rounded-full border-[#A8A8A8] border bg-[#F1F1F1] mb-10">
          <div>
            <span className="text-[#656565] text-xl sm:text-2xl font-normal ml-4 mr-2">
              Checkout My :
            </span>
          </div>
          <div className="flex items-center p-2 rounded-full border border-[#A8A8A8] hover:bg-[#c9c9c9] duration-500 cursor-pointer mr-4">
            <a href="https://drive.google.com/file/d/1W2ZQA7rkLO6fpvjLxs3mDqMKwhx8dFES/view?usp=sharing" target="_blank">
              <img src="./document.svg" alt="" className="inline ml-1" />
              <span className="text-[#656565] text-base ml-1 mr-2">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume_section