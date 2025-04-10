import { ImCancelCircle } from "react-icons/im";
const CartItem = ({ item }) => {
  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    // Update the quantity in the cart state or perform any other action
    console.log(`Updated quantity for ${item.title}: ${newQuantity}`);
  }
  return (
    <tr className="text-gray-500 text-sm md:text-base font-bold">
      <td className="px-4 py-4">
        <input type="checkbox" />
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <img className="w-16 md:w-20 border border-gray-300 p-2 rounded" src={item.images.default} alt={item.title} />
          <p>{item.title}</p>
        </div>
      </td>
      <td className="px-4 py-4 text-lg md:text-2xl">${item.price.toFixed(2)}</td>
      <td className="px-4 py-4">
        <input onChange={()=>handleQuantityChange() } className="border rounded text-center w-14 md:w-20 py-1 md:py-2" type="number" value={item.quantity} />
      </td>
      <td className="px-4 py-4 text-success text-lg md:text-2xl">
        ${(item.price * item.quantity).toFixed(2)}
      </td>
      <td className="px-4 py-4 flex justify-center mt-7">
        <ImCancelCircle className="cursor-pointer text-red-500 text-lg md:text-xl" />
      </td>
    </tr>
  );
};
export default CartItem;