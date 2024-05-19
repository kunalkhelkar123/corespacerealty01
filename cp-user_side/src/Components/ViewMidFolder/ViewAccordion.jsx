import React, { useState } from "react";
import planimage from "../ViewMidFolder/assets/planImage.png";
import car from "../ViewMidFolder/assets/car.png";
import cctv from "../ViewMidFolder/assets/cctv.png";
import house from "../ViewMidFolder/assets/house.png";
import kids from "../ViewMidFolder/assets/kids.png";
import power from "../ViewMidFolder/assets/power.png";
import security from "../ViewMidFolder/assets/security.png";
import swiming from "../ViewMidFolder/assets/swiming.png";
import yoga from "../ViewMidFolder/assets/yoga.png";
import 'flowbite/dist/flowbite.min.js';

let amenitiesData = [
  {
    logo: car,
    name: "Car Parking",
  },
  {
    logo: cctv,
    name: "CCTV Camera",
  },
  {
    logo: house,
    name: "Club House",
  },
  {
    logo: kids,
    name: "Kids Play Area",
  },
  {
    logo: security,
    name:"24 Hour Security",
  },
  {
    logo: swiming,
    name: "Swimming Pool",
  },
  {
    logo: yoga,
    name: "Yoga",
  },
   {
    logo: power,
    name: "Power Backup",
  },
];

function ViewAccordion() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <hr className="divide-y" />
      <div id="accordion-collapse" className="p-5" data-accordion="collapse">
        {accordionData.map((item, index) => (
          <div key={index}>
            <h2>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium 
                rtl:text-right my-2  border-b-1 focus:ring-4 focus:ring-gray-200  gap-3 ${
                  openAccordion === index
                    ? "bg-[#390255] focus:ring-[#390255]  text-white"
                    : "bg-[#FFF848] text-black"
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={openAccordion === index}
                aria-controls={`accordion-collapse-body-${index}`}>
                <span>{item.question}</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 rotate-180 shrink-0 ${
                    openAccordion === index ? "open" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${index}`}
              className={`${
                openAccordion === index ? "block bg-gray-100" : "hidden"
              } border border-b-2 border-purple-700 shadow-sm`}
              aria-labelledby={`accordion-collapse-heading-${index}`}>
              <div className={`p-5`}>
                {/* <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {item.answer}
                </p> */}
                <img
                  src={planimage}
                  alt="planimage"
                  className="lg:transform lg:rotate-[90]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="divide-y" />
      <div className="flex flex-col justify-start">
        <h5 class=" text-start text-2xl font-bold tracking-tight text-gray-900 p-4">
          Video
        </h5>
        <div className=" aspect-video p-5">
          <iframe
            className=" h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528"
            width="100%"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>

      <hr className="divide-y" />
      <div>
        <h5 class=" text-start text-black text-2xl font-bold tracking-tight  p-4">
          Amenities
        </h5>
        <div class="grid gap-y-[40px] grid-cols-2 sm:grid-cols-4 gap-4 px-3 pb-8">
          {amenitiesData.map((amentiesData) => {
            return (
              <>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-start items-center">
                  <img className="w-[38px] lg:w-[50px]" src={amentiesData.logo} alt="logo-data" />
                  <h4 className="text-[12px] lg:text-sm">{amentiesData.name}</h4>
                </div>

                
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

const accordionData = [
  {
    question: "Floor Plan",
    answer:
      "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
  },
  {
    question: "Floor Plan",
    answer:
      "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
  },
  {
    question: "Floor Plan",
    answer:
      "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
  },
];

export default ViewAccordion;
