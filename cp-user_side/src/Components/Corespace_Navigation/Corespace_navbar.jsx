import React, { useEffect, useState } from "react";
// import comp_logoimg from './Asset/Comp_logo.jpg'
// import nav_hamberg from './Asset/navbar_menu.svg'
import CORESPACE_LOGO from "./Asset/CORESPACE_LOGO.png";
import { Link, useLocation } from "react-router-dom";

function Corespace_navbar() {
  let [content, setcontent] = useState(false);
  const [activeButton, setActiveButton] = useState("/home");
  let location = useLocation();

  function content_handler() {
    if (content == false) {
      setcontent(true);
    } else {
      setcontent(false);
    }
  }
  function handleButtonClick(buttonName) {
    setActiveButton(buttonName);
  }
  useEffect(() => {
    // Prevent default navigation on hard refresh
    if (!location.pathname) {
      history.push("/Home"); // Redirect to your default page
    } else {
      // Set active button based on current route
      switch (location.pathname) {
        case "/Home":
          setActiveButton("/Home");
          break;
        case "/Appresidential":
          setActiveButton("/Appresidential");
          break;
        case "/Investmentapp":
          setActiveButton("/Investmentapp");
          break;
        // Add more cases for other routes
        default:
          setActiveButton("");
          break;
      }
    }
  }, [location.pathname]);

  return (
    <>
      <div className=" top-0 sticky z-50">
        <div className="flex justify-between items-center h-fit  bg-[#390255] relative">
          <div className="">
            <button>
              <img
                src={CORESPACE_LOGO}
                className=" sm:p-1 p-0.5 h-[4rem] w-[5rem] ml-[3rem] md:w-[4rem] md:h-[3rem] md:ml-[3rem] md:text-[14px]  lg:w-[6rem] lg:h-[5rem] lg:ml-[6rem] sm:w-[5rem] sm:h-[4rem] sm:ml-[3rem]  "
              />
            </button>
          </div>

          <div className="hidden sm:flex justify-around items-center  ">
            <div className="">
              <Link to="/">
                <button
                  onClick={() => handleButtonClick(location.pathname)}
                  className={` hover:bg-[#ffff0c] hover:text-black ${
                    activeButton === ""
                      ? "active text-black bg-[#ffff0c] "
                      : "text-white"
                  }  focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 md:py-[8px] lg:py-[12px] sm:text-sm sm:pt-[7px] sm:pb-[8px] sm:pl-[9px] sm:pr-[9px] lg:px-[15px]`}
                >
                  <strong>HOME</strong>
                </button>
              </Link>
            </div>

            <div className="">
              <Link to="/Appresidential">
                <button
                  onClick={() => handleButtonClick(location.pathname)}
                  className={` relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium ${
                    activeButton === "/Appresidential"
                      ? "active text-black bg-[#ffff0c]"
                      : "text-white"
                  } hover:bg-[#ffff0c] hover:text-black hover:font-medium rounded-full hover:text-sm px-5 py-2.5 focus:outline-none md:py-[8px] lg:py-[12px] sm:text-sm sm:pt-[7px] sm:pb-[8px] sm:pl-[9px] sm:pr-[9px]`}
                >
                  <strong>RESIDENTIAL</strong>
                </button>
              </Link>
            </div>
            <div className="">
              <button className="text-white relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium hover:bg-[#ffff0c] hover:text-black hover:font-medium rounded-full hover:text-sm px-5 py-2.5  focus:outline-none md:py-[8px] lg:py-[12px] sm:text-sm  sm:pt-[7px] sm:pb-[8px] sm:pl-[9px] sm:pr-[9px]">
                <strong>COMMERCIAL</strong>
              </button>
            </div>
            <div className="">
              <Link to="/Investmentapp">
                <button
                  onClick={() => handleButtonClick(location.pathname)}
                  className={` hover:bg-[#ffff0c] hover:text-black ${
                    activeButton === "/Investmentapp"
                      ? "active text-black bg-[#ffff0c] "
                      : "text-white"
                  }  focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 md:py-[8px] lg:py-[12px] sm:text-sm sm:pt-[7px] sm:pb-[8px] sm:pl-[9px] sm:pr-[9px] lg:px-[15px]`}
                >
                  <strong>INVESTMENT</strong>
                </button>
              </Link>
            </div>
          </div>
          <div>
            {content ? (
              <div>
                <button className="text-white" onClick={content_handler}>
                  <span className="material-symbols-outlined mr-[20px]">
                    close
                  </span>
                </button>
              </div>
            ) : (
              <button onClick={content_handler} className="mr-[20px]">
                <span className="material-symbols-outlined text-white">
                  menu
                </span>
              </button>
            )}
          </div>
        </div>
        <div className="bg-opacity-0 flex justify-center items-center h-[100vh]  sm:bg-[#390255] absolute right-0 z-50">
          <div
            className="   sm:bg-[#390255] h-[100vh]  pr-[5px] sm:pr-[0px]  ml-auto flex flex-col justify-center items-center sm:w-[25vw] lg:w-[20vw] xl:w-[16vw]  sm:p-[0px] "
            style={{ display: content == false ? "none" : "" }}
          >
            {content ? (
              <div className="  text-white h-[350px] sm:h-[100vh]  flex flex-col justify-center items-center gap-[2rem] bg-[#390255] px-[20px] sm:px-[0px] rounded-lg sm:rounded-[0px]">
                <div>
                  <div>
                    <button className="hidden sm:block">
                      <strong>
                        <Link to="/Home"> HOME</Link>
                      </strong>
                    </button>
                  </div>
                  <div>
                    <Link to="/Home">
                      <button
                        className={`sm:hidden hover:${
                          true ? "bg-red-700" : ""
                        } `}
                      >
                        <strong>
                          <i className="fa-solid fa-house"></i>
                        </strong>
                      </button>
                    </Link>
                  </div>
                </div>
                
                <Link to="/Aboutus">
                <div>
                  <button className="hidden sm:block">
                    <strong>ABOUT US</strong>
                  </button>
                  <button className="sm:hidden">
                    <strong>
                      <i className="fa-solid fa-circle-exclamation"></i>
                    </strong>
                  </button>
                </div></Link>
                <Link to="/Blog">
                <div>
                  <button className="hidden sm:block">
                    <strong>BLOG</strong>
                  </button>
                  <button className="sm:hidden">
                    <strong>
                      <i className="fa-solid fa-blog"></i>
                    </strong>
                  </button>
                </div></Link>
               
                <div>
                  <button className="hidden sm:block">
                    <strong>CONTACT US</strong>
                  </button>
                  <button className="sm:hidden">
                    <strong>
                      <i className="fa-solid fa-phone"></i>
                    </strong>
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-white"></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Corespace_navbar;
