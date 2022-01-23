import React from "react";
import Image from "next/image";
import nivea from "../../assets/img/nivea.jpg";
import ordinary from "../../assets/img/theor.png";
import thebodyshop from "../../assets/img/thebodyshop.png";
import sk2 from "../../assets/img/sk.jpg";
import maybelline from "../../assets/img/maybe.png";
import innisfree from "../../assets/img/innisfree.jpg";
import right from "../../assets/img/right.svg";

const Brands = () => {
  return (
    <section className="container mx-auto px-20 pb-16">
      <div className="text-2xl font-bold tracking-wide">Top Brands</div>
      <div className="flex justify-between">
        <div className="text-lg text-gray-400 tracking-wider">
          We all know and love
        </div>
        <div className="flex justify-between w-28">
          <div className="text-lg text-[#EB2C85] tracking-wider">See More</div>
          <Image src={right} alt="Chevron Right" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-4 mt-6 justify-between">
        <div className="w-44 mb-6 px-4 flex items-center">
          <div className="flex items-center">
            <Image src={nivea} alt="Nivea Logo" />
          </div>
        </div>
        <div className="w-44 mb-6 px-4 flex items-center">
          <div className="flex items-center">
            <Image src={ordinary} alt="The Ordinary Logo" />
          </div>
        </div>
        <div className="w-44 mb-6 px-4 flex items-center">
          <div className="flex items-center">
            <Image src={thebodyshop} alt="The Body Shop Logo" />
          </div>
        </div>
        <div className="w-44 mb-6 px-4 flex items-center">
          <div className="flex items-center">
            <Image src={sk2} alt="SK-II Logo" />
          </div>
        </div>
        <div className="w-44 mb-6 px-4 flex items-center">
          <div className="flex items-center py-4">
            <Image src={maybelline} alt="Maybelline Logo" />
          </div>
        </div>
        <div className="w-44 mb-6 px-4 flex items-center">
          <div className="flex items-center py-8 px-4">
            <Image src={innisfree} alt="Innisfree Logo" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-2xl font-bold py-2">
          Female Daily - Find everything you want to know about beauty on Female
          Daily
        </p>
        <p className="text-lg">
          Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty
          Tutorials, Discussions, Beauty Workshops, anything!
        </p>
        <p className="text-lg">
          We are here to be your friendly solution to all things beauty, inside
          and out!
        </p>
      </div>
    </section>
  );
};

export default Brands;
