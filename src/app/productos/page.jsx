"use client";
import React from "react";
import ProductCard from "@/components/productos/ProductCard";
import "./productos.css";

export default function productos() {
  const products = [
    {
      imagePath: "/img/Taza Cerámica_Mariposa Borde de Oro 2.png",
      productName: "Taza cerámica Mariposa borde de oro",
      additionalText:
        "TAZA blanca de cerámica o polímero de alta densidad. Estampada con nuestra gráfica exclusiva de flora o fauna autóctona y frase inspiradora.",
    },
    {
      imagePath: "/img/Taza Cerámica_Diente de León (1) 1.png",
      productName: "Taza cerámica Diente de León",
      additionalText:
        "TAZA blanca de cerámica o polímero de alta densidad. Estampada con nuestra gráfica exclusiva de flora o fauna autóctona y frase inspiradora.",
    },
    {
      imagePath: "/img/Matermo_Chica 1.png",
      productName: "Matermo Chilca",
      additionalText:
        "MATERMO blanco de plástico de alta densidad, con capacidad de 500 cm3 y bombilla plástica. Estampado con nuestros diseños de flora o fauna autóctona y frase inspiradora, ideal para viajes, salidas al aire libre o para llevar a tu trabajo.",
    },
    {
      imagePath: "/img/Botella_Lechuza Vizcachera 2.png",
      productName: "Botella Lechuza Vizcachera",
      additionalText:
        "BOTELLA deportiva blanca, estampada con nuestros diseños de flora o fauna regional y frase motivadora, ideal para actividades al aire libre. Tiene 500 cm3 de capacidad, tapa con pico rebatible y sorbete. Es de material plástico, polímero de máxima calidad, resistente, duradero y fácil de limpiar.",
    },
    {
      imagePath: "/img/Bitácora A5_Zorro Gris_1 1.png",
      hoveredImagePath: "/img/Bitácora A5_Zorro Gris_2.jpg",
      productName: "Bitácora Zorro gris",
      additionalText:
        "BITÁCORA con tapas de cartón gris y espiral plástico negro. Tapa frontal estampada con diseño propio de especies autóctonas que representan nuestra biodiversidad. Contienen 50 hojas de diferentes gramajes, 90 y 120grs., para que puedas intervenirlas con distintas técnicas. También incluyen un calendario, una carátula con una frase motivadora y una lámina con uno de nuestros dibujos para que la pintes a tu gusto.",
    },
    {
      imagePath: "/img/Bitácora A5_Benteveo_1 2.png",
      hoveredImagePath: "/img/Bitácora A5_Benteveo_2.jpg",
      productName: "Bitácora Benteveo",
      additionalText:
        "BITÁCORA con tapas de cartón gris y espiral plástico negro. Tapa frontal estampada con diseño propio de especies autóctonas que representan nuestra biodiversidad. Contienen 50 hojas de diferentes gramajes, 90 y 120grs., para que puedas intervenirlas con distintas técnicas. También incluyen un calendario, una carátula con una frase motivadora y una lámina con uno de nuestros dibujos para que la pintes a tu gusto.",
    },
    {
      imagePath: "/img/Calcomanías_Flora Autóctona 3.png",
      productName: "Calcomanía Flora autóctona",
      additionalText:
        "CALCOMANÍA o sticker con formato rectangular, fondo blanco estampado en negro con dibujo propio de flora o fauna autóctona de nuestra región. Las dimensiones aproximadas de cada una varia según la imagen desde los 6,5 x 10,5 cm hasta los 9,5 x 11,5 cm.",
    },
    {
      imagePath: "/img/Calcomanías_Fauna Autóctona 2.png",
      productName: "Calcomanía Fauna autóctona",
      additionalText:
        "CALCOMANÍA o sticker con formato rectangular, fondo blanco estampado en negro con dibujo propio de flora o fauna autóctona de nuestra región. Las dimensiones aproximadas de cada una varia según la imagen desde los 6,5 x 10,5 cm hasta los 9,5 x 11,5 cm.",
    },
    {
      imagePath: "/img/Llavero Circular_Zorro Gris 4.png",
      productName: "Llavero circular Zorro gris",
      additionalText:
        "LLAVERO confeccionado con materiales reciclados de la industria marroquinera y dije plástico circular o rectangular de color blanco con la estampa de nuestros diseños de flora o fauna regional.",
    },
    {
      imagePath: "/img/Llavero Rectangular_Flor del Chañar 4.png",
      productName: "Llavero rectangular Flor del Cañar",
      additionalText:
        "LLAVERO confeccionado con materiales reciclados de la industria marroquinera y dije plástico circular o rectangular de color blanco con la estampa de nuestros diseños de flora o fauna regional.",
    },
    {
      imagePath: "/img/Bolso Lona_Lechuza Vizcachera 1.png",
      productName: "Bolso de lona Lechuza vizcachera",
      additionalText:
        "BOLSO DE LONA de color natural y tiras negras. Ideal para salidas al aire libre, lleva estampada flora o fauna autóctona de edición propia y está acompañado por accesorios de cuero e hilo realizados con materiales reciclados de la industria marroquinera.",
    },
    {
      imagePath: "/img/Bolso Lona_Vinca 1.png",
      productName: "Bolso de lona Vinca",
      additionalText:
        "BOLSO DE LONA de color natural y tiras negras. Ideal para salidas al aire libre, lleva estampada flora o fauna autóctona de edición propia y está acompañado por accesorios de cuero e hilo realizados con materiales reciclados de la industria marroquinera.",
    },
  ];

  return (
    <div>
      {/* <div class="relative z-[-99]">
                <div class="absolute img1">
                    <img  src="/img/productos/first.svg" alt="Fondo1" />
                    
                </div>  
                
            </div> */}
      <div className="relative z-[-99] ">
        <div className="absolute right-0">
          <img src="/img/productos/firstFon.svg" alt="Fondocolor" />
        </div>
        <div className="absolute top-1 right-0">
          <img src="/img/productos/sec.svg" alt="Fondo2" />
        </div>
      </div>
      <div className="relative z-[-99]">
        <div className="absolute img-thirdFon">
          <img src="/img/productos/thirdFon.svg" alt="Fondocolor3" />
        </div>
        <div className="absolute img-third">
          <img src="/img/productos/third.svg" alt="Fondo3" />
        </div>
      </div>
      <div className="relative z-[-99]">
        <div className="absolute img-fourthFon">
          <img src="/img/productos/fourthFon.svg" alt="Fondocolor4" />
        </div>
        <div className="absolute img-fourth">
          <img src="/img/productos/fourth.svg" alt="Fondo4" />
        </div>
      </div>
      <div>
        <div className="">
          <h1 className="text-center text-xl font-bold  mt-20">
            Creación de productos con diseño autóctono, comprometiéndose con la
            sostenibilidad al reciclar materiales textiles.
          </h1>

          <div>
            <h2 className="text-x pt-10 pl-10">
              Capturando la esencia única de la flora y fauna que nos rodea.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-eaf0f4 p-4 p-10 ">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  imagePath={product.imagePath}
                  hoveredImagePath={product.hoveredImagePath}
                  productName={product.productName}
                  additionalText={product.additionalText}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-center pt-10 font-bold">
          Si querés conocer más productos escribinos a nuestro WhatsApp +54 9
          3513955439 (Pato) | +54 9 3513870553 (María)
        </p>
        <div className="flex items-center justify-center flex-col md:flex-row  bg-eaf0f4 p-4">
          <div className="max-w-1200 text-center font-bold text-sm m-5 items-center justify-center m-5 point-text">
            <h2>¿Cómo comprar nuestros productos vía WhatsApp?</h2>
            <p className="max-w-600 m-5 font-quicksand text-left">
              1. Explora nuestra variedad de productos y elige el que más te
              guste. <br />
              2. Envíanos un mensaje por WhatsApp con el nombre o una breve
              descripción del producto que deseas adquirir.
              <br />
              3. Te confirmaremos la disponibilidad del artículo y te
              proporcionaremos detalles sobre el proceso de reserva.
              <br />
              4. Coordinaremos el envío para que recibas tu producto cómodamente
              en casa.
              <br />
              5. ¡Listo! Disfruta de tu nueva adquisición de Pa'l Alma y déjanos
              saber si necesitas algo más.
              <br />
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
    </div>
  );
}
