import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);


  return (
    <section className="bg-pink-50 ">
      <nav className="container px-2 sm:px-4 py-2.5 lg:py-0 rounded mx-auto">
        <div onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <IoIosClose className="absolute top-0 right-0 mt-3 w-10 h-10" /> : <FiMenu className="absolute top-0 right-0 mt-3 w-8 h-8" />}
        </div>
        <div className="flex md:justify-center flex-wrap ml-4 items-center lg:justify-between mx-auto">
          <a href="#home" className="flex items-center">
            <span className="self-center font-[Oswald] text-3xl font-semibold whitespace-nowrap tracking-widest dark:text-white">
              Sarwar Shuvo
            </span>
          </a>
          <div
            className="w-full md:block md:w-auto bg-pink-50 mr-4"
            id="navbar-default"
          >
            <ul className={`flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-pink-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
              {/* absolute duration-700 ease-in-out ${open ? 'top-6' : 'top-[-1200px]'} */}
              <li>
                <a
                  href="#home"
                  className="block py-2 pl-3 pr-4 text-white text-lg bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 pl-3 pr-4 text-gray-700 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="block py-2 pl-3 pr-4 text-gray-700 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 pl-3 pr-4 text-gray-700 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#volunteer"
                  className="block py-2 pl-3 pr-4 text-gray-700 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Volunteer
                </a>
              </li>
              <li>
                <a
                  href="#contract"
                  className="block py-2 pl-3 pr-4 text-gray-700 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
