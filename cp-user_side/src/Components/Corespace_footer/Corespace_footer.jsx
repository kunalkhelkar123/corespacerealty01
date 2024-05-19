import React from "react";
import CORESPACE_LOGO from './footer_assets/CORESPACE_LOGO.png'

function Corespace_footer() {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-blue-100">

                <div className="flex flex-col justify-center items-center gap-[20px]  w-full px-[20px] py-[40px] sm:flex-row sm:gap-[35px] sm:py-[40px] sm:px-[50px]  md:h-[200px]">
                    <div className="text-[24px]">
                        <h1>89% of customers</h1>
                        <h1><strong>recommend us</strong></h1>
                    </div>
                    <div>

                        <p>If you are looking for dream home!</p>
                        <p>If you want to sale your property!</p>
                    </div>
                    <div>

                        <p>If you are looking for investment!</p>
                        <p>If you are looking for office!</p>
                    </div>

                    <div className="group flex  cursor-pointer items-center justify-around rounded-md bg-[#ffff0c] px-[10px] py-2 text-white  w-[174px] sm:py-[5px]">
                        <span className="group flex w-full items-center justify-center rounded py-1 text-center font-bold text-black"> Get Started </span>
                        <svg className="text-black flex-0  h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>


                </div>





                



                <div className="flex flex-col justify-center items-center sm:flex sm:flex-row sm:items-baseline sm:justify-evenly w-[100%] pt-[50px] md:flex md:flex-row md:justify-evenly md:items-baseline md:pt-[0px] sm:px-[0px]">

                    {/* Locations */}
                    <div className="flex flex-col  items-center pb-[20px]  sm:ml-[0px]">
                        <div className="lg:px-[25px] lg:py-[25px] md:pb-[20px] sm:w-[190px] lg:w-full sm:pb-[20px]  sm:ml-[0px] pb-[20px]">
                            <p className="lg:text-[25px]  md:text-[18px] text-[22px]  sm:px-[0px] px-[45px]"><strong>Popular searches by location in Pune</strong></p>
                        </div>

                        <div className="flex flex-col  items-baseline gap-[20px] sm:flex sm:flex-col  sm:items-baseline  lg:gap[0px]  sm:ml-[0px]">
                            <div className="flex flex-col gap-[20px] lg:flex lg:flex-row lg:gap-[30px]">

                                <div className=" flex flex-col gap-[10px] sm:gap-[20px]">
                                    <div className="flex   items-center gap-[20px]">
                                        <div>
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div>
                                            <p>Flats in Koregaon Park</p>
                                        </div>
                                    </div>
                                    <div className="flex   items-center gap-[20px]">
                                        <div>
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div>
                                            <p>Flats in Kharadi</p>
                                        </div>
                                    </div>
                                    <div className="flex   items-center gap-[20px]">
                                        <div>
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div>
                                            <p>Flats in Kharadi</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-[10px] sm:gap-[20px] lg:ml-[37px]">
                                    <div className="flex   items-center gap-[20px]">
                                        <div>
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div>
                                            <p>Flats in Baner</p>
                                        </div>
                                    </div>
                                    <div className="flex   items-center gap-[20px]">
                                        <div>
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div>
                                            <p>Flats in Wakad</p>
                                        </div>
                                    </div>
                                    <div className="flex   items-center gap-[20px]">
                                        <div>
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div>
                                            <p>Flats in Wakad</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-[20px] lg:flex lg:flex-row lg:gap-[30px]  sm:ml-[0px] ">
                                <div className="flex flex-col gap-[10px] sm:gap-[20px]">
                                    <div className="flex   items-center gap-[20px]">
                                        <div>
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div>
                                            <p>Flats in Pimpri - Chinchwad</p>
                                        </div>
                                    </div>
                                    <div className="flex   items-center gap-[20px]">
                                        <div>
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div>
                                            <p>Flats in Pimpri - Chinchwad</p>
                                        </div>
                                    </div>
                                    <div className="flex   items-center gap-[20px]">
                                        <div>
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div>
                                            <p>Flats in Tathawade</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-[10px] sm:gap-[20px]">
                                    <div className="flex   items-center gap-[20px]">
                                        <div>
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div>
                                            <p>Flats in Hinjewadi</p>
                                        </div>
                                    </div>
                                    <div className="flex   items-center gap-[20px]">
                                        <div>
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div>
                                            <p>Flats in Koregaon Park</p>
                                        </div>
                                    </div>
                                    <div className="flex   items-center gap-[20px]">
                                        <div>
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div>
                                            <p>Flats in Koregaon Park</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="flex flex-col  lg:gap-[50px] md:gap-[20px] md:flex md:flex-col lg:flex-row pl-[50px]">
                        {/* 1/// */}
                        <div className="flex flex-col lg:flex lg:flex-col  md:gap-[20px] lg:gap-[0px]">
                            <div className="flex flex-col ">
                                <div className="lg:text-[24px] md:text-[18px] lg:pb-[20px] md:pb-[20px] sm:pb-[20px] text-[22px] pb-[22px]"><strong>Quick Links</strong></div>
                                <div className="flex flex-col items-baseline">
                                    <div className="flex flex-row justify-center items-center gap-[10px]">
                                        <div className=" text-[8px]">
                                            <i className="fa-solid fa-circle-dot"></i>
                                        </div>
                                        <div className="">
                                            <p>Commercial Property</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center gap-[10px]">
                                        <div className=" text-[8px]">
                                            <i className="fa-solid fa-circle-dot"></i>
                                        </div>
                                        <div className="">
                                            <p>Residential Property</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center gap-[10px]">
                                        <div className=" text-[8px]">
                                            <i className="fa-solid fa-circle-dot"></i>
                                        </div>
                                        <div className="">
                                            <p>Property Management Services</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="flex flex-col  ">
                                <div className="lg:text-[24px] md:text-[18px] lg:pt-[43px]  sm:py-[10px] text-[22px] py-[10px]"><strong>Property Centre</strong></div>
                                <div className="flex flex-col items-baseline">
                                    <div className="flex flex-row justify-center items-center gap-[10px]">
                                        <div className=" text-[8px]">
                                            <i className="fa-solid fa-circle-dot"></i>
                                        </div>
                                        <div className="">
                                            <p>Commercial Property For Investment</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center gap-[10px]">
                                        <div className=" text-[8px]">
                                            <i className="fa-solid fa-circle-dot"></i>
                                        </div>
                                        <div className="">
                                            <p>Commercial Property For Leasing</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center gap-[10px]">
                                        <div className=" text-[8px]">
                                            <i className="fa-solid fa-circle-dot"></i>
                                        </div>
                                        <div className="">
                                            <p>Commercial Property For Outright</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center gap-[10px]">
                                        <div className=" text-[8px]">
                                            <i className="fa-solid fa-circle-dot"></i>
                                        </div>
                                        <div className="">
                                            <p>Why Commercial Real Estate</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        {/* 2//// */}
                        <div className="flex flex-col  ">
                            <div className="flex flex-col lg:flex lg:flex-col lg:mt-[-10px]">
                                <div className="flex flex-col  ">
                                    <div className="lg:text-[24px] md:text-[18px] lg:pb-[20px] sm:py-[10px] text-[22px] py-[10px]"><strong>Company</strong></div>
                                    <div className="flex flex-col items-baseline">
                                        <div className="flex flex-row justify-center items-center gap-[10px]">
                                            <div className=" text-[8px]">
                                                <i className="fa-solid fa-circle-dot"></i>
                                            </div>
                                            <div className="">
                                                <p>About Us</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-[10px]">
                                            <div className=" text-[8px]">
                                                <i className="fa-solid fa-circle-dot"></i>
                                            </div>
                                            <div className="">
                                                <p>Blog</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-[10px]">
                                            <div className=" text-[8px]">
                                                <i className="fa-solid fa-circle-dot"></i>
                                            </div>
                                            <div className="">
                                                <p>Careers</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-[10px]">
                                            <div className=" text-[8px]">
                                                <i className="fa-solid fa-circle-dot"></i>
                                            </div>
                                            <div className="">
                                                <p>Contact Us</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="lg:flex lg:flex-col md:flex md:flex-col md:py-[20px] ">
                                    <div className="lg:text-[24px] lg:pt-[0px] lg:pb-[12px] sm:py-[10px]  text-[22px] py-[10px]"><strong>Legal</strong></div>
                                    <div className="flex flex-col items-baseline">
                                        <div className="flex flex-row justify-center items-center gap-[10px]">
                                            <div className=" text-[8px]">
                                                <i className="fa-solid fa-circle-dot"></i>
                                            </div>
                                            <div className="">
                                                <p>Privacy Policy</p>
                                            </div>
                                        </div>




                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

                {/* Social icons  */}

                <div className="flex flex-col justify-center items-center  gap-[20px] sm:gap-[2px] lg:flex lg:flex-row lg:pl-[190px] lg:pr-[120px] lg:justify-center lg:items-center bg-[#ffff0c]  h-[25vh] sm:h-[20vh] md:h-[105px] mt-[30px] w-full lg:gap-[20px] md:flex md:flex-col md:justify-center md:items-center md:gap-[0px]">
                    <div className="text-black text-[24px]  md:text-[24px] lg:text-[30px] lg:w-[20%]">
                        <p><strong>Follow us</strong> </p>
                    </div>

                    <div className="flex  justify-center items-center  lg:w-[80%] md:gap-[30px] gap-[20px] sm:gap-[30px] lg:gap-[40px]">

                        <div className="flex flex-col justify-center items-center text-[#390255]  lg:h-[90px]   md:h-[65px]  sm:h-[40px] ">
                            <div className="lg:text-[30px]">
                                <i className="fa-brands fa-facebook-f"></i>
                            </div>
                            <div className="lg:text-[12px]">
                                <p className="hidden md:block">Facebook</p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center text-[#390255]  lg:h-[90px]  md:h-[65px]  sm:h-[40px] ">
                            <div className="lg:text-[30px]">
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                            <div className="lg:text-[12px]">
                                <p className="hidden md:block">Instagram</p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center text-[#390255]  lg:h-[90px]   md:h-[65px]  sm:h-[40px] ">
                            <div className="lg:text-[30px]">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                            <div className="lg:text-[12px]">
                                <p className="hidden md:block">Linkedin</p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center text-[#390255]  lg:h-[90px]   md:h-[65px]  sm:h-[40px] ">
                            <div className="lg:text-[30px]">
                                <i className="fa-brands fa-x-twitter"></i>
                            </div>
                            <div className="lg:text-[12px]">
                                <p className="hidden md:block">Twitter</p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center text-[#390255]  lg:h-[90px]   md:h-[65px]  sm:h-[40px] ">
                            <div className="lg:text-[30px]">
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                            <div className="lg:text-[12px]">
                                <p className="hidden md:block">Youtube</p>
                            </div>
                        </div>


                        <div className="flex flex-col justify-center items-center text-[#390255]  lg:h-[90px]  md:h-[65px]  sm:h-[40px] ">
                            <div className="lg:text-[30px]">
                                <i className="fa-brands fa-quora"></i>
                            </div>
                            <div className="lg:text-[12px]">
                                <p className="hidden md:block">Quora</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center text-[#390255]  lg:h-[90px]  md:h-[65px]  sm:h-[40px] ">
                            <div className="lg:text-[30px]">
                                <i className="fa-brands fa-pinterest"></i>
                            </div>
                            <div className="lg:text-[12px]">
                                <p className="hidden md:block">Pinterest</p>
                            </div>
                        </div>



                    </div>

                </div>

                {/* schedule call */}
                <div className="flex flex-col justify-center gap-[20px] items-center lg:w-[80%] py-[50px] sm:px-[50px] lg:flex lg:flex-row lg:justify-evenly lg:items-center">
                    <div >
                        <img className="h-[100px] w-[120px] bg-[#390255] rounded-lg p-4" src={CORESPACE_LOGO} />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[20px] px-[40px]">
                        <p><strong className="text-[24px]">Need help getting started?</strong></p>
                        <p>Schedule a call with our investment advisor today</p>
                    </div>

                    <div>
                        <button className="flex  justify-center items-center px-[10px] py-[10px] text-[white] bg-[#390255] gap-[10px] rounded-[10px]">
                            <div>
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div>
                                <span>Schedule Call</span>
                            </div>
                        </button>
                    </div>
                </div>


                <div className="pb-[35px] p-2 flex justify-center items-center font-semibold">
                    <p>© 2023 Copyright CoreSpace Realty LLP. All Rights Reserved.</p>
                </div>

            </div>
        </>
    )
}

export default Corespace_footer;