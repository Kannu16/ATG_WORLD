import { useState } from "react";
import loginSignup from "../images/create-accoutn-page.png";
import facebook from "../images/f-logo.png";
import google from "../images/google.png";

const Hero = () => {
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
      <div className="hero-container flex">
        <div className="nav-small hidden justify-between w-full px-4 absolute pt-2">
          <div className="leftarrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="right-section">
            <button className="border-2 border-[#fff] bg-none px-3 py-2 text-[#fff] rounded-lg" onClick={toggleModal}>Join group</button>
          </div>
        </div>
        <div className="hero-container-inner mt-[19rem]">
          <h1>Computer Engineering</h1>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
       {/* Model for signup */}
       {isModalOpen && (
        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75" />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            <div className="my-main-modelform inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div className="bg-white">
              <span className="absolute right-0 top-0 p-2 cursor-pointer" onClick={()=> setIsModalOpen(false)}> &#10006;</span>
                <p className="text-[#008A45] bg-[#EFFFF4] p-4 sign-in-sign-up-text">Let&apos;s learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
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

export default Hero;
