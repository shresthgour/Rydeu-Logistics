import React from 'react';
import crossIcon from '../assets/x-circle 1.png';
import mapView from '../assets/mapView.png';
import detailsImg from '../assets/details.png';
import arrowDown from '../assets/downArrow.png';
import randomIcon from '../assets/iconRounded.png';
import prePayment from '../assets/prePayment.png';
import pop from '../assets/pop.png';
import pop2 from '../assets/pop2.png';

const Card1 = () => {


  return (
    <div className='flex flex-col w-[100vw] justify-center items-center'>
      <div className="w-[340px] h-[auto] relative">
        <div className="h-[30px] w-[100%] flex bg-[#EFEFEF] items-center text-center justify-center">
          <h2 className='font-latoFont font-[700] text-[13px] tracking-wider text-[#161616]'>Request Details</h2>
          <img
            src={crossIcon}
            alt="Cross Icon"
            className="absolute top-[-7px] right-[-7px] w-4 h-4"
          />
        </div>
        <div className="h-[auto] w-[100%] bg-[#F7F7F7] pl-[5px] pr-[5px]">
          <div className="w-[100%] flex justify-between pt-[5px]">
            <p className='font-latoFont font-[500] text-[10px] tracking-wider text-[#484848]'>Request ID : 123456789012</p>
            <p className='font-latoFont font-[400] italic text-[9px] tracking-wider text-[#B9B9B9]'>Created 4th Oct, 2019</p>
          </div>

          <div className="w-[100%] flex justify-between pt-[5px]">
            <div className="">
              <p className="font-latoFont font-[900] text-[8px] tracking-wider text-[#004A85]">FORWARD</p>
              <p className="font-latoFont font-[900] text-[11.5px] tracking-wider text-[#484848]">10 Feb, 2020 | 11:00 AM</p>
            </div>
            <div className="">
              <p className="font-latoFont font-[900] text-[8px] tracking-wider text-[#004A85]">RETURN</p>
              <p className="font-latoFont font-[900] text-[11.5px] tracking-wider text-[#484848]">12 Feb, 2020 | 09:30 PM</p>
            </div>
          </div>

          <div className="w-[100%] pt-[15px]">
            <img src={mapView} alt="mapView" className='w-[100%]' />
          </div>

          <div className="border-t-2 border-l-2 border-dotted border-gray-300 my-2 mb-2"></div>

          <div className="w-[100%]">
            <img src={detailsImg} alt="mapView" className='w-[100%]' />
          </div>

          <div className="border-t-2 border-l-2 border-dotted border-gray-300 my-2 mb-2"></div>

          <div className="pb-7">
            <p className="font-latoFont font-[700] text-[8.5px] tracking-wider text-[#004A85] pl-2">CUSTOMER COMMENTS</p>
            <p className="font-latoFont font-[400] text-[11px] tracking-wider text-[#484848] pl-2">Lorem ipsum dolor sit amet consecterur adipiscing elit.</p>
          </div>
        </div>
      </div>

      <div className="w-[340px] h-[auto] flex flex-col mt-10">
        <div className="h-[30px] w-[100%] flex bg-[#EFEFEF] items-center text-center justify-center">
          <h2 className='font-latoFont font-[700] text-[13px] tracking-wider text-[#161616] '>Create Offer</h2>
        </div>
        <div className="h-[auto] w-[100%] bg-[#F7F7F7] pl-[5px] pr-[5px]">
          <div className="flex flex-col pl-3 pr-2">
            <p className="font-latoFont font-[700] text-[12px] tracking-wider text-[#161616]  mt-[12px]">Offer Vehicle</p>
            <div className="bg-white w-[311px] h-[57.88px] border border-[#DDDDDD] rounded-sm flex items-center justify-between pl-[10px] pr-[10px] mt-[8px]">
              <p className="font-latoFont font-[400] text-[12px] tracking-wider text-[#484848]">Select your Vehicle</p>
              <img src={arrowDown} alt="arrowDown" className='w-[15px] h-[10px]' />
            </div>
            <div className="flex items-center">
              <p className="font-latoFont font-[500] text-[20px] tracking-wider text-[#004A85]">+</p>
              <p className="font-latoFont font-[400] text-[12px] tracking-wider text-[#004A85] pl-[8px]">Add new vehicle</p>
            </div>
          </div>

          <div className="w-full border-b border-gray-300 mb-6 mt-4 pl-3"></div>

          <div className="pl-3 pr-3">
            <p className="font-latoFont font-[700] text-[12px] tracking-wider text-[#161616]">Offer Ancillary</p>
            <div className="flex flex-wrap mt-5 ">
              <div className="w-[75px] h-[100px] flex flex-col items-center">
                <img src={randomIcon} alt="randomIcon" className='w-[49px] h-[49px] mb-1'/>
                <p className="font-latoFont font-[500] text-[10px] tracking-wider text-[#484848]">Porter Service</p>
              </div>
              <div className="w-[75px] h-[100px] flex flex-col items-center">
                <img src={randomIcon} alt="randomIcon" className='w-[49px] h-[49px] mb-1'/>
                <p className="font-latoFont font-[500] text-[10px] tracking-wider text-[#484848]">Wifi</p>
              </div>
              <div className="w-[75px] h-[100px] flex flex-col items-center">
                <img src={randomIcon} alt="randomIcon" className='w-[49px] h-[49px] mb-1'/>
                <p className="font-latoFont font-[500] text-[10px] tracking-wider text-[#484848]">Child Seat</p>
              </div>
              <div className="w-[75px] h-[100px] flex flex-col items-center">
                <img src={randomIcon} alt="randomIcon" className='w-[49px] h-[49px] mb-1'/>
                <p className="font-latoFont font-[500] text-[10px] tracking-wider text-[#484848]">Wheel chair</p>
              </div>
              <div className="w-[75px] h-[100px] flex flex-col items-center">
                <img src={randomIcon} alt="randomIcon" className='w-[49px] h-[49px] mb-1'/>
                <p className="font-latoFont font-[500] text-[10px] tracking-wider text-[#484848]">Meet & greet</p>
              </div>
              <div className="w-[75px] h-[100px] flex flex-col items-center">
                <img src={randomIcon} alt="randomIcon" className='w-[49px] h-[49px] mb-1'/>
                <p className="font-latoFont font-[500] text-[10px] tracking-wider text-[#484848]">Bottled water</p>
              </div>
            </div>
          </div>

          <div className="w-full border-b border-gray-300 mb-6 pl-3"></div>

          <div className="pl-3 pr-3">
            <p className="font-latoFont font-[700] text-[12px] tracking-wider text-[#161616]">Offer Price</p>
            <p className="font-roboto font-[400] text-[12px] text-[#161616] pt-5">Booking Options for Customer</p>
            <div className="bg-white w-[300px] h-[57.88px] border border-[#DDDDDD] rounded-sm flex items-center justify-between pl-[10px] pr-[10px] mt-[8px]">
              <p className="font-latoFont font-[500] text-[12px] tracking-wider text-[#484848]">Both</p>
              <img src={arrowDown} alt="arrowDown" className='w-[15px] h-[10px]' />
            </div>
            <div className="mt-5 flex justify-between">
              <div className="">
                <p className="font-latoFont font-[400] text-[12px] tracking-wider text-[#161616] ">One Way</p>
                <div className="bg-white w-[130px] h-[37px] border border-[#DDDDDD] rounded-md mt-2">
                  <div className="bg-[#E2EBF4] w-[30%] h-full flex items-center justify-center">
                    <p className="text-[15px]">€</p>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="font-latoFont font-[400] text-[12px] tracking-wider text-[#161616] ">Return</p>
                <div className="bg-white w-[130px] h-[37px] border border-[#DDDDDD] rounded-md mt-2">
                  <div className="bg-[#E2EBF4] w-[30%] h-full flex items-center justify-center">
                    <p className="text-[15px]">€</p>
                  </div>
                </div>
              </div>
            </div>  
          </div>

          <div className="w-[100%] pt-[15px]">
            <img src={prePayment} alt="mapView" className='w-[100%]' />
            <img src={pop} alt="pop" className='w-[100%]' />
            <img src={pop2} alt="pop2" className='w-[100%]' />
          </div>


        </div>
      </div>

      <div className="pl-9 pr-3 mt-5 mb-10">
        <p className="font-latoFont font-[400] text-[14px] tracking-wider text-[#3D3D3D]">Note: Total amount you get should be all inclusive (VAT, any tolls, parking fee etc)</p>
      </div>
    </div>
  );
};

export default Card1;