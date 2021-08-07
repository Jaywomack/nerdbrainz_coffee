import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-pink-500 p-3">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4">
            <img
              className="h-14 w-14 mr-6 filter invert "
              src="/static/images/nb_logo.png"
              alt=""
            />{" "}
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              NerdBrainz Coffee{" "}
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-pink-500 rounded lg:hidden text-white ml-auto hover:text-black outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="uppercase lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-pink-500 hover:text-black">
                <i className="fas fa-mug-hot text-white text-lg mr-3 hidden md:block mb-3"></i>
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="uppercase lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-pink-500 hover:text-black">
                <i className="fas fa-mug-hot text-white text-lg mr-3 hidden md:block mb-3"></i>
                Our Menu
              </a>
            </Link>
            <Link href="/">
              <a className="uppercase lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-pink-500 hover:text-black">
                <i className="fas fa-mug-hot text-white text-lg mr-3 hidden md:block mb-3"></i>
                News & Events
              </a>
            </Link>
            <Link href="/">
              <a className="uppercase lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-pink-500 hover:text-black">
                <i className="fas fa-mug-hot text-white text-lg mr-3 hidden md:block mb-3"></i>
                ABOUT
              </a>
            </Link>
            <Link href="/">
              <a className="uppercase lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-pink-500 hover:text-black">
                <i className="fas fa-mug-hot text-white text-lg mr-3 hidden md:block mb-3"></i>
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
