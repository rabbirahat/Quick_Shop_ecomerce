import { Rating, Star } from '@smastrom/react-rating';

const RatingStyles = {
  itemShapes: Star,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#ddd",
};

const ProductCart = ({ product }) => (
  <div className="flex justify-between items-center py-2">
    <img src={product.images?.default} className="w-20" alt="product" />
    <div>
      <p className="font-bold">{product.title}</p>
      <Rating value={product.rating} itemStyles={RatingStyles} style={{ maxWidth: 100 }} readOnly />
    </div>
    <p className="text-gray-500">x{product.quantity}</p>
    <p className="text-brand1 font-bold">${(product.price * product.quantity).toFixed(2)}</p>
  </div>
);

const YourOrder = ({ products, coupon }) => {
  const subtotal = products.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = coupon?.discount || 0;
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  return (
    <div className="lg:w-1/2 bg-gray-50 p-5 rounded">
      <h2 className="text-lg font-bold mb-4">Your Order</h2>
      {products.map((product) => (
        <ProductCart key={product._id} product={product} />
      ))}
      <div className="mt-4 border-t pt-4">
        <p className="flex justify-between">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </p>
        {discount > 0 && (
          <p className="flex justify-between text-red-500">
            <span>Coupon ({coupon.code}):</span>
            <span>- ${discountAmount.toFixed(2)}</span>
          </p>
        )}
        <p className="flex justify-between font-bold text-lg mt-2">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default YourOrder;
