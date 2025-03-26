import React from 'react';
import { GoLocation } from 'react-icons/go';

import googleimg from '../../assets/contact/Rectangle 38.png';
const Contact = () => {

    return (
        <div className='mt-12 mx-8'>
            <h1 className=' text-success font-lato'>How can help you ?</h1>

            <div className='lg:flex lg:justify-evenly w-full mt-10 gap-8'>

                <div>
                    <h1 className='text-3xl font-lato'>Let us know how</h1>
                    <h1 className='text-3xl font-lato mt-3'> We can help you</h1>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>

                <div>
                    <h1 className='text-xl font-lato'>01. Visit Feedback</h1>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <h1 className='text-success mt-4'>03. Billing Inquiries</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div>
                    <h1 className='text-xl font-lato'>02. Employer Services</h1>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <h1 className='text-success mt-4'>04.General Inquiries</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
            {/* google map */}

            <div className='mt-12'>
                <img src={googleimg} alt="" />
            </div>

            {/* office studio shop */}

            <div className='mt-14 lg:flex w-full gap-24'>
                <div className='mb-4'>
                    <h1 className='text-3xl font-lato font-medium text-success'>Office</h1>
                    <p className='font-lato mt-4'>205 North Michigan Avenue, Suite 810
                    </p>
                    <p className='font-lato mt-1'>Chicago, 60601, USA
                    </p>
                    <p className='font-lato mt-1'>Phone: (123) 456-7890
                    </p>
                    <p className='font-lato mt-1'>Email: contact@Evara.com
                    </p>
                    <button className='bg-success mt-4 py-2 px-4 rounded-md text-white font-medium hover:bg-warning hover:border border-success '><span className='flex gap-2 items-center'> <GoLocation></GoLocation> View map</span></button>
                </div>
                <div className='mb-4'>
                    <h1 className='text-3xl font-lato font-medium text-success'>Studio</h1>
                    <p className='font-lato mt-4'>205 North Michigan Avenue, Suite 810
                    </p>
                    <p className='font-lato mt-1'>Chicago, 60601, USA
                    </p>
                    <p className='font-lato mt-1'>Phone: (123) 456-7890
                    </p>
                    <p className='font-lato mt-1'>Email: contact@Evara.com
                    </p>
                    <button className='bg-success mt-4 py-2 px-4 rounded-md text-white font-medium hover:bg-warning hover:border border-success '><span className='flex gap-2 items-center'> <GoLocation></GoLocation> View map</span></button>
                </div>

                <div>
                    <h1 className='text-3xl font-lato font-medium text-success'>Shop</h1>
                    <p className='font-lato mt-4'>205 North Michigan Avenue, Suite 810
                    </p>
                    <p className='font-lato mt-1'>Chicago, 60601, USA
                    </p>
                    <p className='font-lato mt-1'>Phone: (123) 456-7890
                    </p>
                    <p className='font-lato mt-1'>Email: contact@Evara.com
                    </p>
                    <button className='bg-success mt-4 py-2 px-4 rounded-md text-white font-medium hover:bg-warning hover:border border-success '><span className='flex gap-2 items-center'> <GoLocation></GoLocation> View map</span></button>
                </div>
            </div>



            {/* contact us */}

            <div className='mt-16'>
                <h1 className='text-2xl font-semibold text-success'>Contact form
                </h1>
                <h1 className='lg:text-6xl text-4xl font-bold text-[#253D4E] mt-2'>Drop Us a Line</h1>
                <p className='mt-3 text-[#7E7E7E] text-xl'>Your email address will not be published. Required fields are marked *

                </p>


                <div className='lg:flex w-full gap-16'>
                    <form >
                        <div className='p-2 lg:w-[700px] w-full mt-8'>


                            <div className="md:flex gap-4 mt-4">
                                <input name='courseDuration' className='w-full h-11 pl-3 rounded-md in-bord border border-[#E5E5E5] mb-3' type="text" placeholder='Your Name' required />
                                <input name='students' className='w-full border border-[#E5E5E5] h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Your Email' required />

                            </div>
                            <div className="md:flex gap-4 mt-4">
                                <input name='courseDuration' className='w-full h-11 pl-3 rounded-md in-bord border border-[#E5E5E5] mb-3' type="text" placeholder='Your Phone' required />
                                <input name='students' className='w-full border border-[#E5E5E5] h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Subject' required />

                            </div>


                            <textarea name='description' className='w-full h-32 pl-3 border border-[#E5E5E5] rounded-md in-bord mb-3' type="text" placeholder='Message' />

                            <button type='submit' className='p-3 px-4 bg-[#253D4E] hover:bg-success rounded-md  text-white font-semibold'>Sent Message</button>

                        </div>
                    </form>

                    <div>
                        <img className='w-[350px] h-[350px]' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/contact-2.png" alt="" />
                    </div>
                </div>


            </div>






        </div>
    );
};

export default Contact;