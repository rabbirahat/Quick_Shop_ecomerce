import React from 'react';
import { AiOutlineLogin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className='lg:flex lg:justify-center gap-10 mt-14 mx-8'>

                <div>
                    <img className='w-[410px] h-[500px] hidden lg:block' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/login-1.png" alt="" />
                </div>

                <div className='lg:w-[450px] mt-10'>
                    <h1 className='text-4xl font-bold text-[#253D4E]'>LOGIN</h1>
                    <p className='font-medium mt-1 mb-6 text-[#B6B6B6]'>Don't have an account ?  <Link to='/singup' className='text-success font-bold'> Create here</Link></p>
                    <form>
                        <input type="email" className='py-3 px-3 border border-[ #E5E5E5] rounded w-full mb-4' placeholder='Your Email Address' />
                        <input type="email" className='py-3 px-3 border border-[ #E5E5E5] rounded w-full mb-4' placeholder='Your Password' />

                        <div className='flex justify-between'>
                            {/* <div className='flex gap-4'>
                                <input className='w-4 h-4 bg-success ' type="checkbox" name="" id="" />
                                <p className='text-success mt-[-5px] font-medium'>Remember me</p>
                            </div> */}

                            <div className="flex cursor-pointer">
                                <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox" />
                                <label for="hs-default-checkbox" className="text-sm text-success ml-3 mt-1 cursor-pointer">Remember me</label>
                            </div>
                            <Link to='/forgetpassword' className='font-medium text-[#B6B6B6]'>Forget Password</Link></div>
                        <button className=' bg-[#253D4E] w-full py-3 rounded text-white mt-8  translate-y-0 hover:-translate-y-1 duration-300'><span className='flex items-center gap-4 justify-center translate-y-0 hover:-translate-y-1 duration-300'><AiOutlineLogin className='w-8 h-8'></AiOutlineLogin> Please Login</span></button>
                        <button className=' bg-[#FFFFFF] w-full py-3 rounded-md  shadow-lg border text-[#7E7E7E] mt-6 translate-y-0 hover:-translate-y-1 duration-300'> <span className='flex items-center gap-4 justify-center'> <img className='w-8 h-8' src="https://img.icons8.com/fluency/2x/google-logo.png" alt="" /> Continue with Google</span></button>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;