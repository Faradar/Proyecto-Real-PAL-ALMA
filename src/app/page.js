"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Carousel from "@/components/carousel/Carousel";
import logo from "../../public/contacto/logo.svg";
import HomeCardList from "@/components/home/HomeCardList";
import taza from "../../public/inicio/tazaDienteDeLeon.jpg";
import llavero from "../../public/inicio/llaveroLechuza.jpg";
import calcomanias from "../../public/inicio/Calcomanias.jpg";
import botella from "../../public/inicio/botellaMariposa.jpg";
import talleres1 from "../../public/inicio/talleres1.jpg";
import talleres2 from "../../public/inicio/talleres2.jpg";
import talleres3 from "../../public/inicio/talleres3.jpg";
import talleres4 from "../../public/inicio/talleres4.jpg";
import miceMarron from "../../public/inicio/miceMarronHome.svg";
import marronBorde from "../../public/inicio/marronBordeHome.svg";

export default function Home() {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const mdMediaQuery = window.matchMedia("(min-width: 768px)");
    setIsMd(mdMediaQuery.matches);

    const handleResize = () => {
      setIsMd(mdMediaQuery.matches);
    };

    mdMediaQuery.addEventListener("change", handleResize);

    return () => {
      mdMediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const miscRightColor = isMd
    ? "/inicio/misc-color-right.svg"
    : "/inicio/misc-color-right-mobile.svg";

  const miscRightOutline = isMd
    ? "/inicio/misc-outline-right.svg"
    : "/inicio/misc-outline-right-mobile.svg";

  const carouselImages = [
    "/inicio/carousel3.jpg",
    "/inicio/carousel4.jpg",
    "/inicio/carousel5.jpg",
    "/inicio/carousel1.jpg",
    "/inicio/carousel2.jpg",
  ];

  const productos = [
    { src: llavero, title: "Llavero rectangular Lechuza vizcachera" },
    { src: taza, title: "Taza cerámica, diseño con Dientes de León" },
    { src: calcomanias, title: "Calcamonías Flora autóctona" },
    { src: botella, title: "Botella con diseño de Mariposa" },
  ];

  const talleres = [
    {
      src: talleres1,
      title:
        "Enseñar que se puede hacer arte con lo cotidiano, con lo que tenemos a nuestro alrededor.",
    },
    {
      src: talleres2,
      title:
        "Espacio para conectarte con tu interior y donde se tenga la posibilidad de expresar las emociones a través del arte.",
    },
    {
      src: talleres3,
      title:
        "Introducir el concepto de reutilización y reciclado a través del ARTE.",
    },
    {
      src: talleres4,
      title:
        "Talleres de arte para niños y adultos, utilizando materiales cotidianos y promoviendo.",
    },
  ];

  return (
    <main>
      <section className="grid grid-cols-12 justify-center bg-slate-700/10 shadow-[0_6px_6px_-1px_rgba(0,0,0,0.3)] overflow-hidden relative">
        <div className="w-32 md:w-44 lg:w-64 2xl:w-72 grid z-10 2xl:translate-y-[-10px]">
          <Image
            src="/inicio/misc-outline-left.svg"
            width={80}
            height={200}
            alt="borde micelania amarrila"
            className="md:w-40 lg:w-52 2xl:w-[260px] 2xl:translate-y-[-10px]"
          />
          <div className="grid absolute">
            <Image
              src="/inicio/misc-color-left.svg"
              width={70}
              height={200}
              alt="micelania amarilla"
              className="md:w-36 lg:w-48 2xl:w-[250px] 2xl:translate-x-[-10px]"
            />
          </div>
        </div>
        <div className="flex flex-col text-center w-full col-span-10 relative mx-0 px-0">
          <h1 className="font-semibold md:text-[32px] md:mt-6">Bienvenidos!</h1>
          <Image
            src={logo}
            width={182}
            height={200}
            className="mx-auto max-w-[920px] md:w-11/12 md:mt-[-20px] lg:w-12/12"
            alt="logo de pa'l alma grande"
          />
          <p className="text-xs sm:text-sm md:text-xl font-semibold py-2 w-64 max-w-[920px] min-[530px]:w-auto mx-auto">
            “En el corazón de “Pa'l alma” late el amor por la diversidad
            biológica de Argentina. Nuestros productos son una manifestación de
            esta pasión, capturando la esencia única de la flora y fauna que nos
            rodea.”
          </p>
        </div>
        <div className="w-28 md:w-48 lg:w-64 2xl:w-96 grid justify-items-end absolute top-[-20px] md:top-[-50px] lg:top-[-70px] 2xl:top-[-110px] right-[-1px]">
          <Image
            src={miscRightColor}
            width={70}
            height={200}
            alt="borde de micelania azul 3"
            className="md:w-[300px] lg:w-[400px] 2xl:w-[500px]"
          />
          <div className="w-24 md:w-48 lg:w-64 2xl:w-96 grid justify-items-end relative bottom-[200px] md:bottom-[280px] lg:bottom-[370px] 2xl:bottom-[560px] right-0">
            <Image
              src={miscRightOutline}
              width={65}
              height={200}
              alt="micelania azul"
              className="md:w-[300px] 2xl:w-[500px]"
            />
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center overflow-hidden mb-10">
        <Carousel images={carouselImages} />
      </div>
      <div className="absolute right-0 top-full sm:top-[600px] md:top-[900px] lg:top-[1100px] xl:top-[1300px] 2xl:top-[1000px] z-[-10]">
        <Image
          src={marronBorde}
          width={450}
          height={450}
          className="flex absolute top-24 right-4"
          alt="borde de micelania marron"
        />
        <Image
          src={miceMarron}
          width={450}
          height={450}
          className="flex relative top-24 z-[-10] right-0"
          alt="micelania marron"
        />
      </div>
      <div className="absolute left-0 top-[2000px] sm:top-[1300px] md:top-[1800px] lg:top-[2000px] xl:top-[2200px] 2xl:top-[1500px] z-[-10]">
        <Image
          src="/inicio/misc-outline-green.svg"
          width={300}
          height={300}
          className="flex absolute top-24 right-4"
          alt="borde de micelania verde"
        />
        <Image
          src="/inicio/misc-color-green.svg"
          width={300}
          height={300}
          className="flex relative top-24 left-[0px] z-[-10]"
          alt="micelania verde"
        />
      </div>
      <section className="w-11/12 m-auto 2xl:mr-[90px] mb-10">
        <h2 className="pl-8 font-bold text-center lg:text-xl 2xl:text-left">
          Algunos de nuestros productos:
        </h2>
        <div className="mx-auto grid 2xl:gap-x-16 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4">
          <HomeCardList data={productos} linkHref="/productos" />
        </div>
        <h2 className="pl-8 font-bold text-center lg:text-xl 2xl:text-left mt-10">
          Algunos de nuestros talleres:
        </h2>
        <div className="mx-auto grid 2xl:gap-x-16 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4">
          <HomeCardList data={talleres} linkHref="/talleres" />
        </div>
      </section>
    </main>
  );
}
