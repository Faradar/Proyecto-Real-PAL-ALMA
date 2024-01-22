"use client"
import Banner from '@/components/contact/Banner'
import Image from 'next/image'
import React from 'react'
import pato from '../../../../public/nosotras/Pato.jpg'
import mari from '../../../../public/nosotras/Mari.jpg'
import miceAzul2 from '../../../../public/nosotras/miceAzul2.svg'
import azulBorde2 from '../../../../public/nosotras/azulBorde2.svg'
import miceVerde2 from '../../../../public/nosotras/miceVerde2.svg'
import verdeBorde2 from '../../../../public/nosotras/verdeBorde2.svg'
import ReadMore from '@/components/contact/ReadMore'


function page() {

  return (
    <>
      <Banner />
      <main className='w-10/12 mx-auto my-4 overflow-x-hidden  bg-slate-50/30'>
        <div className='grid grid-rows-3 lg:grid-cols-2 lg:grid-rows-1 gap-10'>
          <Image src={mari} className='w-11/12 md:w-8/12 flex justify-self-center m-auto' />
          <div className='flex flex-col row-span-2 justify-center'>
            <ReadMore 
            text={`Mi nombre es María de los Ángeles Carranza, nací en el interior de Córdoba en una ciudad que se llama Cruz del Eje, ciudad a la que llegaron mis padres como grandes emprendedores por lo que mamé desde niña el esfuerzo y la gratificación de trabajar por cuenta propia. Desde que recuerdo me gusta dibujar. A los 9 años empecé a asistir a la escuela de bellas artes, mi vida transcurría en el taller infantil, luego taller infanto juvenil y magisterio, mis dibujos preferidos siempre eran los árboles, ese camino finalizó a los 17 cuando egresé como maestra de Artes Plásticas`} 
            moreText={"Luego llegó el momento de decidir que carrera seguir, eso implicaba mudarse a Córdoba Capital, una aventura para los que venimos del interior. Después de algunas dudas, elegí Diseño Industrial, hermosa carrera que une varias disciplinas.  Decidí que el camino era volver al primer amor, el arte ,dibujar la naturaleza, flores, árboles, paisajes y volvieron a ser mi inspiración.La vida siguió, entre trabajos y las ganas de formar una familia, otro desafío y llegaron mis hijos, mis grandes maestros en esta vida. En la pandemia me volví a reencontrar con el arte y con la mirada sorprendida de mis hijos, quienes descubrieron que su mamá dibujaba y que lo hacía con mucho amor y con el alma.En la escuela de mis hijos nos encontramos con Pato y unimos nuestras ganas de crear, de dibujar, de diseñar, el amor por nuestro país, ambas amamos viajar y sorprendernos con la belleza de nuestro país, así nació este hermoso proyecto llamado PA'L ALMA."} />
          </div>
        </div>

        <div className='grid grid-rows-3 lg:grid-cols-2 lg:grid-rows-1'>
          <Image className='lg:order-last w-11/12 md:w-8/12 flex justify-self-center m-auto' src={pato} />
          <div className='flex flex-col my-4 row-span-2 justify-center'>
            <ReadMore text={`Soy Patricia Ariadna Furbatto, nací en Córdoba Capital y viví a lo largo de mi infancia en distintas provincias de Argentina. Hija de madre patagónica con alma viajera, incorporé desde pequeña la vida nómade, los cambios constantes, las aventuras al aire libre y el amor por la naturaleza.
            Cada recuerdo que tengo de mi infancia, veo a la niña que siempre disfrutó expresarse a través del dibujo de una manera innata. Esos momentos en los que me encontraba con los lápices de colores y mis cuadernos era como introducirme en un mundo mágico para dejar volar la imaginación y donde cualquier cosa sería posible.Mis primeros pasos en este mundo fueron guiados por mi mamá, también artista aficionada. Muchos de los aprendizajes durante mi niñez y adolescencia fueron más como autodidacta.`}
            moreText={`A los 18 años tuve la oportunidad de hacer un intercambio cultural en el extranjero por 6 meses, lo cual afianzó más el amor por Argentina y mis raíces. Fue ya en la Facultad de Arquitectura donde aprendí los diferentes códigos sobre el lenguaje del dibujo técnico, la perspectiva, el croquizado y el color. Durante mi paso por la carrera, conocí a los arquitectos Ferraris y Urain, dos grandes dibujantes que motivaron mi expresión artística y me introdujeron a la bitácora del viajero. Con ellos compartí varios años como ayudante alumna y luego como arq. adscripta en su cátedra. Es así como me fui enfrentando a distintos desafíos en mi profesión, pero siempre buscando fusionar mis grandes pasiones: dibujar, viajar y dar a conocer la riqueza natural de mi país. Fue entonces cuando me encontré con María, unificamos deseos y encaminamos un proyecto juntas.`} />
          </div>
        </div>
        <div className="hidden lg:flex absolute right-0 top-full z-[-10]">
          <Image src={azulBorde2} width={200} className="flex absolute  bottom-72 right-4" />
          <Image src={miceAzul2} width={220} className="flex relative bottom-72 z-[-10] right-0" />
        </div>
        <div className="hidden lg:flex absolute left-0 top-full z-[-10]">
          <Image src={verdeBorde2} width={430} className="flex relative  top-[500px] left-24" />
          <Image src={miceVerde2} width={400} className="flex absolute top-[500px] z-[-10] left-28" />
        </div>
      </main>
    </>
  )
}

export default page