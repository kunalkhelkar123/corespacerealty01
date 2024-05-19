import React from 'react'
import Residential_vert_section from '../Verticle Residential_component/Residential_vert_section';
import ViewPropertyMain from '../ViewMidFolder/ViewPropertyMain';
import Residentialpropertiesheader from './Residentialpropertiesheader';
import Residential_location from './Residential_location'



function MainviewProperty( prop ) {
  // console.log("main view prop value",prop.valueID);
  return (
    
    <div className='flex flex-col justify-center '>
     
      <div className='w-full'>
        <Residential_location   />
      </div>
      <div>

        <div className='flex flex-col sm:flex-row justify-center gap-[30px] sm:gap-[10px] md:gap-[50px] xl:gap-[20px]'>
          <div className='sticky top-0  p-2 sm:p-[0px]  content-center sm:fix  w-[100%] bg-white sm:bg-transparent sm:w-[10%] md:w-[5%]'>
            <Residentialpropertiesheader />
          </div>
          <div className='flex flex-col justify-center md:flex-row md:justify-between xl:w-[95%]'>
            <div className='w-[100%] px-[20px] md:w-[60%] md:px-[0px] md:py-[20px] xl:w-[70%] bg-[#F5F7FB]'>
              <ViewPropertyMain />
            </div >
            <div className='w-[100%] bg-[#F5F7FB] md:w-[40%] xl:w-[30%]'>
              <Residential_vert_section />
            </div>
          </div>
        </div>

      </div>

      
    </div>
  )
}

export default MainviewProperty;