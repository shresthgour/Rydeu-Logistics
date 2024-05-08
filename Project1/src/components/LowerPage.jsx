import React from 'react';
import exportImg from '../assets/Body/export.png';
import downArrow from '../assets/Body/downArrow.png';
import upArrow from '../assets/Body/upArrow.png';
import message from '../assets/Body/message.png';
import TravelGuide from '../assets/Body/travelGuide.png';
import chat from '../assets/Body/chat.png';
import whatsapp from '../assets/Body/whatsapp.png';
import telegram from '../assets/Body/telegram.png';
import liveChat from '../assets/Body/message.png';
import social from '../assets/Body/social.png';
import sendQuery from '../assets/Body/query.png'

const LowerPage = () => {
  return (
    <>
      <div className="w-[100vw] flex flex-col items-center">
        {/* Travel Guide */}
        <div className="w-[350px] h-[67px] border-[1.5px] border-[#EFEFEF] rounded-md shadow-md bg-white flex">
          <div className="w-[15%] flex items-center justify-center">
            <img src={TravelGuide} alt="question" height={'27px'} width={'21px'} />
          </div>
          <div className="w-[65%] flex flex-col justify-center pl-[5px]">
            <p className='font-montserrat text-[12px] font-[700] text-[#484848]'>Travel Guide</p>
            <p className='font-montserrat text-[10px] font-[400] text-[#A8A8A8]'>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="w-[20%] flex items-center justify-center">
            <img src={downArrow} alt="downArrow" height={'13px'} width={'13px'} color='#777777' />
          </div>
        </div>

        {/* Chat */}
        <div className="w-[350px] h-[156px] border-[1.5px] border-[#EFEFEF] rounded-md shadow-md bg-white flex flex-col mt-[20px]">
          <div className="w-[100%] h-[81px] bg-white flex">
            <div className="w-[15%] flex items-center justify-center">
              <img src={chat} alt="question" height={'27px'} width={'21px'} />
            </div>
            <div className="w-[65%] flex flex-col justify-center pl-[5px]">
              <p className='font-montserrat text-[12px] font-[700] text-[#484848]'>Chat</p>
              <p className='font-montserrat text-[10px] font-[400] text-[#A8A8A8]'>Lorem ipsum dolor sit amet consecterur adipiscing elit</p>
            </div>
            <div className="w-[20%] flex items-center justify-center">
              <img src={upArrow} alt="exportImg" height={'13px'} width={'13px'} color='#777777' />
            </div>
          </div>
          <div className="w-[100%] h-[75px] flex pl-[52px] pr-[52px] justify-around">
            <div className="flex flex-col items-center justify-center">
              <img src={telegram} alt="telegram" height={'30px'} width={'30px'} />
              <p className='font-montserrat text-[11px] font-[500] text-[#000000]'>Telegram</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={whatsapp} alt="whatsapp" height={'30px'} width={'30px'} />
              <p className='font-montserrat text-[11px] font-[500] text-[#000000]'>Whatsapp</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={liveChat} alt="liveChat" height={'30px'} width={'30px'} />
              <p className='font-montserrat text-[11px] font-[500] text-[#000000]'>Live Chat</p>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="w-[350px] h-[67px] border-[1.5px] border-[#EFEFEF] rounded-md shadow-md bg-white flex mt-[20px]">
          <div className="w-[15%] flex items-center justify-center">
            <img src={social} alt="social" height={'24px'} width={'26px'} />
          </div>
          <div className="w-[65%] flex flex-col justify-center pl-[5px]">
            <p className='font-montserrat text-[12px] font-[700] text-[#484848]'>Social</p>
            <p className='font-montserrat text-[10px] font-[400] text-[#A8A8A8]'>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="w-[20%] flex items-center justify-center">
            <img src={downArrow} alt="downArrow" height={'13px'} width={'13px'} color='#777777' />
          </div>
        </div>

        {/* Send Query */}
        <div className="w-[350px] h-[67px] border-[1.5px] border-[#EFEFEF] rounded-md shadow-md bg-white flex mt-[20px]">
          <div className="w-[15%] flex items-center justify-center">
            <img src={sendQuery} alt="sendQuery" height={'24px'} width={'20px'} />
          </div>
          <div className="w-[65%] flex flex-col justify-center pl-[5px]">
            <p className='font-montserrat text-[12px] font-[700] text-[#484848]'>Social</p>
            <p className='font-montserrat text-[10px] font-[400] text-[#A8A8A8]'>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="w-[20%] flex items-center justify-center">
            <img src={downArrow} alt="downArrow" height={'13px'} width={'13px'} color='#777777' />
          </div>
        </div>
      </div>
    </>
  )
}

export default LowerPage