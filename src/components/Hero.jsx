import {motion} from "framer-motion"
import React, {useEffect, useState} from 'react'
import {styles} from '../styles'

import { useInView } from "react-intersection-observer";
import MyLight1 from '../assets/finalComp/1LightBg-min.webp'
import MyDark1 from '../assets/finalComp/1DarkBg-min.png'

import MyLight2 from '../assets/finalComp/2LightBg-min.webp'
import MyDark2 from '../assets/finalComp/2DarkBg-min.webp'


const Hero = () => {
  const [imageSrc, setImageSrc] = useState( MyLight1);

  // DarkMode Toggle img
  useEffect(() => {
    const observer = new MutationObserver(mutationsList => {
      mutationsList.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const classAttributeValue = mutation.target.getAttribute('class');
          const isDarkMode = classAttributeValue && classAttributeValue.includes('dark');
          
          if (isDarkMode) {
            setImageSrc(MyDark2);
          } else {
            setImageSrc(MyLight2);
          }
        }
      });
    });

    const htmlElement = document.documentElement;
    observer.observe(htmlElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, [ ]);

 

  return (
    <section className="relative w-full h-screen mx-auto flex flex-col sm:flex-row">
      <div
        className={`relative ${styles.paddingX} sm:absolute inset-0 top-[80px] max-w-7xl mx-auto flex flex-col sm:flex-row items-start gap-5`}
      >
        <div
          className="w-10 h-10 rounded-full dark:border-2 dark:border-[#915eff] light: border-2 border-coral "
          style={{ position: "absolute", zIndex: 1 }}
        />
        <div className="sm:w-1/2 flex justify-center items-center mt-5 order-2 sm:order-1">
          {" "}
          {/* Change the order for different screen sizes */}
          <div>
            <img
              src={imageSrc}
              alt="Daniil Speranskii the Web Developer"
              className="rounded-lg w-full sm:h-auto md:h-auto lg:w-[450px] mb-8 "
              loading="eager"
            />
          </div>
        </div>
        <div className="sm:w-1/2 flex-1 order-1 sm:order-2">
          {" "}
          {/* Change the order for different screen sizes */}
          <div className="flex flex-col justify-center items-center mt-5"></div>
          {/* My Intro name */}
          <h1
            className={`${styles.heroHeadText} dark:text-white light: text-midnight-100`}
          >
            Hi, I'm{" "}
            <span className="dark:text-[#915eff] light: text-coral">
              Daniil
            </span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 dark:text-white-100 light: text-black`}
          >
            A passionate and dedicated{" "}
            <span className="dark:text-[#915eff] light: text-coral font-bold">
              Full Stack Developer{" "}
            </span>
            <br className="hidden sm:block" />
            with a flair for creating intuitive, high-quality websites that
            seamlessly turn ideas into digital realities.
          </p>
          <button className="dark:text-white light: text-midnight-100 border-2 light: border-coral dark:border-[#915eff] px-6 py-2 rounded-full mt-4 light: hover:bg-coral light: hover:text-white hover:dark:bg-[#915eff] hover:dark:text-midnight-100">
            <a
              href="https://drive.google.com/file/d/1RU6IwXWfCNRzqfHJIgv5wa2SivAnDuUF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                {/* dash line */}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero