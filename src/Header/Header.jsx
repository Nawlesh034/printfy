import React, { useEffect, useState } from "react";
import { Image1, navLinks } from "../Constants";

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to handle window resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Effect to listen to window resize event
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  return (
    <header className="h-[72px] bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center h-full px-4">
         {/* Hamburger menu for mobile */}
      
       {windowWidth>768?<a href="https://flowbite.com" className="inline-block ">
          <img
            src={Image1}
            className="w-[135px] md:w-[110px] lg:w-[135px]" // Adjust width for tablet/mobile
            alt="Flowbite Logo"
          />
        </a>:   <button
          className="text-gray-700 md:hidden flex"
          onClick={() => setIsOpen(!isOpen)}
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
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>

           {/* Logo */}
        <a href="https://flowbite.com" className="inline-block ">
          <img
            src={Image1}
            className="w-[135px] md:w-[110px] lg:w-[135px]" // Adjust width for tablet/mobile
            alt="Flowbite Logo"
          />
        </a>
        </button>}
       

       

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            {navLinks.map((index) => (
              <li key={index.id}>
                <a
                  href="#"
                  className="block py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white"
                >
                  {index.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Log in & Sign up Buttons */}
        <div className=" md:flex space-x-4">
          <button className="border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100">
            Log in
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Sign up
          </button>
        </div>
      </div>

   
    </header>
  );
}

export default Header;
