
import { FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import BillingDetails from './BillingDetails/BillingDetails';
import YourOrder from './YourOrder/YourOrder';

const Checkout = () => {
    const products = [
    
        {
            id: 19,
            badge: "Hot",
            category: "Hodo Foods",
            title: "Organic Turkey Breast",
            rating: 4.7,
            brand: "Applegate",
            price: 58.0,
            oldPrice: 62.5,
            sales: 100,
            stock: 125,
            countdownTarget: "2025-04-19 12:00:00",
            images: {
              default:
                "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg",
              hover: "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg",
            },
            description:
              "Applegate Organic Turkey Breast, lean and flavorful, sliced for sandwiches and salads.",
            additionalInfo:
              "This organic turkey breast is gluten-free and contains no artificial preservatives.",
            reviews: [
              { author: "Lucas B.", rating: 5, comment: "Lean and tasty!" },
              { author: "Madison A.", rating: 4, comment: "Good quality turkey." },
            ],
          },
          {
            id: 20,
            badge: "Hot",
            category: "Hodo Foods",
            title: "Organic Turkey Breast",
            rating: 4.7,
            brand: "Applegate",
            price: 58.0,
            oldPrice: 62.5,
            sales: 100,
            stock: 125,
            countdownTarget: "2025-04-19 12:00:00",
            images: {
              default:
                "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg",
              hover: "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg",
            },
            description:
              "Applegate Organic Turkey Breast, lean and flavorful, sliced for sandwiches and salads.",
            additionalInfo:
              "This organic turkey breast is gluten-free and contains no artificial preservatives.",
            reviews: [
              { author: "Lucas B.", rating: 5, comment: "Lean and tasty!" },
              { author: "Madison A.", rating: 4, comment: "Good quality turkey." },
            ],
          },
      ];
    return (
        <div>
            <h2 className='heading-2 text-textHeading mt-[45px]'>Checkout</h2>
            <h6 className='heading-6 text-textBody mt-5'> These are <span className='text-brand1'>3</span> products in your cart</h6>

            <div className='lg:flex items-center mt-12 gap-10 px-5'>
                <p className='flex items-center gap-2 text-medium text-textBody'> <FiUser /> Already have an account? <Link className='text-brand1' to="/login"> Click here to login</Link></p>

                <form className="flex items-center mt-5 lg:mt-0 ">
                    <div className="w-full">
                        <input type="text" className="border border-success focus:border-success  text-gray  rounded-l-lg     pl-5 py-[11px] " placeholder="Enter coupon code.." />
                    </div>
                    <button className="btn btn-success btn-hover text-white btn-success heading-6 border-0 rounded-r-lg ml-[-5px] w-40 h-12">Apply Coupon </button>
                </form>

            </div>
                <div className='lg:flex mt-10'>
                    <BillingDetails />
                    <YourOrder products={products}/>
                </div>

        </div>
    );
};

export default Checkout;