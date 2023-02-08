import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

export default function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md px-4"
          ></input>
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div
            onClick={!session ? signIn : signOut}
            className="cursor-pointer hover:underline"
          >
            <p>
              {status == "authenticated"
                ? `Hello ${session.user.name}!`
                : "Sign In"}
            </p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="cursor-pointer hover:underline">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative flex items-center cursor-pointer hover:underline"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Cart
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="cursor-pointer hover:underline flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="cursor-pointer hover:underline">Prime</p>
        <p className="cursor-pointer hover:underline">Best Sellers</p>
        <p className="cursor-pointer hover:underline">Today's Deals</p>
        <p className="hidden lg:inline-flex cursor-pointer hover:underline">
          Electronics
        </p>
        <p className="hidden lg:inline-flex cursor-pointer hover:underline">
          Books
        </p>
        <p className="hidden lg:inline-flex cursor-pointer hover:underline">
          Sports & Outdoors
        </p>
        <p className="hidden lg:inline-flex cursor-pointer hover:underline">
          Beauty & Personal Care
        </p>
        <p className="hidden lg:inline-flex cursor-pointer hover:underline">
          Gift Ideas
        </p>
        <p className="hidden lg:inline-flex cursor-pointer hover:underline">
          Fashion
        </p>
        <p className="hidden lg:inline-flex cursor-pointer hover:underline">
          Grocery
        </p>

        <p className="hidden lg:inline-flex cursor-pointer hover:underline">
          Health & Household
        </p>
        <p className="hidden lg:inline-flex cursor-pointer hover:underline">
          Gift Cards
        </p>
        <p className="hidden lg:inline-flex cursor-pointer hover:underline">
          Coupons
        </p>
        <p className="hidden lg:inline-flex cursor-pointer hover:underline">
          Buy Again
        </p>
      </div>
    </header>
  );
}
