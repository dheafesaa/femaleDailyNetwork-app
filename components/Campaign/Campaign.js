import React from "react";

const Campaign = () => {
  return (
    <div className="flex flex-col items-center py-6">
      <div className="bg-neutral-300 w-[970px] h-[250px] flex justify-center border-2 border-stone-400">
        <div className="flex flex-col items-center justify-center">
          <div className="flex font-semibold text-slate-600 text-2xl">
            Horizontal 970x250
          </div>
          <div className="flex font-semibold text-slate-600 text-2xl">
            (Internal campaign only)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
