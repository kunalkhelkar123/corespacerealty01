import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function EditProperty() {
  const navigate=useNavigate()

const [formData,setFormData]=useState({
  propertyTitle: "",
    propertyType: [],
    propertyDescription: "",
    propertyID: "",
    parentProperty: "",
    status: "",
    label: [],
    material: [],
    rooms: 0,
    beds: 0,
    baths: 0,
    garages: 0,
    yearBuilt: 0,
    homeArea: "",
    lotDimentions: "",
    lotArea: "",
    price: "",
    pricePrefix: "",
    priceSuffix: "",
    priceCustom: "",
    location: "",
    friendlyAddress: "",
    mapLocation: "",
    featureImage: "",
    gallery: "",
    attachments: "",
    videoLink: "",
    amenities: []
});

const {id} = useParams()
useEffect(() => {
  const fetchPropertyDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/property/properties/${id}`);
      const propertyDetails = response.data;
      setFormData(propertyDetails);
    } catch (error) {
      console.error("Error fetching property details:", error);
    }
  };

  fetchPropertyDetails();
}, [id]);

const handleUpdate= async(e)=>{
  e.preventDefault();
  try{
    const response=await axios.put(`http://localhost:4000/api/property/propertyDetails/${id}`,formData)
   
    toast.success("Property updated Successfully",response.data);
    console.log(response.data);
    navigate("/myProprties")
  
    

  }catch(error){
    console.log("Error updating property:",error);
    toast.error("Error updating property")

  }
};

const handleChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value});
};















    const amenities = [
        { name: 'Air Conditioning' },
        { name: 'Barbequem' },
        { name: 'Gym' },
        { name: 'Laundry' },
        { name: 'Lawn' },
        { name: 'Microwave' },
        { name: 'Outdoor Shower' },
        { name: 'Refrigerator' },{ name: 'Sauna' },
        { name: 'Swimming Pool' },
        { name: 'TV Cable' },
        { name: 'Washer' },{ name: 'WiFi' },
        { name: 'Window Coverings' },
      
      ];
  return (
    <div className="flex justify-center items-center bg-slate-50">
            <ToastContainer/>
      <div className=" ">
        <div>
          <h1 className="text-4xl pl-10 font-black text-gray-900 dark:text-black mb-8 mt-4">
            Update Property
          </h1>
        </div>
        <div className="w-full">
          <form className=" w-full p-8" onSubmit={handleUpdate} >
            <div className=" bg-white p-5 w-full">
              <h1 className="text-xl font-bold text-gray-900 mb-8">
                Basic Infomation
              </h1>
              <div>
                <label className="mb-22 pb-7 text-lg  block font-medium  text-gray-900 dark:text-black">
                  Property Title *
                </label>
                <input
                  className="placeholder:italic  bg-white w-full border border-slate-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500  sm:text-sm"
                  placeholder=""
                  type="text"
                  name="propertyTitle"
                  value={formData.propertyTitle}
                  onChange={handleChange}
                  
                />
                <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                  Type
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData.propertyType}
                  onChange={handleChange}
                  name="propertyType"
                >
                  <option value="">Select Property Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Condo">Condo</option>
                  <option value="Family House">Family House</option>
                  <option value="Modern Vila">Modern Villa</option>
                  <option value="Town House">Town House</option>
                </select>
                <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                  Property Description
                </label>
                <input
                  className="placeholder:italic h-44 bg-white w-full border border-slate-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500  sm:text-sm"
                  placeholder=""
                  type="textarea"
                  name="propertyDescription"
                  value={formData.propertyDescription}
                  onChange={handleChange}
                  
                />
              </div>
            </div>

            <div className=" bg-white mt-8 p-2">
              <h1 className="text-xl font-bold text-gray-900 mb-8">
                Additional
              </h1>
              <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                    Property ID
                  </label>
                  <input
                    className="placeholder:italic h-[50px] bg-white w-full border border-slate-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500  sm:text-sm"
                    placeholder=""
                    type="text"
                    name="propertyID"
                    value={formData.propertyID}
                    onChange={handleChange}
                    
                  />
                </div>
                <div>
                  <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                    Parent Property{" "}
                  </label>
                  <select
                    id="status"
                    className="bg-gray-50   border border-gray-300text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.parentProperty}
                    onChange={handleChange}
                    name="parentProperty"
                  >
                    <option value="">Select Parent Property</option>
                    <option value="Diamond Manor Apartment">Diamond Manor Apartment</option>
                    <option value="Quality House For Sale">Quality House For Sale</option>
                  </select>
                </div>
                <div>
                  <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                    Status{" "}
                  </label>
                  <select
                    id="status"
                    className="bg-gray-50  border border-gray-300text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.status}
                    onChange={handleChange}
                    name="status"
                  >
                    <option value="">Select Status</option>
                    <option value="For Rent">For Rent</option>
                    <option value="For Sale">For Sale</option>
                  </select>
                </div>
                <div>
                  <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                    Label
                  </label>
                  <select
                    id="label"
                    className="bg-gray-50 border h-[50px] border-gray-300text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.label}
                    onChange={handleChange}
                    name="label"
                  >
                    <option value="">Select Label</option>
                    <option value="Rented">Rented</option>
                    <option value="Sold">Sold</option>
                  </select>
                </div>
                <div>
                  <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                    Material
                  </label>
                  <select
                    id="material"
                    className="bg-gray-50  border border-gray-300text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.material}
                    onChange={handleChange}
                    name="material"
                  >
                    <option value="">Select Material</option>
                    <option value="Block">Block</option>
                    <option value="Brick">Brick</option>
                    <option value="Rock">Rock</option>
                    <option value="Wood">Wood</option>
                  </select>
                </div>
                <div>
                  <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                    Rooms
                  </label>
                  <input
                    className="placeholder:italic  bg-white w-full border border-slate-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500  sm:text-sm"
                    placeholder=""
                    type="number"
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleChange}
                    
                  />
                </div>
                <div>
                  <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                    Beds
                  </label>
                  <input
                    className="placeholder:italic h-[50px]  bg-white w-full border border-slate-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500  sm:text-sm"
                    placeholder=""
                    type="number"
                    name="beds"
                    value={formData.beds}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                    Bath
                  </label>
                  <input
                    className="placeholder:italic   bg-white w-full border border-slate-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500  sm:text-sm"
                    placeholder=""
                    type="number"
                    name="baths"
                    value={formData.baths}
                    onChange={handleChange}
                    
                  />
                </div>
                <div>
                  <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                    Garages
                  </label>
                  <input
                    className="placeholder:italic  bg-white w-full border border-slate-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500  sm:text-sm"
                    placeholder=""
                    type="number"
                    name="garages"
                    value={formData.garages}
                    onChange={handleChange}
                    
                  />
                </div>
                <div>
                  <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                    Year built
                  </label>
                  <input
                    className="placeholder:italic h-[50px]  bg-white w-full border border-slate-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500  sm:text-sm"
                    placeholder=""
                    type="number"
                    name="yearBuilt"
                    value={formData.yearBuilt}
                    onChange={handleChange}
                   
                  />
                </div>
                <div>
                  <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                    Home Area(sqrt)
                  </label>
                  <input
                    className="placeholder:italic   bg-white w-full border border-slate-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500  sm:text-sm"
                    placeholder=""
                    type="text"
                    name="homeArea"
                    value={formData.homeArea}
                    onChange={handleChange}
                    
                  />
                </div>
                <div>
                  <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                    Lot dimensions
                  </label>
                  <input
                    className="placeholder:italic   bg-white w-full border border-slate-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500  sm:text-sm"
                    placeholder=""
                    type="text"
                    name="lotDimentions"
                    value={formData.lotDimentions}
                    onChange={handleChange}
                   
                  />
                  <p className="text-xs text-gray-400 p-2">
                    e.g. 20×30, 20x30x40, 20x30x40x50.
                  </p>
                </div>
                <div>
                  <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                    Lot area(sqrt)
                  </label>
                  <input
                    className="placeholder:italic   bg-white w-full border border-slate-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500  sm:text-sm"
                    placeholder=""
                    type="text"
                    name="lotArea"
                    value={formData.lotArea}
                    onChange={handleChange}
                    
                  />
                </div>
              </div>
            </div>
            <div className="bg-white mt-8 p-2">
              <h1 className="text-xl font-bold text-gray-900 mb-8">
                Select Energy Class
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                    Energy Class{" "}
                  </label>
                  <select
                    id="energyClass"
                    className="bg-gray-50 h-[50px] border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.energyClass}
                    onChange={handleChange}
                    name="energyClass"
                  >
                    <option value="">Select Energy Class (EU regulation)</option>
                    <option>A+</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                    <option>F</option>
                    <option>G</option>
                    <option>H</option>
                    <option>I</option>
                  </select>
                </div>
                <div>
                  <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                    Energy Index in kWh/m2a
                  </label>
                  <input
                    className="h-[50px] bg-white w-full border border-slate-300 rounded-md py-2 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500  sm:text-sm"
                    placeholder=""
                    type="text"
                    name="energyIndex"
                    value={formData.energyIndex}
                    onChange={handleChange}
                   
                  />
                </div>
              </div>
            </div>
            <div className="w-full ">
              <div className="bg-white mt-8 p-2">
                <h1 className="text-xl font-bold text-gray-900 mb-8">Price</h1>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                      Price($)
                    </label>
                    <input
                      className="h-[50px] bg-white w-full border border-slate-300 rounded-md py-2 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500  sm:text-sm"
                      placeholder="e.g. 1000"
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      
                    />
                  </div>
                  <div>
                    <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                      Price Prefix
                    </label>
                    <input
                      className="h-[50px] bg-white w-full border border-slate-300 rounded-md py-2 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500  sm:text-sm"
                      placeholder=""
                      type="text"
                      name="pricePrefix"
                      value={formData.pricePrefix}
                      onChange={handleChange}
                      
                    />
                    <p className="text-xs text-gray-400 p-2">
                      Any text shown before price (for example: from).
                    </p>
                  </div>
                  <div>
                    <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                      Price Suffix
                    </label>
                    <input
                      className="h-[50px] bg-white w-full border border-slate-300 rounded-md py-2 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500  sm:text-sm"
                      placeholder=""
                      type="text"
                      name="priceSuffix"
                      value={formData.priceSuffix}
                      onChange={handleChange}
                     
                    />
                    <p className="text-xs text-gray-400 p-2">
                      Any text shown after price (for example: per night).
                    </p>
                  </div>
                  <div>
                    <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                      Price Custom
                    </label>
                    <input
                      className="h-[50px] bg-white w-full border border-slate-300 rounded-md py-2 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500  sm:text-sm"
                      placeholder=""
                      type="text"
                      name="priceCustom"
                      value={formData.priceCustom}
                      onChange={handleChange}
                     
                    />
                    <p className="text-xs text-gray-400 p-2">
                      Any text instead of price (for example: by agreement).
                      Prefix and Suffix will be ignored.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white mt-8 p-2">
              <h1 className="text-xl font-bold text-gray-900 mb-8">Location</h1>
              <label className="block  mt-5 mb-5 text-lg font-medium text-gray-900 dark:text-black">
                      Location
                    </label>
                    <input
                      className="h-[50px] bg-white w-full border border-slate-300 rounded-md py-2 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500  sm:text-sm"
                      placeholder=""
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      
                    />
            
            </div>
            <div className="bg-white mt-8 p-2 mx-3">
              <h1 className="text-xl font-bold text-gray-900 mb-8">Media</h1>
              <div className='p-5'>
      <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-black" htmlFor="small_size">Featured Image</label>
      <input className="b h-[50px] " id="small_size" type="file" name='featureImage' value={formData.featureImage} onChange={handleChange}
       />

      <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-black" htmlFor="default_size">Gallery</label>
      <input className=" h-[50px]" id="default_size" type="file" name='gallary' value={formData.gallery} onChange={handleChange}
      />

      <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-black" htmlFor="large_size">Attachments</label>
      <input className=" " id="large_size" type="file"  accept=".pdf" name="attachments" value={formData.attachments} onChange={handleChange}/>
       
      <label className="block mb-2 text-lg font-medium mt-5 text-gray-900 dark:text-black" htmlFor="large_size">Video Link</label>
      <input
        className="placeholder:italic    bg-white w-full border border-black rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500  sm:text-sm"
        placeholder=""
        type="text"
        name="videoLink"
        value={formData.videoLink}
        onChange={handleChange}
        
      />
      <p className='text-xs text-gray-500 p-2'>Enter Youtube or Vimeo url.</p>

      
    </div>            </div>
            <div className=" bg-white mt-8 p-2 mx-3">
              <h1 className="text-xl font-bold text-gray-900 mb-8">
                Aminities
              </h1>
              <div className="bg-white mt-8 p-2 mx-3" >
                <h2 className=" text-xl font-bold text-gray-900 mb-8">Select Amenities:</h2>
                <div  className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {amenities.map((amenity, index) => (
                <div className="p-2 mx-2 ">
                <input
                  type="checkbox"
                  id={amenity.name}
                  key={index}
                  onChange={handleChange}
                  
                />
                <label htmlFor={amenity.name} className="p-2 text-lg">{amenity.name}</label>
              </div>
                ))}
                </div>
               
              </div>
            </div>
            <hr />
            <div className=" mt-8 p-2 ">
              <button className="bg-red-500 text-white p-3 font-semibold rounded-lg border-red-500  hover:bg-white  hover:text-red-500  hover: border border-red-500" >
                {" "}
                Update
              </button>{" "}
              <button className="bg-red-500 text-white p-3 font-semibold rounded-lg border-red-500  hover:bg-white  hover:text-red-500  hover: border border-red-500" onClick={()=>navigate("/myProprties")}>
                {" "}
                Cancle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProperty;
