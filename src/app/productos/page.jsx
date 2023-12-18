import Image from "next/image";
import Link from "next/link";
import './productos.css'

export default function productos() {
    return (
      <div className="m-5 ">
        <h1 className="text-lg font-bold text-center m-20">Creación de productos con diseño autóctono, comprometiéndose con la sostenibilidad al reciclar materiales textiles.
        </h1>
        <div>
            <h2 className="text-lg font-bold p-5">Capturando la esencia única de la flora y fauna que nos rodea.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 bg-#EAF0F4 p-5">
                <div className="p-8 bg-cover bg-center h-64 rounded-md" style={{ backgroundImage: "url('/img/Captura de pantalla (1980) 1.png')" }}></div>
                <div className="p-8 bg-cover bg-center h-64 rounded-md" style={{ backgroundImage: "url('/img/Captura de pantalla (1980) 2.png')" }}></div>
                <div className="p-8 bg-cover bg-center h-64 rounded-md" style={{ backgroundImage: "url('/img/Captura de pantalla (1979) 1.png')" }}></div>
                <div className="p-8 bg-cover bg-center h-64 rounded-md" style={{ backgroundImage: "url('/img/Captura de pantalla (1979) 2.png')" }}></div>
                <div className="p-8 bg-cover bg-center h-64 rounded-md" style={{ backgroundImage: "url('/img/Captura de pantalla (1980) 1.png')" }}></div>
                <div className="p-8 bg-cover bg-center h-64 rounded-md" style={{ backgroundImage: "url('/img/Captura de pantalla (1980) 2.png')" }}></div>
                <div className="p-8 bg-cover bg-center h-64 rounded-md" style={{ backgroundImage: "url('/img/Captura de pantalla (1979) 1.png')" }}></div>
                <div className="p-8 bg-cover bg-center h-64 rounded-md" style={{ backgroundImage: "url('/img/Captura de pantalla (1979) 2.png')" }}></div>
                <div className="p-8 bg-cover bg-center h-64 rounded-md" style={{ backgroundImage: "url('/img/Captura de pantalla (1980) 1.png')" }}></div>
                <div className="p-8 bg-cover bg-center h-64 rounded-md" style={{ backgroundImage: "url('/img/Captura de pantalla (1980) 2.png')" }}></div>
                <div className="p-8 bg-cover bg-center h-64 rounded-md" style={{ backgroundImage: "url('/img/Captura de pantalla (1979) 1.png')" }}></div>
                <div className="p-8 bg-cover bg-center h-64 rounded-md" style={{ backgroundImage: "url('/img/Captura de pantalla (1979) 2.png')" }}></div>
            </div>
        </div>
        <div className="w-1223px text-center font-bold text-sm m-5 bg-#F2F6F8">
            <h2>¿Cómo comprar nuestros productos vía WhatsApp?</h2>
            <p className="m-5">
                1. Explora nuestra variedad de productos y elige el que más te guste.
                2. Envíanos un mensaje por WhatsApp con el nombre o una breve descripción del producto que deseas adquirir.
                3. Te confirmaremos la disponibilidad del artículo y te proporcionaremos detalles sobre el proceso de reserva.
                4. Coordinaremos el envío para que recibas tu producto cómodamente en casa.
                5. ¡Listo! Disfruta de tu nueva adquisición de Pa'l Alma y déjanos saber si necesitas algo más.
            </p>
            <p>
            ¡Hacer tus compras con nosotros es sencillo y personalizado!
            Estamos aquí para brindarte una buena experiencia de compra.
            </p>
        </div>
        <div className="flex items-center justify-center m-5">
            <img src="/img/Group.png" alt="Grupo" className="text-center" />
        </div>
      </div>
    );
  }