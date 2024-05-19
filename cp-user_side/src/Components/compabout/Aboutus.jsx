import React from "react";  
import Aboutus2 from "./Aboutus2";
import Aboutteam from "./Aboutteam";
import Aboutmoto from "./Aboutmoto";
import Abouttop from "./Abouttop";
import AboutBounce from "./AboutBounce";
import Homepage_google_reviews from "../homepage/Homepage_google_reviews";

function Aboutus() {
  return (
    <>
      <div>
        <Abouttop/>
      </div>
      <div className="">
        <Aboutus2 />
      </div>
      {/*  ................................................ cards    ..........................................................*/}
      <div className=" flex flex-col  justify-center items-center sm:flex-row  sm:justify-center mt-8 animate__animated animate__slideInLeft " style={{animationDelay:"0s"}}>
        <div class="  drop-shadow-xl max-w-sm p-4 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div>
            <div className=" flex justify-center sm:h-36 items-center ">
              <span class="material-symbols-outlined rounded-full  bg-yellow-300 p-5">
                real_estate_agent
              </span>
            </div>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white flex justify-center">
              Need a help in Claim?
            </h5>
          </div>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Go to this step by step guideline process on how to certify for your
            weekly benefits:
          </p>
          <div class="inline-flex font-medium items-center text-blue-600 hover:underline">
            See our guideline
          </div>
        </div>

        <div class="  drop-shadow-xl  max-w-sm p-4 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div>
            <div className=" flex justify-center    sm:h-36   items-center     ">
              <span class="material-symbols-outlined   rounded-full  bg-yellow-300 p-5 ">
                chalet
              </span>
            </div>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white flex justify-center">
              Need a help in Claim?
            </h5>
          </div>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Go to this step by step guideline process on how to certify for your
            weekly benefits:
          </p>
          <div class="inline-flex font-medium items-center text-blue-600 hover:underline">
            See our guideline
          </div>
        </div>

        <div class="   drop-shadow-xl  max-w-sm p-4 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div>
            <div className=" flex justify-center   sm:h-36    items-center ">
              <span class="material-symbols-outlined  rounded-full  bg-yellow-300 p-5">
                volunteer_activism
              </span>
            </div>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white  flex justify-center">
              Need a help in Claim?
            </h5>
          </div>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Go to this step by step guideline process on how to certify for your
            weekly benefits:
          </p>
          <div class="inline-flex font-medium items-center text-blue-600 hover:underline">
            See our guideline
          </div>
        </div>
      </div>

      {/* ..............................................our team section ..................................................... */}

      <div>
        {" "}
        <Aboutteam />
      </div>

      {/* ................................................moto..of corespace.................................................. */}
      <div>
        <Aboutmoto />
      </div>
      <div>
        <Homepage_google_reviews />
      </div>
    </>
  );
}

export default Aboutus;
