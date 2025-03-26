import React from 'react';
const FooterTopBanner = () => {
    return (



        <div className="cart mt-8 bg-[#D8F1E5] pt-5 rounded-md ">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <div className="p-5 md:p-10">
                        <h1 className="text-textHeading font-main font-bold text-4xl">Stay home & get your daily needs from our shop</h1>
                        <p className="text-textBody font-semibold font-main text-xl mt-10">Start You'r Daily Shopping with <span className="text-[#3BB77E]">Quick Shop</span></p>
                        <div className="flex mt-10">
                            <input className="w-full outline-success bg-white rounded-l-full px-5 font-main" type="email" name="email" placeholder="Your Email Address" />
                            <button className="bg-[#3BB77E] btn-hover px-4 py-3 rounded-r-full text-white font-main font-bold">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center px-3">
                    <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-9.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default FooterTopBanner;