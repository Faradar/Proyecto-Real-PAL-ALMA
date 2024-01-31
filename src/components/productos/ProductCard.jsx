import React, { useState, useRef, useEffect } from "react";

const ProductCard = ({
  imagePath,
  hoveredImagePath = imagePath,
  productName,
  additionalText,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [topOffset, setTopOffset] = useState(0);

  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      const divHeight = divRef.current.clientHeight;
      setTopOffset(divHeight);
    }
  });

  return (
    <div
      className={`flex items-center justify-center flex-col relative duration-200 ${
        isHovered ? "bg-[#d9d9d9] sm:bg-[#eaf0f4]" : ""
      }`}
      ref={divRef}
    >
      <div className="overflow-hidden">
        <img
          src={isHovered ? hoveredImagePath : imagePath}
          alt={productName}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`hover:scale-125 duration-200 ${
            hoveredImagePath !== imagePath
              ? "sm:w-[298px] sm:h-[220px] md:w-auto md:h-auto xl:w-[298px] xl:h-[220px]"
              : ""
          }`}
        />
      </div>
      <span className={`font-bold ${isHovered ? "mt-2" : ""}`}>
        {productName}
      </span>
      {isHovered && (
        <div
          className="absolute bg-[#d9d9d9] sm:bg-[#eaf0f4] z-10 rounded"
          style={{ top: `calc(${topOffset}px)` }}
        >
          <p className="text-center pt-2">{additionalText}</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
