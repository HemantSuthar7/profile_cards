import React, { useEffect, useState } from 'react'
import Card from './Card';

function Profile_card_section() {

  const[data, setData] = useState(undefined)
  const [url, setUrl] = useState("https://randomuser.me/api/?page=1&results=1&seed=abc");
  const[random, setRandom] = useState(false)
  const[fetchState, setFetchState] = useState(false)


  useEffect( () => {
    
    const fetchData = async () => {
      try {

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const userData = await response.json();
        setData(userData)

      } catch (error) {
        console.log(error.message)
      }
    }

    fetchData()
      
  },[url, fetchState])

  

  const handleRandom = () => {
    setRandom(!random)
    if(random === true ){
      setUrl("https://randomuser.me/api/?page=1&results=1&seed=abc")
    }
  }



  const handleFetch = () => {
    setFetchState(!fetchState)
    setUrl("https://randomuser.me/api/")
  }


  return (
    <div>

        {/* Text Section */}
        <div className='mt-7 mb-6 mx-6'>
            <p className='text-[#656565]'>This is the Assignment Project made by Hemant Sutar for Full Stack Developer Job at WebTree Global Private Limited</p>
        </div>

        

        {/* toggle Button */}
        <div className='mx-auto flex justify-center mt-7 mb-10'>
          <div className='flex p-4 rounded-full border-[#A8A8A8] border bg-[#F1F1F1] items-center'>
            <div>
              <p className='text-[#656565] text-sm sm:text-base ml-4 mr-2'>Random Results</p>
            </div>
            <div className='flex mr-4 ml-2'>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value={false} className="sr-only peer shadow-2xl shadow-black" onClick={handleRandom}></input>
                <div className="relative w-11 h-6 bg-[#EFEFEF] shadow-inner shadow-neutral-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full   rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-400"></div>
              </label>
            </div>
          </div>

          {/* fetch button */}
          {random && <div className='ml-5 flex p-4 rounded-full border-[#A8A8A8] border bg-[#F1F1F1] text-sm sm:text-base items-center hover:bg-neutral-600 hover:text-white cursor-pointer text-[#656565] duration-500'>
            <button className='mx-3' onClick={handleFetch}>fetch</button>
          </div>}
        </div>

        
        {/* rendering the card only if we get the data */}
        {data && <Card 
        fName={data.results[0].name.first}
        Lname={data.results[0].name.last}
        gender={data.results[0].gender}
        phone={data.results[0].phone}
        image={data.results[0].picture.large}
        >
        </Card>}
        


    </div>
  )
}

export default Profile_card_section