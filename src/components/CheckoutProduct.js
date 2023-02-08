import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { StarIcon } from "@heroicons/react/24/solid";
import { removeFromBasket } from "../slices/basketSlice";

export default function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5 ">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-6 text-yellow-400" />
            ))}
        </div>
        <p className="text-sm my-2 line-clamp-3">{description}</p>
        <div className="mb-5">
          <Currency quantity={price} />
        </div>
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            ></img>
            <p className="text-gray-500">Free Next-Day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button
          onClick={removeItemFromCart}
          className="mt-auto p-2 text-s bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500"
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}
