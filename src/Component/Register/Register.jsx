import React, { useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import '../../Component/Common/Loginrester.css'
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [show, setShow] = useState(false);

    const togglePasswordVisibility = () => {
        setShow(!show);
    };
// ============variable part start===========
        const navigate = useNavigate()

    return (
        <section className="register bg-[#B0D8DA]">
            <div className="container">
                <div className="account">
                    <div className="account_text">
                        <h1 className='lg:w-[390px]'>Find 3D Objects, Mockups and Illustrations here.</h1>
                        <div className="account_img">
                            <img src="images/registerbg.png" alt="bg" />
                        </div>
                    </div>
                    <div className="account_form">
                        <h2>Create Account</h2>
                        <div className="login_button w-full flex justify-center">
                            <div className="other_account flex flex-wrap items-center  lg:gap-[50px] md:gap-[30px] gap-2 lg:w-full lg:pl-[45px] md:pl-[30px] pl-7">
                                <button className='flex justify-around hover:bg-slate-100 items-center px-1 border-2 border-[#A6A6A6] border-solid rounded-[20px] w-[200px] h-[50px] lg:w-[300px] lg:h-[67px] md:w-[200px] md:h-[55px]   mt-4 lg:mt-[20px] 
    md:mt-[30px] mb-4 lg:mb-[20px] 
    md:mb-[0px]'>
                                    <img className='lg:w-[36px] lg:h-[35px] md:w-[36px] md:h-[35px] w-[26px] h-[25px]  overflow-hidden' src="images\googleLogo (1).png" alt="google" />
                                    <h3>Sign up with Google</h3>
                                </button>
                                <button className='flex justify-around hover:bg-slate-100 items-center px-1 border-2 border-[#A6A6A6] border-solid rounded-[20px] w-[200px] h-[50px] lg:w-[300px] lg:h-[67px] md:w-[200px] md:h-[55px]   mt-4 lg:mt-[20px] 
    md:mt-[30px] mb-4 lg:mb-[20px] 
    md:mb-[30px]'>
                                    <img className=' lg:w-[36px] lg:h-[35px] md:w-[36px] md:h-[35px] w-[26px] h-[25px]  overflow-hidden' src="images/fblogo.png" alt="fb" />
                                    <h3>Sign up with Facebook</h3>
                                </button>
                            </div>
                        </div>
                        <h4 className='text-center lg:text-[36px] md:text-[26px] text-[16px] font-poppins font-medium text-[#A6A6A6]'>- OR -</h4>
                        <div className="login_form">
                            <div className="form m-0 m-auto">
                                <input className="input lg:w-[300px]" placeholder="Full name" required type="text" />
                                <span className="input-border"></span>
                            </div>
                            <div className="form m-0 m-auto">
                                <input className="input lg:w-[300px]" placeholder="Email Address" required type="email" />
                                <span className="input-border lg:w-[300px]"></span>
                            </div>
                            <div className="form m-0 m-auto relative">
                                {show ? (
                                    <FaRegEyeSlash className='absolute top-[15px] right-[10px]' onClick={togglePasswordVisibility} />
                                ) : (
                                    <FaRegEye className='absolute top-[15px] right-[10px]' onClick={togglePasswordVisibility} />
                                )}
                                <input className="input lg:w-[300px]" placeholder="Password" required type={show ? "text" : "password"} />
                                <span className="input-border lg:w-[300px]"></span>
                            </div>
                        </div>
                        <div className="submit_button flex justify-center items-center lg:mt-[30px] md:mt-[20px] mt-[20px]">
                            <button className='sub bg-[#B0D8DA] hover:bg-[#4b6a6c] lg:w-[574px] lg:h-[74px] md:w-[400px] md:h-[60px] w-[220px] h-[50px] rounded-xl'>Create Account</button>
                        </div>
                        <div className="login_text lg:pb-9">
                            <h5 className='text-center lg:text-[26px] md:text-[20px] text-[14px] font-poppins lg:mt-[10px] md:mt-[20px] mt-[10px]'>Already have an account?<span onClick={()=>navigate('/Login')} className='text-[#B0D8DA]'> Login</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
