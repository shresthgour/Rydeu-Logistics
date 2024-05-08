import React from "react";




const Box = () => {
  return (
    <div className="flex flex-col text-left border border-white shadow-md rounded-md  w-[352px] h-[385px] justify-center ml-8 mt-2 gap-3">
      <div className="flex justify-between  h-[42.24px] w-[352px] gap-2 bg-[#f4f4f4] rounded-md pb-1 pt-1">
        <button className="border text-[14px] h-[36px] bg-white rounded-md font-[700] text-[#FF2D5C] w-[112px]">
          One way
        </button>
        <button className=" w-[112px] text-[14px] rounded-md font-[700] text-[#484848]">
          Round Trip
        </button>
        <button className=" w-[112px] text-[14px] rounded-md font-[700] text-[484848]">
          Hourly
        </button>
      </div>
      {/* from */}
      <div className="border-b w-[340px] border-gray-300 py-2 ml-2">
        <p className="font-[600] font-Montserrat text-[#777777]">
          From{" "}
          <span className="font-[500] font-Montserrat text-[#C1C1C1]">
            (airport,hotel,address)
          </span>{" "}
        </p>
      </div>
      {/* to */}
      <div
        className="border-b w-[340px]
          ml-2 border-gray-300 py-2"
      >
        <p className="font-[600] font-Montserrat text-[#777777]">
          To{" "}
          <span className="font-[500] font-Montserrat text-[#C1C1C1]">
            (airport,hotel,address)
          </span>
        </p>
      </div>
      {/* cal */}
      <div
        className="border-b w-[340px]
          ml-2 border-gray-300 py-2 font-Montserrat text-[#C1C1C1]"
      >
        <p>Pickup Date & Time</p>
      </div>
      {/* add */}
      <div
        className="border-b w-[340px]
          ml-2 border-gray-300 py-2 font-Montserrat text-[#C1C1C1]"
      >
        <p>Add Passenger & Baggage</p>
      </div>
      {/* button */}
      <div
        className="flex border-b w-[340px]
          ml-2 border-gray-300 py-2"
      >
        <input type="checkbox" />
        <p className="ml-2 text-[#484848] font-Montserrat">
          Additional Requirements
        </p>
      </div>
      {/* search */}
      <div
        className="py-2 flex w-[340px]
         ml-2 justify-center"
      >
        <button className="border w-[343px] h-[46px] pt-2 pb-2 rounded-md bg-[#FF2D5C] text-white">
          Search
        </button>
      </div>
     
    </div>
  );
};

export default Box;
