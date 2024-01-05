import {
    mobile,
    backend,
    creator,
    web,
    xr,
    gp,
    cg,
    cv,
    ai,
    pytorch,
    libtorch,
    opencv,
    cplusplus,
    python,
    fiji,
    cuda,
    unity,
    unreal,
    blender,
    omniverse,
    csharp,
    elm,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    aws,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    threedm,
    madiee,
    protal,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
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
      title: "Artifical Intelligence",
      icon: ai,
    },
    {
      title: "Computer Vision",
      icon: cv,
    },
    {
      title: "Computer Graphics",
      icon: cg,
    },
    {
      title: "Game Programming & Development",
      icon: gp,
    },
    {
      title: "Extended Reality (AR/VR)",
      icon: xr,
    },
    {
      title: "Full Stack Web Development",
      icon: web,
    }
  ];
  
  const technologies = [
    {
      name: "Pytorch",
      icon: pytorch
    },
    {
      name: "Libtorch",
      icon: libtorch
    },
    {
      name: "OpenCV",
      icon: opencv
    },
    {
      name: "Fiji",
      icon: fiji
    },
    {
      name: "C++",
      icon: cplusplus
    },
    {
      name: "Python",
      icon: python
    },
    {
      name: "Unity",
      icon: unity
    },
    {
      name: "Unreal Engine 5",
      icon: unreal
    },
    {
      name: "Blender",
      icon: blender
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    }
  ];
  
  const experiences = [
    {
      title: "Machine Learning and Computer Vision Associate",
      company_name: "3DM Devices",
      icon: threedm,
      iconBg: "#383E56",
      date: "May 2023 - December 2023",
      points: [
        "Implemented various state-of-the-art Rule & AI based Computer Vision techniques using OpenCV, PyTorch and LibTorch for Anomaly Detection in cured tires.",
        "Developed in-house architecture and platform for training & testing models using PyTorch, Gradio, WandB, and LibTorch to improve model deployment efficiency.",
        "Collaborated in the development of the anomaly detection production pipeline in C++, by coding essential functions for image processing and refinement, model integration and post-processing using OpenCV.",
        "Researched and applied innovative methodologies for Data Management and pipelining to efficiently retrieve data for AI model training.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "MADIEE Games",
      icon: madiee,
      iconBg: "#E6DEDD",
      date: "July 2021 - October 2021",
      points: [
        "Headed a team of 3 to develop Carbon Copy, an online web game to enhance creativity and communication between professional teams, using MERN stack.",
        "Collaborated on Wavelength, a web game created using React to facilitate team building in client teams.",
        "Programmed a web-based AR Face Filter App using Clmtrackr, p5.js and React to include interactive components to MADIEE’s games."
      ],
    },
    {
      title: "Back-end Lead Developer Intern",
      company_name: "PROTAL",
      icon: protal,
      iconBg: "#383E56",
      date: "July 2021 - September 2021",
      points: [
        "Designed the architecture for server-side Rest-based APIs and scripts to handle the web and app platforms’ endpoint requests using NodeJS and MongoDB.",
        "Documented and tested the Rest-based API using Postman for robustness and consistency.",
        "Managed a team of 4-6 backend developers and coordinated with frontend teams using Github, Figma and Discord to synchronize development workflows."
      ],
    }
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };