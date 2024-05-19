import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function DashBoardHomePage() {

  const[lead,setLead]=useState([]);
  const[allProperty,setAllProperty]=useState(0);

  useEffect(()=>{
    const leads=async()=>{
      try {
        const response=await axios.get("/api/otp/total-user");
        setLead(response.data)
        console.log(response.data);
        const allProperties=await axios.get("/api/property/property-count");
setAllProperty(allProperties.data);
console.log(allProperties.data);
        
      } catch (error) {
        console.log("error fetching lead count",error);
        
      }



    };
    leads();
   
  },[])

  const naviagte=useNavigate();
  return (
    <div className='bg-purple-100  w-full px-4 md:px-8 '>
      <div className='mb-5'>
        <h1 className=" p-5  text-3xl text-slate-700">Hello Agent</h1>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-1  lg:grid-cols-4 gap-3 '  >
        <div className='border border-gray-100  bg-white p-2 h-44 flex  justify-center items-center relative' onClick={()=>naviagte("/leadsPage")}>
          <div className='flex flex-col justify-center items-center pr-[150px] '>
          <p className="text-3xl" >{lead.totalUsers}</p>
            <p className="text-base" >Leads</p>
            
          </div>
          <div className='text-center  flex justify-center items-center rounded-full border p-5  h-32 w-32 bg-slate-200 absolute right-1'>
          <span class="material-symbols-outlined text-5xl">
groups
</span>
          </div>
        </div>
        <div className='border border-gray-100  bg-white p-2 h-44 flex  justify-center items-center relative' onClick={()=>naviagte("/myProprties")}>
        <div className='flex  justify-center items-center  '>
          <div className='flex flex-col justify-center items-center pr-[150px] '>
          <p className="text-3xl">{allProperty.totalProperties}</p>
            <p className="text-base" >My Properties</p>
            
          </div>
          <div className='text-center  flex justify-center items-center rounded-full border p-5  h-32 w-32 bg-red-200 absolute right-1'>
          <span className="material-symbols-outlined text-5xl">home</span>
          </div>
        </div>
          
        </div>
        <div className='border border-gray-100  bg-white p-2 h-44 flex  justify-center items-center relative '>
        <div className=' flex  justify-center items-center   '>
          <div className='flex flex-col justify-center items-center pr-[150px]   '>
          <p className="text-3xl">0</p>
            <p className="text-base">Favrorite</p>
            
          </div>
          <div className='text-center  flex justify-center items-center rounded-full border p-5  h-32 w-32 bg-red-500 absolute right-1'>
          <span className="material-symbols-outlined text-5xl ">
favorite
</span>
          </div>
        </div>
        </div>
        <div className='border border-gray-100  bg-white p-2 h-44 flex  justify-center items-center relative'>
        <div className='   flex  justify-center items-center '>
          <div className='flex flex-col justify-center items-center pr-[150px] '>
          <p className="text-3xl">0</p>
            <p className=" text-base">Reviews</p>
            
          </div>
          <div className='text-center  flex justify-center items-center rounded-full border p-5  h-32 w-32 bg-blue-300 absolute right-1'>
          <span className="material-symbols-outlined  text-5xl">
visibility
</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardHomePage;
