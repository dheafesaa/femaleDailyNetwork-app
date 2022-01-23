import React from "react";
import Image from "next/image";
import right from "../../assets/img/right.svg";

const Articles = ({ articles }) => {
  return (
    <section className="w-full py-9">
      <div className="container mx-auto px-20">
        <div className="text-2xl font-bold tracking-wide">Latest Articles</div>
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
          {articles.map((article, index) => {
            return (
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 pb-8" key={index}>
                <div className="rounded-xl bg-white hover:shadow-lg pb-2">
                  <img
                    className="rounded-xl w-full h-full object-cover"
                    src={article.image}
                    alt="Logo FDN"
                  />
                  <h2 className="font-bold text-xl mb-2 tracking-wide mt-2">
                    {article.title}
                  </h2>
                  <div className="flex flex-row text-base">
                    <p className="text-gray-700 capitalize">
                      {article.author}{" "}
                    </p>{" "}
                    &nbsp;
                    <p className="text-gray-400">| {article.published_at}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Articles;
