import Image from "next/image";
import Link from "next/link";
import './productos.css'

export default function productos() {
    return (
      <div>
        <div class="relative z-[-99]">
                <div class="absolute img1">
                    <img  src="/img/productos/first.svg" alt="Fondo1" />
                    
                </div>  
                
            </div>
        <div class="relative z-[-99] ">
            <div  class="absolute right-0">
                <img  src="/img/productos/firstFon.svg" alt="Fondocolor" />
            </div>
            <div class="absolute top-1 right-0">
                <img  src="/img/productos/sec.svg" alt="Fondo2" />
            </div>
        </div>
        <div class="relative z-[-99]">
            <div class="absolute img-thirdFon">
                    <img  src="/img/productos/thirdFon.svg" alt="Fondocolor3" />
                </div> 
                <div class="absolute img-third">
                    <img  src="/img/productos/third.svg" alt="Fondo3" />
                </div>   
            </div>
        <div >  
        <div class="relative z-[-99]">
            <div class="absolute img-fourthFon">
                    <img  src="/img/productos/fourthFon.svg" alt="Fondocolor4" />
                </div> 
                <div class="absolute img-fourth">
                    <img  src="/img/productos/fourth.svg" alt="Fondo4" />
                </div>   
            </div>
        <div >
            
    </div> 

            
            <div className="primary">
                <h1 className="text-lg font-bold ml-10 mt-20">Creación de productos con diseño autóctono, comprometiéndose con la sostenibilidad al reciclar materiales textiles
                </h1>
                
                <div >
                    <h2 className="text-lg pt-10 pl-10">Capturando la esencia única de la flora y fauna que nos rodea.</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 bg-#EAF0F4 p-10 ">
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
            </div>
            <div className="grid grid-cols-2 point">
                <div className="w-1223px text-center font-bold text-sm m-5 bg-#F2F6F8  items-center justify-center m-5 point-text">
                    <h2>¿Cómo comprar nuestros productos vía WhatsApp?</h2>
                    <p className="m-5 font-quicksand text-left w-600">
                        1. Explora nuestra variedad de productos y elige el que más te guste. <br/>
                        2. Envíanos un mensaje por WhatsApp con el nombre o una breve descripción del producto que deseas adquirir.<br/>
                        3. Te confirmaremos la disponibilidad del artículo y te proporcionaremos detalles sobre el proceso de reserva.<br/>
                        4. Coordinaremos el envío para que recibas tu producto cómodamente en casa.<br/>
                        5. ¡Listo! Disfruta de tu nueva adquisición de Pa'l Alma y déjanos saber si necesitas algo más.<br/>
                    </p>
                    <p>
                    ¡Hacer tus compras con nosotros es sencillo y personalizado!
                    Estamos aquí para brindarte una buena experiencia de compra.
                    </p>
                </div>
                <div className="flex items-center ml-20">
                    <img src="/img/Group.svg" alt="Grupo" className="text-center" />
                </div>
            </div>
        </div>
      </div>
    );
  }