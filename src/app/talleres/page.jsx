import Image from "next/image";
import Link from "next/link";
import './talleres.css'

export default function Talleres() {
    return (
      <div className="m-5">
        <div className="con_magin">
            <p className="text_talleres font-bold">
            Talleres de arte para niños y adultos, utilizando materiales cotidianos y promoviendo la creatividad.
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
                        <h2 className=" mb-5 font-bold ">¿Porqué lo hacemos?</h2>
                        <p className="lg:text-base">
                        Es nuestro deseo abrir las puertas de nuestro taller a quienes desean expresar y encontrar un momento ligado a la creatividad, un momento de esparcimiento, un recreo de la rutina de nuestros días. 
                        </p>
                    </div>
                    <div className="descrption_taller">
                        <h2 className=" mb-5 font-bold ">¿Qué aprenderán?</h2>
                        <p className="lg:text-base">
                        Desde Pa’l alma queremos motivarlos a: <br/><br/>
                        Proponemos ir descubriendo entre líneas , garabatos , mándalas , colores, técnicas  donde nos sentimos más cómodos y donde nos encontramos en calma y conectados con nuestra alma.
                        </p>
                    </div>
                </div>
        </div>
        <div>
            <p className="p-5 font-bold  texttalleres">Galería de imágenes de los talleres</p>
            <div className="p-5 con_talleres_img place-items-center">
                <div>
                    <img src="" alt="" />
                </div>
                {/* <div className="talleres_img bg-cover bg-center h-screen" style={{ backgroundImage: "url('/img/IMG_20230818_172900 3.png')" }}></div>
                <div className="talleres_img bg-cover bg-center h-screen " style={{ backgroundImage: "url('/img/IMG_20230804_164714 2.png')" }}></div>
                <div className="talleres_img bg-cover bg-center h-screen " style={{ backgroundImage: "url('/img/IMG_20230811_172914 3.png')" }}></div>
                <div className="talleres_img bg-cover bg-center h-screen " style={{ backgroundImage: "url('/img/IMG_20230811_165614 3.png')" }}></div>
                <div className="talleres_img bg-cover bg-center h-screen " style={{ backgroundImage: "url('/img/IMG_20230825_170557 2.png')" }}></div>
                <div className="talleres_img bg-cover bg-center h-screen " style={{ backgroundImage: "url('/img/IMG_20230804_164725 2.png')" }}></div>
                <div className="talleres_img bg-cover bg-center h-screen " style={{ backgroundImage: "url('/img/IMG_20230825_170547 1.png')" }}></div>
                <div className="talleres_img bg-cover bg-center h-screen " style={{ backgroundImage: "url('/img/IMG_20230811_165351 1.png')" }}></div> */}
            </div>
        </div>
      </div>
      
    );
  }
  