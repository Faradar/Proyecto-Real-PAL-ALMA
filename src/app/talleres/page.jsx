'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import './talleres.css'


export default function Talleres() {

    const [page, setPage] = useState(1)
    const [coment, setComent] = useState(1)
    const [type, setType] = useState("nino")

    useEffect(()=>{
        let int = setInterval(() => {
            setPage(prev =>((prev+1)>= 5 ? 1: prev + 1))
        }, 5000);

        return()=> clearInterval(int);
    },[])

    const handlePrevPage = ()=>{
        setPage(prev => (prev - 1) <= 0 ? 5 : prev - 1)
    }
    const handleNextPage = ()=>{
        setPage(prev => (prev + 1) >= 6 ? 1 : prev + 1)
    }
    const cambiarValor = (valor) => {
        setPage(valor);
      };

    const cambiarTipo = (tipo)=>{
        setType(tipo)
    }

    const handlePrevComent = ()=>{
        setComent(prev => (prev - 1) <= 0 ? 5 : prev - 1)
    }
    const handleNextComent = ()=>{
        setComent(prev => (prev + 1) >= 6 ? 1 : prev + 1)
    }

    return (
      <div >
        <div className="con_magin">
            <p className="text_talleres">
            Talleresde arte para niños y adultos, utilizando materiales cotidianos y promoviendo.
            </p>
            <div className="modulos ">
                <div onClick={()=>{cambiarTipo("nino")}} className="modulo cursor-pointer">
                    <div className="modulo1"></div>
                </div>
                <div onClick={()=>{cambiarTipo("adulto")}} className="modulo cursor-pointer">
                    <div className="modulo2"></div>
                </div>
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
        {type==='nino' ? 
        <div>
            <p className="font-bold  texttalleres">Galería de imágenes de los talleres</p>


            <div className="flex items-center justify-center mb-10 relative"> 

                    <div onClick={handlePrevPage} className="absolute left-4 flex items-center inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-gray-500">
                        <span className="text-3xl">&lt;-</span>
                    </div>

                
                    <div className="relative z-[-3]  w-95 ">
                        <img src={`img/Talleresnino${page}.png`} alt="Imagen" className="object-cover object-center mx-auto w-95 h-650"/>
                    </div>

                
                    <div onClick={handleNextPage} className="absolute right-4 flex items-center inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-gray-500">
                        <span className="text-3xl">-&gt;</span>
                    </div>
            </div>
            <div className=" w-95 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8  justify-center mx-auto ">
                <img onClick={()=>cambiarValor(1)} className={`imgGaleria mx-auto ${page===1 ? 'select' : ''}`} src="img/Talleresnino1.png" alt="Talleres nino 1" />
                <img onClick={()=>cambiarValor(2)} className={`imgGaleria mx-auto ${page===2 ? 'select' : ''}`} src="img/Talleresnino2.png" alt="Talleres nino 2" />
                <img onClick={()=>cambiarValor(3)} className={`imgGaleria mx-auto ${page===3 ? 'select' : ''}`} src="img/Talleresnino3.png" alt="Talleres nino 3" />
                <img onClick={()=>cambiarValor(4)} className={`imgGaleria mx-auto ${page===4 ? 'select' : ''}`} src="img/Talleresnino4.png" alt="Talleres nino 4" />
                <img onClick={()=>cambiarValor(5)} className={`imgGaleria mx-auto ${page===5 ? 'select' : ''}`} src="img/Talleresnino5.png" alt="Talleres nino 5" />
            </div>

            <div className="flex items-center justify-center mb-10 relative"> 

                    <div onClick={handlePrevComent} className="absolute left-4 flex items-center inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer text-orange-600  hover:text-orange-500 font-bold">
                        <span className="text-3xl">&lt;</span>
                    </div>

                
                    <div className="relative z-[-3]  w-95 ">
                        {coment === 1 && (
                            <div className="coment flex">
                                <div className="font-bold">Mamá de Luciano y Antonella del Barco</div>
                                <p>"Disfrutaron de las actividades del taller y generaron nuevos vínculos. Dependiendo de la actividad específica, en algunas se prendieron mas que en otras. Me pareció muy favorable que aprendan a hacer arte reutilizando materiales que tienen a su alrededor y generalmente se descartan. Valoró la experimentación de diferentes técnicas artísticas."</p>
                            </div>
                        )}
                        {coment === 2 && (
                            <div className="coment flex">
                                <div className="font-bold">Mamá y Papá de Giuliana Guanes</div>
                                <p>"Nos pareció un taller super didáctico, una buena propuesta enseñada desde el valor de reutilizar lo que ya tenemos en casa y darle nueva vida."</p>
                            </div>
                        )}

                        {coment === 3 && (
                            <div className="coment flex">
                                <div className="font-bold">Mamá de Lorenzo Manfredi</div>
                                <p>"Inscribí a mi hijo en el taller porque quería fomentar la creatividad en él. A Lolo le encanta ir, sale feliz de la clase."</p>
                            </div>
                        )}

                        {coment === 4 && (
                            <div className="coment flex">
                                <div className="font-bold">Mamá de Fausto Visani</div>
                                <p>"Excelente propuesta! Mi hijo volvía feliz de cada clase, costaba retirarlo, como que le era poco tiempo, de lo bien que la pasaba. Las seños son excelentes personas además de profesionales!"</p>
                            </div>
                        )}

                        {coment === 5 && (
                            <div className="coment flex">
                                <div className="font-bold">Mamá de Sofia Baca</div>
                                <p>"Inscribí a mi hija en este taller porque me gusto la propuesta. Las seños son muy amables y amorosas. Un aspecto a destacar es la creatividad de las seños y niños/as. "</p>
                            </div>
                        )}
                    </div>

                
                    <div onClick={handleNextComent} className="absolute right-4 flex items-center inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer text-orange-600 hover:text-orange-500 font-bold">
                        <span className="text-3xl">&gt;</span>
                    </div>
            </div>
            
            <p className="text-center font-bold mt-10">“El arte es un medio que siempre nos ayuda a expresar lo que sentimos”.</p>
        </div>
        :
        <div>
            <p className="font-bold  texttalleres">Galería de imágenes de los talleres</p>


            <div className="flex items-center justify-center mb-10 relative"> 

                    <div onClick={handlePrevPage} className="absolute left-4 flex items-center inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-gray-500">
                        <span className="text-3xl">&lt;-</span>
                    </div>

                
                    <div className="relative z-[-3]  w-95 ">
                        <img src={`img/Talleresadultos${page}.png`} alt="Imagen" className="object-cover object-center mx-auto w-95 h-650"/>
                    </div>

                
                    <div onClick={handleNextPage} className="absolute right-4 flex items-center inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-gray-500">
                        <span className="text-3xl">-&gt;</span>
                    </div>
            </div>
            <div className=" w-95 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8  justify-center mx-auto ">
                <img onClick={()=>cambiarValor(1)} className={`imgGaleria mx-auto ${page===1 ? 'select' : ''}`} src="img/Talleresadultos1.png" alt="Talleres nino 1" />
                <img onClick={()=>cambiarValor(2)} className={`imgGaleria mx-auto ${page===2 ? 'select' : ''}`} src="img/Talleresadultos2.png" alt="Talleres nino 2" />
                <img onClick={()=>cambiarValor(3)} className={`imgGaleria mx-auto ${page===3 ? 'select' : ''}`} src="img/Talleresadultos3.png" alt="Talleres nino 3" />
                <img onClick={()=>cambiarValor(4)} className={`imgGaleria mx-auto ${page===4 ? 'select' : ''}`} src="img/Talleresadultos4.png" alt="Talleres nino 4" />
                <img onClick={()=>cambiarValor(5)} className={`imgGaleria mx-auto ${page===5 ? 'select' : ''}`} src="img/Talleresadultos5.png" alt="Talleres nino 5" />
            </div>
            
            <p className="text-center font-bold mt-10">“El arte nos da la posibilidad de conocer mejor y descubrir aquello de lo que somos capaces”.</p>
        </div>
        }
          
        
      </div>
      
    );
  }
  