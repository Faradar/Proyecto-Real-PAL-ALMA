import Image from "next/image";
import Link from "next/link";
import './talleres.css'

export default function Talleres() {
    return (
      <div>
        <div className="con_magin">
            <p className="text_talleres">
                Talleres de arte para niños y adultos, utilizando materiales cotidianos y promoviendo.
            </p>
            <div className="modulos">
                <div className="modulo1">
                    <Link
                    href="/ninos"
                    className="modulo"
                    >
                        NINOS
                    </Link>
                </div>
                <div className="modulo2">
                    <Link
                    href="/adultos"
                    className="modulo"
                    >
                        ADULTOS
                    </Link>
                </div>
            </div>
            <div className="descrption_talleres">
                <div className="descrption_taller">
                    Descripción del taller
                </div>
                <div className="descrption_taller">
                    ¿Qué aprenderán?
                </div>
            </div>
        </div>
        <div>
            <p className="m-10">Galería de imágenes de los talleres</p>
            <div className="p-5 con_talleres_img">
                <div className="talleres_img"></div>
                <div className="talleres_img"></div>
                <div className="talleres_img"></div>
                <div className="talleres_img"></div>
            </div>
        </div>
      </div>
    );
  }