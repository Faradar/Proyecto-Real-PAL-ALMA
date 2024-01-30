"use client";
//import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    //const [isOpen, setIsOpen] = useState(false);

    return (

        <footer className="footer mt-32">
            <div className="copyR">
                <h2 className="lg:text-lg">Copyright ©2024</h2>
            </div>
            <div className="logoF">
                <Image
                    className="logoFooter"
                    src="/img/footer/logo_small.png"
                    alt="pal alma"
                    width={160}
                    height={50}
                />
            </div>
            <div className="redes">
                <div className="redes-items">
                    <h2 className="lg:text-lg">Seguinos en:</h2>
                    <Link href="https://www.facebook.com/profile.php?id=100085206638363" target="_blank">
                        <Image
                            className="logoRedes mx-1"
                            src="/img/footer/fb.png"
                            alt="facebook"
                            width={20}
                            height={20}
                        /></Link>
                    <Link href="https://www.instagram.com/palalma.dibujos?igsh=c2xiyjlmagh4nwdv" target="_blank">
                        <Image
                            className="logoRedes mx-1"
                            src="/img/footer/ig.png"
                            alt="instagram"
                            width={20}
                            height={20}
                        /></Link>
                    <Link href="https://wa.me/+5493513955439?text=Buenas!+Me+contacto+desde+la+página+web" target="_blank">
                        <Image
                            className="logoRedes mx-1"
                            src="/img/footer/wa.png"
                            alt="whatsapp"
                            width={20}
                            height={20}
                        /></Link>
                </div>
            </div>
        </footer>

    );
};

export default Footer;