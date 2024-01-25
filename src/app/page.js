"use client";
import React from "react";
// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/carousel/Carousel";
import logo from "../../public/contacto/logo.svg"
import HomeCard from "@/components/home/HomeCard";
import taza from '../../public/inicio/tazaDienteDeLeon.jpg'
import llavero from '../../public/inicio/llaveroLechuza.jpg'
import calcomanias from '../../public/inicio/Calcomanias.jpg'
import botella from '../../public/inicio/botellaMariposa.jpg'
import talleres1 from '../../public/inicio/talleres1.jpg'
import talleres2 from '../../public/inicio/talleres2.jpg'
import talleres3 from '../../public/inicio/talleres3.jpg'
import talleres4 from '../../public/inicio/talleres4.jpg'
import miceMarron from '../../public/inicio/miceMarronHome.svg'
import marronBorde from '../../public/inicio/marronBordeHome.svg'



export default function Home() {
  const carouselImages = [
    "/inicio/1.svg",
    "/inicio/2.svg",
    "/inicio/3.svg",
    "/inicio/4.svg",
    "/inicio/5.svg",
    "/inicio/6.svg",
    
  ];

  return (
    <main>
      <section className='grid grid-cols-4 justify-center bg-slate-700/10 shadow-[0_6px_6px_-1px_rgba(0,0,0,0.3)] overflow-y-hidden'>
        <div className='w-32 md:w-44 lg:w-48 grid'>
          <Image src="/inicio/misc-outline-left-mobile.svg" width={210} height={200} alt="borde micelania amarrila" />
          <div className='grid absolute top-40 w-28 md:w-40 md:top-28 lg:w-48'>
            <Image src="/inicio/misc-color-left-mobile.svg" width={180} height={200} alt="micelania amarilla" />
          </div>
        </div>
        <div className='flex flex-col text-center w-full col-span-2'>
          <h1 className="font-bold md:text-3xl">Bienvenidos!</h1>
          <Image src={logo} width={300} height={200} className='mx-auto md:w-11/12 lg:w-12/12' alt="logo de pa'l alma grande" />
          <p className="text-sm md:text-base font-semibold py-2">“En el corazón de “Pa'l alma” late el amor por la diversidad biológica de Argentina. Nuestros productos son una manifestación de esta pasión, capturando la esencia única de la flora y fauna que nos rodea.”</p>
        </div>
        <div className='w-28 md:w-28 lg:w-40 grid justify-end absolute top-32 lg:top-24 md:top-28 right-0'>
          <Image src="/inicio/misc-color-right-mobile.svg" width={210} height={200} alt="borde de micelania azul 3" />
          <div className='w-24 md:w-32 lg:w-36 grid relative bottom-64 md:bottom-80 md:right-14 lg:bottom-96 lg:right-16 right-10'>
            <Image src="/inicio/misc-outline-right-mobile.svg" width={220} height={200} alt="micelania azul"/>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center overflow-hidden">
        <Carousel images={carouselImages} />
      </div>
      <div className="hidden lg:flex absolute right-0 top-full z-[-10]">
          <Image src={marronBorde} width={450} className="flex absolute  top-24 right-4" alt="borde de micelania marron"/>
          <Image src={miceMarron} width={450} className="flex relative top-24 z-[-10] right-0" alt="micelania marron"/>
        </div>
      <section className="w-11/12 mx-auto mb-10">
        <h2 className="font-bold text-left pl-8 text-xl lg:text-3xl">ALGUNOS DE NUESTROS PRODUCTOS:</h2>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <Link href="/productos"><HomeCard src={llavero} title={'Llavero rectangular Lechuza vizcachera'}/></Link>
          <Link href="/productos"><HomeCard src={taza} title={'Taza cerámica, diseño con Dientes de León'}/></Link>
          <Link href="/productos"><HomeCard src={calcomanias} title={'Calcamonías Flora autóctona'}/></Link>
          <Link href="/productos"><HomeCard src={botella} title={'Botella con diseño de Mariposa'}/></Link>
          
          <Link href="/talleres"><HomeCard src={talleres1} title={'Enseñar que se puede hacer arte con lo cotidiano, con lo que tenemos a nuestro alrededor.'}/></Link>
          <Link href="/talleres"><HomeCard src={talleres2} title={'Espacio para conectarte con tu interior y donde se tenga la posibilidad de expresar las emociones a través del arte.'}/></Link>
          <Link href="/talleres"><HomeCard src={talleres3} title={'Introducir el concepto de reutilización y reciclado a través del ARTE.'}/></Link>
          <Link href="/talleres"><HomeCard src={talleres4} title={'Talleres de arte para niños y adultos, utilizando materiales cotidianos y promoviendo.'}/></Link>
        </div>
      </section>
    </main>
  );
}
