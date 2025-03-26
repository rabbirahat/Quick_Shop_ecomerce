import React from 'react';
import { Link } from 'react-router-dom';

const AccountDetails = () => {
    return (
        <div>
            <h1 className='text-4xl font-serif'>Account Details</h1>
            <p className='font-serif'>Already have an account? <Link to='/login' className='text-success hover:text-yellow-600'>Log in instead!</Link></p>
            <form className='md:w-[700px] w-full'>
                <div className='p-2'>


                    <div className="md:flex gap-4 mt-4">
                        <input name='courseDuration' className='w-full h-14 pl-3 rounded-md in-bord border mb-3' type="text" placeholder='Name' required />
                        <input name='students' className='w-full h-14 pl-3 rounded-md in-bord mb-3 border' type="text" placeholder='Email' required />

                    </div>

                    <input name='image' className='w-full h-14 pl-3 rounded-md in-bord mb-3 border' type="text" placeholder='Display Name' />
                    <input name='image' className='w-full h-14 pl-3 rounded-md in-bord mb-3 border' type="text" placeholder='Email Address' />
                    <input name='image' className='w-full h-14 pl-3 rounded-md in-bord mb-3 border' type="text" placeholder='Current Password' />
                    <input name='image' className='w-full h-14 pl-3 rounded-md in-bord mb-3 border' type="text" placeholder='New password' />
                    <input name='image' className='w-full h-14 pl-3 rounded-md in-bord mb-3 border' type="text" placeholder='Confirm Password' />

                    <button type='submit' className='px-8 py-3 bg-success rounded-md font-medium text-white'>Save Change</button>

                </div>
            </form>
        </div>
    );
};

export default AccountDetails;