import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import right from "../../assets/img/right.svg";
import left from "../../assets/img/left.svg";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "swiper/css";
import ReadMore from "../ReadMore/ReadMore";

const Review = ({ reviews }) => {
  return (
    <section className="container mx-auto px-20 pb-16">
      <div className="flex justify-between">
        <div className="flex flex-col w-3/4">
          <div className="flex flex-col  pr-16">
            <div className="text-2xl font-bold tracking-wide">
              Latest Reviews
            </div>
            <div className="flex justify-between">
              <div className="text-lg text-gray-400 tracking-wider">
                So you can make better purchase decision
              </div>
              <div className="flex justify-between w-28">
                <div className="text-lg text-[#EB2C85] tracking-wider">
                  See More
                </div>
                <Image src={right} alt="Logo FDN" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-4 mt-6">
              <Swiper
                spaceBetween={0}
                scrollbar={{ draggable: true }}
                modules={[Pagination]}
                slidesPerView={2}
                pagination={{ clickable: true }}
                style={{ width: "100%" }}
              >
                {reviews.map((review, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="w-96 px-4">
                        <div className="p-6 md:px-7 xl:px-6 hover:shadow-lg mb-8 border-2 border-stone-200 rounded-xl">
                          <div className="flex flex-row border-b-2 border-stone-200">
                            <div className="w-[70px] h-[70px] flex mb-3">
                              <img src={review.product.image} alt="Logo FDN" />
                            </div>
                            <div className="flex flex-col">
                              <div className="text-lg font-bold">
                                {review.product.name}
                              </div>
                              <div className="text-base font-medium">
                                {review.product.desc}
                              </div>
                            </div>
                          </div>
                          <div className="py-2">
                            <div className="flex justify-between mb-2">
                              <div className="flex flex-row">
                                {Array(5)
                                  .fill()
                                  .map((_, item) => {
                                    const star = review.star;
                                    return (
                                      <svg key={item}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          fill={
                                            item < Math.floor(star)
                                              ? "#d01257"
                                              : "#E0E0E0"
                                          }
                                          d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                                        />
                                      </svg>
                                    );
                                  })}
                              </div>
                              <div className="text-xs text-gray-400">
                                2 hours ago
                              </div>
                            </div>
                            <p className="text-sm py-2">
                              <ReadMore>{review.comment}</ReadMore>
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="flex justify-center -mt-16">
                            <img
                              className="w-14 h-14 object-cover rounded-full border-2"
                              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                            />
                          </div>
                          <div className="text-base font-medium text-gray-500 capitalize">
                            {review.user}
                          </div>
                          <div className="text-xs text-gray-400">
                            {`${review.profile
                              .slice(0, review.profile.length - 1)
                              .join(" ")}, ${
                              review.profile[review.profile.length - 1]
                            }`}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <div className="w-36 flex flex-row mx-auto mt-4">
                  <Image src={left} alt="Logo FDN" />
                  <div className="flex justify-between w-12 mx-auto py-2">
                    <span className="bg-purple-400 rounded-full w-3 h-3"></span>
                    <span className="bg-purple-400 rounded-full w-3"></span>
                  </div>
                  <Image src={right} alt="Logo FDN" />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="flex items-center -mt-6">
          <div className="bg-neutral-300 w-[300px] h-[250px] flex justify-center border-2 border-stone-400">
            <div className="flex flex-col items-center justify-center">
              <div className="flex font-semibold text-slate-600 text-2xl">
                MR 2
              </div>
              <div className="flex font-semibold text-slate-600 text-2xl">
                300X250
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
