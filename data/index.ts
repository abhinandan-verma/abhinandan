import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Resume", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Finance to Manage Your Budget",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/sc1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://finance-seven-psi.vercel.app",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Abhinandan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Abhinandan's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Abhinandan is the ideal partner.",
    name: "Vijay Singh",
    title: "Director of SkilledUp Intelligrnce",
  },
  {
    quote:
      "Collaborating with Abhinandan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Abhinandan's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Abhinandan is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Abhinandan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Abhinandan's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Abhinandan is the ideal partner.",
    name: "Jenny Wilson",
    title: "Director of TechSolutions",
  },
  {
    quote:
      "Collaborating with Abhinandan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Abhinandan's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Abhinandan is the ideal partner.",
    name: "Rahul Singh",
    title: "Director of TechSolutions",
  }
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 6,
    name: "figma",
    img: "/figma.svg",
    nameImg: "/figmaName.svg",
  },
  {
    id: 9,
    name: "typescript",
    img: "/ts.svg",
    nameImg: "/tsName.svg",
  },
  {
    id: 10,
    name: "next",
    img: "/next.svg",
    nameImg: "/nextName.svg",
  },
  {
    id: 11,
    name: "three",
    img: "/three.svg",
    nameImg: "/threeName.svg",
  },
  {
    id: 12,
    name: "gsap",
    img: "/gsap.svg",
    nameImg: "/gsapName.svg",
  },
  {
    id: 13,
    name: "firebase",
    img: "/firebase.svg",
    nameImg: "/firebaseName.svg",
  },
  {
    id: 16,
    name: "framer",
    img: "/fm.svg",
    nameImg: "/fmName.svg",
  },
  {
    id: 17,
    name: "contentful",
    img: "/c.svg",
    nameImg: "/cName.svg",
  },
  {
    id: 18,
    name: "shopify",
    img: "/shopify.svg",
    nameImg: "/shopifyName.svg",
  },
  {
    id: 19,
    name: "vercel",
    img: "/vercel.svg",
    nameImg: "/vercelName.svg",
  },
  {
    id: 20,
    name: "netlify",
    img: "/netlify.svg",
    nameImg: "/netlifyName.svg",
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    hoverColor: "hover:text-gray-400",
    link: "https://github.com/abhinandan-verma",
  },
  {
    id: 2,
    img: "/twit.svg",
    hoverColor: "hover:text-blue-400",
    link: "https://x.com/abhinandan_v0",
  },
  {
    id: 3,
    img: "/link.svg",
    hoverColor: "hover:text-blue-400",
    link: "https://linkedin.com/in/abhinandan-verma",
  },
  {
    id: 4,
    img: "/insta.svg",
    hoverColor: "hover:text-blue-400",
    link: "https://instagram.com/abhinandanverma555",
  },
  {
    id: 5,
    img: "/yt.svg",
    hoverColor: "hover:text-red-400",
    link: "https://youtube.com/abhinandanverma",
  },
];
