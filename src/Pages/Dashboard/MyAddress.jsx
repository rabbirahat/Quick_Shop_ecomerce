import React from 'react';

const MyAddress = () => {
    return (
        <div className='md:flex gap-64'>
            <div className=''>
                <h1 className='text-4xl font-bold text-[#253D4E]'>Billing Address</h1>
                <div className='font-medium mt-6 text-gray-800'>
                    <p>3522 Interstate</p>
                    <p>75 Business Spur,</p>
                    <p>Sault Ste.
                    </p>
                    <p>Marie, MI 49783
                    </p>
                    <p>New York
                    </p>
                    <button className='text-[#3BB77E] mt-2 hover:text-yellow-600'>Edit</button>
                </div>
            </div>

            <div className=''>
                <h1 className='text-2xl font-medium text-[#253D4E]'>Shipping Address</h1>
                <div className='font-medium mt-6 text-gray-800'>
                    <p>4299 Express Lane
                    </p>
                    <p>Sarasota</p>
                    <p>FL 34249 USA

                    </p>
                    <p>Phone: 1.941.227.4444

                    </p>
                    <p>Sarasota
                    </p>
                    <button className='text-[#3BB77E] mt-2 hover:text-yellow-600'>Edit</button>
                </div>
            </div>
        </div>
    );
};

export default MyAddress;