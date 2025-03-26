import { GoLocation } from 'react-icons/go';
import { FiPhoneCall, FiClock } from 'react-icons/fi';
import { GiPaperPlane } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { BsFacebook, BsMessenger, BsTelephone } from 'react-icons/bs';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import FooterTopBanner from './FooterBanner';
import logo from '../..//assets/QS_LOGO.png';

// Contact Information Section
const ContactInfo = () => (

  <div className="max-w-sm pr-6">
    <img src={logo} alt="logo" className="mb-2" />
    <p className="mb-2">Pellentesque posuere orci lobortis</p>
    <ul className="space-y-1">
      <li>
        <GoLocation className="text-success font-bold inline-block mr-2" />
        <span className="font-bold">Address:</span> 5171 W Campbell Ave, Kent, Utah 53127, United States
      </li>
      <li>
        <FiPhoneCall className="text-success font-bold inline-block mr-2" />
        <span className="font-bold">Call Us:</span> (+91) - 540-025-124553
      </li>
      <li>
        <GiPaperPlane className="text-success font-bold inline-block mr-2" />
        <span className="font-bold">Email:</span> contact@nestmart.com
      </li>
      <li>
        <FiClock className="text-success font-bold inline-block mr-2" />
        <span className="font-bold">Hours:</span> 10:00 - 18:00, Mon - Sat
      </li>
    </ul>
  </div>
);

// Company Links Section
const CompanyLinks = () => (
  <div className="min-w-max pr-6">
    <h4 className="mb-2 text-lg font-bold">Company</h4>
    <ul className="space-y-1">
      <li className='link-hover' ><Link to="/about">About us</Link></li>
      <li className='link-hover' ><Link to="/contact">Contact us</Link></li>
      <li className='link-hover' ><Link to="/blog">Blogs</Link></li>
      <li className='link-hover' >Terms & Conditions</li>
      <li className='link-hover' >Support Center</li>
      <li className='link-hover' >Careers</li>
    </ul>
  </div>
);

// Account Links Section
const AccountLinks = () => (
  <div className="min-w-max pr-6">
    <h4 className="mb-2 text-lg font-bold">Account</h4>
    <ul className="space-y-1">
      <li className='link-hover' ><Link to="/signin">Sign In</Link></li>
      <li className='link-hover' >View Cart</li>
      <li className='link-hover' >My Wishlist</li>
      <li className='link-hover' >Track My Order</li>
      <li className='link-hover' >Help Ticket</li>
      <li className='link-hover' >Shipping Details</li>
      <li className='link-hover' >Compare products</li>
    </ul>
  </div>
);

// App & Payment Section
const AppAndPayment = () => (
  <div className="max-w-sm w-full pr-6">
    <h4 className="mb-2 text-lg font-bold">App & Payment</h4>
    <p className="mb-2">Install DL Commerce App from App Store or Google Play</p>
    <div className="flex mb-2">
      <img className="w-1/2 mr-2" src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/app-store.jpg" alt="app store" />
      <img className="w-1/2" src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/google-play.jpg" alt="google play" />
    </div>
    <p className="mb-2">Secured Payment Gateways</p>
    <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/payment-method.png" alt="payment methods" />
  </div>
);

// Social Media and Contact Bottom Info Section
const SocialMediaAndContact = () => (
  <div className="flex flex-col md:flex-row justify-between pb-10">
    <div className="text-center md:text-left">
      <p>© 2025, Quick Shop</p>
      <p>Designed by <span className="text-brand1">Team Crafter</span> All rights reserved</p>
    </div>

    <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
      <div className="flex items-center gap-2">
        <BsTelephone className="w-8 h-8" />
        <p className="text-2xl font-sans text-success font-semibold">1900 - 6666</p>
        <p className="text-gray-500 text-xs">Working 8:00 - 22:00</p>
      </div>
    </div>

    <div className="text-center md:text-right mt-4 md:mt-0">
      <div className="flex gap-4 justify-center md:justify-end">
        <p className="text-xl font-sans text-gray-700">Follow Us</p>
        <span className="flex gap-2 text-success">
          <BsFacebook className="w-6 h-6 cursor-pointer" />
          <AiOutlineTwitter className="w-6 h-6 cursor-pointer" />
          <AiOutlineInstagram className="w-6 h-6 cursor-pointer" />
          <FaYoutube className="w-6 h-6 cursor-pointer" />
          <BsMessenger className="w-6 h-6 cursor-pointer" />
        </span>
      </div>
      <p className="mt-1 font-medium text-gray-500 font-lato">Up to 15% discount on your first subscribe</p>
    </div>
  </div>
);

// Main Footer Component
const Footer = () => {
  return (
    <footer className="w-full">
      <FooterTopBanner />
      <div className="pt-8 px-4 md:px-8">
        <div className="flex flex-wrap justify-between gap-8">
          <ContactInfo />
          <CompanyLinks />
          <AccountLinks />
          <AppAndPayment />
        </div>

        <div className="my-2 bg-[#D8F1E5]">
          <hr />
        </div>

        <SocialMediaAndContact />
      </div>
    </footer>
  );
};

export default Footer;