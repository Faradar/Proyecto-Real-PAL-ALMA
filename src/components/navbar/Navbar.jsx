"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white h-36 flex items-center justify-between pl-4 pr-8 md:h-[100px] md:justify-around md:shadow-[0_6px_6px_-1px_rgba(0,0,0,0.3)] md:px-0">
      {/* Logo */}
      <div>
        <Link href="/">
          <div>
            <Image
              src="/navbar/logoSmall.svg"
              width={100}
              height={100}
              alt="Logo Pa'l Alma"
            />
          </div>
        </Link>
      </div>
      <div className="hidden md:flex justify-between items-center w-[640px] font-semibold text-sm text-white">
        <div className="relative w-[113px] h-[92px]">
          <div className="z-10 w-full h-full absolute ">
            <Link
              href="/"
              className="flex justify-center items-center w-full h-full"
            >
              INICIO
            </Link>
          </div>
          <Image
            src="/navbar/inicio.svg"
            width={113}
            height={92}
            alt="Forma aleatoria"
            className="z-0 absolute"
          />
        </div>
        <div className="relative w-[119px] h-[92px]">
          <div className="z-10 w-full h-full absolute ">
            <Link
              href="/productos"
              className="flex justify-center items-center w-full h-full"
            >
              PRODUCTOS
            </Link>
          </div>
          <Image
            src="/navbar/productos.svg"
            width={119}
            height={92}
            alt="Forma aleatoria"
            className="z-0 absolute"
          />
        </div>
        <div className="relative w-[125px] h-[88px]">
          <div className="z-10 w-full h-full absolute ">
            <Link
              href="/talleres"
              className="flex justify-center items-center w-full h-full"
            >
              TALLERES
            </Link>
          </div>
          <Image
            src="/navbar/talleres.svg"
            width={125}
            height={88}
            alt="Forma aleatoria"
            className="z-0 absolute"
          />
        </div>
        <div className="relative w-[114px] h-[92px]">
          <div className="z-10 w-full h-full absolute ">
            <Link
              href="/nosotras"
              className="flex justify-center items-center w-full h-full"
            >
              NOSOTRAS
            </Link>
          </div>
          <Image
            src="/navbar/nosotras.svg"
            width={114}
            height={92}
            alt="Forma aleatoria"
            className="z-0 absolute"
          />
        </div>
        <div className="relative w-[113px] h-[88px]">
          <div className="z-10 w-full h-full absolute ">
            <Link
              href="/contacto"
              className="flex justify-center items-center w-full h-full"
            >
              CONTACTO
            </Link>
          </div>
          <Image
            src="/navbar/contacto.svg"
            width={113}
            height={88}
            alt="Forma aleatoria"
            className="z-0 absolute"
          />
        </div>
      </div>
      {/* Links */}
      <div className="flex justify-between w-[30vw] max-w-[150px] md:w-auto">
        {/* Hamburg menu */}
        <button
          className="md:hidden focus:outline-none relative"
          onClick={toggleMenu}
        >
          <Image
            src="/navbar/hamburgMenu.svg"
            width={40}
            height={28}
            alt="Menu Hamburguesa"
          />

          {/* Navbar links */}
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } mt-4 flex-col absolute right-[-52px] items-center justify-center bg-[#D9D9D9] w-36 h-36 font-semibold`}
          >
            <Link href="/">Inicio</Link>
            <Link href="/productos">Productos</Link>
            <Link href="/talleres">Talleres</Link>
            <Link href="/nosotras">Nosotras</Link>
            <Link href="/contacto">Contacto</Link>
          </div>
        </button>
        {/* Whatsapp */}
        <div className="p-2">
          <Link href="/">
            <Image
              src="/navbar/whatsapp.svg"
              width={28}
              height={28}
              alt="Logo Whatsapp"
              className="md:w-12"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;