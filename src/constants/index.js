import {
    mobile,
    
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
    Techy_Globiz,
    National_Informatics_Center,
    Magic_Software,
    National_Building_Construction_Corporation_Limited,
    carrent,
    jobit,
    tripguide,
    threejs,
    frontend,
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
      title: "React Developer",
      icon: reactjs,
    },
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Content Creator",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      title: "ReactJS Developer",
      company_name: "National Informatics Center",
      icon: National_Informatics_Center,
      iconBg: "#383E56",
      date: "Arpil 2022 - Dec 2022",
      points: [
        "Aarogya Setu is a mobile application developed by the Government of India to help in the fight against the COVID-19 pandemic.",
        "ABHA is the name of a feature in the Aarogya Setu app that allows users to enter information about their health status and the symptoms they are experiencing.",
        "A feedback form is a tool that allows individuals to provide comments, suggestions, or evaluations about a product, service, or experience. Feedback forms are often used to gather input from customers and can be used to improve the quality of a product or service, address customer concerns. Developed Feedback Form for the better user-interactions and built ABHA for Aarogya setu, and in gov drive create Drag-and-Drop feature", 
        "Maintain the bug of Aarogya Setu.",
         ],
    },
    {
      title: "Web Developer",
      company_name: "Magic Software Pvt Ltd",
      icon: Magic_Software,
      iconBg: "#383E56",
      date: "Jan 2021 - Arpil 2022",
      points: [
        "Developed many learning software for various subject.",
        "Developing the packages for the content with the help of html5, CSS and JavaScript and then upload the packages on different platform.",
        "Worked on different platform like Habitat, Cypress, Learnosity, Pearson, Alfersco, TAO.",
        "For the different software development use Subversion (SVN) to maintain current and historical versions of files such as source code, web pages, and documentation.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Techy Globiz",
      icon: Techy_Globiz,
      iconBg: "#383E56",
      date: "Feb 2020 - June 2020",
      points: [
        "Build different websites using WordPress.",
        "Prepare website proposals to present to clients.",
        "Provide technical support to clients.",
        "Customize theme to meet client’s requirements.",
        "Manage a user guide to help clients understand site features and management of website to increase visitor satisfaction."
      ],
    },
    {
      title: "National Building Construction Corporation Limited",
      company_name: "National Building Construction Corporation Limited",
      icon: National_Building_Construction_Corporation_Limited,
      iconBg: "#383E56",
      date: "June 2018 - July 2018",
      points: [
        "Developed a website based on the advertisement which is done by NBCC company to recruiting their employees.",
        "Improved a website in which data was being repeated.",
        "Concluded that website will help for sorting the data about the advertisement.",
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