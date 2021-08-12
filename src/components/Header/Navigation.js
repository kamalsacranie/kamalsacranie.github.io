import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdBeer } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import NavItems from "./NavItems";
import routes from "../../data/navRoutes";

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);

  const location = useLocation()

  useEffect(() => {
    setShowNav(false)
  }, [location])

  return (
    // Defining our menu as flex and take up whole screen
    <div>
      {/* Defining font colours to apply to the whole nav div */}
      <div
        className={`fixed static top-0 left-0 min-h-screen font-medium px-3 bg-blue-800 text-blue-100 px-2 py-7 w-screen md:w-80 space-y-6 ${
          !showNav ? "transform -translate-x-full" : "transform -translate-x-0"
        } transition duration-500`}
      >
        {/* mapping our title from route */}
        {routes
          .filter((main) => main.title)
          .map((title) => {
            return (
              <Link
                key={title.text}
                to={title.path}
                className="flex items-center space-x-5 pl-5"
              >
                <IoMdBeer className="h-12 w-12 text-yellow-300" />
                <span className="text-2xl font-extrabold">{title.text}</span>
              </Link>
            );
          })}
        <NavItems />
        {/* We must wrap our setMenu in an arrow function because 
        if not it will execute straight away and cause a render loop */}
      </div>
      <button
        className={`bg-gradient-to-t hover:from-pink-500 hover:to-blue-500 ${
          showNav ? "text-white from-pink-500 to-yellow-500" : "text-black"
        } fill-current transition duration-500 fixed static top-0 right-0`}
        onClick={() => setShowNav(!showNav)}
      ><CgMenuRight className={`p-3 h-16 w-16 ${showNav ? 'transform rotate-180' : 'transform rotate-0' } transition duration-500`} />
      </button>
    </div>
  );
};

export default Navigation;
