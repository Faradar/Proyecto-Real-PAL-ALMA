"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <div>
          <div className="bg-[#EAF0F4] flex items-center shadow-[0_6px_6px_-1px_rgba(0,0,0,0.3)] max-w-[400px] h-44 mx-auto">
            <div className="w-24 h-full relative top-1">
              <Image
                src="/inicio/misc-color-left-mobile.svg"
                width={80}
                height={118}
                alt="Logo Pa'l Alma"
                className="z-10 fixed w-[18vw] max-w-[75px]"
              />
              <Image
                src="/inicio/misc-outline-left-mobile.svg"
                width={90}
                height={131}
                alt="Logo Pa'l Alma"
                className="z-0 fixed w-[20vw] max-w-[82px]"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <h1 className="font-semibold h-4">Bienvenidos!</h1>
              <Image
                src="/contacto/logo.svg"
                width={182}
                height={55}
                alt="Logo Pa'l Alma"
              />
              <p className="text-xs font-semibold w-[252px] max-w-[260px] my-2">
                “En el corazón de “Pa´l alma” late el amor por la diversidad
                biológica de Argentina. Nuestros productos son una manifestación
                de esta pasión, capturando la esencia única de la flora y fauna
                que nos rodea.”
              </p>
            </div>
            <div className="w-24 h-full relative">
              <Image
                src="/inicio/misc-color-right-mobile.svg"
                width={100}
                height={118}
                alt="Logo Pa'l Alma"
                className="absolute right-0 top-[-7px] w-[20vw] max-w-[80px]"
              />
              <Image
                src="/inicio/misc-outline-right-mobile.svg"
                width={90}
                height={131}
                alt="Logo Pa'l Alma"
                className="absolute right-0 top-[-16px] w-[19vw] max-w-[75px]"
              />
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
