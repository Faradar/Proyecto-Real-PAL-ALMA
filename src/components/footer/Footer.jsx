"use client";
//import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    //const [isOpen, setIsOpen] = useState(false);

    return (

        <footer className="footer mt-40">
            <div className="copyR">
                <h2>Copyright ©2023</h2>
            </div>
            <div className="logoF">
                <Image
                    className="logoFooter"
                    src="/img/footer/logo_small.png"
                    alt="pal alma"
                    width={162}
                    height={48}
                />
            </div>
            <div className="redes">
                <div className="redes-items">
                    <h2>Seguinos en:</h2>
                    <Link href="https://www.facebook.com/profile.php?id=100085206638363" target="_blank">
                        <Image
                            className="logoRedes"
                            src="/img/footer/fb.png"
                            alt="facebook"
                            width={28.39}
                            height={23.47}
                        /></Link>
                    <Link href="https://www.instagram.com/palalma.dibujos?igsh=c2xiyjlmagh4nwdv" target="_blank">
                        <Image
                            className="logoRedes"
                            src="/img/footer/ig.png"
                            alt="instagram"
                            width={28.39}
                            height={23.47}
                        /></Link>
                    <Link href="https://web.whatsapp.com/" target="_blank">
                        <Image
                            className="logoRedes"
                            src="/img/footer/wa.png"
                            alt="whatsapp"
                            width={28.39}
                            height={23.47}
                        /></Link>
                </div>
            </div>
        </footer>

    );
};

export default Footer;