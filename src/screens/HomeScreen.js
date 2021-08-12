import React from "react";
import { Link } from "react-router-dom";
import SplashPage from "../components/SplashPage";
import homeInfo from '../data/homePage'
import ProfilePic from '../assets/images/profile-pic.png'

const HomeScreen = () => {
  return (
    <React.Fragment>
      <SplashPage />
      {/* Here we our custom defined Tailwind class, card. The way we define
      these classes is via the index.css. See that file to understand how we define */}
      <div className="lg:mx-auto single-card max-width-screen4/5 lg:max-w-screen-lg text-white text-center sm:tracking-wide">
        <h1 className="py-3 text-2xl font-extrabold">About This Site</h1>
        <div className="flex justify-center tracking-widest divide-x p-3 text-lg">
          <div className="p-3 flex-1">REACT</div>
          <div className="p-3 flex-1">TAILWIND</div>
        </div>
        <p className="text-sm sm:p-5 sm:text-lg">{homeInfo.about}</p>
      </div>
      <div className="mx-auto h-1 bg-gray-300 my-10 rounded-lg max-w-screen4/5"></div>
      <img src={ProfilePic} alt="Kamal Sacranie, AKA Me" className='mx-auto rounded-full w-72 sm:w-96 ring ring-purple-900 ring-offset-4 ring-offset-purple-100 shadow-inner' />
      <h2 className="reg-text">
        Welcome to my site. Here you can learn{" "}
        <Link className="link" to="/about">
          about me
        </Link>
        , have a look at my{" "}
        <Link className="link" to="cv">
          resumé/CV
        </Link>
        , or{" "}
        <Link className="link" to="/contact">
          contact me.
        </Link>
      </h2>
    </React.Fragment>
  );
};

export default HomeScreen;
