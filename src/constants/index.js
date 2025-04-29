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
    pcuu,
    synthetic,
    clt,
    blockchainIot,
    cosmoteem,
    asmgame,
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
      icon: pytorch,
      color: "text-red-700"
    },
    {
      name: "Libtorch",
      icon: libtorch,
      color: "text-red-400"
    },
    {
      name: "OpenCV",
      icon: opencv,
      color: "text-green-700"
    },
    {
      name: "Fiji",
      icon: fiji,
      color: "text-blue-700"
    },
    {
      name: "C++",
      icon: cplusplus,
      color: "text-indigo-600"
    },
    {
      name: "Python",
      icon: python,
      color: "text-yellow-700"
    },
    {
      name: "Unity",
      icon: unity,
      color: "text-red-700"
    },
    {
      name: "Unreal Engine 5",
      icon: unreal,
      color: "text-fuchsia-200"
    },
    {
      name: "Blender",
      icon: blender,
      color: "text-orange-200"
    },
    {
      name: "JavaScript",
      icon: javascript,
      color: "text-yellow-300"
    },
    {
      name: "React JS",
      icon: reactjs,
      color: "text-cyan-400"
    },
    {
      name: "Node JS",
      icon: nodejs,
      color: "text-emerald-600"
    },
    {
      name: "MongoDB",
      icon: mongodb,
      color: "text-green-900"
    }
  ];

  const techDict = {
    "PyTorch": {
      name: "PyTorch",
      icon: pytorch,
      color: "text-red-700"
    },
    "LibTorch": {
      name: "LibTorch",
      icon: libtorch,
      color: "text-red-400"
    },
    "OpenCV": {
      name: "OpenCV",
      icon: opencv,
      color: "text-green-700"
    },
    "Fiji": {
      name: "Fiji",
      icon: fiji,
      color: "text-blue-700"
    },
    "C++": {
      name: "C++",
      icon: cplusplus,
      color: "text-indigo-600"
    },
    "C#": {
      name: "C#",
      icon: csharp,
      color: "text-indigo-300"
    },
    "Python": {
      name: "Python",
      icon: python,
      color: "text-yellow-700"
    },
    "ASM": {
      name: "ASM",
      icon: null,
      color: "text-lime-200"
    },
    "Unity": {
      name: "Unity",
      icon: unity,
      color: "text-red-700"
    },
    "Unreal Engine 5": {
      name: "Unreal Engine 5",
      icon: unreal,
      color: "text-fuchsia-200"
    },
    "Blender": {
      name: "Blender",
      icon: blender,
      color: "text-orange-200"
    },
    "JavaScript": {
      name: "JavaScript",
      icon: javascript,
      color: "text-yellow-300"
    },
    "Elm": {
      name: "Elm",
      icon: elm,
      color: "text-cyan-700"
    },
    "React": {
      name: "React",
      icon: reactjs,
      color: "text-cyan-400"
    },
    "Node": {
      name: "Node",
      icon: nodejs,
      color: "text-emerald-600"
    },
    "MongoDB": {
      name: "MongoDB",
      icon: mongodb,
      color: "text-green-900"
    }
  };

  
  const experiences = [
    {
      title: "Machine Learning and Computer Vision Engineer",
      company_name: "3DM Devices",
      icon: threedm,
      iconBg: "#383E56",
      date: "May 2024 - Present",
      points: [
        "Engineered a development platform for AI-based anomaly detection using Python, OpenCV and PyTorch resulting in a reduction in net expenses by replacing a third-party service.",
        "Implemented and fine-tuned segmentation models, gaining a 10% increase on manufacturing industry datasets.",
        "Optimized team productivity up to 80% by scripting an automated 3D data retrieval tool for 2D image projection.",
        "Achieved a remarkable 76% edge device time optimization through efficient development of image processing algorithms and streamlining real-time AI inference in C++ and LibTorch using CUDA GPU acceleration.",
      ],
    },
    {
      title: "Machine Learning and Computer Vision Research Associate (Co-op)",
      company_name: "3DM Devices",
      icon: threedm,
      iconBg: "#383E56",
      date: "May 2023 - April 2024",
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
      name: "Edge-aware Point Cloud Upsampling Neural Network",
      description:
        "An implementation of 3D Deep Learning and Traditional Computer Vision techniques to accurately upsample point clouds while being edge aware and respecting finer details.",
      tags: [
          techDict["Python"],
          techDict["PyTorch"],
          {
            name: "COLMAP",
            icon: null,
            color: "text-indigo-600"
          }
     ],
      image: pcuu,
      source_code_link: "https://github.com/An-u-rag/pointcloud-upsampling",
    },
    {
      name: "Synthetic Data Generation via Digital Twins",
      description:
        "Generation of synthetic visual datasets for training Deep Learning Models while maintaing their accuracy.",
      tags: [
        techDict["Python"],
        techDict["PyTorch"],
        techDict["Unreal Engine 5"],
        {
          name: "NVIDIA Omniverse",
          icon: null,
          color: "text-green-400"
        }
      ],
      image: synthetic,
      source_code_link: "https://github.com/An-u-rag/synthetic-visual-dataset-generation",
    },
    {
      name: "CLT Creator",
      description:
        "An interactive 3D educational system for programmatic sustainable construction with libraries for Cross laminated Timber (CLT) 3D models and mathematical transformations",
        tags: [
          techDict["Elm"],
          techDict["JavaScript"],
          {
            name: "WebGL",
            icon: null,
            color: "text-white-400"
          }
        ],
      image: clt,
      source_code_link: "https://github.com/An-u-rag/clt-creator",
      extras: {
        "website": "https://cltcreator.netlify.app/",
      }
    },
    {
      name: "Secure Blockchain in IoT Systems",
      description:
        "'Implementing security in IoT systems via blockchain' is a research project taken up by me to experiment with increasing communication security in IoT systems.",
        tags: [
          techDict["C++"],
          {
            name: "Low-Level Programming",
            icon: null,
            color: "text-white-400"
          },
          {
            name: "Blockchain",
            icon: null,
            color: "text-purple-700"
          },
          {
            name: "IoT Security",
            icon: null,
            color: "text-blue-400"
          }
        ],
      image: blockchainIot,
      source_code_link: "https://github.com/An-u-rag/model-blockchain",
      extras: {
        "paper": "https://www.inderscienceonline.com/doi/abs/10.1504/IJITST.2023.127391",
      } 
    },
    {
      name: "Cosmoteem",
      description:
        "A community web app for space enthusiasts, budding astronomers, and learners. Updating in real-time with the latest news and with a simple 3D model solar system.",
        tags: [
          techDict["JavaScript"],
          techDict["Node"],
          techDict["MongoDB"],
          techDict["C#"],
          techDict["Unity"],
          {
            name: "Full-Stack",
            icon: null,
            color: "text-white-400"
          },
        ],
      image: cosmoteem,
      source_code_link: "https://github.com/An-u-rag/Cosmoteem",
      extras: {
        "website": "https://cosmoteem.herokuapp.com/",
      }
    },
    {
      name: "Pixel Platformer Game (Assembly Language)",
      description:
        "Platformer game programmed in assembly language on an 8086 microprocessor using low level programming concepts like registers.",
        tags: [
          techDict["ASM"],
          {
            name: "Low-Level Programming",
            icon: null,
            color: "text-white-400"
          },
          {
            name: "Game Development",
            icon: null,
            color: "text-blue-400"
          }
        ],
      image: asmgame,
      source_code_link: "https://github.com/An-u-rag/assembly-game-prog",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };