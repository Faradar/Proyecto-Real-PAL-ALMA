import Banner from '@/components/contact/Banner'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import fotoJuntas from '../../../public/nosotras/foto-juntas.jpg'
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
      <section className='flex flex-col text-center my-10 text-lg w-11/12 mx-auto'>
        <div>
          <h2 className='text-3xl font-bold uppercase mb-4'>¿Quiénes somos?</h2>
          <p className='w-10/12 mx-auto'>Pa'l Alma es un emprendimiento de Córdoba Capital, creado por sus dueñas y socias Patricia y Maria, ambas dibujantes y artistas de vocación. El mismo, se basa en dibujos de la flora y fauna autóctona de Argentina, que posteriormente se plasman en diferentes productos (cuadernos, bitácoras, botellas, tazas, llaveros, etc).<br />La impronta de Pa'l Alma es que mientras realizan estos productos autóctonos, también buscan generar conocimientos  sobre los mismos y concientizar sobre el cuidado ambiental. Acompañados por la  realización de taller de arte se trabajan  sobre diferentes temas que atraviesan la  cuestión de la naturaleza y su cuidado.</p>
        </div>
        <div className='my-16 md:grid grid-cols-2 w-10/12 mx-auto'>
          <div>
            <Image />
            <h3 className='text-2xl'>Maria</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, esse. Pariatur, quos tempora quod ex harum reprehenderit repellendus minus velit.</p>
          </div>
          <div>
            <Image />
            <h3 className='text-2xl'>Patricia</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, esse. Pariatur, quos tempora quod ex harum reprehenderit repellendus minus velit.</p>
          </div>
        </div>
        <p className='w-10/12 mx-auto'>Nos conocimos en el colegio de nuestros hijos y compartiendo encuentros se fue consolidando una amistad y proyectos en común. Decidimos emprender juntas desde el 2021, para dar forma a este proyecto conjugando nuestra formación en Artes Plásticas, Diseño Industrial y Arquitectura.<br />Ambas con una mirada sensible ante el bienestar personal, la búsqueda y expresión de las emociones a través del ARTE y el cuidado del medio ambiente.</p>
        <p className='w-10/12 mx-auto'>El nombre <span className='font-bold'>PA'L ALMA</span> surgió de la búsqueda por encontrar una expresión autóctona que pudiera reflejar nuestro sentir con este proyecto y además tuviera las iniciales de nuestros nombres, Patricia y María.</p>
        <Image className='mx-auto mt-16 mb-10 md:w-1/2' src={fotoJuntas} width={400} />
      </section>
      <div className="hidden lg:flex absolute top-3/4 z-[-10]">
        <Image src={marronBorde} width={300} className="flex relative bottom-2/3 left-0" />
        <Image src={miceMarron} width={200} className="flex absolute top-2 left-0" />
      </div>
      <div className="hidden lg:flex absolute right-0 top-full z-[-10]">
      <Image src={azulBorde2} width={230} className="flex absolute  top-72 right-4"/>
      <Image src={miceAzul2} width={250} className="flex relative top-72 z-[-10] right-0"/>
      </div>
      <Link href="/nosotras/masInfo" className='w-1/2 text-center flex justify-center mx-auto uppercase m-10 py-4 bg-orange-600 rounded-xl text-white hover:bg-orange-700'>Más sobre nosotras</Link>
    </main>

  )
}

export default page
