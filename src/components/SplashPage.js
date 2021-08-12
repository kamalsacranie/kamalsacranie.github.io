import splashVector from "../assets/svgs/landing-vector.svg";
import splashVectorSmall from "../assets/svgs/landing-vector-smallmedia.svg";

import React from "react";

const SplashPage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        {/* Creating a subflexbox to center our name */}
        <div className="order-last md:order-none flex-1 flex-wrap flex items-center justify-center">
          <h1 className="font-serif text-5xl md:text-6xl bold tracking-wider text-center shadow-inner m-4 p-2 animate-bounce">
            Kamal
          </h1>
          <h1 className="font-serif text-5xl md:text-6xl bold tracking-wider text-center shadow-inner m-4 p-2 md:transform md:translate-x-4 md:translate-y-20">
            Sacranie
          </h1>
        </div>
        <div
          // bg-bottom means that the bottom of the image is pinned whne we resize
          className="flex-1 min-h-screen/3 bg-cover md:hidden bg-bottom"
          style={{ backgroundImage: `url(${splashVectorSmall})` }}
        ></div>
        <div
          className="hidden md:flex min-w-screen/2 min-h-screen/2 bg-cover"
          style={{ backgroundImage: `url(${splashVector})` }}
        ></div>
      </div>
    </div>
  );
};

export default SplashPage;
