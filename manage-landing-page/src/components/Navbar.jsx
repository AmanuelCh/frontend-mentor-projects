import { useState } from "react";

import logo from "../images/logo.svg";
import openMenu from "../images/icon-hamburger.svg";
import closeMenu from "../images/icon-close.svg";
import background from "../images/bg-tablet-pattern.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <>
      <div className="container mx-auto mt-10 px-6 flex justify-between items-center relative lg:py-6">
        <div>
          <img src={logo} className="cursor-pointer" alt="manage logo" />
        </div>
        <div className="hidden space-x-6 text-veryDarkBlue md:text-sm md:flex">
          <a href="#" className="hover:text-darkGrayishBlue transition-colors">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue transition-colors">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue transition-colors">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue transition-colors">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue transition-colors">
            Community
          </a>
        </div>
        <div className="hidden md:flex">
          <a href="#" className="btn btn-primary">
            Get Started
          </a>
        </div>

        <div className="md:hidden">
          <img
            src={!isOpen ? openMenu : closeMenu}
            className="cursor-pointer"
            onClick={toggleMenu}
            alt="menu"
          />
        </div>
      </div>

      <div className="md:hidden">
        <div
          className={`absolute flex-col items-center ${
            isOpen ? "flex" : "hidden"
          } self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md text-veryDarkBlue`}
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
