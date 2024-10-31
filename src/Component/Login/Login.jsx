import React, { useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import '../../Component/Common/Loginrester.css'
const Login = () => {
    const [show, setShow] = useState(false);

    const togglePasswordVisibility = () => {
        setShow(!show);
    };

    return (
        <section className="register bg-[#B0D8DA]">
            <div className="container">
                <div className="account lg:h-[700px] h-[680px] pb-7">
                    <div className="account_text">
                        <h1 className='lg:w-[390px]'>Find 3D Objects, Mockups and Illustrations here.</h1>
                        <div className="account_img">
                            <img src="images/registerbg.png" alt="bg" />
                        </div>
                    </div>
                    <div className="account_form lg:h-[600px] h-[400px] mt-[100px] lg:mt-10">
                        <h2 className='mb-5'>Create Account</h2>
                        
                        <h4 className='text-center lg:text-[36px] md:text-[26px] text-[12px] mb-3 font-poppins font-medium text-[#A6A6A6]'>- OR -</h4>
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
                        <div className="submit_button flex justify-center items-center lg:mt-[80px] md:mt-[50px] mt-[40px]">
                            <button className='sub bg-[#B0D8DA] hover:bg-[#4b6a6c] lg:w-[574px] lg:h-[74px] md:w-[400px] md:h-[60px] w-[220px] h-[50px] rounded-xl'>Create Account</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
