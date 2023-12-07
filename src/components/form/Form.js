"use client"
import { useState } from "react";
import axios from "axios";
import { FiSend } from "react-icons/fi";
import ReCAPTCHA from "react-google-recaptcha";
// 6LdFziQpAAAAAGhXSwnACFKslGmlJSRwanLe9VqB

import dynamic from 'next/dynamic'

function Form() {

  const [clientName, setClientName] = useState("");
  const [clientLastname, setClientLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [messages, setMessages] = useState("");
  const [errClientName, setErrClientName] = useState(false);
  const [errClientLastname, setErrClientLastname] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPhone, setErrPhone] = useState(false);
  const [errMessages, setErrMessage] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  const [capVal, setCapVal] = useState(null)

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };
  const handleLastname = (e) => {
    setClientLastname(e.target.value);
    setErrClientLastname(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone(false);
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessage(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName(true);
    }
    if (!clientLastname) {
      setErrClientLastname(true);
    }
    if (!email) {
      setErrEmail(true);
    } else {
      if (!EmailValidation(email)) {
        setErrEmail(true);
      }
    }
    if (!phone) {
      setErrPhone(true);
    }
    if (!messages) {
      setErrMessage(true);
    }
    if (clientName && email && EmailValidation(email) && messages) {
      axios.post("https://getform.io/f/58ffa1a4-f93e-4bc9-ac6c-21e70903a041", {
        name: clientName,
        email: email,
        message: messages,
      });
      setSuccessMsg(
        ("Hola ") + `${clientName}` + (", gracias por tu consulta. Te responderemos a la brevedad")
      );
      setClientName("");
      setClientLastname("");
      setEmail("");
      setPhone("");
      setMessages("");
    }
  };

  return (
    <section className="w-10/12 mx-auto mt-10">
      {successMsg ? (
        <p className="text-center text-base font-titleFont p-20 text-designColor">
          {successMsg}
        </p>
      ) : (
        <form
          id="form"
          action="https://getform.io/f/58ffa1a4-f93e-4bc9-ac6c-21e70903a041"
          method="POST"
          className="p-6 grid grid-col gap-6 lg:grid-cols-2"
        >
          <div className="w-full flex flex-col gap-4 justify-between">
            <div>
              <label htmlFor="clientName" className="ml-2 text-lg">Nombre</label>
              <input
                required
                onChange={handleName}
                value={clientName}
                className={`${errClientName
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 "
                  } w-full bg-transparent border-2 rounded-lg px-4 py-2 text-base text-gray-600 outline-none duration-300`}
                type="text"
                placeholder={"Nombre"}
              />
            </div>
            <div>
              <label htmlFor="clientLastname" className="ml-2 text-lg">Apellido</label>
              <input
                required
                onChange={handleLastname}
                value={clientLastname}
                className={`${errClientLastname
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 "
                  } w-full bg-transparent border-2 rounded-lg px-4 py-2 text-base text-gray-600 outline-none duration-300`}
                type="text"
                placeholder={"Apellido"}
              />
            </div>
            <div>
              <label htmlFor="email" className="ml-2 text-lg">Mail</label>
              <input
                required
                onChange={handleEmail}
                value={email}
                className={`${errEmail
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 "
                  } w-full bg-transparent border-2 rounded-lg px-4 py-2 text-base text-gray-600 outline-none duration-300`}
                type="email"
                placeholder={"Mail"}
              />
            </div>
            <div>
              <label htmlFor="phone" className="ml-2 text-lg">Teléfono</label>
              <input
                required
                onChange={handlePhone}
                value={phone}
                className={`${errPhone
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 "
                  } w-full bg-transparent border-2 rounded-lg px-4 py-2 text-base text-gray-600 outline-none duration-300`}
                type="text"
                placeholder={"Teléfono"}
              />
            </div>
          </div>
          <div className="md:mt-6">
            <textarea
              required
              onChange={handleMessages}
              value={messages}
              className={`${errMessages
                ? "border-red-600 focus-visible:border-red-600"
                : "border-zinc-600 "
                } w-full bg-transparent border-2 rounded-2xl px-4 py-2 text-base text-gray-600 outline-none duration-300 resize-none`}
              placeholder={"Dejá acá tu consulta"}
              rows="8"
            ></textarea>
            <div className="flex flex-col mt-6 md:flex-row justify-center text-center align-middle">
              <ReCAPTCHA sitekey="6LdFziQpAAAAAGhXSwnACFKslGmlJSRwanLe9VqB" onChange={val => setCapVal(val)} className="justify-center" />
              <button className="border-2 rounded-2xl border-orange-500 bg-orange-500 flex justify-center text-center mt-2 md:mt-0 md:ml-4 md:w-full text-xl md:text-2xl lg:text-3xl py-2 md:py-6 transition duration-150 hover:bg-orange-600 hover:ease-linear" disabled={!capVal} onClick={handleSend}>Enviar <span><FiSend /></span> </button>
            </div>
          </div>
        </form>
      )}
    </section>
  )
}

export default dynamic(() => Promise.resolve(Form), { ssr: false })