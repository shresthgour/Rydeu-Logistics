import React from 'react'
import mainLogo from '../assets/Rydeu_blue 3.png';
import menuIcon from '../assets/Group 96.png';

const Navbar = () => {
  return (
    <>
      <div className="flex h-[54.5px] mt-[10px] mb-[20px]">
        <div className="h-[100%] flex items-center justify-center pl-[16px] pr-[16px]">
          <img src={menuIcon} alt="menuIcon" className='w-[24px] h-[24px]' />
        </div>
        <div className="">
          <img src={mainLogo} alt="mainLogo" className='w-[82px] h-[29px]'/>
          <p className='font-latoFont font-[400] text-[11px] tracking-[4%] text-[#484848]'>Solution for all ground transfers</p>
        </div>
      </div> 
    </>
  )
}

export default Navbar