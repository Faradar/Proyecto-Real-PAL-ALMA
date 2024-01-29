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
        <div class="relative z-[-99]">
                <div class="absolute img-fourthFon">
                    <img  src="/img/productos/fourthFon.svg" alt="Fondocolor4" />
                </div> 
                <div class="absolute img-fourth">
                    <img  src="/img/productos/fourth.svg" alt="Fondo4" />
                </div>   
            </div>
        <div > 
            <div className="">
                <h1 className="text-center text-xl font-bold  mt-20">
                    Creación de productos con diseño autóctono, comprometiéndose con la sostenibilidad al reciclar materiales textiles.
                </h1>
                
                <div >
                    <h2 className="text-x pt-10 pl-10">
                        Capturando la esencia única de la flora y fauna que nos rodea.
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-eaf0f4 p-4 md:p-10 ">
                        <div className="flex items-center justify-center flex-col">
                            <img src="/img/Taza Cerámica_Mariposa Borde de Oro 2.png" alt="Tasas Ceramica" />
                            <span className="font-bold">Taza cerámica Mariposa borde de oro</span>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <img src="/img/Taza Cerámica_Diente de León (1) 1.png" alt="Tasas Ceramica 
                            leon" />
                            <span className="font-bold">Taza cerámica Diente de León</span>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <img src="/img/Matermo_Chica 1.png" alt="Tasas Ceramica 
                            leon" />
                            <span className="font-bold">Matermo Chilca</span>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <img src="/img/Botella_Lechuza Vizcachera 2.png" alt="Bitácora Zorro gris" />
                            <span className="font-bold">Bitácora Zorro gris</span>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <img src="/img/Bitácora A5_Zorro Gris_1 1.png" alt="Bitácora Benteveo" />
                            <span className="font-bold">Bitácora Zorro gris</span>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <img src="/img/Bitácora A5_Benteveo_1 2.png" alt="Calcomanía Flora autóctona" />
                            <span className="font-bold">Bitácora Benteveo</span>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <img src="/img/Calcomanías_Flora Autóctona 3.png" alt="Botella Lechuza" />
                            <span className="font-bold">Calcomanía Flora autóctona</span>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <img src="/img/Calcomanías_Fauna Autóctona 2.png" alt="Botella Lechuza" />
                            <span className="font-bold">Calcomanía Fauna autóctona</span>
                        </div>
                        {/* -- */}
                        <div className="flex items-center justify-center flex-col">
                            <img src="/img/Llavero Circular_Zorro Gris 4.png" alt="Bitácora Benteveo" />
                            <span className="font-bold">Llavero circular Zorro gris</span>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <img src="/img/Llavero Rectangular_Flor del Chañar 4.png" alt="Calcomanía Flora autóctona" />
                            <span className="font-bold">Llavero rectangular Flor del Cañar</span>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <img src="/img/Bolso Lona_Lechuza Vizcachera 1.png" alt="Botella Lechuza" />
                            <span className="font-bold">Bolso de lona Lechuza vizcachera</span>
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <img src="/img/Bolso Lona_Vinca 1.png" alt="Botella Lechuza" />
                            <span className="font-bold">Bolso de lona Vinca</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="grid grid-cols-2 point">
                <div className="w-1223px text-center font-bold text-sm bg-#F2F6F8  items-center justify-center m-5 point-text">
                    <h2>¿Cómo comprar nuestros productos vía WhatsApp?</h2>
                    <p className="max-w-600 m-5 font-quicksand text-left">
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
                <div className="flex items-center">
                    <img src="/img/Group.svg" alt="Grupo" className="text-center" />
                </div>
            </div>
        </div>
    );
}