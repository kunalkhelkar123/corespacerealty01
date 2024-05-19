import {useCallback, useState} from 'react'
import City from "../homepage/city.jpeg"

import Homepage_google_reviews from './Homepage_google_reviews'
import Homepage_latest_blog from './Homepage_latest_blog'
import Homepage_investmentProperty from './Homepage_investmentProperty'
import Homepage_staticGrid_Info from './Homepage_staticGrid_Info'
import DummyTest from './DummyTest'
import Homepage_Brands from './Homepage_Brands'
import LoginForm from './LoginForm'



function Homepage_filter_menu() {
  
  
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [selectedoption, setSelectedoption] = useState("");
    let selArr=[];
    const properties = [{
      categories: "Investment",
      location: "Pune",
      configuration: "2bhk",
      budget: "50L to 60L"
    },
    {
      categories: "Commercial",
      location: "Mumbai",
      configuration: "3bhk",
      budget: "80L to 90L"
    },
    {
      categories: "Residential",
      location: "Pune",
      configuration: "1bhk",
      budget: "30L to 40L"
    },
    {
      categories: "Residential",
      location: "Mumbai",
      configuration: "2bhk",
      budget: "60L to 70L"
    },
    {
      categories: "Commercial",
      location: "Pune",
      configuration: "1bhk",
      budget: "40L to 50L"
    },
    {
      categories: "Investment",
      location: "Delhi",
      configuration: "3bhk",
      budget: "70L to 80L"
    },
    {
      categories: "Residential",
      location: "Bangalore",
      configuration: "2bhk",
      budget: "50L to 60L"
    },
    {
      categories: "Commercial",
      location: "Delhi",
      configuration: "2bhk",
      budget: "70L to 80L"
    },
    {
      categories: "Investment",
      location: "Mumbai",
      configuration: "1bhk",
      budget: "40L to 50L"
    },
    {
      categories: "Residential",
      location: "Chennai",
      configuration: "3bhk",
      budget: "70L to 80L"
    },
    {
      categories: "Commercial",
      location: "Bangalore",
      configuration: "1bhk",
      budget: "30L to 40L"
    },
    {
      categories: "Investment",
      location: "Chennai",
      configuration: "2bhk",
      budget: "60L to 70L"
    },
    {
      categories: "Residential",
      location: "Delhi",
      configuration: "1bhk",
      budget: "40L to 50L"
    },
    {
      categories: "Commercial",
      location: "Pune",
      configuration: "3bhk",
      budget: "90L to 1Cr"
    },
    {
      categories: "Investment",
      location: "Bangalore",
      configuration: "1bhk",
      budget: "30L to 40L"
    },
    {
      categories: "Residential",
      location: "Mumbai",
      configuration: "2bhk",
      budget: "50L to 60L"
    },
    {
      categories: "Commercial",
      location: "Chennai",
      configuration: "3bhk",
      budget: "80L to 90L"
    },
    {
      categories: "Investment",
      location: "Delhi",
      configuration: "2bhk",
      budget: "60L to 70L"
    },
    {
      categories: "Residential",
      location: "Bangalore",
      configuration: "3bhk",
      budget: "70L to 80L"
    },
    {
      categories: "Investment",
      location: "Chennai",
      configuration: "1bhk",
      budget: "30L to 40L"
    },
    {
      categories: "Commercial",
      location: "Mumbai",
      configuration: "2bhk",
      budget: "60L to 70L"
    },
    {
      categories: "Residential",
      location: "Delhi",
      configuration: "3bhk",
      budget: "80L to 90L"
    }
  ];
  
  const handleSelectoptions = (optionSel) => {
    setSelectedoption(optionSel)
        selArr=properties.filter(function(selopt){
          if(selopt.categories==optionSel)
          return selopt;
        })};


    const handleToggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    const chooseAreaOption=()=>{
      
      let uniqueArea=[...new set(selArr.location)];
      console.log(uniqueArea);
    }
    

  return (
    <>
    <div  style={{'--image-url': `url(${City})`}} className='h-[600px] w-[100%] bg-cover bg-repeat-round relative bg-[image:var(--image-url)]'></div>
    
  {/* <img className='relative w-full h-[550px] bg-cover bg-center bg-no-repeat mb-8 md:h-[550px]' src={City} alt="City"></img> */}

  <div className='flex flex-col absolute w-full  justify-center  items-center top-0 md:mt-40   mt-28 sm:mt-36'>

    <div className='mb-5 text-center'>
      <h1  className=' text-4xl sm:text-6xl font-semibold text-[#fff848] hover:text-white  tracking-wider'>CoreSpace</h1>
    </div>
    
      <div className='bg-gray-800  w-[70%] grid grid-cols-0 sm:grid-cols-4 grid-row-4  bg-opacity-90 grid-flow-row p-3  gap-1 rounded-md  items-center sm:grid-col-2 '>
        <button onClick={()=>handleSelectoptions('Investment')} className='focus:outline-none text-black bg-[#fff848] hover:bg-[#390255] hover:text-white font-medium rounded-lg text-sm px-5 py-2.5  mb-2'>Investment</button>
        <button onClick={()=>handleSelectoptions('Commercial')} className='focus:outline-none text-black bg-[#fff848] hover:bg-[#390255] hover:text-white font-medium rounded-lg text-sm px-5 py-2.5  mb-2'>Commercial</button>
        <button onClick={()=>handleSelectoptions('Residential')} className='focus:outline-none text-black bg-[#fff848] hover:bg-[#390255] hover:text-white font-medium rounded-lg text-sm px-5 py-2.5  mb-2'>Residential</button>
        <button className='focus:outline-none text-black bg-[#fff848] hover:bg-[#390255] hover:text-white font-medium rounded-lg text-sm px-5 py-2.5  mb-2'>Managed Offices</button>

        
        <div className='flex flex-row sm:col-span-3 flex-wrap justify-between bg-slate-300 p-2 rounded-md  w-ful '>
          <select id="countries" className="bg-gray-50 border w-full sm:w-fit border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mb-2 ">
            <option value="DEFAULT" >Choose a Area</option>

            <option value="US"></option>
           
          </select>

          <select id="countries" className="bg-gray-50 border w-full sm:w-fit border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mb-2  ">
            <option value="DEFAULT" >Choose a config.</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>

          <select id="countries" className="bg-gray-50 border w-full sm:w-fit border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mb-2 ">
            <option value="DEFAULT" >Choose a Budget</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>

          <button className='focus:outline-none w-full sm:w-fit text-black  bg-[#fff848] hover:text-white hover:bg-[#390255] font-medium rounded-lg text-sm px-5 py-2.5' onClick={chooseAreaOption}>Search</button>
        </div>

        <button onClick={handleToggleLoginForm}  className='focus:outline-none text-black bg-[#fff848] hover:text-white hover:bg-[#390255] font-medium rounded-lg text-sm px-5 py-2.5'>Post Your Property</button>
        {showLoginForm && <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-70 flex justify-center items-center">
                <LoginForm onClose={handleToggleLoginForm} />
            </div>}
      </div>
    </div>
    <DummyTest/>
    <Homepage_staticGrid_Info/>
    <Homepage_investmentProperty/>
    <Homepage_Brands/>
    <Homepage_latest_blog />
    <Homepage_google_reviews/>

</>
  )
}

export default Homepage_filter_menu