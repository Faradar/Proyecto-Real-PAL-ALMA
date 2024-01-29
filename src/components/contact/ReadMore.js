import React, { useState } from "react";

function ReadMore({text, moreText}) {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className="">
      <p className="md:text-lg mb-4">{text}</p>
      {isShowMore && (<p className="md:text-lg">{moreText}</p>)}
      <button className="flex justify-center w-9/12 mx-auto my-4 py-2 text-lg bg-orange-500 text-white rounded-lg font-semibold" onClick={toggleReadMoreLess}>
        {isShowMore ? "Ver menos" : "Continuar leyendo"}
      </button>
    </div>
  );
}

export default ReadMore;