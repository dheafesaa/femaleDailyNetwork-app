import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <span className="text">
      {isReadMore ? text.slice(0, 100) : text}
      <span onClick={toggleReadMore} className="cursor-pointer">
        {isReadMore ? (
          <span>
            ...<span className="text-red-500">&nbsp; Read More</span>
          </span>
        ) : (
          <span className="text-red-500">&nbsp; Show Less</span>
        )}
      </span>
    </span>
  );
};

export default ReadMore;
