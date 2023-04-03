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
    mysql,
    tailwind,
    nodejs,
    angular,
    git,
    figma,
    c,
    csharp,
    java,
    mui,
    cgi,
    exceed,
    protel,
    petsify,
    integral,
    thep3,
    fourcolorconjecture,
    cointracker,
    gallantry,
    jetgame,
    anticovid,
    year3000,
    threejs,
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
  
  const services = [
    {
      title: "WordPress Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Back End Developer",
      icon: backend,
    },
    {
      title: "Game Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "MUI",
      icon: mui,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "c",
      icon: c,
    },
    {
      name: "csharp",
      icon: csharp,
    },
    {
      name: "java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "Call Center Agent",
      company_name: "PROTEL",
      icon: protel,
      iconBg: "#383E56",
      date: "March 2019 - January 2020",
      points: [
        "Worked as an Appointment Setter in Protel Company for almost 11 months as full time while studying at PUP Santa Rosa Campus to suffice his academic needs.",
        "His job is to do outbound calls then lead the hot contacts to the local agent of and Insurance company that was assigned to me. ",
        "He also answers some inbound calls if they scheduled callbacks for that Insurance Company."
      ],
    },
    {
      title: "WordPress Developer",
      company_name: "EXCEED",
      icon: exceed,
      iconBg: "#E6DEDD",
      date: "February 2021 - October 2021",
      points: [
        "Worked as a part timer Frontend Developer in this company Exceed Web Solutions.",
        "He implements designs that were given by the designers so that the design will be viewable in website form. ",
        "He like to code stuffs and him working here helped him to handle more workloads and more knowledge about CSS, HTML and JavaScript.",
        "Working in this company showed him new knowledges and help him see how workloads are distributed to each employee."
      ],
    },
    {
      title: "Intern",
      company_name: "CGI",
      icon: cgi,
      iconBg: "#383E56",
      date: "April 2022 - July 2022",
      points: [
        "Junior Automation Developer Intern at CGI Philippines Taguig Office, he worked on 2 projects while in his Internship months. ",
        "His duties working as a junior developer revolved around building software by writing code, as well as modifying software to fix errors, adapt it to new hardware, or upgrade interfaces.",
        "He also helped on testing and making mockup designs for the website projects that he was assigned to."
      ],
    },
    {
      title: "Junior Automation Developer",
      company_name: "CGI",
      icon: cgi,
      iconBg: "#E6DEDD",
      date: "August 2022 - Present",
      points: [
        "Duties primarily revolve around building software by writing code, as well as modifying software to fix errors, adapt it to new hardware, improve its performance, or upgrade interfaces. ",
        "He will also be involved in directing system testing and validation procedures, and also working with customers or departments on technical issues including software system design and maintenance.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      projectType:"Exceed Project:",
      name: "The P3 Life",
      description:
        "A web application that offers education and private tutoring services to teach courses to clients on learning and leadership",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "theme.co",
          color: "green-text-gradient",
        },
      ],
      image: thep3,
      source_code_link: "https://thep3life.company/",
    },
    {
      projectType:"Exceed Project:",
      name: "Petsify",
      description:
        "Web application that enables users to shop and dress their pets turning your pets into a person.",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "theme.co",
          color: "pink-text-gradient",
        },
      ],
      image: petsify,
      source_code_link: "https://petsify.ph/",
    },
    {
      projectType:"Exceed Project:",
      name: "Integral Marketing",
      description:
        "A comprehensive website offers users to build their brand better to propel business to new heights",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "theme.co",
          color: "green-text-gradient",
        },
      ],
      image: integral,
      source_code_link: "https://integralmrktg.com/",
    },
    {
      projectType:"College Project:",
      name: "Four Color Conjecture",
      description:
        "A game project during when I'm in college. This game follows the logic of Four Color Conjecture. A great way to challenge your mind",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "graphics.h",
          color: "green-text-gradient",
        },
      ],
      image: fourcolorconjecture,
      source_code_link: "https://github.com/",
    },
    {
      projectType:"College Thesis:",
      name: "Coin Tracker",
      description:
        "A mobile application that helps the user be updated with the latest happening on Crypto. Provides account information too: Ex. Axie, CrtyptoBlades, BombCrypto, Crystal Kingdom",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "REST API",
          color: "green-text-gradient",
        },
      ],
      image: cointracker,
      source_code_link: "https://github.com/csPulan/Coin-Tracker",
    },
    {
      projectType:"Game Development:",
      name: "Anti Covid Game",
      description:
        "A 2 game that was made during the pandemic. It is a shooter game that was made to raise awareness that vaccines help fight covid.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
      ],
      image: anticovid,
      source_code_link: "https://github.com/",
    },
    {
      projectType:"Game Development:",
      name: "JetShooter",
      description:
        "A 2d game that was inspired from a popular jetpack shooter game: Jetpack Joyride. This is one of the first game projects that I accepted",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
      ],
      image: jetgame,
      source_code_link: "https://github.com/",
    },
    {
      projectType:"Game Development:",
      name: "Gallantry",
      description:
        "A 2d shooter game made with unity development tool. This game offers a joystick control to move your character and defeat the enemy that is following you.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
      ],
      image: gallantry,
      source_code_link: "https://github.com/",
    },
    {
      projectType:"Game Development:",
      name: "Year 3000",
      description:
        "A 2d shooter game made with unity development tool. Its gameplay is inspired from a popular 2d game metal gear, contra and other 2d shooter game.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
      ],
      image: year3000,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };