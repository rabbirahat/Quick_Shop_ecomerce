
import ProductCart from './ProductCart';

const YourOrder = ({products}) => {

    const subtotal = products.reduce((total, product) => total + product.price, 0);
    return (
        <div className='lg:w-1/2 px-5 mt-5 lg:mt-0'>
            <div className='flex justify-between items-center'>
                <h1 className='heading-4'>Your Order </h1>
                <p className='heading-6 text-[#B6B6B6]'>Subtotal: <span className='text-brand1'>${subtotal}</span></p>
            </div>
            {products.map((product)=> <ProductCart key={product.id} product={product}/>)}
            
        </div>
    );
};

export default YourOrder;