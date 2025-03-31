import React from 'react';
import { AiFillApple } from 'react-icons/ai';
import { BsFacebook} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Singup = () => {
    return (
        <div>
            <div className='lg:flex lg:justify-center gap-10 mx-8'>

                <div className='lg:w-[450px] mt-10'>
                    <h1 className='text-4xl font-bold text-[#253D4E]'>Create an Account</h1>
                    <p className='font-medium mt-1 mb-6 text-[#B6B6B6]'>Allready have an account ?  <Link to='/login' className='text-success font-bold'> Login here</Link></p>
                    <form>
                        <input type="text" className='py-3 px-3 border border-[ #E5E5E5] rounded w-full mb-4' placeholder='User Name' />
                        <input type="email" className='py-3 px-3 border border-[ #E5E5E5] rounded w-full mb-4' placeholder='Your Email Address' />
                        <input type="password" className='py-3 px-3 border border-[ #E5E5E5] rounded w-full mb-4' placeholder='Your Password' />
                        <input type="password" className='py-3 px-3 border border-[ #E5E5E5] rounded w-full mb-4' placeholder='Confirm Password' />

                        <div className='flex justify-between'>
                            {/* <div className='flex gap-4'>
                                <input className='w-4 h-4 bg-success ' type="checkbox" name="" id="" />
                                <p className='text-[#B6B6B6] mt-[-5px] font-medium'>I agree to terms & Policy.
                                </p>
                            </div> */}
                            <div className="flex cursor-pointer">
                                <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-checkbox" />
                                <label for="hs-default-checkbox" className="text-sm text-[#B6B6B6] ml-3 mt-1 cursor-pointer">I agree to terms & Policy.</label>
                            </div>
                            <button className='font-medium text-success'>Learn more</button></div>
                        <button className=' bg-[#253D4E] w-[130px] py-3 rounded text-white mt-8'>Singup</button>

                    </form>
                </div>

                <div className='lg:w-[400px] lg:h-[300px] w-full h-full border shadow-lg p-8 mt-32 rounded'>
                    <button className=' bg-[#1877F2] w-full py-3 rounded-md text-white '> <span className='flex items-center gap-4 justify-center translate-y-0 hover:-translate-y-1 duration-300'><BsFacebook className='w-8 h-8'></BsFacebook> Continue With Facebook</span></button>
                    <button className=' bg-[#FFFFFF] w-full py-3 rounded-md  shadow-lg border text-[#7E7E7E] mt-6 translate-y-0 hover:-translate-y-1 duration-300'> <span className='flex items-center gap-4 justify-center'> <img className='w-8 h-8' src="https://img.icons8.com/fluency/2x/google-logo.png" alt="" /> Continue with Google</span></button>
                    <button className=' bg-[#000000] w-full py-3 rounded-md text-white mt-6 translate-y-0 hover:-translate-y-1 duration-300'> <span className='flex items-center gap-4 justify-center '><AiFillApple className='w-8 h-8'></AiFillApple> Continue with Apple</span></button>
                </div>
            </div>
        </div>
    );
};

export default Singup;