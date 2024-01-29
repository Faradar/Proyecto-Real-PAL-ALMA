"use client"
import Image from 'next/image'
import React from 'react'
import pato from '../../../../public/nosotras/Pato.jpg'
import mari from '../../../../public/nosotras/Mari.jpg'
import miceAzul2 from '../../../../public/nosotras/miceAzul2.svg'
import azulBorde2 from '../../../../public/nosotras/azulBorde2.svg'
import miceVerde2 from '../../../../public/nosotras/miceVerde2.svg'
import verdeBorde2 from '../../../../public/nosotras/verdeBorde2.svg'
import miceMarron2 from '../../../../public/nosotras/miceMarron2.svg'
import marronBorde2 from '../../../../public/nosotras/marronBorde2.svg'
import ReadMore from '@/components/contact/ReadMore'
import logo from '../../../../public/contacto/logo.svg'
import miceAmarilla from '../../../../public/contacto/micelaniaAmarilla.svg'
import miceNaranja2 from '../../../../public/contacto/micelaniaNaranja.svg'
import amarillaBorde from '../../../../public/contacto/amarillaBorde.svg'
import naranjaBorde2 from '../../../../public/contacto/naranjaBorde.svg'



function page() {

  return (
    <>
      <section className='hidden md:grid md:grid-cols-3 justify-center my-10 bg-slate-300/30 md:shadow-[0_6px_6px_-1px_rgba(0,0,0,0.3)]'>
        <div className='hidden md:flex'>
          <Image src={amarillaBorde} width={210} alt='borde de micelania amarilla' />
          <div className='flex absolute top-48'>
            <Image src={miceAmarilla} width={180} alt='micelania amarilla' />
          </div>
        </div>
        <div className='flex'>
          <Image src={logo} width={900} className='mx-auto' alt="logo pa'l alma" />
        </div>
        <div className='hidden md:flex justify-end'>
          <Image src={naranjaBorde2} width={227} alt='borde de micelania naranja' />
          <div className='flex absolute right-0'>
            <Image src={miceNaranja2} width={220} alt='micelania naranja' />
          </div>
        </div>
      </section>
      <main className='w-10/12 mx-auto overflow-x-hidden  bg-slate-50/20'>
        <div className='grid grid-rows-4 lg:grid-cols-2 mt-3 lg:grid-rows-1 lg:mb-28'>
          <Image src={mari} className='w-44 lg:w-8/12 flex justify-self-center m-auto' alt='foto de maria' />
          <div className='flex flex-col row-span-6 justify-center'>
            <p className='mb-4 text-lg'>Mi nombre es María de los Ángeles Carranza, nací en el interior de Córdoba en una ciudad que se llama Cruz del Eje, ciudad a la que llegaron mis padres como grandes emprendedores por lo que mamé desde niña el esfuerzo y la gratificación de trabajar por cuenta propia.</p>
            <p className='mb-4 text-lg'>Desde que recuerdo me gusta dibujar. A los 9 años empecé a asistir a la escuela de bellas artes, mi vida transcurría en el taller infantil, luego taller infanto juvenil y magisterio, mis dibujos preferidos siempre eran los árboles, ese camino finalizó a los 17 cuando egresé como maestra de Artes Plásticas</p>
            <ReadMore 
            text={`Luego llegó el momento de decidir que carrera seguir, eso implicaba mudarse a Córdoba Capital, una aventura para los que venimos del interior. Después de algunas dudas, elegí Diseño Industrial, hermosa carrera que une varias disciplinas.  Decidí que el camino era volver al primer amor, el arte ,dibujar la naturaleza, flores, árboles, paisajes y volvieron a ser mi inspiración.La vida siguió, entre trabajos y las ganas de formar una familia, otro desafío y llegaron mis hijos, mis grandes maestros en esta vida.`} 
            moreText={" En la pandemia me volví a reencontrar con el arte y con la mirada sorprendida de mis hijos, quienes descubrieron que su mamá dibujaba y que lo hacía con mucho amor y con el alma.En la escuela de mis hijos nos encontramos con Pato y unimos nuestras ganas de crear, de dibujar, de diseñar, el amor por nuestro país, ambas amamos viajar y sorprendernos con la belleza de nuestro país, así nació este hermoso proyecto llamado PA'L ALMA."} />
          </div>
        </div>

        <div className="hidden lg:flex absolute left-0 top-full z-[-10]">
          <Image src={marronBorde2} width={410} className="flex relative bottom-80 right-4" alt='borde de micelania marron 2' />
          <Image src={miceMarron2} width={300} className="flex absolute bottom-96 z-[-20] left-0" alt='micelania marron 2' />
        </div>

        <div className='grid grid-rows-4 lg:grid-cols-2 lg:grid-rows-1'>
          <Image className='lg:order-last w-44 lg:w-8/12 flex justify-self-center m-auto' src={pato} alt='foto de patricia'/>
          <div className='flex flex-col row-span-6 justify-center'>
            <p className="mb-4 text-lg">Soy Patricia Ariadna Furbatto, nací en Córdoba Capital y viví a lo largo de mi infancia en distintas provincias de Argentina. Hija de madre patagónica con alma viajera, incorporé desde pequeña la vida nómade, los cambios constantes, las aventuras al aire libre y el amor por la naturaleza.</p>
            <p className="mb-4 text-lg">Cada recuerdo que tengo de mi infancia, veo a la niña que siempre disfrutó expresarse a través del dibujo de una manera innata. Esos momentos en los que me encontraba con los lápices de colores y mis cuadernos era como introducirme en un mundo mágico para dejar volar la imaginación y donde cualquier cosa sería posible.Mis primeros pasos en este mundo fueron guiados por mi mamá, también artista aficionada. Muchos de los aprendizajes durante mi niñez y adolescencia fueron más como autodidacta.</p>
            <ReadMore text={`A los 18 años tuve la oportunidad de hacer un intercambio cultural en el extranjero por 6 meses, lo cual afianzó más el amor por Argentina y mis raíces. Fue ya en la Facultad de Arquitectura donde aprendí los diferentes códigos sobre el lenguaje del dibujo técnico, la perspectiva, el croquizado y el color.`}
            moreText={`Durante mi paso por la carrera, conocí a los arquitectos Ferraris y Urain, dos grandes dibujantes que motivaron mi expresión artística y me introdujeron a la bitácora del viajero. Con ellos compartí varios años como ayudante alumna y luego como arq. adscripta en su cátedra. Es así como me fui enfrentando a distintos desafíos en mi profesión, pero siempre buscando fusionar mis grandes pasiones: dibujar, viajar y dar a conocer la riqueza natural de mi país. Fue entonces cuando me encontré con María, unificamos deseos y encaminamos un proyecto juntas.`} />
          </div>
        </div>
        <div className="hidden lg:flex absolute right-0 top-full z-[-10]">
          <Image src={azulBorde2} width={200} className="flex absolute  bottom-72 right-4" alt='borde de micelania azul 2' />
          <Image src={miceAzul2} width={220} className="flex relative bottom-72 z-[-10] right-0" alt='micelania azul 2' />
        </div>
        <div className="hidden lg:flex absolute left-1/3 top-full z-[-10]">
          <Image src={verdeBorde2} width={350} className="flex relative  top-[570px] left-1/2" alt='borde de micelania verde 2'/>
          <Image src={miceVerde2} width={320} className="flex absolute top-[580px] z-[-10] left-1/2" alt='micelania verde' />
        </div>
      </main>
    </>
  )
}

export default page