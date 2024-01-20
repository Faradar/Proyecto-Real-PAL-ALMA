import React from 'react'
import Image from 'next/image'

function HomeCard({ src, title}) {
  return (
    <article className='w-[300px] h-[320px] md:w-[290px] md:h-[310px] lg:w-[290px] lg:h-[340px] xl:w-[350px] xl:h-[390px] bg-slate-300/60 m-2 mt-5 mx-auto rounded-xl flex flex-col justify-start text-center overflow-hidden hover:bg-transparent ease-out duration-500'>
      <Image src={src} alt={title} width={400} height={250} className='rounded-lg self-center mt-3 md:mt-4 hover:scale-150 overflow-hidden ease-in-out duration-700'/>
      <h3 className='uppercase mt-4'>{title}</h3>
    </article>
  )
}

export default HomeCard