import React, { useState } from "react";
import axios from 'axios'

const Contact = () => {

  const [name, setName] = useState('')
  const [gmail, setGmail] = useState('')
  const [message, setMessage] = useState('')
  const [responseMessage, setResponseMessage] = useState('')

  const submitHandler = async (elem) =>{
    elem.preventDefault();

    try{
      const response = await axios.post('http://localhost:5000/api/contact', {
        name,
        email: gmail,
        message,
      });

      setResponseMessage(response.data.message);

    // Clear the inputs to confirm send!
    setName('')
    setGmail('')
    setMessage('')
  } catch (error) {
    setResponseMessage('Error sending message. Please try again.')
  }
};

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="h-full w-full flex flex-col justify-center items-center gap-5 md:gap-10 text-black md:p-20 md:rounded-xl mb-24" onSubmit={submitHandler}>
        <input onChange={(e) => setName(e.target.value)} className="border-2 border-zinc-500 px-10 py-3 rounded-sm md:px-5 md:py-3" type="text" placeholder="Your Name" required value={name} />
        <input onChange={(e) => setGmail(e.target.value)} className="border-2 border-zinc-500 px-10 py-3 rounded-sm md:px-5 md:py-3" type="email" placeholder="Your Gmail" required  value={gmail} />
        <input onChange={(e) => setMessage(e.target.value)} className="border-2 border-zinc-500 px-10 py-3 rounded-sm md:p-10" type="textarea" placeholder="Your Message" required value={message} />
        <button className=" mt-5 px-10 py-3 bg-emerald-400 rounded md:p-5" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
