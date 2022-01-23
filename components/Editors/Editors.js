import React from "react";

const Editors = ({ editors }) => {
  return (
    <section className="flex flex-col py-7">
      <div className="container mx-auto px-20">
        <div className="text-2xl font-bold tracking-wide">Editor's Choice</div>
        <div className="text-lg text-gray-400 font tracking-wider">
          Curated with love
        </div>
        <div className="flex flex-wrap justify-between mt-6">
          {editors.map((editor, index) => {
            return (
              <div
                className="w-52 py-4 px-4 rounded-xl mt-14 border-2 border-stone-200"
                key={index}
              >
                <div className="flex flex-row -mt-16 justify-items-start">
                  <div className="flex justify-start">
                    <img
                      className="w-14 h-14 object-cover rounded-full border-2"
                      src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    />
                  </div>
                  <div className="flex flex-col px-2">
                    <div className="text-base font-bold text-gray-700 capitalize">
                      {editor.editor}
                    </div>
                    <div className="text-xs text-gray-400">{editor.role}</div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <img
                    className="w-full h-full object-cover"
                    src={editor.product.image}
                    alt="Product Image"
                  />
                  <div className="flex flex-col py-4">
                    <div className="flex items-center">
                      <div className="font-bold">{editor.product.rating}</div>
                      <div className="flex flex-row px-2">
                        {Array(5)
                          .fill()
                          .map((_, item) => {
                            const rating = editor.product.rating;
                            return (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill={
                                    item < Math.floor(rating)
                                      ? "#d01257"
                                      : "#E0E0E0"
                                  }
                                  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                                />
                              </svg>
                            );
                          })}
                      </div>
                      <div className="text-black">(7)</div>
                    </div>
                    <p className="font-bold mt-2">{editor.product.name}</p>
                    <p className="text-base mt-2">
                      {editor.product.description}
                    </p>
                    {/* <p className="text-gray-400 mt-2">Rosy Beige</p> */}
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

export default Editors;
