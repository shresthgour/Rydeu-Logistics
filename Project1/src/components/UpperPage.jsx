import React from 'react';
import question from '../assets/Body/question.png';
import exportImg from '../assets/Body/export.png';

const UpperPage = () => {
  return (
    <>
      <div className="bg-main-background bg-cover bg-center w-[100vw] h-[30vh] flex flex-col items-center">
        <div className="pt-[59px] text-center">
          <h1 className='font-montserrat text-[20px] font-[700] text-[#073A4D] leading-[24px]'>Hello, how can we help you?</h1>
          <h2 className='font-montserrat text-[14px] font-[500] text-[#484848] leading-[17px] pt-[15px]'>Find Travel guide, FAQ, chat,</h2>
        </div>
        <div className="w-[350px] h-[67px] border-[1.5px] border-[#EFEFEF] rounded-md shadow-md bg-white flex mt-[10vw]">
          <div className="w-[15%] flex items-center justify-center">
            <img src={question} alt="question" height={'24px'} width={'24px'} />
          </div>
          <div className="w-[65%] flex flex-col justify-center pl-[5px]">
            <p className='font-montserrat text-[12px] font-[700] text-[#484848]'>FAQ</p>
            <p className='font-montserrat text-[10px] font-[400] text-[#A8A8A8]'>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="w-[20%] flex items-center justify-center">
            <img src={exportImg} alt="exportImg" height={'16px'} width={'16px'} color='#777777' />
          </div>
        </div>
      </div>
    </>
  )
}

export default UpperPage