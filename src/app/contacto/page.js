import Banner from "@/components/contact/Banner";
import Form from "../../components/contact/Form";
import miceVerde from "../../../public/contacto/micelaniaVerde.svg";
import miceAzul from "../../../public/contacto/micelaniaAzul.svg";
import azulBorde from "../../../public/contacto/azulBorde.svg";
import verdeBorde from "../../../public/contacto/verdeBorde.svg";
import Image from "next/image";

function page() {
  return (
    <main className="w-full">
      <Banner />
      <p className="flex justify-center text-lg lg:text-2xl my-4">
        Pa'l alma tiene su casa en Córdoba Capital, Argentina
      </p>
      <div className="w-full hidden lg:flex absolute">
        <Image
          src={verdeBorde}
          width={300}
          className="flex absolute top-20 right-0"
        />
        <Image
          src={miceVerde}
          width={230}
          className="flex absolute top-48 right-0"
        />
      </div>
      <section className="w-10/12 lg:w-9/12 flex flex-col md:flex-row mx-auto my-10">
        <iframe
          className="hidden md:flex lg:w-1/2"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.6084521077305!2d-64.25286542405686!3d-31.397358174270547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329f4f9b39a933%3A0xdca784a664308b33!2sAv.%20Duarte%20Quir%C3%B3s%205223%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1702330800472!5m2!1ses-419!2sar"
          width={500}
          height={350}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="mx-auto md:pl-4 my-4 lg:my-0 lg:mr-4 flex flex-col text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-4 tracking-widest">
            contactanos
          </h2>
          <ul className="text-lg">
            <li className="pt-6 pb-2">WhatsApp: 112233997766</li>
            <li className="py-2">
              Facebook:{" "}
              <a href="" target="blank">
                pa'l alma dibujos
              </a>
            </li>
            <li className="py-2">
              Instagram:{" "}
              <a href="" target="blank">
                pa.l.alma.dibujos
              </a>
            </li>
            <li className="py-2">
              Email:{" "}
              <a href="" target="blank">
                pal.l.alma.dibujos@gmail.com
              </a>
            </li>
            <li className="py-2">Ubicación: Córdoba Capital</li>
          </ul>
        </div>
      </section>
      <section className="w-9/12 mx-auto flex flex-col text-center">
        <h2 className="font-bold text-lg">
          ¡Conecta con la escencia de la naturaleza a través de nuestros
          talleres y productos artesanales!
        </h2>
        <p>
          Para ofrecerte la asistencia adecuada, te pedimos que completes todos
          los campos del formulario de contacto. Esto nos ayudará a ofrecerte
          una mejor atención y responder a tus consultas o comentarios de una
          manera oportuna.
        </p>
        <p>¡Gracias por conectarte con nosotros!</p>
      </section>
      <div className="hidden lg:flex absolute">
        <Image src={azulBorde} width={340} className="flex  relative left-0" />
        <Image
          src={miceAzul}
          width={150}
          className="flex absolute top-28 left-0"
        />
      </div>
      <Form />
    </main>
  );
}

export default page;
