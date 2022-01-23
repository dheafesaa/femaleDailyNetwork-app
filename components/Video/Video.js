import React from "react";
import Image from "next/image";
import vd1 from "../../assets/img/vd3.jpg";
import vd2 from "../../assets/img/vd4.jpg";
import vd3 from "../../assets/img/vd2.jpg";
import right from "../../assets/img/right.svg";

const Video = () => {
  return (
    <section className="container mx-auto px-20 pb-16">
      <div className="text-2xl font-bold tracking-wide">Latest Videos</div>
      <div className="flex justify-between">
        <div className="text-lg text-gray-400 tracking-wider">
          Watch and learn, ladies
        </div>
        <div className="flex justify-between w-28">
          <div className="text-lg text-[#EB2C85] tracking-wider">See More</div>
          <Image src={right} alt="Logo FDN" />
        </div>
      </div>
      <div className="flex flex-row -mx-4 mt-6">
        <div className=" px-4 overflow-hidden flex">
          <Image
            className="w-full h-full object-cover"
            src={vd1}
            alt="Video 1"
          />
        </div>
        <div className="flex flex-col w-4/6">
          <div className="px-4 pb-6 overflow-hidden flex">
            <Image src={vd2} alt="Video 2" />
          </div>
          <div className="px-4 overflow-hidden flex">
            <Image src={vd3} alt="Video 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
