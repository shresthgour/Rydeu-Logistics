import React from 'react';
import user_img from '../assets/Navbar/avatar.png';
import menu from '../assets/Navbar/menu.png';


const Navbar = () => {
  return (
    <>
      <div className="w-[375px] h-[50px] flex justify-between items-center shadow-md z-10">  
          <div className="pl-[12px]">
            <p className='font-inter font-semibold text-[18px] text-[#FD2E5A]'>LOGO</p>
          </div>
          <div className="flex items-center text-center">
            <div className="mr-[25px]">
              <p className='font-montserrat text-[10px] font-semibold text-[#484848]'>Other Requests</p>
            </div>
            <div className="">
              <img src={user_img} alt="user_img" className='w-[12px] h-[15px]' />
            </div>
            <div className="pr-[12px]">
              <img src={menu} alt="menu_image" className='w-[21px] h-[21px]'/>
            </div>
          </div>
      </div> 
    </>
  )
}

export default Navbar