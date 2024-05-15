import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DeleteProperty({propertyId, onDelete}) {
    const[showConfirmation,setShowConfirmation]=useState(false);
    const handleDelete= async()=>{
        try{

        //     const confirmDelete=window.confirm("Are you sure you want to delete this property?");
        //    if  (!confirmDelete) return;
await axios.delete(`http://localhost:4000/api/property/propertyDetails/${propertyId}`);
onDelete(propertyId);
// setShowConfirmation(false);
window.alert("Property deleted successfully");
        }catch(error){
            toast.error("Error deleting property");
            console.log("error deleting property:", error);

        }
    }
  return (
    <div>
         <ToastContainer />
      <button className=' text-red-500' onClick={() => setShowConfirmation(true)}><span className="material-symbols-outlined ">delete</span></button>
      {showConfirmation && (
        <div className='   '>
          <p className='text-m text-red-600 font-semibold'>Are you sure you want to delete this property?</p>
          <button onClick={handleDelete} className='m-2 p-2 bg-green-500 text-white rounded-md font-semibold text-lg'>Yes</button>
          <button onClick={() => setShowConfirmation(false)} className='m-2 p-2 bg-red-500 text-white rounded-md font-semibold text-lg'>No</button>
        </div>
      )}
    </div>
  );
}
