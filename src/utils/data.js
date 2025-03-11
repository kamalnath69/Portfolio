import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 76,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 63,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 47,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I’m Kamal Nath, a dedicated software developer with expertise in full-stack development, particularly using the MERN stack. I build scalable, secure, and user-friendly web and mobile applications with a strong focus on performance and user experience.",

  "I assist businesses by developing custom software solutions tailored to their needs, whether creating new applications or enhancing existing ones. My approach emphasizes scalability, maintainability, and long-term growth.",

  "Leveraging modern technologies like React, Node.js, and MongoDB, I aim to deliver seamless, responsive, and high-quality user experiences, adhering to best practices and industry standards."
];



export const workExp = [
  {
    place: "Viswin Global",
    tenure: "July 2024 - Sept 2024",
    role: "Frontend Developer Intern",
    link:"https://viswinglobal.com",
    certificate:"drivelink",
    detail:
      "Developed responsive user interfaces and secure APIs using the MERN stack. Collaborated with a team to enhance web applications and ensure seamless deployment.",
  },
  {
    place: "Better Tomorrow",
    tenure: "Feb 2024 - Mar 2024",
    role: "MERN Stack Developer Intern",
    link:"https://thebettertomorrow.in",
    certificate:"drivelink",
    detail:
      "Leveraged the MERN stack to develop secure APIs and robust database connections for user authentication. Worked closely with a team to create dynamic web applications through effective collaboration.",
  },
  {
    place: "Sri Eshwar College of Engineering",
    tenure: "2022 - 2026",
    role: "B.Tech in Information Technology",
    link:"https://sece.ac.in",
    detail:
      "Pursuing a Bachelor's degree in Information Technology with a current CGPA of 8.30 (up to the 2nd semester). Gaining in-depth knowledge in core subjects like Data Structures, Algorithms, and Object-Oriented Programming while participating in projects and hackathons.",
  },
  {
    place: "Vivek Vidyalaya Higher Secondary School",
    tenure: "2020 - 2022",
    role: "HSC - Higher Secondary Certificate",
    detail:
      "Completed Higher Secondary School with a focus on Mathematics and Science, securing a score of 91.5%. Developed a strong foundation in analytical and problem-solving skills.",
  },
  {
    place: "Vivek Vidyalaya Higher Secondary School",
    tenure: "2019 - 2020",
    role: "SSLC - Secondary School Leaving Certificate",
    detail:
      "Achieved a score of 88.6% in Secondary School, focusing on core subjects like Mathematics, Science, and Language, which laid the groundwork for further studies in technology.",
  }
];


export const comments = [
  {
    name: "Dr. Prasantha Bharathi",
    post: "Mathematics Professor",
    comment:
      "Kamal demonstrated exceptional technical skills in developing our International Mathematics Conference website. His attention to detail and ability to translate complex requirements into a user-friendly platform was impressive.",
    img: "./person1.jpg",
  },
  {
    name: "Prakash Utharaj",
    post: "Technical Mentor",
    comment:
      "As Kamal's mentor, I've witnessed his remarkable growth in full-stack development. His innovative approach to problem-solving and quick adaptation to new technologies makes him stand out as a developer.",
    img: "./person1.jpg",
  },
  {
    name: "Rajesh Kumar",
    post: "Project Lead",
    comment:
      "Working with Kamal on various projects has been a pleasure. His commitment to delivering high-quality code and ability to meet deadlines consistently makes him a valuable asset to any team.",
    img: "./person1.jpg",
  },
  {
    name: "Anitha Krishnan",
    post: "Senior Developer",
    comment:
      "Kamal's passion for learning and implementing new technologies is commendable. His contributions to our team projects have always been thoughtful and well-executed.",
    img: "./person1.jpg",
  }
];


export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
