import Banner from '@/components/contact/Banner'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import fotoJuntas from '../../../public/nosotras/fotoJuntas.jpg'
import miceAzul2 from '../../../public/nosotras/miceAzul2.svg'
import miceMarron from '../../../public/nosotras/miceMarron.svg'
import azulBorde2 from '../../../public/nosotras/azulBorde2.svg'
import marronBorde from '../../../public/nosotras/marronBorde.svg'

function page() {
  return (
    <main>
      <Banner />
      <section className='flex flex-col justify-center text-center'>
        <h2 className='text-3xl font-bold uppercase mb-4'>Nuestra misión</h2>
        <p className='text-xl font-bold w-8/12 mx-auto'>Ofrecer productos que reflejen la belleza natural de nuestro país y al mismo tiempo concientizar sobre la importancia crucial del cuidado del medio ambiente y la economía circular.</p>
      </section>
      <section className='flex flex-col text-center my-10 text-lg md:text-xl w-10/12 mx-auto'>
        <div>
          <h2 className='text-3xl font-bold uppercase mb-4'>¿Quiénes somos?</h2>
          <p className='w-10/12 my-6 mx-auto'>PA'L ALMA es una marca que nació del sueño de dos mamás profesionales tratando de conjugar la vida familiar con su trabajo, su pasión por las <b>ARTES PLÁSTICAS, el DIBUJO, la NATURALEZA, las EXPERIENCIAS al AIRE LIBRE y VIAJARSomos Patricia y María, nos conoc</b>.</p>
          <p className='w-10/12 my-6 mx-auto'>Somos Patricia y María, nos conocimos en el colegio de nuestros hijos y compartiendo encuentros se fue consolidando una amistad y proyectos en común. Decidimos emprender juntas desde el 2021, para dar forma a este proyecto conjugando nuestra formación en Artes Plásticas, Diseño Industrial y Arquitectura.</p>
          <p className='w-10/12 my-6 mx-auto'>Ambas con una mirada sensible ante el bienestar personal, la búsqueda y expresión de las emociones a través del ARTE y el cuidado del medio ambiente.</p>
        <p className='w-10/12 mx-auto'>El nombre PA'L ALMA surgió de la búsqueda por encontrar una expresión autóctona que pudiera reflejar nuestro sentir con este proyecto y además tuviera las iniciales de nuestros nombres, Patricia y María.</p>
        </div>
        <Image className='mx-auto hidden md:flex mt-16 mb-10 md:w-1/2' src={fotoJuntas} width={400} alt='foto de patricia y maria'/>
      </section>
      <div className="hidden lg:flex absolute top-3/4 z-[-10]">
        <Image src={marronBorde} width={300} className="flex relative bottom-2/3 left-0" alt='borde de micelania marron' />
        <Image src={miceMarron} width={200} className="flex absolute top-2 left-0" alt='micelania marron'/>
      </div>
      <div className="hidden lg:flex absolute right-0 top-full z-[-10]">
      <Image src={azulBorde2} width={230} className="flex absolute  top-72 right-4" alt='borde de micelania azul 2'/>
      <Image src={miceAzul2} width={250} className="flex relative top-72 z-[-10] right-0" alt='micelania azul 2'/>
      </div>
      <Link href="/nosotras/masInfo" className='w-1/2 text-center flex justify-center mx-auto uppercase m-10 py-4 bg-orange-600 rounded-xl text-white hover:bg-orange-700'>Más sobre nosotras</Link>
    </main>

  )
}

export default page
