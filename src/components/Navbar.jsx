import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose ,AiFillTag } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";


const Navbar = () => {
const [nav, setNav] = useState(false)
    return (
      <div className="max-w-full mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <div className="cursor-pointer">
            <AiOutlineMenu onClick={() => setNav(!nav)} size={30} />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
            UBER <span className="font-bold">EATS</span>{" "}
          </h1>
          <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
            <p className="bg-black text-white rounded-full p-2">delivery</p>
            <p className="p-2"> pick up</p>
          </div>
        </div>
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={25} />
          <input
            className="bg-transparent p-2 w-full focus:outline-none "
            type="text"
            placeholder="search foods"
          />
        </div>
        <button className="bg-black text-white hidden md:flex items-center p-2 rounded-full">
          <BsFillCartFill size={20} className="mr-2" /> cart
        </button>
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
              : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <h2>
            UBER <span className="font-bold">EATS</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-800">
              <li className="flex text-xl py-4">
                <TbTruckDelivery size={25} className="mr-4" />
                orders
              </li>
              <li className="flex text-xl py-4">
                <MdFavorite size={25} className="mr-4" />
                Favorites
              </li>
              <li className="flex text-xl py-4">
                <FaWallet size={25} className="mr-4" />
                Wallet
              </li>
              <li className="flex text-xl py-4">
                <MdHelp size={25} className="mr-4" />
                Help
              </li>
              <li className="flex text-xl py-4">
                <AiFillTag size={25} className="mr-4" />
                Promotions
              </li>
              <li className="flex text-xl py-4">
                <BsFillSaveFill size={25} className="mr-4" />
                Best Ones
              </li>
              <li className="flex text-xl py-4">
                <FaUserFriends size={25} className="mr-4" />
                Invite Friends
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
}

export default Navbar
