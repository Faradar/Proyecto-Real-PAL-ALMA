import React from 'react'
import Image from 'next/image'
import logo from '../../../public/contacto/logo.svg'
import miceAmarilla from '../../../public/contacto/micelaniaAmarilla.svg'
import miceNaranja from '../../../public/contacto/micelaniaNaranja.svg'
import amarillaBorde from '../../../public/contacto/amarillaBorde.svg'
import naranjaBorde from '../../../public/contacto/naranjaBorde.svg'

function Banner() {
  return (
    <section className='hidden md:grid md:grid-cols-3 justify-center my-10 bg-slate-950/10'>
      <div className='hidden md:flex'>
        <Image src={amarillaBorde} width={210} />
        <div className='flex absolute top-48'>
          <Image src={miceAmarilla} width={180} />
        </div>
      </div>
      <div className='flex'>
        <Image src={logo} width={900} className='mx-auto' />
      </div>
      <div className='hidden md:flex justify-end'>
        <Image src={naranjaBorde} width={227} />
        <div className='flex absolute right-0'>
          <Image src={miceNaranja} width={220} />
        </div>
      </div>
    </section>
  )
}

export default Banner