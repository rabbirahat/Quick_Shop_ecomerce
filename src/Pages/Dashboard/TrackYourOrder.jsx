import React from 'react';

const TrackYourOrder = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-scale1'>Orders tracking
            </h1>
            <p className='mt-6 text-gray-500'>To track your order please enter your OrderID in the box below and press "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>


            <form className='md:w-2/4 w-full mt-6'>
                <div>
                    <label className='font-medium' htmlFor="">Order ID</label>
                    <input className='border focas:border-scale2 py-4 pl-3 mt-1 w-full rounded-md' type="text" placeholder='Found in your order confirmation email' />
                </div>
                <div className='mt-4'>
                    <label className='font-medium' htmlFor="">Billing email</label>
                    <input className='border focas:border-scale2 py-4 pl-3 mt-1 w-full rounded-md' type="text" placeholder='Email you used during checkout' />
                </div>
                <button className='bg-success py-3 w-[130px] font-medium text-white rounded-md mt-6'>Track</button>
            </form>
        </div>
    );
};

export default TrackYourOrder;