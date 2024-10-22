import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import projet1 from "../assets/projects/projet1.png";
import projet4 from "../assets/projects/projet3.jpeg";
import projet5 from "../assets/projects/projet5.png";
import projet6 from "../assets/projects/projet6.jpeg";

export const HERO_CONTENT = `I am a dedicated Android app developer with 3 years of professional experience, specializing in Kotlin to build high-performing and user-friendly mobile applications. As a versatile mobile app developer, I also have expertise in Flutter, allowing me to create seamless cross-platform applications. My strong backend skills in Firebase enable me to integrate dynamic and secure functionalities into my apps, ensuring a robust user experience. Additionally, I have experience in web development with React and have successfully worked on several websites, including projects built with WordPress. My goal is to combine my mobile and web development expertise to deliver exceptional digital solutions that meet client needs and drive success..`;

export const ABOUT_TEXT = `I am a skilled and versatile Android developer with a passion for building innovative and user-friendly mobile applications. With several years of experience, I have worked on various Android projects, including cross-platform apps using Flutter. My journey in development expanded to desktop applications with Java and JavaFX, along with working on security projects, such as securing client-server communications using smart cards. I also have experience in web development, creating websites using React and WordPress, and I am highly proficient in Firebase. I thrive in dynamic environments and enjoy solving complex problems to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce android app",
    image: projet1,
    description:
      "A complete online shopping platform with full user and admin features, including product management, order tracking, shopping cart, and secure user authentication..",
    technologies: ["Kotlin", "FireBase", "Compose"],
  },
  {
    title: "Banking app",
    image: project2,
    description:
      "A fully functional banking app with features for currency management, secure transactions, and seamless money transfers..",
    technologies: ["React", "FireBase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Orthophonist Management Desktop App",
    image: projet4,
    description:
      "A desktop management application for an orthophonist, offering features for patient records, appointment scheduling, and therapy session tracking",
    technologies: ["Java", "JavaFx", "Sqlite"],
  },
  {
    title: "Med Store - Online Medical Supplies Platform",
    image: projet5,
    description:
      "An e-commerce website for Med Store, specialized in selling medical supplies online, featuring product listings, secure transactions, and order management",
    technologies: ["wordpress"],
  },

  {
    title: "Secure Client-Server Communication System using Smart Cards  ACOS-J 95K",
    image: projet6,
    description:
      "A robust security solution designed to ensure secure client-server communications, utilizing smart card technology to authenticate users and protect sensitive data.",
    technologies: ["java card, java, java fx, sqlite, RSA, Elliptic curve"],
  },


];

export const CONTACT = {
  address: "LANAD Anis ",
  phoneNo: "+213 552 45 67 30",
  email: "ma_lanad@esi.dz",
};
