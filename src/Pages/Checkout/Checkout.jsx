import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import YourOrder from './YourOrder/YourOrder';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import useCart from '../../Hook/useCarts';
import useAuth from '../../Hook/useAuth';

const Checkout = () => {
  const { register, handleSubmit, reset } = useForm();
  const [cartData, refetch, isLoading] = useCart();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth(); 
  const cartItems = cartData?.cart || [];
  const coupon = cartData?.coupon;

    const handleClearCart = async () => {
      try {
        const res = await axiosSecure.delete("/carts/clear", {
          data: { email: user.email }, 
        });
        if (res.status === 200) {
          refetch(); 
        }
      } catch (err) {
      console.error(err);
      }
    };

      const handleRemoveCoupon = async () => {
        try {
          const res = await axiosSecure.post("/carts/coupon/remove", {
            email: user?.email,
          });
    
          if (res.status === 200) {
            refetch();
          }
        } catch (error) {
         console.error(error);
        }
      };

  const onSubmit = async (data) => {
    if (!cartItems.length) {
      return Swal.fire('Your cart is empty', '', 'warning');
    }

    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const discount = coupon?.discount || 0;
    const discountAmount = (subtotal * discount) / 100;
    const total = subtotal - discountAmount;

    const order = {
      email: data.email,
      userEmail: user?.email ,
      name: `${data.firstName} ${data.lastName}`,
      phone: data.phone,
      address: {
        line1: data.address,
        line2: data.addressLine,
        city: data.city,
        zip: data.zip,
      },
      items: cartItems,
      subtotal,
      discount,
      total,
      coupon: coupon?.code || null,
      paymentMethod: data.paymentMethod,
      orderDate: new Date(),
      status: 'Pending',
    };

    try {
      const res = await axiosSecure.post('/orders', order);
      if (res.data.insertedId) {
        Swal.fire('Order placed successfully!', '', 'success');
        reset();
        handleClearCart(); 
        handleRemoveCoupon();
        refetch(); 
      }
    } catch (err) {
      Swal.fire('Failed to place order', err.message, 'error');
    }
  };

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }
  return (
    <div className="px-5 mt-10">
      <h2 className="heading-2 text-textHeading">Checkout</h2>
      <div className="lg:flex items-center gap-10 mt-5">
        <p className="flex items-center gap-2 text-medium text-textBody">
          <FiUser /> Already have an account?
          <Link className="text-brand1" to="/login"> Click here to login</Link>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="lg:flex mt-10 gap-5">
        {/* Billing Form */}
        <div className="lg:w-1/2 space-y-4">
          <h1 className="heading-4">Billing Details</h1>
          <div className="lg:flex gap-4">
            <input {...register('firstName')} placeholder="First name*" required className="input-style" />
            <input {...register('lastName')} placeholder="Last name*" required className="input-style" />
          </div>
          <div className="lg:flex gap-4">
            <input {...register('phone')} placeholder="Phone*" required className="input-style" />
            <input {...register('email')} type="email" placeholder="Email*" required className="input-style" />
          </div>
          <div className="lg:flex gap-4">
            <input {...register('address')} placeholder="Address*" required className="input-style" />
            <input {...register('addressLine')} placeholder="Address Line*" className="input-style" />
          </div>
          <div className="lg:flex gap-4">
            <input {...register('city')} placeholder="City*" required className="input-style" />
            <input {...register('zip')} placeholder="Zip Code*" className="input-style" />
          </div>
          <div>
            <h4 className="heading-4 mt-5">Payment</h4>
            <label><input type="radio" {...register('paymentMethod')} value="bank" required /> Direct Bank Transfer</label><br />
            <label><input type="radio" {...register('paymentMethod')} value="cash" required /> Cash on Delivery</label>
          </div>
          <input
            type="submit"
            className="bg-success btn-hover text-white px-12 py-3 rounded-lg mt-6 cursor-pointer"
            value="Place Order"
          />
        </div>

        {/* Order Summary */}
        <YourOrder products={cartItems} coupon={coupon} />
      </form>
    </div>
  );
};

export default Checkout;
