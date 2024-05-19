/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import CardImage from '../Investment/investment.jpeg';
import { Link } from "react-router-dom";


const Card = ({ data }) => {
  // const {
  //   Area,
  //   QuotedPrice,
  //   TenurePeriod,
  //   LockinPeriod,
  //   TenantCategory,
  //   Size,
  //   ROIRate,
  // } = data;


  
    const {
      propertyTitle,
      propertyType,
      propertyDescription,
      propertyID,
      parentProperty,
      status,
      label,
      material,
      rooms,
      beds,
      baths,
      garages,
      yearBuilt,
      homeArea,
      lotDimentions,
      lotArea,
      price,
      pricePrefix,
      priceSuffix,
      priceCustom,
      location,
      friendlyAddress,
      mapLocation,
      /////////////////////
      // featureImage: {
      //   data: Buffer,
      //   contentType: String,
      // },
      // gallery: [
      //   {
      //     data: Buffer,
      //     contentType: String,
      //   },
      // ],
      // attachments: [
      //   {
      //     data: Buffer,
      //     contentType: String,
      //   },
      // ],
      // videoLink,
      // amenities,
      //////////////////////////
      featureImage,
      gallery,
      attachments,
      videoLink,
      amenities,
  } = data;

  return (
    <div className="bg-white rounded-xl  shadow-2xl w-[320px] h-[590px] p-2 flex flex-col gap-1  justify-center items-center border-gray-500">
      {/* Top Section */}
      <div className="flex relative justify-between w-[100%] px-6">
        <div className="flex flex-col ">
          <div className="text-xl font-bold text-black">{propertyTitle}</div>
          <div className="text-md font-semibold text-gray-600">{location}</div>
        </div>
        {/* <img src={Forsale} alt="Banner" className="h-[90px] w-67 ml-40" /> */}
        <div className="w-[70px]  ml-auto h-[40px]  border-[#FFF848] bg-[#FFF848] text-[#390255]  hover:border-[#390255] hover:text-white px-2 py-1 text-center align-middle text-sm font-semibold leading-normal   flex justify-center items-center ">{status}</div>

      </div>

      {/* Image Section */}
      <div className="flex flex-col mt-2">
        <img src={CardImage} alt="Image 2" className="h-[230px] w-[308px] mt-1" />
      </div>

      {/* Details Section */}
      <div className="bg-white w-[90%] p-2 mt-3 rounded-md shadow-md flex justify-between">
        {/* Left Details Section */}
        <div className="flex flex-col text-lg text-gray-600 mr-5 ">
          <div>
            <span className="font-bold">Area :</span> {homeArea}
          </div>
          <div>
            <span className="font-bold">QuotedPrice</span> 
          </div>
          <div>
            <span className="font-bold">Tenure Period</span>
          </div>
          <div>
            <span className="font-bold">Lockin Period</span> 
          </div>
          <div>
            <span className="font-bold">Category</span> 
          </div>
          <div>
            <span className="font-bold">Size</span> 
          </div>
        </div>

        {/* Right Details Section (Copy) */}
        <div className="flex flex-col text-lg text-gray-600 ">
          <div>
            <span className="font-bold">{beds}% ROI</span>
          </div>
          <div>
            <span className="font-bold">₹ {price}</span>
          </div>
          <div>
            <span className="font-bold">{yearBuilt} </span>
          </div>
          <div>
            <span className="font-bold">{baths} </span>
          </div>
          <div>
            <span className="font-bold">{parentProperty} </span>
          </div>
          <div>
            <span className="font-bold">{garages}*{yearBuilt} </span>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex mt-2 flex-row justify-between w-[100%] px-3">
      <button className=" border-[#FFF848] bg-[#FFF848] hover:bg-[#390255]  hover:border-[#390255] hover:text-white px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-[#390255]  h-[45px] w-[135px] rounded-md mb-2">
      <Link to="/Investmentapp/Enquire">Enquire Now</Link>
        </button>
        <button className=" border-[#FFF848] bg-[#FFF848] hover:bg-[#390255]  hover:border-[#390255] hover:text-white px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-[#390255] h-[45px] w-[135px] rounded-md ml-auto ">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;