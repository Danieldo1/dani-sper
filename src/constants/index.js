import {
    mobile,
    backend,
    creator,
    web,

    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,

    HPS,
    uibs,
    goldr,
    codec,

    ColmarAcd,
    Expenses,
    UsersSteps,
    expresso,
    dayPlanner,
    pixelArt,
    memegenerator,
    flashcards,
    inspohompage,
    webpackrockpasci,
   
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  // About Cards
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  // const technologies = [
  //   {
  //     name: "HTML 5",
  //     icon: html,
  //   },
  //   {
  //     name: "CSS 3",
  //     icon: css,
  //   },
  //   {
  //     name: "JavaScript",
  //     icon: javascript,
  //   },
  //   {
  //     name: "TypeScript",
  //     icon: typescript,
  //   },
  //   {
  //     name: "React JS",
  //     icon: reactjs,
  //   },
  //   {
  //     name: "Redux Toolkit",
  //     icon: redux,
  //   },
  //   {
  //     name: "Tailwind CSS",
  //     icon: tailwind,
  //   },
  //   {
  //     name: "Node JS",
  //     icon: nodejs,
  //   },
  //   {
  //     name: "MongoDB",
  //     icon: mongodb,
  //   },
  //   {
  //     name: "Three JS",
  //     icon: threejs,
  //   },
  //   {
  //     name: "git",
  //     icon: git,
  //   },
  //   {
  //     name: "figma",
  //     icon: figma,
  //   },
  //   {
  //     name: "docker",
  //     icon: docker,
  //   },
  // ];
  // Timeline Cards
  const experiences = [
    {
      title: "High School",
      company_name: "Heritage Private School",
      location: 'Limassol, Cyprus',
      icon: HPS,
      iconBg: "#E6DEDD",
      date: "Jan 2009 - Jun 2017",
      points: [
        { title: "Received a High-Quality Education", content: "At my school, I experienced a top-notch education, benefiting from rigorous academic programs, experienced teachers, and excellent educational resources." },
        { title: "Built a Valuable Network and Connections", content: " Attending a private school provided me with the opportunity to build a valuable network of peers, teachers, and alumni, which has been instrumental in my academic and professional journey." },
],
    },
    {
      title: "University",
      company_name: "United International Business School",
      location: 'Brussels, Belgium',
      icon: uibs,
      iconBg: "#383E56",
      date: "Sep 2017 - Aug 2020",
      points: [
        { title: "Received Personalized Attention", content: "With smaller class sizes, I enjoyed the benefit of personalized attention and support from my teachers." },
        { title: "International Exposure", content: "Attending a business school in Brussels has exposed me to an international hub. It's a city known as 'the capital of Europe', offering unparalleled opportunities to network and engage with international organizations and multinational corporations." },
        { title: "Top-Quality Education", content: "The business schools in Brussels offer excellent business education. I've had the privilege to learn from experienced faculty and engage with a curriculum that emphasizes international business and management." },
      ],
    },
    {
      title: "Executive Assistant of CEO",
      company_name: "Goldrock International Investment",
      icon: goldr,
      location: 'Limassol, Cyprus',
      iconBg: "#383E56",
      date: "Feb 2021 - Mar 2022",
      points: [
        { title: "Efficient Time Management", content: "My proficiency in organizing schedules has allowed me to efficiently manage time, ensuring that tasks and demands are executed in a timely manner. I take pride in my ability to prioritize responsibilities and give due importance to critical duties, which enhances productivity." },
        { title: "Reliable Task Execution", content: "I take pride in consistently delivering results in a timely fashion. My dedication to task management means that projects and assignments are completed efficiently, meeting or exceeding expectations." },

        
      ],
    },
    {
      title: "Career Transition",
      company_name: "",
      location: 'Tbilisi, Georgia',
      icon: codec,
      iconBg: "#E6DEDD",
      date: "Jun 2022 - Present",
      points: [
        { title: "Continuous Learning", content: "Actively engaging in web development involves a commitment to continuous learning. I'm dedicated to staying updated with the latest technologies, frameworks, and best practices in the field." },
        { title: "Practical Application", content: "I put my web development knowledge into practice by working on real projects, whether personal or professional, to reinforce my skills and gain practical experience." },
        { title: "Exploration of Frameworks", content: "I explore a variety of web development frameworks and libraries, such as React, Angular, Vue, jQuery to broaden my skill set and adapt to different project requirements." },
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Colmar Academy",
      description:
        "This webpage seamlessly adapts to both mobile and desktop layouts through responsive styling techniques, all guided by a single provided design sheet. You can witness this adaptability by simply resizing your browser window, showcasing the design's flexibility and attention to user experience across devices.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
      ],
      image: ColmarAcd,
      source_code_link: "https://github.com/Danieldo1/Colmar_acd",
      project_link: "https://danieldo1.github.io/Colmar_acd/",
    },
    {
      name: "Expenses Counter",
      description:
        "This app offers users the ability to track their expenses and presents the data in visually appealing charts that illustrate monthly spending patterns. The application leverages the power of React.js to create a dynamic and seamless experience.",
      tags: [
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: Expenses ,
      source_code_link: "https://github.com/Danieldo1/Expenses",
      project_link: "https://danieldo1.github.io/Expenses/",
    },
    {
      name: "Millie's Muffins",
      description:
        "Deepening my knowledge of the user's steps in the checkout process of a retail website involves gaining a comprehensive understanding of each stage a customer goes through when making a purchase. This includes steps such as adding items to the cart, reviewing the cart, entering shipping and payment information, confirming the order, and receiving an order confirmation.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },

      ],
      image: UsersSteps,
      // source_code_link: "https://github.com/",
      project_link: "https://www.figma.com/proto/wijso6VDNe1B01SRcIcSSn/%5BTemplate%5D-User-Flow%3A-Millie's-Muffins-(Copy)?page-id=11%3A33768&node-id=11-34056&starting-point-node-id=11%3A34056&t=usNqBkjpqsrPwXJp-1",
    },
    {
      name: "Expresso API",
      description: "This project involves building a powerful and user-friendly internal tool for a coffee shop, streamlining operations and improving management across different aspects of the business.This tool enables users to manage menus, menu items, employees, and employee timesheets.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "Express.js",
          color: "green-text-gradient",
        },
        {
          name: "REST API",
          color: "pink-text-gradient",
        }
      ],
      image: expresso,
      source_code_link: "https://github.com/Danieldo1/expresso",
      project_link: "https://danieldo1.github.io/expresso/#/",
    },

    {
      name: "Appointment Planner",
      description: "The Appointment Planner project utilizes functional React components and React hooks to create an efficient application that manages both contacts and appointments. With separate pages for adding and viewing contacts and appointments, this project offers a practical and organized solution for scheduling and staying connected.",
      tags: [
        {
          name: "React",
          color: "pink-text-gradient ",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "React Routers ",
          color: "blue-text-gradient",

        }
      ],
      image: dayPlanner,
      source_code_link: "https://github.com/Danieldo1/DatePlannerReact",
      project_link: "https://date-planer.onrender.com/contacts",
    },

    {
      name: "Pixel Art",
      description: "Explore the realm of pixel art, where creativity meets precision. My Pixel Art is a vibrant platform that celebrates the beauty of pixelated graphics and provides a welcoming community for pixel artists to showcase their talent.",
      tags: [
        {
          name: "HTML",
          color: "pink-text-gradient ",

        }, 
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
         {
          name: "JavaScript",
          color: "green-text-gradient",
        }
      ],
      image: pixelArt,
      source_code_link: "https://github.com/Danieldo1/pixel-art",
      project_link: "https://danieldo1.github.io/pixel-art/",
    },

    {
      name: "Meme Generator",
      description: "Create and share hilarious memes with ease using the Meme Generator App. This React-based web application offers custom meme creation, access to popular meme templates, one-click meme copying and downloading, and a responsive design for all screen sizes. Join the fun and express your creativity with this user-friendly meme-making tool!",
      tags: [
        {
          name: "React.js",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "React Router",
          color: "blue-text-gradient",

        },
      ],
      image: memegenerator,
      source_code_link: "https://github.com/Danieldo1/meme-generator-react",
      project_link: "https://meme-generator-nz34.onrender.com/",
    },

    {
      name: "Flashcards",
      description: "This project is a flashcard-style quiz app built using Redux and Redux Toolkit. It provides users with the ability to create their own topics, quizzes for those topics, and flashcards for those quizzes. Users can also interact with their quizzes by flipping flashcards over.",
      tags: [
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "blue-text-gradient",

        },
        {
          name: "Redux RTK",
          color: "pink-text-gradient",
        },
      ],
      image: flashcards,
      source_code_link: "https://github.com/Danieldo1/flash-cards",
      project_link: "https://main--soft-gumption-05ae3a.netlify.app/",
    },

    {
      name: "Inspiration Homepage",
      description: "This project involves the development of an inspirational homepage that connects to various APIs. The application will display the current weather, a background image, and an inspiring quote, offering users a daily source of motivation. Additionally, users will have the opportunity to record their daily thoughts, creating a dynamic and personalized experience within the app.",
      tags: [
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "JS API's",
          color: "blue-text-gradient",
        },
      ],
      image: inspohompage,
      source_code_link: "https://github.com/Danieldo1/inspo-homepage",
      project_link: "https://thoughtful-thoughts.netlify.app/",
    },

    {
      name: "Webpack Rock, Paper, Scissors",
      description: "This project centers on configuring Webpack for an already completed web app that currently lacks such build tools. The focus is on optimizing resource bundling within the application, following the steps outlined in Codecademy's 'Building Apps with Webpack' lesson.",
      tags: [
        {
          name: "WebPack",
          color: "blue-text-gradient",
        },
      ],
      image: webpackrockpasci,
      source_code_link: "https://github.com/Danieldo1/webpack-rock-paper-scissors",
      project_link: "https://danieldo1.github.io/webpack-rock-paper-scissors/",
    }
  ];
  
  export { services, experiences, projects };