import React from 'react';
import blogBanner from '../../assets/blogs/header-blog.png';
import blogCardImg from '../../assets/blogs/blogcardimg.png';
import ellipse7 from '../../assets/blogs/Ellipse7.png';
import bookmark from '../../assets/blogs/Bookmark.png';
import vector from '../../assets/blogs/Vector.png';
import category1 from '../../assets/blogs/category1.svg';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Blogs = () => {
    return (
        <section className='mt-8'>
            <div style={{
                background: `url(${blogBanner})`
            }} className='rounded-3xl py-24'>
                <h1 className='text-5xl font-bold text-[#253d4e] pl-14'>Blog & News</h1>
            </div>


            <div className="pt-6 pb-12 ">
                <div id="card" className="">
                    <h2 className=" text-2xl xl:text-3xl my-8 text-[#253D4E] font-semibold flex items-center"> <img className='mr-4 w-8' src={category1} alt="" /> Kitchen Articles</h2>
                    {/* <!-- container for all cards --> */}
                    <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
                        {/* <!-- card --> */}
                        <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                            {/* <!-- media --> */}
                            <div className="h-64 w-auto block  md:w-1/2">
                                <img className='h-full w-full object-cover object-center' src={blogCardImg} alt="blog image" />
                            </div>
                            {/* <!-- content --> */}
                            <div className="w-full py-6 px-8 text-gray-800 flex flex-col justify-between">
                                <h3 className="font-semibold text-lg leading-tight truncate">9 Tasty Ideas That Will Inspire You to Grow a Home Herb Garden Today</h3>
                                <p className="mt-2 text-[#7E7E7E]">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, sit voluptatem. Facilis fugiat dolor, delectus deserunt veritatis quae repellat eaque molestiae? Et architecto minima totam mollitia alias, repellendus debitis fugiat ipsum! Itaque sapiente cupiditate aliquam rerum et autem adipisci porro ipsa nobis minima! Distinctio amet eos nobis provident ad. Modi.
                                </p>
                                <div className='flex items-center justify-between pt-5'>
                                    <div className='flex items-center'>
                                        <img className='w-8' src={ellipse7} alt="" />
                                        <p className='ml-3 mb-1'><small>Sugar Rosie</small></p>
                                        <p className='ml-6 mb-1 text-[#7E7E7E]'><small>2 hours ago</small></p>
                                    </div>
                                    <div>
                                        <div className='flex items-center'>
                                            <img className='' src={bookmark} alt="" />
                                            <img className='ml-3' src={vector} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-6 pb-12 ">
                <div id="card" className="">

                    {/* <!-- container for all cards --> */}
                    <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
                        {/* <!-- card --> */}
                        <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                            {/* <!-- media --> */}
                            <div className="h-64 w-auto block  md:w-1/2">
                                <img className='h-full w-full object-cover object-center' src={blogCardImg} alt="" />
                            </div>
                            {/* <!-- content --> */}
                            <div className="w-full py-6 px-8 text-gray-800 flex flex-col justify-between">
                                <h3 className="font-semibold text-lg leading-tight truncate">9 Tasty Ideas That Will Inspire You to Grow a Home Herb Garden Today</h3>
                                <p className="mt-2 text-[#7E7E7E]">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, sit voluptatem. Facilis fugiat dolor, delectus deserunt veritatis quae repellat eaque molestiae? Et architecto minima totam mollitia alias, repellendus debitis fugiat ipsum! Itaque sapiente cupiditate aliquam rerum et autem adipisci porro ipsa nobis minima! Distinctio amet eos nobis provident ad. Modi.
                                </p>
                                <div className='flex items-center justify-between pt-5'>
                                    <div className='flex items-center'>
                                        <img className='w-8' src={ellipse7} alt="" />
                                        <p className='ml-3 mb-1'><small>Sugar Rosie</small></p>
                                        <p className='ml-6 mb-1 text-[#7E7E7E]'><small>2 hours ago</small></p>
                                    </div>
                                    <div>
                                        <div className='flex items-center'>
                                            <img className='' src={bookmark} alt="" />
                                            <img className='ml-3' src={vector} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-6 pb-12 ">
                <div id="card" className="">

                    {/* <!-- container for all cards --> */}
                    <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
                        {/* <!-- card --> */}
                        <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                            {/* <!-- media --> */}
                            <div className="h-64 w-auto block  md:w-1/2">
                                <img className='h-full w-full object-cover object-center' src={blogCardImg} alt="" />
                            </div>
                            {/* <!-- content --> */}
                            <div className="w-full py-6 px-8 text-gray-800 flex flex-col justify-between">
                                <h3 className="font-semibold text-lg leading-tight truncate">9 Tasty Ideas That Will Inspire You to Grow a Home Herb Garden Today</h3>
                                <p className="mt-2 text-[#7E7E7E]">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, sit voluptatem. Facilis fugiat dolor, delectus deserunt veritatis quae repellat eaque molestiae? Et architecto minima totam mollitia alias, repellendus debitis fugiat ipsum! Itaque sapiente cupiditate aliquam rerum et autem adipisci porro ipsa nobis minima! Distinctio amet eos nobis provident ad. Modi.
                                </p>
                                <div className='flex items-center justify-between pt-5'>
                                    <div className='flex items-center'>
                                        <img className='w-8' src={ellipse7} alt="" />
                                        <p className='ml-3 mb-1'><small>Sugar Rosie</small></p>
                                        <p className='ml-6 mb-1 text-[#7E7E7E]'><small>2 hours ago</small></p>
                                    </div>
                                    <div>
                                        <div className='flex items-center'>
                                            <img className='' src={bookmark} alt="" />
                                            <img className='ml-3' src={vector} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center my-10 px-10'>
                <div className='text-[#7E7E7E] bg-[#F2F3F4] p-3 rounded-full font-bold  hover:bg-[#3BB77E] hover:text-white'>
                    <BsArrowLeft></BsArrowLeft>
                </div>
                <div className='pl-4'>
                    <p className='bg-[#F2F3F4] font-bold text-[#7E7E7E] hover:bg-[#3BB77E] hover:text-white rounded-full p-5 w-1 h-1 flex justify-center items-center'>1</p>
                </div>
                <div className='pl-4'>
                    <p className='bg-[#F2F3F4] font-bold text-[#7E7E7E] hover:bg-[#3BB77E] hover:text-white rounded-full p-5 w-1 h-1 flex justify-center items-center'>2</p>
                </div>
                <div className='pl-4'>
                    <p className='bg-[#F2F3F4] font-bold text-[#7E7E7E] hover:bg-[#3BB77E] hover:text-white rounded-full p-5 w-1 h-1 flex justify-center items-center'>3</p>
                </div>
                <div className='pl-4'>
                    <p className='bg-[#F2F3F4] font-bold text-[#7E7E7E] hover:bg-[#3BB77E] hover:text-white rounded-full p-5 w-1 h-1 flex justify-center items-center'>...</p>
                </div>
                <div className='text-[#7E7E7E] bg-[#F2F3F4] p-3 rounded-full font-bold ml-4  hover:bg-[#3BB77E] hover:text-white'>
                    <BsArrowRight></BsArrowRight>
                </div>
            </div>

        </section>
    );
};

export default Blogs;