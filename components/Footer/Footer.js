import React from "react";
import Image from "next/image";
import ios from "../../assets/img/apple.png";
import android from "../../assets/img/gugel.jpg";
import logo from "../../assets/img/FD-Logo-Pink.png";
import facebook from "../../assets/img/facebook.png";
import twitter from "../../assets/img/twitter.png";
import instagram from "../../assets/img/instagram.png";
import youtube from "../../assets/img/youtube.png";

function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="container px-20 mt-9 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="flex flex-col flex-wrap">
          <div className="justify-between w-full lg:flex">
            <div className="w-full lg:w-1/3 md:w-1/2">
              <ul className="mb-8 space-y-2 text-sm list-none font-bold tracking-wider">
                <li>
                  <a className="hover:text-gray-800">About Us</a>
                </li>
                <li>
                  <a className="hover:text-gray-800">Feedback</a>
                </li>
                <li>
                  <a className="hover:text-gray-800">Contact</a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/2">
              <ul className="mb-8 space-y-2 text-sm list-none font-bold tracking-wider">
                <li>
                  <a className="hover:text-gray-800">Terms & Conditions</a>
                </li>
                <li>
                  <a className="hover:text-gray-800">Privacy Policy</a>
                </li>
                <li>
                  <a className="hover:text-gray-800">Help</a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/2">
              <ul className="mb-8 space-y-2 text-sm list-none font-bold tracking-wider">
                <li>
                  <a className="hover:text-gray-800">Awards</a>
                </li>
                <li>
                  <a className="hover:text-gray-800">Newsletter</a>
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0 w-80 mx-auto text-center md:mx-0 md:text-left">
              <p className="flex items-center justify-center text-sm font-bold tracking-wider md:justify-start">
                Download Our Mobile App
              </p>
              <div className="flex justify-between py-2 -mx-2">
                <div className="flex w-1/2 px-2">
                  <Image src={ios} alt="Ios Badges" />
                </div>
                <div className="flex w-1/2 px-2">
                  <Image src={android} alt="Android Badges" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pb-14">
          <div className="flex flex-col">
            <div>
              <Image src={logo} alt="Logo FDN" width={150} height={35} />
            </div>
            <p className="text-base text-gray-700">
              Copyright © 2015-2017 Female Daily Network • All rights reserved
            </p>
          </div>
          <div className="flex w-80 py-4">
            <div className="mr-6">
              <Image src={facebook} alt="Facebook" />
            </div>
            <div className="mr-6">
              <Image src={twitter} alt="Twitter" />
            </div>
            <div className="mr-6">
              <Image src={instagram} alt="Instagram" />
            </div>
            <div className="mr-6">
              <Image src={youtube} alt="Youtube" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pt-2">
          <div className="bg-neutral-300 w-[970px] h-[50px] flex justify-center border-2 border-stone-400">
            <p className="font-semibold text-slate-600 text-3xl py-2">
              Bottom Frame 970x50, 468x60, 320x50
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
