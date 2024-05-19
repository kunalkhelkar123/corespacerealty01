import React, { useEffect, useState,memo, useMemo } from "react";
import CardImage2 from "../Residential/office2.jpeg";
import { Link } from "react-router-dom";
import MainviewProperty from "../viewproperty/MainviewProperty";

const ResidentialHomepageCard =(props)=>{
  // let [ide, setIde] = useState("");
  // let temp;
  // const selectedCard = (id) => {
  //   setIde(id);
  //   temp = id ;
  //   console.log();
  // };
  console.log("program rendres",props);
  // useEffect(()=>
  // { selectedCard()
  //   console.log('check the value',ide)
  // },[ide])

  return (
    <div className="bg-white rounded-xl p-4  shadow-2xl w-[300px] h-[480px] flex flex-col mb-9 mr-[0px]   border-gray-500">
      {/* Top Section */}
      {/* Image Section */}
      <div className="flex flex-col 2">
        <img
          src={CardImage2}
          alt="Image 2"
          className="h-[200px] w-[270px] mt-3"
        />
      </div>

      {/* Details Section */}
      <div className="bg-white p-3 mt-3 rounded-md shadow-md flex justify-between">
        {/* Left Details Section */}
        {/* <div className="flex flex-col text-lg text-gray-600 mr-5 "> */}

        {/* Right Details Section (Copy) */}
        <div className="flex flex-col text-lg text-gray-600 ">
          {/* <div>
            <span className="">{ROIRate}</span>
          </div>
          <div>
            <span className="">₹ {QuotedPrice}</span>
          </div>
          


            <div>
            <span className=""> {Area}</span>
          </div>

          <div>
            <span className=""> {Size}</span>
          </div> */}

          <div className=" items-center">
            {/* First SVG component and span */}
            <div className="flex items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="24"
                height="24"
                className="mr-2"
              >
                <path
                  fill="#1e0f00"
                  d="M40 21h-2v-9H10v9H8V11a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1zM2 17h2v30H2zM44 17h2v30h-2zM40 48H8a1 1 0 0 1-1-1v-3a3 3 0 0 1 3-3h28a3 3 0 0 1 3 3v3a1 1 0 0 1-1 1zM9 46h30v-2a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1z"
                />
                <path
                  fill="#1e0f00"
                  d="M43 12H5a1 1 0 0 1-.47-1.88l19-10a1 1 0 0 1 .94 0l19 10A1 1 0 0 1 43 12zM9.05 10H39L24 2.13zM40 26H8a1 1 0 0 1-.45-1.89l16-8a1 1 0 0 1 .9 0l16 8A1 1 0 0 1 40 26zm-27.76-2h23.52L24 18.12zM0 46h48v2H0zM32 27h2v13h-2zM38 27h2v13h-2zM8 27h2v13H8zM26 27h2v13h-2zM20 27h2v13h-2zM14 27h2v13h-2zM39 16h8v2h-8zM1 16h8v2H1z"
                />
              </svg>
              <span className="ml-2 hover:text-purple-900 cursor-pointer  transition duration-300 transform hover:scale-110">
                {props.data2.propertyType}
              </span>
            </div>

            {/* Second SVG component and span */}
            <div className="flex items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                width="24"
                height="24"
              >
                <path d="m102.128 96.851 6.3 14.173a1.75 1.75 0 1 0 3.2-1.422l-6.3-14.173a1.75 1.75 0 1 0-3.2 1.422z" />
                <path d="m123.1 120.649-17.69-39.811a1.75 1.75 0 0 0-1.6-1.039H83.831C89.219 71.13 93.938 62 96.778 53.651a43.164 43.164 0 0 0 2.657-13.466 35.436 35.436 0 1 0-70.871 0 43.174 43.174 0 0 0 2.657 13.467c2.84 8.353 7.56 17.478 12.948 26.147H24.19a1.75 1.75 0 0 0-1.6 1.039L4.9 120.649a1.75 1.75 0 0 0 1.6 2.461h115a1.75 1.75 0 0 0 1.6-2.461zM32.064 40.186a31.936 31.936 0 1 1 63.871 0 39.8 39.8 0 0 1-2.471 12.34c-3.041 8.945-8.311 18.822-14.24 28.026l-.037.058A194.664 194.664 0 0 1 64 101.136a194.667 194.667 0 0 1-15.188-20.525c-.013-.02-.024-.04-.038-.059-5.929-9.2-11.2-19.081-14.239-28.025a39.812 39.812 0 0 1-2.471-12.341zM9.192 119.61 25.327 83.3H46.4a194.324 194.324 0 0 0 16.29 21.663 1.75 1.75 0 0 0 2.629 0A194.313 194.313 0 0 0 81.6 83.3h21.068l16.135 36.311z" />
                <path d="M64 58.775a18.592 18.592 0 1 0-18.592-18.591A18.613 18.613 0 0 0 64 58.775zm0-33.684a15.092 15.092 0 1 1-15.092 15.093A15.109 15.109 0 0 1 64 25.092z" />
              </svg>
              <span className="ml-2 mt-2"> {props.data2.location}</span>
            </div>

            {/* Third SVG component and span */}
            <div className="flex items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="24"
                height="18"
              >
                <path d="M15 1v14H1V1h14m1-1H0v16h16V0z" />
                <path d="m4.053 4.573.707-.707 6.053 6.053-.707.707z" />
                <path d="M3.41 6.04 2.38 2.19l3.85 1.03-2.82 2.82zM7.72 11.76l5.78 1.55-1.55-5.78-4.23 4.23z" />
              </svg>
              <span className="ml-2 mt-1">{props.data2.homeArea}</span>
            </div>

            {/* Fourth SVG component and span */}
            <div className="flex items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
              <span className="ml-2 mt-1"> {props.data2.lotDimentions}</span>
            </div>
          </div>

          <div className="flex mt-6">
            <div>
              <span className="">{props.data2.yearBuilt} </span>

              <Link to={`/Appresidential/ViewDetail`}>
                <button
                  
                  value={props.data2.propertyID}
                  className="border-[#FFF848] bg-[#FFF848] hover:bg-[#390255]  hover:border-[#390255] hover:text-white text-black h-[45px] w-[135px] rounded-md ml-10 "
                >
                  View Details
                </button>
              </Link>
              {false && <MainviewProperty  />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default memo(ResidentialHomepageCard);
