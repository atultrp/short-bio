import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { FaPenNib } from 'react-icons/fa'
import { HiMenuAlt1 } from 'react-icons/hi';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter()

  // Modal state
  const [modal, setModal] = useState(false);
  const popUpRef = useRef();

  useOnClickOutside(popUpRef, () => {
    setModal(false)
  });

  return (
    <>
      {/* Desktop */}
      <nav className=" justify-between px-16 py-6 shadow-md items-center hidden md:flex bg-white sticky top-0 z-50">
        <Link href={"/"} >
          <h1 className="text-4xl font-semibold tracking-wide uppercase custom-font text-transparent bg-clip-text bg-gradient-to-tr from-green-300 via-blue-500 to-green-300 cursor-pointer hover:scale-105 duration-200">
            Short Bio </h1>
        </Link>
        <ul className="flex space-x-16 text-base font-semibold items-center">
          <Link href={"/"} >
            <li className={`${router.pathname === "/" ? "opacity-100 text-rose-500 cursor-pointer" : "opacity-70 hover:text-rose-500 hover:scale-110 ease-in-out duration-200 cursor-pointer"}`}>Home</li>
          </Link>
          <Link href={"/about"} >
            <li className={`${router.pathname === "/about" ? "opacity-100 text-rose-500 cursor-pointer" : "opacity-70 hover:text-rose-500 hover:scale-110 ease-in-out duration-200 cursor-pointer"}`}>About Us</li>
          </Link>
        </ul>
      </nav>

      {/* Mobile */}
      <nav className="md:hidden py-3 px-4 shadow-md sticky top-0 z-50 items-center bg-white" ref={popUpRef}>
        <div className=" flex justify-between items-center">
          <Link href={"/"} >
            <h1 className="text-2xl font-bold uppercase cursor-pointer items-center custom-font tracking-widest text-transparent bg-clip-text bg-gradient-to-tr from-green-300 via-blue-500 to-green-300">Short Bio</h1>
          </Link>
          <HiMenuAlt1 className="text-4xl text-rose-500" onClick={() => setModal(!modal)} />
        </div>
        <ul className={`${!modal && 'hidden'} absolute right-2 px-4 py-4 shadow-md rounded bg-white font-semibold`}>
          <Link href={"/"} >
            <li className={`${router.pathname === "/" ? "opacity-100 text-rose-500 cursor-pointer" : "opacity-70 hover:text-rose-500 hover:scale-110 ease-in-out duration-200 cursor-pointer"}`}>Home</li>
          </Link>
          <Link href={"/about"} >
            <li className={`${router.pathname === "/about" ? "opacity-100 text-rose-500 cursor-pointer" : "opacity-70 hover:text-rose-500 hover:scale-110 ease-in-out duration-200 cursor-pointer"}`}>About Us</li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default Header