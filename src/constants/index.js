import {

  facebookPink,
  instagramPink,
  linkedinPink,
  githubPink,

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
  colorDesign,
  cssInJs,
  htmlCert,
  IntJs,
  jQuery,
  learnReact,
  reduxReact,
  tS,
  uiAndUx,
  vue,
  webDev,
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
  myWebsite,
  theOne,
  nikeClone,
  travelapp,
  ecom,
  countries,
  stringhub,
  chatterbox,
  pricescraper,
  personifyai,
  woltaroo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "Github",
    icon: githubPink,
    link: 'https://github.com/danieldo1'
  },
  {
    title: "Instagram",
    icon:   instagramPink,
    link: 'https://www.instagram.com/dani8l_sp/?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr'
  },
  {
    title: "Facebook",
    icon: facebookPink,
    link: 'https://www.facebook.com/daniel.speranskiy1'
  },
  {
    title: "LinkedIn",
    icon: linkedinPink,
    link: 'https://www.linkedin.com/in/daniil-speranskii/'
  },
];


// Timeline Cards
const experiences = [
  {
    title: "High School",
    company_name: "Heritage Private School",
    location: "Limassol, Cyprus",
    icon: HPS,
    iconBg: "#E6DEDD",
    date: "Jan 2009 - Jun 2017",
    points: [
      {
        title: "Received a High-Quality Education",
        content:
          "At my school, I experienced a top-notch education, benefiting from rigorous academic programs, experienced teachers, and excellent educational resources.",
      },
      {
        title: "Built a Valuable Network and Connections",
        content:
          " Attending a private school provided me with the opportunity to build a valuable network of peers, teachers, and alumni, which has been instrumental in my academic and professional journey.",
      },
    ],
  },
  {
    title: "University",
    company_name: "United International Business School",
    location: "Brussels, Belgium",
    icon: uibs,
    iconBg: "#383E56",
    date: "Sep 2017 - Aug 2020",
    points: [
      {
        title: "Received Personalized Attention",
        content:
          "With smaller class sizes, I enjoyed the benefit of personalized attention and support from my teachers.",
      },
      {
        title: "International Exposure",
        content:
          "Attending a business school in Brussels has exposed me to an international hub. It's a city known as 'the capital of Europe', offering unparalleled opportunities to network and engage with international organizations and multinational corporations.",
      },
      {
        title: "Top-Quality Education",
        content:
          "The business schools in Brussels offer excellent business education. I've had the privilege to learn from experienced faculty and engage with a curriculum that emphasizes international business and management.",
      },
    ],
  },
  {
    title: "Executive Assistant of CEO",
    company_name: "Goldrock International Investment",
    icon: goldr,
    location: "Limassol, Cyprus",
    iconBg: "#383E56",
    date: "Feb 2021 - Mar 2022",
    points: [
      {
        title: "Efficient Time Management",
        content:
          "My proficiency in organizing schedules has allowed me to efficiently manage time, ensuring that tasks and demands are executed in a timely manner. I take pride in my ability to prioritize responsibilities and give due importance to critical duties, which enhances productivity.",
      },
      {
        title: "Reliable Task Execution",
        content:
          "I take pride in consistently delivering results in a timely fashion. My dedication to task management means that projects and assignments are completed efficiently, meeting or exceeding expectations.",
      },
      {
        title: "Proactive Initiative",
        content:
          "I proactively sought opportunities to contribute and excel in areas that extended beyond my job description. I consistently went the extra mile, willingly taking on additional tasks and challenges, driven by a strong work ethic and a commitment to achieving exceptional results.",
      },  
    ],
  },
  {
    title: "Career Transition",
    company_name: "",
    location: "Tbilisi, Georgia",
    icon: codec,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Present",
    points: [
      {
        title: "Continuous Learning",
        content:
          "Actively engaging in web development involves a commitment to continuous learning. I'm dedicated to staying updated with the latest technologies, frameworks, and best practices in the field.",
      },
      {
        title: "Practical Application",
        content:
          "I put my web development knowledge into practice by working on real projects, whether personal or professional, to reinforce my skills and gain practical experience.",
      },
      {
        title: "Exploration of Frameworks",
        content:
          "I explore a variety of web development frameworks and libraries, such as React, Angular, Vue, jQuery to broaden my skill set and adapt to different project requirements.",
      },
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
    image: Expenses,
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
    project_link:
      "https://www.figma.com/proto/wijso6VDNe1B01SRcIcSSn/%5BTemplate%5D-User-Flow%3A-Millie's-Muffins-(Copy)?page-id=11%3A33768&node-id=11-34056&starting-point-node-id=11%3A34056&t=usNqBkjpqsrPwXJp-1",
  },
  {
    name: "The One",
    description:
      "This innovative project leverages the Yelp API to revolutionize the dining experience by eliminating the dilemma of choosing where to eat. It streamlines the decision-making process by returning only one carefully selected restaurant, sparing users from the endless choices and indecision that often come with dining out.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "HTTP Calls",
        color: "pink-text-gradient",
      },
    ],
    image: theOne,
    source_code_link: "https://github.com/Danieldo1/ravenous1",
    project_link: "https://papaya-torrone-a2cc84.netlify.app/",
  },

  {
    name: "Appointment Planner",
    description:
      "The Appointment Planner project utilizes functional React components and React hooks to create an efficient application that manages both contacts and appointments. With separate pages for adding and viewing contacts and appointments, this project offers a practical and organized solution for scheduling and staying connected.",
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
      },
    ],
    image: dayPlanner,
    source_code_link: "https://github.com/Danieldo1/DatePlannerReact",
    project_link: "https://date-planer.onrender.com/contacts",
  },

  {
    name: "Pixel Art",
    description:
      "Explore the realm of pixel art, where creativity meets precision. My Pixel Art is a vibrant platform that celebrates the beauty of pixelated graphics and provides a welcoming community for pixel artists to showcase their talent.",
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
      },
    ],
    image: pixelArt,
    source_code_link: "https://github.com/Danieldo1/pixel-art",
    project_link: "https://danieldo1.github.io/pixel-art/",
  },

  {
    name: "Meme Generator",
    description:
      "Create and share hilarious memes with ease using the Meme Generator App. This React-based web application offers custom meme creation, access to popular meme templates, one-click meme copying and downloading, and a responsive design for all screen sizes. Join the fun and express your creativity with this user-friendly meme-making tool!",
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
    description:
      "This project is a flashcard-style quiz app built using Redux and Redux Toolkit. It provides users with the ability to create their own topics, quizzes for those topics, and flashcards for those quizzes. Users can also interact with their quizzes by flipping flashcards over.",
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
    description:
      "This project involves the development of an inspirational homepage that connects to various APIs. The application will display the current weather, a background image, and an inspiring quote, offering users a daily source of motivation. Additionally, users will have the opportunity to record their daily thoughts, creating a dynamic and personalized experience within the app.",
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
    description:
      "This project centers on configuring Webpack for an already completed web app that currently lacks such build tools. The focus is on optimizing resource bundling within the application, following the steps outlined in Codecademy's 'Building Apps with Webpack' lesson.",
    tags: [
      {
        name: "WebPack",
        color: "blue-text-gradient",
      },
    ],
    image: webpackrockpasci,
    source_code_link:
      "https://github.com/Danieldo1/webpack-rock-paper-scissors",
    project_link: "https://danieldo1.github.io/webpack-rock-paper-scissors/",
  },
  {
    name: "Nike Clone",
    description: "I've created a copycat website mimicking the Nike store landing page using the Tailwind CSS framework for styling and Vite for a lightning-fast development experience. The project closely mirrors the official Nike website, offering a familiar user interface with responsive design and smooth interactions.",
    tags: [
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: nikeClone,
    source_code_link: "https://github.com/Danieldo1/shoe-store-tailwind",
    project_link: "https://strong-klepon-49ee45.netlify.app/",
},
  {
    name: "Personal Website",
    description: "Discover my digital hub – a dynamic and interactive personal website crafted with Vite and React. Explore my journey, skills, and passions through an immersive digital experience. Stay up-to-date with my latest projects, insights, and creative endeavors. Welcome to my online world.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: myWebsite,
    source_code_link: "https://github.com/Danieldo1/dani-sper",
    project_link: "https://www.dansper.live/",
  },
  {
    name: "Travel Next",
    description: "My journey into web development led me to embrace TypeScript and Next.js as the foundation for a captivating camping ground website. By harnessing the power of these technologies, I crafted an immersive user experience that caters to both mobile and desktop users, ensuring that everyone can explore and engage with the beauty of the camping ground effortlessly.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: travelapp,
    source_code_link: "https://github.com/Danieldo1/travel-next",
    project_link: "https://strong-sprinkles-84546c.netlify.app/",
  },
  {
    name: "WonderMart",
    description: "The E-Comm Next.js Test Project offers an immersive learning experience in web development, with a specific focus on API calls and Next.js, a robust React framework. It demonstrates the effective use of Next.js and its routing system to fetch product details from the Fakestore API, showcasing how Next.js seamlessly integrates APIs and handles dynamic content rendering.",
    tags: [
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://github.com/Danieldo1/e-comm-next.js-api",
    project_link: "https://e-comm-next-js.vercel.app/",
  },
  {
    name: "Country Info",
    description: "The Country Information App, created with Next.js and TypeScript, offers users a convenient way to explore details about countries worldwide. Leveraging a countries API, it showcases country flags, capital cities, populations, regions, Google Maps integration, and more. Users can click on a flag to access in-depth information about each country, making it an engaging resource for learning about the world.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: " green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient ",
      },
    ],
    image: countries,
    source_code_link: "https://github.com/Danieldo1/countries-api-next",
    project_link: "https://countries-api-next-sage.vercel.app/",
  },
  {
    name: "StringHub.io",
    description: "A Social Media App StringHub is a sophisticated social media application that offers a comprehensive set of features to enable users to connect, share, and engage with one another. Built using cutting-edge technologies and a thoughtful approach to design, StringHub provides a platform for users to create accounts, log in, and share text-based posts seamlessly.",
    tags: [
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
    ],
    image: stringhub,
    source_code_link: "https://github.com/Danieldo1/StringHub.io-next",
    project_link: "https://string-hub-i.vercel.app/sign-in",
  },
 
  {
    name: "PriceScraper",
    description: "PriceScrapper is my Next.js-powered Amazon Product Price Tracker, offering real-time insights and empowering users to track price changes effortlessly. With features like web scraping, dynamic product pages, and automated email notifications, this project ensures you stay informed. Explore the live site, contribute to its development, and never miss a price drop on your favorite Amazon products!",
    tags: [
      {
        name: "Next.js/TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "CRON Job",
        color: "orange-text-gradient",
      },
      {
        name: "Auto Email",
        color: "blue-text-gradient",
      },
    ],
    image:pricescraper ,
    source_code_link: "https://github.com/Danieldo1/next-scrapper",
    project_link: "https://next-scrapper-swart.vercel.app/",
  },
  {
    name: "ChatterBox AI",
    description: "Introducing ChatterBox AI, my latest project in AI SaaS. Powered by five advanced AI tools, it features the Next.js 13 App Router for smooth client-side routing and a seamlessly integrated Stripe subscription system. With a robust tech stack including React, Tailwind CSS, Prisma, MySQL, and more, my goal is to craft a fully functional AI SaaS platform with a beautifully designed user interface. Join me in revolutionizing AI interactions!",
    tags: [
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
      {
        name: "OpenAi",
        color: "purple-text-gradient",
      }, 
    ],
    image: chatterbox,
    source_code_link: "https://github.com/Danieldo1/chatter-box-ai",
    project_link: "https://chatter-box-delta.vercel.app/",
  },
  {
    name: "Personify AI",
    description: "Personify AI Chat Platform is an application built with Next.js, providing a unique and interactive AI chatting experience. Leveraging the Replicate Llama Chat AI, users can authenticate and engage in conversations with AI personas that have memory retention and programmable characteristics.",
    tags: [
      {
        name: "Next.js",
        color: "red-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "orange-text-gradient",
      },
      {
        name: "Typescript",
        color: "purple-text-gradient",
      },
      {
        name: "OpenAi",
        color: "blue-text-gradient",
      }, 
      {
        name: "Prisma/MySQL",
        color: "green-text-gradient",
      },
    ],
    image: personifyai,
    source_code_link: "https://github.com/Danieldo1/Personify-AI",
    project_link: "https://personify-ai.vercel.app/",
  },
  {
    name: "Woltaroo",
    description: "Woltaroo, a React Native food delivery app inspired by Deliveroo, simplifies the food ordering process. Users can seamlessly discover, choose, and order their favorite dishes from local restaurants.",
    tags: [
      {
        name: "React Native",
        color: "purple-text-gradient",
      },
      {
        name: "Expo/Router",
        color: "orange-text-gradient",
      },
      {
        name: "Zustand",
        color: "green-text-gradient",
      },
      {
         name: "Google Maps API",
         color: "blue-text-gradient",
      },
    ],
    image: woltaroo,
    source_code_link: "https://github.com/Danieldo1/woltaroo-reactNative",
    project_link: "https://drive.google.com/file/d/1RIY1sKCQh83DD4_TfZZ70BBbU7e2g_js/view",
  }
];
// {
//   name: "",
//   description: "",
//   tags: [
//     {
//       name: "",
//       color: "",
//     },
//   ],
//   image: "",
//   source_code_link: "",
//   project_link: "",
// }

