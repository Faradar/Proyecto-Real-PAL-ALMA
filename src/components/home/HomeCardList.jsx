import React from "react";
import Link from "next/link";
import HomeCard from "@/components/home/HomeCard";

function HomeCardList({ data, linkHref }) {
  return (
    <>
      {data.map((item, index) => (
        <Link
          key={index}
          href={linkHref}
          className="w-[230px] md:w-[290px] lg:w-[325px] xl:w-[350px] mx-auto xl:h-[350px] m-2 mt-5 mx-auto"
        >
          <HomeCard src={item.src} title={item.title} />
        </Link>
      ))}
    </>
  );
}

export default HomeCardList;
