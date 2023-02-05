import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";

const max_rating = 5;
const min_rating = 1;

export default function Product({
  id,
  title,
  price,
  description,
  category,
  image,
}) {
  const [rating, setRating] = useState(0);

  const [hasPrime, setIsPrimeEnabled] = useState(0);

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (max_rating - min_rating + 1)) + min_rating
    );
    setIsPrimeEnabled(Math.random() < 0.5);
  }, []);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-6 text-yellow-400" />
          ))}
      </div>
      <p className="text-s my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-12"
            src="https://links.papareact.com/fdw"
            alt=""
          ></img>
          <p className="text-gray-500">Free Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto p-2 text-s bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500">
        Add to cart
      </button>
    </div>
  );
}
