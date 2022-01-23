import React from "react";
import Image from "next/image";
import ic1 from "../../assets/img/ic1.png";
import ic2 from "../../assets/img/ic.png";
import ic3 from "../../assets/img/ic3.png";
import right from "../../assets/img/right.svg";

const Popular = () => {
  return (
    <section className="container mx-auto px-20 pb-16">
      <div className="text-2xl font-bold tracking-wide">Popular Groups</div>
      <div className="flex justify-between">
        <div className="text-lg text-gray-400 tracking-wider">
          Where the beauty TALK are
        </div>
        <div className="flex justify-between w-28">
          <div className="text-lg text-[#EB2C85] tracking-wider">See More</div>
          <Image src={right} alt="Logo FDN" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-2 mt-6 justify-between">
        <div className="w-64 rounded-lg p-4 border-2 border-stone-200 mx-2">
          <div className="flex justify-center">
            <img
              className="w-40 h-40 object-cover rounded-full border-2"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className=" text-2xl font-bold py-4 text-center">
              Embrace the Curl
            </div>
            <div className="flex justify-between w-44 py-2 items-center">
              <Image
                className="w-full h-full object-cover"
                src={ic1}
                alt="icons"
                width={20}
                height={20}
              />
              <Image
                className="w-full h-full object-cover"
                src={ic2}
                alt="icons"
                width={20}
                height={20}
              />
              <Image
                className="w-full h-full object-cover"
                src={ic3}
                alt="icons"
                width={20}
                height={20}
              />
            </div>
            <div className="text-base text-center font-medium pb-8">
              May our curls pop and never stop!
            </div>
          </div>
        </div>
        <div className="w-64 rounded-lg p-4 border-2 border-stone-200 mx-2">
          <div className="flex justify-center">
            <img
              className="w-40 h-40 object-cover rounded-full border-2"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className=" text-2xl font-bold py-4 text-center">
              Embrace the Curl
            </div>
            <div className="flex justify-between w-44 py-2 items-center">
              <Image
                className="w-full h-full object-cover"
                src={ic1}
                alt="icons"
                width={20}
                height={20}
              />
              <Image
                className="w-full h-full object-cover"
                src={ic2}
                alt="icons"
                width={20}
                height={20}
              />
              <Image
                className="w-full h-full object-cover"
                src={ic3}
                alt="icons"
                width={20}
                height={20}
              />
            </div>
            <div className="text-base text-center font-medium pb-8">
              May our curls pop and never stop!
            </div>
          </div>
        </div>
        <div className="w-64 rounded-lg p-4 border-2 border-stone-200 mx-2">
          <div className="flex justify-center">
            <img
              className="w-40 h-40 object-cover rounded-full border-2"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className=" text-2xl font-bold py-4 text-center">
              Embrace the Curl
            </div>
            <div className="flex justify-between w-44 py-2 items-center">
              <Image
                className="w-full h-full object-cover"
                src={ic1}
                alt="icons"
                width={20}
                height={20}
              />
              <Image
                className="w-full h-full object-cover"
                src={ic2}
                alt="icons"
                width={20}
                height={20}
              />
              <Image
                className="w-full h-full object-cover"
                src={ic3}
                alt="icons"
                width={20}
                height={20}
              />
            </div>
            <div className="text-base text-center font-medium pb-8">
              May our curls pop and never stop!
            </div>
          </div>
        </div>
        <div className="w-64 rounded-lg p-4 border-2 border-stone-200 mx-2">
          <div className="flex justify-center">
            <img
              className="w-40 h-40 object-cover rounded-full border-2"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className=" text-2xl font-bold py-4 text-center">
              Embrace the Curl
            </div>
            <div className="flex justify-between w-44 py-2 items-center">
              <Image
                className="w-full h-full object-cover"
                src={ic1}
                alt="icons"
                width={20}
                height={20}
              />
              <Image
                className="w-full h-full object-cover"
                src={ic2}
                alt="icons"
                width={20}
                height={20}
              />
              <Image
                className="w-full h-full object-cover"
                src={ic3}
                alt="icons"
                width={20}
                height={20}
              />
            </div>
            <div className="text-base text-center font-medium pb-8">
              May our curls pop and never stop!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
