"use client";
//import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  //const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="mt-11 bg-[#e8e8e8] grid grid-cols-3 justify-center items-center h-9 min-[540px]:h-12 md:h-24 md:bg-eaf0f4">
      <div className="flex justify-center items-center">
        <h2 className="text-xs min-[540px]:text-sm">Copyright ©2024</h2>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/contacto/logo.svg"
          alt="pal alma"
          width={110}
          height={50}
          className="min-[540px]:w-32 md:w-40"
        />
      </div>
      <div className="flex justify-center items-center gap-1 min-[540px]:gap-2">
        <h2 className="text-xs min-[540px]:text-sm">Seguinos en:</h2>
        <Link
          href="https://www.facebook.com/profile.php?id=100085206638363"
          target="_blank"
        >
          <Image
            src="/footer/facebook.svg"
            alt="facebook"
            width={9.4}
            height={9.4}
            className="min-[540px]:w-[16.7px] md:w-[25.1px]"
          />
        </Link>
        <Link
          href="https://www.instagram.com/palalma.dibujos?igsh=c2xiyjlmagh4nwdv"
          target="_blank"
        >
          <Image
            src="/footer/instagram.svg"
            alt="instagram"
            width={9}
            height={9}
            className="min-[540px]:w-4 md:w-6"
          />
        </Link>
        <Link
          href="https://wa.me/+5493513955439?text=Buenas!+Me+contacto+desde+la+página+web"
          target="_blank"
        >
          <Image
            src="/footer/whatsapp.svg"
            alt="whatsapp"
            width={9}
            height={9}
            className="min-[540px]:w-4 md:w-6"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
