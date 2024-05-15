import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LeadContact() {

const [users,setUsers]=useState([]);
const navigate=useNavigate();

useEffect(()=>{
  const fetchUser=async()=>{
    try {
      const response=await axios.get("http://localhost:4000/api/otp/all-user");
      setUsers(response.data)
      
    } catch (error) {
      console.log("error fetching opts",error);
      
    }
  };
  fetchUser();
},[])

  return (
    <>
    <NavBar/>
    
    <div className=' container overflow-x-auto '>  
    <h1 className='text-4xl font-bold flex justify-center items-center m-2 p-2  text-purple-950'>User Details</h1>   
<div className="relative  flex justify-center items-center  ">
    <table className="w-2/4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200  px-2">
            <tr >
                <th scope="col" className="px-6 py-3 rounded-s-lg">
                    User Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Phone no
                </th>
                
            </tr>
           
            
        </thead>
        <tbody >
        {
              users.map((user,index)=>{
                return(
                  <>
                  
                  <tr className="bg-purple-50 text-black" key={index}>
                <td scope="row" className="px-6 py-4 font-medium text-black  ">
                    {user.name}
                </td>
                <td className="px-6 py-4">
                    {user.email}
                </td>
                <td className="px-6 py-4">
                    {user.phoneNumber}
                </td>
            </tr>
                  
                  
                  </>
                )
               

            
              })
            }

    
           
          
            
        </tbody>
      
    </table>
</div>
<button className=' rounded-md p-2 bg-purple-950 text-white absolute bottom-2 right-2' onClick={()=>navigate("/dashboard")}><span className="material-symbols-outlined font-extrabold text-3xl">
arrow_circle_left
</span></button>
    </div>
    
    </>
  );
}

export default LeadContact;
