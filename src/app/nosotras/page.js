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
          <p className='w-10/12 my-6 mx-auto'>PA'L ALMA es una marca que nació del sueño de dos mamás profesionales tratando de conjugar la vida familiar con su trabajo, su pasión por las <b>ARTES PLÁSTICAS, el DIBUJO, la NATURALEZA, las EXPERIENCIAS al AIRE LIBRE y VIAJAR</b>.</p>
          <p className='w-10/12 my-6 mx-auto'>Somos Patricia y María, nos conocimos en el colegio de nuestros hijos y compartiendo encuentros se fue consolidando una amistad y proyectos en común. Decidimos emprender juntas desde el 2021, para dar forma a este proyecto conjugando nuestra formación en Artes Plásticas, Diseño Industrial y Arquitectura.</p>
          <p className='w-10/12 my-6 mx-auto'>Ambas con una mirada sensible ante el bienestar personal, la búsqueda y expresión de las emociones a través del ARTE y el cuidado del medio ambiente.</p>
          <p className='w-10/12 my-6 mx-auto'>El nombre PA'L ALMA surgió de la búsqueda por encontrar una expresión autóctona que pudiera reflejar nuestro sentir con este proyecto y además tuviera las iniciales de nuestros nombres, Patricia y María.</p>
          <p className='w-10/12 my-6 mx-auto'>Nuestra idea original era poder mostrar a través de nuestros dibujos, hechos a mano alzada, la flora y fauna de cada región de Argentina. Poder transmitir con nuestra riqueza natural, conocimientos y curiosidades sobre cada especie y además fomentar el cuidado de la naturaleza y biodiversidad.</p>
          <p className='w-10/12 my-6 mx-auto'>Nos dimos cuenta que con esta idea podríamos generar productos que evocaran un recuerdo o un momento especial vivido durante un viaje por Argentina. Que fueran prácticos y funcionales a la vez pero con impronta de diseño y estilo autóctono. Tenemos como objetivo incorporar el concepto de la economía circular reciclando materiales principalmente del área textil.</p>
          <p className='w-10/12 my-6 mx-auto'>Sabemos que desde el arte se puede lograr un bienestar y fomentar la expresión y la creatividad. Esta es la razón por la que decidimos llegar a niños y adultos a través de talleres de arte. Siguiendo con el concepto del reciclado y promoviendo las actividades artísticas con materiales cotidianos.</p>
          <p className='w-10/12 my-6 mx-auto'>En este camino por llevar a cabo nuestro sueño, vamos dando pasos y aprendiendo en el proceso.</p>
          <p className='w-10/12 my-6 mx-auto'>Esperamos ver crecer a PA'L ALMA como nuestro hijo de corazón, fuerte, emprendiendo un vuelo alto y dejando su huella.</p>
        <p className='w-10/12 mx-auto'>El nombre <span className='font-bold'>PA'L ALMA</span> surgió de la búsqueda por encontrar una expresión autóctona que pudiera reflejar nuestro sentir con este proyecto y además tuviera las iniciales de nuestros nombres, Patricia y María.</p>
        </div>
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
