import React from 'react'
import Circle from '../assets/circle2.png'



const Section = () => {
  return (
    <div className='flex flex-col'>
      <div>
        <p className='pl-4 pt-4 mb-5 font-semibold text-[18px]'>Section title</p>
      </div>
      <div className='flex'>
        <img className='w-[10px] h-[10px] ml-4 mt-2' src={Circle} alt="" />
        <div>
          <p className='pl-2 font-semibold'>Nunc tempus tellus a dolor tristique, nec fermentum arcu?</p>
          <p className='pl-2 text-[#484848]'>Lorem ipsum dodlor sit amet consecterur adipicsing dolor sit amet coresecnetum...</p>
        </div>
      </div>
      <div className='flex mt-4'>
        <img className='w-[10px] h-[10px] ml-4 mt-2' src={Circle} alt="" />
        <div>
          <p className='pl-2 font-semibold'>Cras eget lectus ac urna interdum?</p>
          <p className='pl-2 text-[#484848]'>Lorem ipsum dodlor sit amet consecterur adipicsing dolor sit amet coresecnetum...</p>
        </div>
      </div>
      <div className='flex mt-4'>
        <img className='w-[10px] h-[10px] ml-4 mt-2' src={Circle} alt="" />
        <div>
          <p className='pl-2 font-semibold'>Phasellus tincidunt ultricies justo sit amet commodo?</p>
          <p className='pl-2 text-[#484848]'>Lorem ipsum dodlor sit amet consecterur adipicsing dolor sit amet coresecnetum...</p>
        </div>
      </div>  

    </div>
  )
}

export default Section
