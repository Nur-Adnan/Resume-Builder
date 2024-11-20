export default function handler(req, res) {
  res.status(200).json({
    name: "Nur Adnan",
    jobTitle: "Full Stack Developer",
    location: "Dhaka, Bangladesh",
    email: "nuradnanchowdhury015@gmail.com",
    linkedin: "nur-adnan",
    twitter: "NurAdnanChowdhu",
    github: "Nur-Adnan",
    website: "nur-adnan-chowdhury.web.app",
    aboutme:
      "Intermediate-level web developer with 3 years of experience in Tailwind, JavaScript, TypeScript, React, Node, Express, and MongoDB. Proven ability to create reusable components for enterprise-level applications.",
    toolsAndTechSkills: [
      "JavaScript",
      "TypeScript",
      "Tailwind",
      "React",
      "Redux",
      "Node",
      "Express",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Firebase",
      "Git",
      "Bitbucket",
    ],
    industryKnowledge: ["MERN Stack", "REST", "Microservices"],
    languages: ["English (Native)"],
    projects: [
      {
        title: "Blog Website",
        summary:
          "Developed a user-friendly blogging platform with rich text formatting, inline image uploads, tagging, and a comprehensive profile management system with admin functionalities. Integrated comment and reaction features for real-time interaction.",
        duration: "October 2023 - December 2023",
      },
      {
        title: "Ecommerce Website",
        summary:
          "Implemented Google authentication for user registration. Developed product cart management, coupon applications, and real-time admin dashboard for monitoring key business metrics.",
        duration: "May 2023 - July 2023",
      },
      {
        title: "Chat App",
        summary:
          "Built secure login systems, real-time messaging features, and multimedia sharing functionalities. Admin panel included user engagement statistics.",
        duration: "March 2023 - June 2023",
      },
    ],
    experience: [
      {
        title: "Freelance Full Stack Web Developer",
        company: "Fiverr",
        from: "June 2021",
        to: "Present",
        location: "Remote (Based in New York, USA)",
        summary:
          "Collaborated with clients to provide web development solutions. Focused on developing scalable, maintainable MERN stack applications. Managed project lifecycles from initial consultation to deployment.",
      },
    ],
    displayEducation: true,
    displayProjects: true,
    activeColor: "#5B21B6",
  });
}
