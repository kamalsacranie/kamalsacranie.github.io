import React from "react";
import SideCard from "../components/SideCard";
import DataListFormatter from "../components/utilities/DataListFormatter";
import NeonText from "../components/utilities/NeonText";
import about from "../data/aboutMe";

const AboutScreen = () => {
  return (
    <div className="bg-yellow-100 rounded-b-3xl">
      <div className="min-h-screen flex">
        <div id="sidecard" className="self-center md:m-10">
          <SideCard />
        </div>
        {/* using flex auto here to size the div accross the horizontal space
        of the parent */}
        <div className="flex flex-auto flex-col text-center self-center">
          <div className="flex-auto inline">
            <NeonText>About</NeonText>
          </div>
          <div className="flex-auto inline transform translate-y-5">
            <NeonText> Me.</NeonText>
          </div>
        </div>
      </div>
      <div className="reg-text">
        <DataListFormatter 
          data={about} 
          ulClasses='list list-disc text-left' 
          liClasses='py-3' 
          hClasses='inline-block gradient big-text px-5 py-3 text-white rounded-3xl shadow-lg'
          pClasses='py-3'
        />
      </div>
    </div>
  );
};

export default AboutScreen;
