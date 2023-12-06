import Image from 'next/image'
import logo from "../../public/img/palAlmaLogo.png"

function Banner() {
  return (
    <div className='flex justify-center bg-slate-950/10'>
      <Image src={logo} width={900} loading='lazy'/> 
    </div>
  )
}

export default Banner