/* eslint-disable react/no-unescaped-entities */
import logo from "../images/whole.png";
import { useState } from "react";
import loginSignup from "../images/create-accoutn-page.png";
import facebook from "../images/f-logo.png";
import google from "../images/google.png";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="bg-white w-[100%]">
        <header className="main-header z-50">
          <nav
            className="flex items-center  justify-between p-4 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="w-[162.566px] h-[24px]"
                  src={logo}
                  alt="Compony-logo"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <div className="pt-2  relative mx-auto text-gray-600">
                <input
                  className="font-medium w-[30rem] bg-[#F2F2F2] h-10 px-5 pr-16 rounded-full text-md text-[#5C5C5C] focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Search for your favorite group in ATG"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-5 mr-4"
                >
                  <svg
                    className="text-gray-600 h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    style={{ enableBackground: "new 0 0 56.966 56.966" }}
                    xmlSpace="preserve"
                    width="512px"
                    height="512px"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button
                href="#"
                className="text-lg font-semibold leading-6 mx-5 flex flex-row text-[#2E2E2E]"
                onClick={toggleModal}
              >
                Create account.{" "}
                <span className="text-[#2F6CE5] flex pl-2"> It&apos;s free!                 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_822)">
                    <path d="M7 10L12 15L17 10H7Z" fill="#2E2E2E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_822">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg></span>
              </button>
            </div>
          </nav>
        </header>
      </div>
      {/* Model for signup */}
      {isModalOpen && (
        <div className="header-main-model fixed z-10 overflow-y-auto top-0 w-full left-0">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75" />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            <div className="my-main-modelform inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div className="bg-white">
              <span className="absolute right-0 cursor-pointer p-2" onClick={()=> setIsModalOpen(false)}> &#10006;</span>
                <p className="text-[#008A45] bg-[#EFFFF4] p-4 sign-in-sign-up-text">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                {!showLoginForm ? (
                  <div className="login-form flex pl-5 pr-5 pb-5 mt-5">
                   
                     <form onSubmit={handleSubmit} className="sign-in-sign-up-form">
                     <h2 className="my-3 text-2xl font-bold">Sign in</h2>
          
                    <input type="text" className="w-full outline-none rounded bg-gray-100 p-2 my-1" placeholder="Enter your email address"/>

                    
                    <input type="password" className="w-full outline-none rounded bg-gray-100 p-2 my-1" placeholder="Enter your password"/>

                    <div className="flex justify-between items-center signup-model-button">  
                      <button type="submit" className="py-2 px-4 bg-blue-500 text-white my-4 hover:bg-blue-700 rounded-full w-full">
                        Sign In
                      </button>
                      <p className="hidden cursor-pointer text-underline">Or <span className="font-semibold" onClick={toggleForm}>Sign up!</span></p>

                    </div>
                    <button className="my-2 border-2 p-3 w-full rounded flex justify-center items-center"> <img className="pr-3" src={facebook} alt="" /> Sign In with Facebook</button>
                    <button className="my-2 border-2 p-3 w-full rounded flex justify-center items-center"> <img className="pr-3" src={google} alt="" /> Sign In with Google</button>
                  </form>
                   <div className="flex flex-col right-image-form">
                   <p>Don’t have an account yet? <span className="font-semibold cursor-pointer" onClick={toggleForm}>Create new for free!</span></p>
                  <img src={loginSignup}  alt="" />
                   </div>
                  </div>
                ) : (
                  <div className="login-form flex pl-5 pr-5 pb-5 mt-5">
                   
                  <form onSubmit={handleSubmit} className="sign-in-sign-up-form" >
                  <h2 className="my-3 text-2xl font-bold">Create account</h2>
       
               <div className="flex fname-lname">
               <input type="text" className=" outline-none rounded bg-gray-100 p-2 border-2" placeholder="Firstname"/>
               <input type="text" className=" outline-none rounded bg-gray-100 p-2 border-2 " placeholder="LastName"/>
               </div>
               <div className="flex flex-col justify-cente">
               <input type="email" className=" outline-none rounded bg-gray-100 p-2 border-2" placeholder="Email"/>
               <input type="password" className=" outline-none rounded bg-gray-100 p-2 border-2" placeholder="Password"/>
               <input type="password" className=" outline-none rounded bg-gray-100 p-2 border-2" placeholder="Confirm password"/>
                                </div>

                 <div className="flex justify-between items-center signup-model-button">  
                   <button type="submit" className="py-2 px-4 bg-blue-500 text-white my-4 hover:bg-blue-700 rounded-full w-full ">
                     Sign Up
                   </button>
                   <p className="hidden cursor-pointer text-underline">Or <span className="font-semibold" onClick={toggleForm}>Login now!</span></p>

                 </div>
                 <button className="my-2 border-2 p-3 w-full rounded flex justify-center items-center"> <img className="pr-3" src={facebook} alt="" /> Sign In with Facebook</button>
                 <button className="my-2 border-2 p-3 w-full rounded flex justify-center items-center"> <img className="pr-3" src={google} alt="" /> Sign In with Google</button>
               </form>
                <div className="flex flex-col justify-center p-3 items-center right-image-form">
                <p className="">Already have a account? <span className="font-semibold cursor-pointer" onClick={toggleForm}>Login now!</span></p>
               <img src={loginSignup}  alt="" />
                </div>
               </div>
                )}
              </div>
              {/* ... (rest of the modal) */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
