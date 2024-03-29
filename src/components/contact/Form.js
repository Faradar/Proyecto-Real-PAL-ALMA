"use client"
import { useState } from "react";
import axios from "axios";
import React, { useRef } from 'react';
import emailjs, { sendForm } from '@emailjs/browser';

import dynamic from 'next/dynamic'

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fv0sniu', 'template_utt96ez', form.current, 'MdkX9ebGX0Da-jMTC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

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
  // const EmailValidation = (email) => {
  //   return String(email)
  //     .toLowerCase()
  //     .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  // };

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
    // } else {
    //   if (!EmailValidation(email)) {
    //     setErrEmail(true);
    //   }
    }
    if (!phone) {
      setErrPhone(true);
    }
    if (!messages) {
      setErrMessage(true);
    }
    if (clientName && email && messages) {
      axios.post("https://getform.io/f/eb362684-70c2-4f34-b6db-e4f597d27256", {
        Nombre: clientName,
        Apellido: clientLastname,
        Email: email,
        Numero: phone,
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
    <section className="w-10/12 md:w-3/5 mx-auto lg:mt-32">
      {successMsg ? (
        <p className="text-center text-xl font-bold p-20">
          {successMsg}
        </p>
      ) : (
        <form
          id="form"
          ref={form}
          onSubmit={sendEmail}
          method="POST"
          className="p-6 grid grid-col gap-6 lg:grid-cols-2"
        >
          <div className="w-full flex flex-col gap-4 justify-between">
            <div>
              <label htmlFor="clientName" className="ml-2 text-lg font-bold">Nombre</label>
              <input
                required
                onChange={handleName}
                value={clientName}
                name="user_name"
                className={`${errClientName
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-300/30 "
                  } w-full bg-slate-100/90 border-2 rounded-lg px-4 py-2 text-base text-gray-600 outline-none duration-400`}
                type="text"
                
              />
            </div>
            <div>
              <label htmlFor="clientLastname" className="ml-2 text-lg font-bold">Apellido</label>
              <input
                required
                onChange={handleLastname}
                value={clientLastname}
                name="user_lastName"
                className={`${errClientLastname
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-300/30 "
                  } w-full bg-slate-100/90 border-2 rounded-lg px-4 py-2 text-base text-gray-600 outline-none duration-300`}
                type="text"
                
              />
            </div>
            <div>
              <label htmlFor="email" className="ml-2 text-lg font-bold">Mail</label>
              <input
                required
                onChange={handleEmail}
                value={email}
                name="user_email"
                className={`${errEmail
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-300/30 "
                  } w-full bg-slate-100/90 border-2 rounded-lg px-4 py-2 text-base text-gray-600 outline-none duration-300`}
                type="text"
                
              />
            </div>
            <div>
              <label htmlFor="phone" className="ml-2 text-lg font-bold">Teléfono</label>
              <input
                required
                onChange={handlePhone}
                value={phone}
                name="user_phone"
                className={`${errPhone
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-300/30 "
                  } w-full bg-slate-100/90 border-2 rounded-lg px-4 py-2 text-base text-gray-600 outline-none duration-300`}
                type="text"
                
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="messages" className="text-lg font-bold ml-2">Dejanos tu consulta</label>
            <textarea
              required
              onChange={handleMessages}
              value={messages}
              name="message"
              className={`${errMessages
                ? "border-red-600 focus-visible:border-red-600"
                : "border-zinc-300/30 "
                } w-full bg-slate-100/90 border-2 rounded-2xl px-4 py-2 text-base text-gray-600 outline-none duration-300 resize-none`}
              rows="8"
            ></textarea>
            <div className="flex flex-col mt-6 md:flex-row justify-center text-center align-middle">
              <button className="border-2 rounded-2xl border-orange-500 bg-orange-500 flex justify-center text-center mt-2 md:mt-0 md:w-full text-xl md:text-2xl lg:text-3xl py-2 md:py-6 transition duration-150 hover:bg-orange-600 hover:ease-linear text-white" onClick={handleSend} value={sendForm}>ENVIAR MENSAJE</button>
            </div>
          </div>
        </form>
      )}
    </section>
  )
}

export default dynamic(() => Promise.resolve(Form), { ssr: false })