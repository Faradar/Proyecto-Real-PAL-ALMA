import Banner from './Banner';
import Form from './Form'

function page() {

  return (
    <main className="w-full">
      <Banner/>
      <p className='flex justify-center text-lg lg:text-2xl my-4'>Pa´l alma tiene su casa en Córdoba Capital, Argentina</p>
      <section className='w-10/12 lg:w-9/12 flex flex-col md:flex-row mx-auto my-10'>
        <iframe className='hidden md:flex lg:w-1/2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435912.82546369446!2d-64.52316931405804!3d-31.39844705868742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2zQ8OzcmRvYmE!5e0!3m2!1ses-419!2sar!4v1701523180236!5m2!1ses-419!2sar" width="500" height="350" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className='mx-auto md:pl-4 my-4 lg:my-0 lg:mr-4 flex flex-col text-center'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-4 tracking-widest'>contactanos</h2>
          <ul className='text-lg'>
            <li className='pt-6 pb-2'>WhatsApp: 112233997766</li>
            <li className='py-2'>Facebook: <a href="" target='blank'>pa'l alma dibujos</a></li>
            <li className='py-2'>Instagram: <a href="" target='blank'>pa.l.alma.dibujos</a></li>
            <li className='py-2'>Email: <a href="" target='blank'>pal.l.alma.dibujos@gmail.com</a></li>
            <li className='py-2'>Ubicación: Córdoba Capital</li>
          </ul>
        </div>
      </section>
      <section className='flex flex-col text-center'>
        <h2 className='font-bold text-lg'>¡Conecta con la escencia de la naturaleza a través de nuestros talleres y productos artesanales!</h2>
        <p>Para ofrecerte la asistencia adecuada, te pedimos que completes todos los campos del formulario de contacto. Esto nos ayudará a ofrecerte una mejor atención y responder a tus consultas o comentarios de una manera oportuna.</p>
        <p>¡Gracias por conectarte con nosotros!</p>
      </section>
      <Form />
    </main>
  );
}

export default page