import React from "react";
import ProfilePic from "../assets/images/profile-pic.png";
import cardInfo from "../data/sideCardInfo";

const SideCard = () => {
  return (
    <div className="hidden md:inline-block md:w-72 transform lg:w-96 \
     single-card hover:-translate-y-2 hover:scale-100 m-0">
      <img
        src={ProfilePic}
        alt="Kamal Sacranie profile pic"
        className="rounded-full p-5"
      />
      <p className='card-text text-white'>Hi, I'm Kamal. I love learning new things, building things,
      solving problems until 4 in the morning, and Nirvana. I spend a lot of time optimising my setup which
      results in me asking if I'm "working hard, or hardly working"; but what can I say, I'm a perfectionist.
      Recon you should have a poke about.</p>
      <div className="card-text text-white">
      <p className='big-text'>Fun facts:</p>
        <ul className='list-inside list-disc'>
          {cardInfo.funFacts.map((fact) => {
            return (
              <li key={fact.fact}>
                {fact.fact} - {fact.answer}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideCard;
