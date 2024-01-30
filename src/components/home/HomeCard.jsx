import React from "react";
import Image from "next/image";

function HomeCard({ src, title }) {
  return (
    <article className="group w-[230px] h-[230px] md:w-[290px] md:h-[310px] lg:w-[325px] lg:h-[325px] xl:w-[350px] xl:h-[350px] bg-[#EAF0F4] rounded-xl flex flex-col justify-start text-center text-xs md:text-sm xl:text-md overflow-hidden hover:bg-transparent hover:text-transparent ease-out duration-200 shadow-[0_6px_6px_-1px_rgba(0,0,0,0.3)] hover:shadow-none">
      <Image
        src={src}
        alt={title}
        width={200}
        height={100}
        className="rounded-lg self-center mt-3 md:mt-4 xl:mt-5 group-hover:scale-[1.15] overflow-hidden ease-in-out duration-700 md:w-[250px] md:h-[200px] lg:w-[275px] lg:h-[225px] xl:w-[300px] xl:h-[250px]"
      />
      <h3 className="my-4 px-2">{title}</h3>
    </article>
  );
}

export default HomeCard;
