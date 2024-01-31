import Form from "../../components/contact/Form";
import miceVerde from "../../../public/contacto/micelaniaVerde.svg";
import miceAzul from "../../../public/contacto/micelaniaAzul.svg";
import azulBorde from "../../../public/contacto/azulBorde.svg";
import verdeBorde from "../../../public/contacto/verdeBorde.svg";
import miceNaranja from "../../../public/contacto/miceNaranja.svg";
import naranjaBorde from "../../../public/contacto/naranjaBorde2.svg";
import logo from "../../../public/contacto/logo.svg";
import miceBordo from "../../../public/contacto/miceBordo.svg";
import miceNaranja3 from "../../../public/contacto/miceNaranja3.svg";
import bordoBorde from "../../../public/contacto/bordoBorde.svg";
import naranjaBorde3 from "../../../public/contacto/bordeNaranja3.svg";

import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <main className="w-full overflow-hidden">
      <section className="hidden md:grid md:grid-cols-3 justify-center my-10 bg-slate-300/30 md:shadow-[0_6px_6px_-1px_rgba(0,0,0,0.3)]">
        <div className="hidden md:flex">
          <Image src={miceNaranja3} width={250} alt="micelania naranja" />
          <div className="flex absolute top-40">
            <Image
              src={naranjaBorde3}
              width={250}
              alt="borde de micelania naranja"
            />
          </div>
        </div>
        <div className="flex">
          <Image
            src={logo}
            width={900}
            className="mx-auto"
            alt="logo pa'l alma"
          />
        </div>
        <div className="hidden md:flex justify-end">
          <Image src={miceBordo} width={210} alt="micelania bordo" />
          <div className="flex absolute right-0">
            <Image
              src={bordoBorde}
              width={220}
              alt="borde de micelania bordo"
            />
          </div>
        </div>
      </section>
      <p className="flex justify-center text-base md:text-xl lg:text-2xl m-6 font-bold">
        Pa'l alma tiene su casa en Córdoba Capital, Argentina
      </p>
      <div className="w-full hidden xl:flex absolute -z-10">
        <Image
          src={verdeBorde}
          width={300}
          className="flex absolute top-72 right-0"
          alt="borde de micelania verde"
        />
        <Image
          src={miceVerde}
          width={230}
          className="flex absolute top-96 right-0"
          alt="micelania verde"
        />
      </div>
      <div className="w-full md:hidden absolute -z-10">
        <Image
          src={miceVerde}
          width={100}
          className="flex absolute top-48 right-0"
          alt="micelania verde mobile"
        />
        <Image
          src={verdeBorde}
          width={130}
          className="flex absolute top-36 right-0"
          alt=" borde de micelania verde mobile"
        />
      </div>
      <section className="w-10/12 lg:w-11/12 flex flex-col md:flex-row mx-auto lg:ml-60 lg:mr-auto my-10">
        <iframe
          className="hidden lg:flex lg:w-1/2"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.6084521077305!2d-64.25286542405686!3d-31.397358174270547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329f4f9b39a933%3A0xdca784a664308b33!2sAv.%20Duarte%20Quir%C3%B3s%205223%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1702330800472!5m2!1ses-419!2sar"
          width={500}
          height={500}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="w-2/3 pl-0 ml-0 mx-auto md:pl-4 my-4 lg:my-0 lg:ml-6 xl:mr-4 flex flex-col text-left">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-2 tracking-widest">
            contacto :
          </h2>
          <ul className="text-lg">
            <li className="pt-4">
              WhatsApp: <br />{" "}
              <a
                className=" hover:text-slate-400"
                href="https://wa.me/+5493513955439?text=Buenas!+Me+contacto+desde+la+página+web"
                target="blank"
              >
                +5493513955439 (Pato)
              </a>{" "}
              |{" "}
              <a
                className=" hover:text-slate-400"
                href="https://wa.me/+5493513870553?text=Buenas!+Me+contacto+desde+la+página+web"
                target="blank"
              >
                {" "}
                +5493513870553 (María)
              </a>
            </li>
            <li className=" hover:text-slate-400">
              Facebook:{" "}
              <a
                href="https://www.facebook.com/profile.php?id=100085206638363"
                target="blank"
              >
                pa'l alma dibujos
              </a>
            </li>
            <li className=" hover:text-slate-400">
              Instagram:{" "}
              <a
                href="https://www.instagram.com/palalma.dibujos?igsh=c2xiyjlmagh4nwdv"
                target="blank"
              >
                palalma.dibujos
              </a>
            </li>
            <li className=" hover:text-slate-400">
              Email:{" "}
              <a href="mailto:palalma.argentina@gmail.com" target="blank">
                palalma.argentina@gmail.com
              </a>
            </li>
          </ul>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase mt-6 lg:mt-10 mb-2 lg:mb-6 tracking-widest">
            taller pa'l alma
          </h3>
          <ul>
            <li className=" lg:w-3/4 lg:text-lg">
              Dirección: Duarte Quirós 5223 - B° Lomas del Suquia - Casa interna
              226
            </li>
            <li className=" lg:text-lg">
              Localidad: Cordoba capital - CP 5003
            </li>
            <li className="lg:w-3/4 lg:text-lg">HORARIO DE CONSULTA:</li>
            <li className="lg:w-3/4 lg:text-lg">9 a 12:30 hs</li>
            <li className="relative left-40 bottom-14">
              <Link
                href="https://www.google.com/maps/place/Duarte+Quir%C3%B3s+5223,+C%C3%B3rdoba/@-31.3975708,-64.2500876,18.45z/data=!4m5!3m4!1s0x94329f31a7ca4715:0x291541482743d8d3!8m2!3d-31.397304!4d-64.2502643?entry=ttu"
                target="blank"
                className="flex lg:hidden bg-orange-500 w-36 mx-auto p-2 mt-3 rounded-lg text-white justify-center text-xl font-bold transition duration-150 hover:bg-orange-600 hover:ease-linear">
                Ver Mapa
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className=" w-5/6 xl:w-3/5 mx-auto lg:mt-40 flex flex-col text-center">
        <h2 className="font-bold text-base md:text-xl mb-8">
          ¡Conecta con la escencia de la naturaleza a través de nuestros
          talleres y productos artesanales!
        </h2>
        <p className="hidden w-4/6 mx-auto md:flex">
          Para ofrecerte la asistencia adecuada, te pedimos que completes todos
          los campos del formulario de contacto. Esto nos ayudará a ofrecerte
          una mejor atención y responder a tus consultas o comentarios de una
          manera oportuna.
        </p>
        <p className="hidden md:flex mx-auto">
          ¡Gracias por conectarte con nosotros!
        </p>
      </section>
      <div className="hidden lg:flex absolute">
        <Image
          src={azulBorde}
          width={340}
          className="flex  relative left-0"
          alt="borde de micelania azul"
        />
        <Image
          src={miceAzul}
          width={150}
          className="flex absolute top-28 left-0"
          alt="micelania azul"
        />
      </div>
      <div className="md:hidden absolute z-[-10]">
        <Image
          src={miceNaranja}
          width={160}
          className="flex top-3 relative left-0"
          alt="micelania naranja"
        />
        <Image
          src={naranjaBorde}
          width={140}
          className="flex absolute top-[-13px] left-1"
          alt=" borde de micelania azul"
        />
      </div>
      <Form />
    </main>
  );
}

export default page;
