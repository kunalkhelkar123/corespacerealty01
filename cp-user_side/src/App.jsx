import React, {useEffect} from 'react'
import Homepage_filter_menu from './Components/homepage/Homepage_filter_menu'
import Corespace_navbar from './Components/Corespace_Navigation/Corespace_navbar'
import Corespace_footer from './Components/Corespace_footer/Corespace_footer'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Test from './Components/homepage/Test'
import InvestmentApp from './Components/Investment/InvestmentApp'
import AppResidential from './Components/Residential/AppResidential'
import EnquireNowForm from './Components/Investment/EnquireNowForm'
import { useLocation } from 'react-router-dom'
import MainviewProperty from '../src/Components/viewproperty/MainviewProperty'
import Compactblog from './Components/ompblog/Compactblog'
import 'flowbite/dist/flowbite.css';
import 'flowbite';
import Aboutus from './Components/compabout/Aboutus'
function App() {
  // const { pathname } = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  
  return (
    <>
    <BrowserRouter>
    <Corespace_navbar/>
    <Routes>
    <Route path="/" element={<Homepage_filter_menu/>}/>
    <Route path="/Test" element={<Test/>}/>
    <Route path="/Investmentapp" element={<InvestmentApp/>}/>
    <Route path="/Appresidential" element={<AppResidential/>}/>
    <Route path="/Investmentapp/Enquire" element={<EnquireNowForm/>}/>
    <Route path="/Appresidential/ViewDetail" element={<MainviewProperty />}/>
    <Route path="/Aboutus" element={<Aboutus/>}/>
    <Route path="/Blog" element={<Compactblog/>}/>
   

    </Routes>
    <Corespace_footer/>
    </BrowserRouter>
   
    
    </>
  )
}

export default App
