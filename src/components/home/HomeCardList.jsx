import React from "react";
import Link from "next/link";
import HomeCard from "@/components/home/HomeCard";

function HomeCardList({ data, linkHref }) {
  return (
    <>
      {data.map((item, index) => (
        <Link key={index} href={linkHref}>
          <HomeCard src={item.src} title={item.title} />
        </Link>
      ))}
    </>
  );
}

export default HomeCardList;
