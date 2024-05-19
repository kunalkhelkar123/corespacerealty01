import React from "react";
import phone from "../homepage/phone.png";
import building from "../homepage/building.jpg";

function DummyTestCarousel() {
  return (
    <div className="flex flex-col justify-evenly gap-2 sm:mr-3  leading-7 items-start max-w-[290px] p-3 bg-white border border-gray-200 rounded-lg shadow md:ml">
      <div className="relative">
        <img className="w-[100%] relative" src={building} alt="" srcSet="" />
        <span className="absolute top-[12px] bg-red-500 right-[1px] p-[6px] text-white">
          Pre-launch
        </span>
      </div>

      <h5 className="text-xl font-medium">Vtg pegauses</h5>
      <div className="flex gap-6 ">
        <span>
          <img className="w-5" src={phone} alt="phone-img" />
        </span>
        <p>data</p>
      </div>
      <div className="flex gap-6 ">
        <span>
          <img className="w-5" src={phone} alt="phone-img" />
        </span>
        <p>data</p>
      </div>
      <div className="flex gap-6 ">
        <span>
          <img className="w-5 " src={phone} alt="phone-img" />
        </span>
        <p>data</p>
      </div>

      <div className="flex w-[100%]  justify-between items-center">
        <h6>6000</h6>
        <button className="border-[#FFF848] bg-[#FFF848] hover:bg-[#390255]  hover:border-[#390255] hover:text-white p-1 rounded-lg">view all</button>
      </div>
    </div>
  );
}

export default DummyTestCarousel;
