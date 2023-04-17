import {
    mobile,
    stack,
    ai,
    web,
    javascript,
    java,
    html,
    css,
    reactjs,
    dart,
    firebase,
    python,
    tailwind,
    nodejs,
    sql,
    git,
    figma,
    docker,
    meta,
    cmrit,
    heapoly,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: stack,
    },
    {
      title: "AI Application Developer",
      icon: ai,
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
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
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
      name: "SQL",
      icon: sql,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Dart",
      icon: dart,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Computer Science Engineering Student",
      company_name: "CMRIT",
      icon: cmrit,
      iconBg: "#383E56",
      date: "December 2021 - Present",
      points: [
        "Created and managed web applications utilizing React.js and other relevant technologies as part of various projects.",
        "Developed Android applications utilizing Java, Flutter, and other relevant technologies including Firebase as part of different projects.",
        "Collaborated with peers and classmates to produce top-notch projects while gaining expertise in industry-standard development practices.",
        "Ensured cross-browser compatibility and implemented responsive design in projects. Ensured a bug free experience for users.",
        "Participated in code reviews and hackathons, providing and incorporating feedback from others to enhance my skills and contribute to the team's success.",
      ],
    },
    {
      title: "CS Diploma Student",
      company_name: "HEA Polytechnic",
      icon: heapoly,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Acquired proficiency in C, C++, Python, and Java, as well as delving into advanced topics like computer vision.",
        "Developed and implemented a real-time Intrusion Detection System using Python, enhancing my machine learning skills.",
        "Explored the potential applications of AI and Machine Learning in software development, gaining valuable insights.",
        "Gained knowledge and expertise in various computer subjects such as data structures and algorithms, database management systems, and computer networks and coding practices.",
      ],
    },
  ];
  
  const testimonials = [
    // TODO:  need to change with mentor feedback, etc.
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
    // TODO:  need to update with real projects
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