const certifications = [
  {
    link: "https://drive.google.com/file/d/1-dz4EKDqdIPbmBBuFK6HNkntvyZAB0Qo/view?usp=sharing",
    title: "Web Development",
    imgSrc: webDev,
  },
  {
    link: "https://drive.google.com/file/d/1KpTPM9d9Tp7BfMF0KPTw2ducAbMolucm/view?usp=sharing",
    title: "React",
    imgSrc: learnReact,
  },
  {
    link: "https://drive.google.com/file/d/1bwH0OWYGoraSja05xNir_sbPIfGL58Dk/view?usp=drive_link",
    title: "Redux",
    imgSrc: reduxReact,
  },
  {
    link: "https://drive.google.com/file/d/1qubf84VLX5ZW2edIb23XEt4sJuXVgrMR/view?usp=drive_link",
    title: "TypeScript",
    imgSrc: tS,
  },
  {
    link: "https://drive.google.com/file/d/1aXEqXrP1YRD8x8i1CZOYfjmRN69wq5Fm/view?usp=drive_link",
    title: "Vue.js",
    imgSrc: vue,
  },
  {
    link: "https://drive.google.com/file/d/1JBBgXmh2J4QZ_pR8vVznyB97o0ZBM1C6/view?usp=drive_link",
    title: "jQuery",
    imgSrc: jQuery,
  },
  {
    link: "https://drive.google.com/file/d/1L1LTXeBTIZTvm2CvyLloSxzk-eqZ8BpF/view?usp=drive_link",
    title: "Intermediate JavaScript",
    imgSrc: IntJs,
  },
  {
    link: "https://drive.google.com/file/d/1qKXNoDOjgjh16dfhr_Wb0QPnBr2R_ym1/view?usp=sharing",
    title: "CSS-in-JS",
    imgSrc: cssInJs,
  },
  {
    link: "https://drive.google.com/file/d/1NGWRmspU2GQ3pQCYmL3jWrNt7IcR5CTV/view?usp=drive_link",
    title: "HTML",
    imgSrc: htmlCert,
  },
  {
    link: "https://drive.google.com/file/d/1F9SLVuSAuDt5yrCnf_gx14zIHvXX5_wz/view?usp=drive_link",
    title: "UI & UX",
    imgSrc: uiAndUx,
  },
  {
    link: "https://drive.google.com/file/d/1U3UntfyHoI_XuIri4PALfOclN7XnqN15/view?usp=sharing",
    title: "Color Design",
    imgSrc: colorDesign,
  },
];

export { services, experiences, projects, certifications };
