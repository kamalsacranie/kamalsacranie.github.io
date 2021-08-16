import React, { useState } from "react";
import AnimateHeight from 'react-animate-height'
import { financeItems, techItems, miscItems } from "../data/CV";
import CvCard from "../components/CvCard";

const cvItems = [financeItems, techItems, miscItems]

const ResumeScreen = () => {

  const [height, setheight] = useState(100)

  return (
    <div className="bg-yellow-100 pb-10 -mb-10">
      <div className='flex flex-col items-center'>
        <h1 className='big-text text-center pt-10'>Resumé and Notable Achievements</h1>
        <p className='container text-center py-10 px-10 border-b-4 border-purple-900 text-xl max-w-2xl'>
          Here are all my notable achievments. Clicking on each card will give you a more detailed description of each
          of my endeavours. As you can see, one of my main strength is the diversity of my skillset. While studying my
          undergraduate degree in Accounting and Finance, I have constantly been concurrently teaching myself Software
          and Web Development.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 lg:container gap-9 p-12 justify-items-center m-auto min-h-screen">
        {cvItems.map((category) => Object.keys(category).map((key, index) => {
          return (
            <CvCard data={category} objKey={key} index={index} />
          );
        }))}
      </div>
    </div>
  );
};

export default ResumeScreen;
