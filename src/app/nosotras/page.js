import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import fotoJuntas from '../../../public/nosotras/fotoJuntas.jpg'
import miceAzul2 from '../../../public/nosotras/miceAzul2.svg'
import miceMarron from '../../../public/nosotras/miceMarron.svg'
import azulBorde2 from '../../../public/nosotras/azulBorde2.svg'
import marronBorde from '../../../public/nosotras/marronBorde.svg'
import amarillaBorde2 from '../../../public/contacto/amarillaBorde2.svg'
import miceAmarilla2 from '../../../public/contacto/miceAmarilla2.svg'
import miceVerde from '../../../public/contacto/micelaniaVerde.svg'
import verdeBorde from '../../../public/contacto/verdeBorde.svg'
import logo from '../../../public/contacto/logo.svg'
import miceAmarilla from '../../../public/contacto/micelaniaAmarilla.svg'
import miceNaranja2 from '../../../public/contacto/micelaniaNaranja.svg'
import amarillaBorde from '../../../public/contacto/amarillaBorde.svg'
import naranjaBorde2 from '../../../public/contacto/naranjaBorde.svg'


function page() {
  return (
    <main>
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
      <section className='flex flex-col justify-center text-center'>
        <h2 className='text-4xl font-bold uppercase my-4'>Nuestra misión</h2>
        <p className='text-lg font-bold w-9/12 mx-auto'>Ofrecer productos que reflejen la belleza natural de nuestro país y al mismo tiempo concientizar sobre la importancia crucial del cuidado del medio ambiente y la economía circular.</p>
      </section>
      <div className="md:hidden absolute right-0 top-10 z-[-10]">
        <Image src={verdeBorde} width={160} className="flex relative top-56 right-0" alt='borde de micelania verde' />
        <Image src={miceVerde} width={110} className="flex absolute right-0" alt='micelania verde' />
      </div>
      <section className='flex flex-col text-center my-10 text-lg md:text-lg w-10/12 mx-auto'>
        <div>
          <h2 className='text-4xl font-bold uppercase mb-4'>¿Quiénes somos?</h2>
          <p className='w-11/12 lg:w-8/12 my-6 mx-auto'>PA'L ALMA es una marca que nació del sueño de dos mamás profesionales tratando de conjugar la vida familiar con su trabajo, su pasión por las <b>ARTES PLÁSTICAS, el DIBUJO, la NATURALEZA, las EXPERIENCIAS al AIRE LIBRE y VIAJARSomos Patricia y María, nos conoc</b>.</p>
          <p className='w-11/12 lg:w-8/12 my-6 mx-auto'>Somos Patricia y María, nos conocimos en el colegio de nuestros hijos y compartiendo encuentros se fue consolidando una amistad y proyectos en común. Decidimos emprender juntas desde el 2021, para dar forma a este proyecto conjugando nuestra formación en Artes Plásticas, Diseño Industrial y Arquitectura.</p>
          <p className='w-11/12 lg:w-8/12 my-6 mx-auto'>Ambas con una mirada sensible ante el bienestar personal, la búsqueda y expresión de las emociones a través del ARTE y el cuidado del medio ambiente.</p>
          <p className='w-11/12 lg:w-8/12 my-6 mx-auto'>El nombre PA'L ALMA surgió de la búsqueda por encontrar una expresión autóctona que pudiera reflejar nuestro sentir con este proyecto y además tuviera las iniciales de nuestros nombres, Patricia y María.</p>
          <p className='w-11/12 lg:w-8/12 my-6 mx-auto hidden lg:flex'>Nuestra idea original era poder mostrar a través de nuestros dibujos, hechos a mano alzada, la flora y fauna de cada región de Argentina. Poder transmitir con nuestra riqueza natural, conocimientos y curiosidades sobre cada especie y además fomentar el cuidado de la naturaleza y biodiversidad.</p>
          <p className='w-11/12 lg:w-8/12 my-6 mx-auto hidden lg:flex'>Nos dimos cuenta que con esta idea podríamos generar productos que evocaran un recuerdo o un momento especial vivido durante un viaje por Argentina. Que fueran prácticos y funcionales a la vez pero con impronta de diseño y estilo autóctono. Tenemos como objetivo incorporar el concepto de la economía circular reciclando materiales principalmente del área textil.</p>
          <p className='w-11/12 lg:w-8/12 my-6 mx-auto hidden lg:flex'>Sabemos que desde el arte se puede lograr un bienestar y fomentar la expresión y la creatividad. Esta es la razón por la que decidimos llegar a niños y adultos a través de talleres de arte. Siguiendo con el concepto del reciclado y promoviendo las actividades artísticas con materiales cotidianos.</p>
          <p className='w-11/12 lg:w-8/12 my-6 mx-auto hidden lg:flex'>Esperamos ver crecer a PA'L ALMA como nuestro hijo de corazón, fuerte, emprendiendo un vuelo alto y dejando su huella.</p>
          
        </div>
        <Image className='mx-auto hidden md:flex mt-16 mb-10 md:w-3/4 xl:w-8/12' src={fotoJuntas} width={400} alt='foto de patricia y maria' />
      </section>
      <div className="hidden lg:flex absolute top-3/4 z-[-10]">
        <Image src={marronBorde} width={300} className="flex relative bottom-2/3 left-0" alt='borde de micelania marron' />
        <Image src={miceMarron} width={200} className="flex absolute top-2 left-0" alt='micelania marron' />
      </div>
      <div className="md:hidden absolute left-0 bottom-[-300px] z-[-10]">
        <Image src={miceAmarilla2} width={270} className="flex absolute top-14 left-0" alt='micelania amarilla 2' />
        <Image src={amarillaBorde2} width={340} className="flex relative z-[-10] right-0" alt=' borde de micelania amarilla 2' />
      </div>
      <div className="hidden lg:flex absolute right-0 top-full z-[-10]">
        <Image src={azulBorde2} width={230} className="flex absolute  top-72 right-4" alt='borde de micelania azul 2' />
        <Image src={miceAzul2} width={250} className="flex relative top-72 z-[-10] right-0" alt='micelania azul 2' />
      </div>
      <Link href="/nosotras/masInfo" className='w-7/12 text-center flex justify-center mx-auto uppercase mt-10 py-4 bg-orange-600 rounded-xl text-white hover:bg-orange-700'>Más sobre nosotras</Link>
    </main>

  )
}

export default page
