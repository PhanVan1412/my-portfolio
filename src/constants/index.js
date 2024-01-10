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
  ptit,
  c1,
  c2,
  c3,
  c4,
  c5,
  freelancer,
  onlead,
  mwg,
  bhx,
  book,
  hana,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "home",
  },
  {
    id: "about",
    title: "about",
  },
  {
    id: "portfolio",
    title: "project",
  },
  {
    id: "certificates",
    title: "certificates",
  },
  {
    id: "contact",
    title: "contact",
  },
];

const services = [
  {
    title: "webDeveloper",
    icon: web,
  },
  {
    title: "reactJSDeveloper",
    icon: mobile,
  },
  {
    title: "angularDeveloper",
    icon: backend,
  },
  {
    title: "nodeJSDeveloper",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "MWG",
    icon: mwg,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#f0f0f0",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "Onlead",
    icon: onlead,
    iconBg: "#f0f0f0",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Scientific Research",
    company_name: "IoT System Lab PTIT",
    icon: ptit,
    iconBg: "#E6DEDD",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "MWG 2023",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Ant",
        color: "pink-text-gradient",
      },
    ],
    image: bhx,
    source_code_link: "https://github.com/",
  },
  {
    name: "Hanaseatrip",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "PhP",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: hana,
    source_code_link: "https://hanaseatrip.com/",
  },
  {
    name: "Book Store",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "green-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://github.com/",
  },
];

const allProjects = [
  {
    id: 1,
    name: "MWG 2023",
    type: "ReactJS",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Ant",
        color: "pink-text-gradient",
      },
    ],
    image: bhx,
    source_code_link: "https://github.com/",
  },
  {
    id: 2,
    name: "Hanaseatrip",
    type: "Wordpress",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "PhP",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: hana,
    source_code_link: "https://hanaseatrip.com/",
  },
  {
    id: 3,
    name: "Book Store",
    type: "HTML",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "green-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://github.com/",
  },
  {
    id: 4,
    name: "MWG 2023",
    type: "Angular",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Ant",
        color: "pink-text-gradient",
      },
    ],
    image: bhx,
    source_code_link: "https://github.com/",
  },
  {
    id: 5,
    name: "Hanaseatrip",
    type: "React Native",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "PhP",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: hana,
    source_code_link: "https://hanaseatrip.com/",
  },
  {
    id: 6,
    name: "Book Store 123",
    type: "HTML",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "green-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://github.com/",
  },
];

const certificates = [
  {
    id: 1,
    name: "HTML & CSS",
    image: c1,
  },
  {
    id: 2,
    name: "Javascript Basic",
    image: c2,
  },
  {
    id: 3,
    name: "Javascript Advanced",
    image: c3,
  },
  {
    id: 4,
    name: "ReactJS",
    image: c4,
  },
  {
    id: 5,
    name: "Wordpress",
    image: c5,
  },
];

const tabs = [
  {
    id: 1,
    title: "all",
    name: "All",
  },
  {
    id: 2,
    title: "reactjs",
    name: "ReactJS",
  },
  {
    id: 3,
    title: "angular",
    name: "Angular",
  },
  {
    id: 4,
    title: "react native",
    name: "React Native",
  },
  {
    id: 5,
    title: "wordpress",
    name: "Wordpress",
  },
  {
    id: 6,
    name: "HTML",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  certificates,
  tabs,
  allProjects,
};
