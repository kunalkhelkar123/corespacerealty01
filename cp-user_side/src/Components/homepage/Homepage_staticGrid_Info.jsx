import React from "react";
import Earth from "../homepage/Earth.svg";
import City from "../homepage/preLaunch.jpg";
import Build from "../homepage/homebuilding2.jpg";
import Couple from "../homepage/readyToMove.jpg";
import Nhome from "../homepage/NatureHome.jpg";
import UnderC from "../homepage/underConstruction.jpg";
import Luxury from "../homepage/luxuryHome.jpg";
import CarouselPre from "./CarouselPre";

const Homepage_staticGrid_Info = () => {
  const CuratedCollection = [
    { id: 1, img1: City, heading: "Pre Launch" },
    { id: 2, img1: Luxury, heading: "Luxury Homes" },
    { id: 3, img1: Nhome, heading: "Nature Homes" },
    { id: 4, img1: UnderC, heading: "Under Construction" },
    { id: 5, img1: Couple, heading: "Ready To Move" },
  ];
  return (
    <>
      <div className="mx-auto grid max-w-screen-lg justify-center mt-6 items-center px-4  gap-4 sm:grid-cols-2 sm:gap-4 sm:px-8 md:grid-cols-3 ">
        <div className="flex flex-col  justify-between items-center p-4 h-[17rem] border   shadow-xl hover:shadow-2xl rounded-xl hover:shadow-fuchsia-800 hover:bg-[#fff848] hover:-translate-y-2">
          <img className=" w-12 h-12 hover:text-white" src={Earth} />
          <h1 className="text-xl  font-bold text-center">
            Search Property from Anywhere{" "}
          </h1>
          <p className=" text-basic text-center">
            Over 1 Lakh+ properties for sale available on the website, we can
            match you with a property that you will want to own.
          </p>
        </div>
        <div className="flex flex-col  justify-between items-center p-4 h-[17rem] border  shadow-xl hover:shadow-2xl rounded-xl hover:shadow-fuchsia-800 hover:bg-[#fff848] hover:-translate-y-2 ">
          <img className=" w-12 h-12" src={Earth} />
          <h1 className="text-xl  font-bold text-center">
            Search Property from Anywhere{" "}
          </h1>
          <p className=" text-basic text-center">
            Over 1 Lakh+ properties for sale available on the website, we can
            match you with a property that you will want to own.
          </p>
        </div>
        <div className="flex flex-col  justify-between items-center p-4 h-[17rem] border  shadow-xl hover:shadow-2xl rounded-xl hover:shadow-fuchsia-800 hover:bg-[#fff848] hover:-translate-y-2">
          <img className=" w-12 h-12" src={Earth} />
          <h1 className="text-xl  font-bold text-center">
            Search Property from Anywhere{" "}
          </h1>
          <p className=" text-basic text-center">
            Over 1 Lakh+ properties for sale available on the website, we can
            match you with a property that you will want to own.
          </p>
        </div>
      </div>

      <div className="relative">
        <img
          src={Build}
          alt="Full-width Image"
          className="w-full h-[300px] object-cover mt-[100px]"
        />
        <div className="absolute top-1/2 ml-5 left-4 transform -translate-y-1/2 text-white z-10">
          <h1 className="text-5xl font-bold mb-4">Corespace</h1>
          <h2 className="text-3xl font-semibold">
            We are the best you choose !
          </h2>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-fuchsia-950 opacity-70"></div>
      </div>

      <div className="flex flex-col  items-center p-8">
        <h1 className="text-center font-sans text-4xl sm:text-5xl font-bold mb-8">
          Curated Collection
        </h1>
          <CarouselPre />
        </div>
      
    </>
  );
};
export default Homepage_staticGrid_Info;
