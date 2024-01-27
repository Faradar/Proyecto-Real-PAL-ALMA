import Image from "next/image";
import Link from "next/link";
import './talleres.css'

export default function Talleres() {
    return (
      <div className="m-5">
        <div className="con_magin">
            <p className="text_talleres">
            Talleresde arte para niños y adultos, utilizando materiales cotidianos y promoviendo.
            </p>
            <div className="modulos">
                <Link
                    href="/ninos"
                    className="modulo"
                    >
                    <div className="modulo1"></div>
                </Link>
                <Link
                href="/adultos"
                className="modulo"
                >
                    <div className="modulo2"></div>
                </Link>
            </div>
            <div className="descrption_talleres">
                    <div className="descrption_taller">
                        <h2 className="text-center mb-5 font-bold ">Descripción del taller</h2>
                        <p className="lg:text-base">
                        Creamos este espacio para fomentar la creatividad y el juego en los niños, enseñándoles a hacer arte con materiales que se encuentran en cualquier casa, generando conciencia de reutilizar , reciclar y resignificar materiales a través de distintas técnicas.
                        </p>
                    </div>
                    <div className="descrption_taller">
                        <h2 className="text-center mb-5 font-bold ">¿Qué aprenderán?</h2>
                        <p className="lg:text-base">
                            A encontrar espacios de sociabilización con sus pares, mediante actividades lúdicas ligadas a las artes plásticas , el aprendizaje de técnicas y el conocimiento de conceptos y curiosidades de distintos artistas. 
                        </p>
                    </div>
                </div>
        </div>
        <div>
            <p className="font-bold  texttalleres">Galería de imágenes de los talleres</p>
            <div className="p-5 con_talleres_img place-items-center">
                <div className="talleres_img bg-cover bg-center h-screen" style={{ backgroundImage: "url('/img/IMG_20230818_172900 3.png')" }}></div>
                <div className="talleres_img bg-cover bg-center h-screen " style={{ backgroundImage: "url('/img/IMG_20230804_164714 2.png')" }}></div>
                <div className="talleres_img bg-cover bg-center h-screen " style={{ backgroundImage: "url('/img/IMG_20230811_172914 3.png')" }}></div>
                <div className="talleres_img bg-cover bg-center h-screen " style={{ backgroundImage: "url('/img/IMG_20230811_165614 3.png')" }}></div>
                <div className="talleres_img bg-cover bg-center h-screen " style={{ backgroundImage: "url('/img/IMG_20230825_170557 2.png')" }}></div>
                <div className="talleres_img bg-cover bg-center h-screen " style={{ backgroundImage: "url('/img/IMG_20230804_164725 2.png')" }}></div>
                <div className="talleres_img bg-cover bg-center h-screen " style={{ backgroundImage: "url('/img/IMG_20230825_170547 1.png')" }}></div>
                <div className="talleres_img bg-cover bg-center h-screen " style={{ backgroundImage: "url('/img/IMG_20230811_165351 1.png')" }}></div>
            </div>
        </div>
      </div>
      
    );
  }
  