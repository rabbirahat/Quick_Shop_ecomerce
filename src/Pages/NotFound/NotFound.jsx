import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import NavBar from '../../Shared/Navbar/NavBar';
import Footer from '../../Shared/Footer/Footer';

const NotFound= () => {
    return (
        <>
        <NavBar/>
        <div className='mx-8 mt-16 py-20'>

            <div className='lg:w-[600px] w-full mx-auto text-center'>
                <img className='w-[300px] mx-auto' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/page-404.png" alt="" />
                <h1 className='lg:text-6xl text-4xl font-lato mt-2 text-[#253D4E]'>Page Not Found
                </h1>

                <p className='mt-4 lg:text-xl font-lato'>The link you clicked may be broken or the page may have been removed.
                </p>
                <p className='mt-2 lg:text-xl font-lato'>visit the <Link to='/' className='text-success'>Homepage</Link> or <Link to='/contuct' className='text-success'>Contact us</Link> about the problem

                </p>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default NotFound;