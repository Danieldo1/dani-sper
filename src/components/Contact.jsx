import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const handleChange = (e) => {
    const { name,value } = e.target;

    setForm({...form,[name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    emailjs
      .send(
        "service_sde995g",
        "template_1y5lt3p",
        {
          from_name: form.name,
          to_name: "Daniil",
          from_email: form.email,
          to_email: "daniel.speranskiy@gmail.com",
          message: form.message,
        },
        "7yFNjLLKOxxB4Osr4"
      )
      .then(() => {
        setSent(false)
        alert("Thank you, I will get back to you as soon as possible!");
        setForm({
          name: "",
          email: "",
          message: "",
        })
      }, (error) => {
        setSent(false)
        console.log(error)
        alert('Something went wrong, please try again later!')
      })
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col mt-12 gap-8"
        > 
        {/* NAME CONTACT */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
              <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />         
          </label>
            {/* EMAIL INPUT */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
              <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />         
          </label>
            {/* MESSAGE TEXTAREA */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
              <textarea 
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />         
          </label>

          <button
          type="submit"
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
          {sent ? "Thank you !" : "Send"}
          </button>

        </form>
      </motion.div>


    </div>
  );
};

export default SectionWrapper(Contact, "contact");
