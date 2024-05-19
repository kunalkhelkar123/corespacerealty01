/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState , useEffect } from "react";
import Card from "./Card";
import PaginationButton from "./PaginationButton";
import Heading from "./Heading";
import axios from 'axios';


const InvestmentApp = () => {
  // fake api
  // const cardData = [
  //   {
  //     id: 1,
  //     Area: "3225 SF",
  //     QuotedPrice: "500,000",
  //     TenurePeriod: "5 years",
  //     LockinPeriod: "2 years",
  //     TenantCategory: "Commercial",
  //     Size: "Large",
  //     ROIRate: 7.5,
  //   },
  //   {
  //     id: 2,
  //     Area: "2800 SF",
  //     QuotedPrice: "550,000",
  //     TenurePeriod: "4 years",
  //     LockinPeriod: "1.5 years",
  //     TenantCategory: "Residential",
  //     Size: "Medium",
  //     ROIRate: 6.8,
  //   },
  //   {
  //     id: 3,
  //     Area: "2000 SF",
  //     QuotedPrice: "400,000",
  //     TenurePeriod: "3 years",
  //     LockinPeriod: "1 year",
  //     TenantCategory: "Retail",
  //     Size: "Small",
  //     ROIRate: 8.2,
  //   },
  //   {
  //     id: 4,
  //     Area: "3500 SF",
  //     QuotedPrice: "600,000",
  //     TenurePeriod: "6 years",
  //     LockinPeriod: "2.5 years",
  //     TenantCategory: "Commercial",
  //     Size: "Large",
  //     ROIRate: 7.0,
  //   },
  //   {
  //     id: 5,
  //     Area: "1800 SF",
  //     QuotedPrice: "350,000",
  //     TenurePeriod: "2 years",
  //     LockinPeriod: "1 year",
  //     TenantCategory: "Residential",
  //     Size: "Small",
  //     ROIRate: 9.1,
  //   },
  //   {
  //     id: 6,
  //     Area: "3000 SF",
  //     QuotedPrice: "480,000",
  //     TenurePeriod: "4 years",
  //     LockinPeriod: "1.5 years",
  //     TenantCategory: "Retail",
  //     Size: "Medium",
  //     ROIRate: 8.5,
  //   },
  //   {
  //     id: 7,
  //     Area: "2200 SF",
  //     QuotedPrice: "420,000",
  //     TenurePeriod: "3 years",
  //     LockinPeriod: "1 year",
  //     TenantCategory: "Commercial",
  //     Size: "Medium",
  //     ROIRate: 7.8,
  //   },
  //   {
  //     id: 8,
  //     Area: "2700 SF",
  //     QuotedPrice: "520,000",
  //     TenurePeriod: "5 years",
  //     LockinPeriod: "2 years",
  //     TenantCategory: "Residential",
  //     Size: "Large",
  //     ROIRate: 6.5,
  //   },
  //   {
  //     id: 9,
  //     Area: "2400 SF",
  //     QuotedPrice: "480,000",
  //     TenurePeriod: "4 years",
  //     LockinPeriod: "1.5 years",
  //     TenantCategory: "Retail",
  //     Size: "Medium",
  //     ROIRate: 8.0,
  //   },
  //   {
  //     id: 10,
  //     Area: "3100 SF",
  //     QuotedPrice: "550,000",
  //     TenurePeriod: "5 years",
  //     LockinPeriod: "2 years",
  //     TenantCategory: "Commercial",
  //     Size: "Large",
  //     ROIRate: 7.3,
  //   },
  //   {
  //     id: 11,
  //     Area: "2600 SF",
  //     QuotedPrice: "500,000",
  //     TenurePeriod: "4 years",
  //     LockinPeriod: "1.5 years",
  //     TenantCategory: "Residential",
  //     Size: "Medium",
  //     ROIRate: 6.8,
  //   },
  //   {
  //     id: 12,
  //     Area: "1800 SF",
  //     QuotedPrice: "350,000",
  //     TenurePeriod: "3 years",
  //     LockinPeriod: "1 year",
  //     TenantCategory: "Retail",
  //     Size: "Small",
  //     ROIRate: 8.2,
  //   },
  //   {
  //     id: 13,
  //     Area: "3200 SF",
  //     QuotedPrice: "600,000",
  //     TenurePeriod: "6 years",
  //     LockinPeriod: "2.5 years",
  //     TenantCategory: "Commercial",
  //     Size: "Large",
  //     ROIRate: 7.0,
  //   },
  //   {
  //     id: 14,
  //     Area: "1900 SF",
  //     QuotedPrice: "360,000",
  //     TenurePeriod: "2 years",
  //     LockinPeriod: "1 year",
  //     TenantCategory: "Residential",
  //     Size: "Small",
  //     ROIRate: 9.1,
  //   },
  //   {
  //     id: 15,
  //     Area: "2800 SF",
  //     QuotedPrice: "480,000",
  //     TenurePeriod: "4 years",
  //     LockinPeriod: "1.5 years",
  //     TenantCategory: "Retail",
  //     Size: "Medium",
  //     ROIRate: 8.5,
  //   },
  //   {
  //     id: 16,
  //     Area: "2000 SF",
  //     QuotedPrice: "410,000",
  //     TenurePeriod: "3 years",
  //     LockinPeriod: "1 year",
  //     TenantCategory: "Commercial",
  //     Size: "Medium",
  //     ROIRate: 7.8,
  //   },
  //   {
  //     id: 17,
  //     Area: "2600 SF",
  //     QuotedPrice: "520,000",
  //     TenurePeriod: "5 years",
  //     LockinPeriod: "2 years",
  //     TenantCategory: "Residential",
  //     Size: "Large",
  //     ROIRate: 6.5,
  //   },
  //   {
  //     id: 18,
  //     Area: "2400 SF",
  //     QuotedPrice: "480,000",
  //     TenurePeriod: "4 years",
  //     LockinPeriod: "1.5 years",
  //     TenantCategory: "",
  //     Size: "Medium",
  //     ROIRate: 8.0,
  //   },
  // ];
let[currentOutput,setCurrentOutput]=useState([]);
const [coinData, SetCoinsData] = useState([]);
const [currentPage, SetCurrentpage] = useState(1);
const [postPerPage, SetPostperpage] = useState(9);
  let cardData01;

  useEffect(() => {
    //  let cardData01;
    const fetchProperties = async () => {
      try {
  
        const response=await axios.get("/api/property/properties");
        console.log("data from database using proxy ",response.data)
       
        cardData01 = [...response.data];
        setCurrentOutput(cardData01);
        const lastPostIndex = currentPage * postPerPage;
        const firstPostIndex = lastPostIndex - postPerPage;
         setCurrentOutput(cardData01.slice(firstPostIndex, lastPostIndex));
          console.log("responce from backend",cardData01);
      } catch (error) {
        console.error("Error catch  fetching properties:", error);
      }
    };

    fetchProperties();
  },[]);
  





  return (
    <div className="bg-white flex flex-col justify-center items-center">
      <div className="items-center justify-cente mt-4">
        <Heading />
      </div>
        <div className="flex flex-row justify-center  items-center gap-6 flex-wrap">
          {currentOutput.map((card) => (
            <div key={card.id}>
              <Card data={card} />
            </div>
          ))}
        </div>
      
      <div>
        <div className="flex justify-center items-center mt-8 mb-8">
          <PaginationButton
            totalPosts={currentOutput.length}
            postsPerPage={postPerPage}
            setCurrentPage={SetCurrentpage}
          />
        </div>
      </div>
    </div>
  );
};

export default InvestmentApp;
