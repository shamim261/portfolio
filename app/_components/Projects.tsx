import Card, { CardType } from "@/components/Card";
import FadeUpSection from "@/components/FadeUpSection";
import Heading from "@/components/Heading";

const projects: CardType[] = [
  {
    name: "TakaFlow",
    desc: "TakaFlow is a financial service application(MFS). It provides a secure and efficient platform for financial transactions with custom authentication and role-based access control.",
    github: "https://github.com/shamim261/takaflow",
    link: "https://takaflow.vercel.app/",
    tech: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Query",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
  },
  {
    name: "WoodFeeds.com",
    desc: "An e-commerce website for wooden interior design startup with admin dashboard build in MERN stack",
    link: "https://woodfeeds.com/",
    tech: [
      "React.js",
      "Javascript",
      "Material UI",
      "Tailwind CSS",
      "Context API",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Github CI/CD",
    ],
  },
  {
    name: "Shortee",
    desc: "Shortee is a URL shortener web application built using the MERN stack. It allows users to shorten long URLs into more manageable and shareable links",
    link: "https://shortee1.vercel.app/",
    github: "https://github.com/shamim261/shortee",
    tech: [
      "React.js",
      "Javascript",
      "shadcn/ui",
      "Tailwind CSS",
      "Context API",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
  },
];

const Projects = () => {
  return (
    <div id="projects" className={`my-5 `}>
      <FadeUpSection>
        <Heading>/ projects</Heading>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {projects.map((project, i) => (
            <FadeUpSection key={i} delay={i + 1}>
              <Card
                name={project.name}
                github={project.github}
                link={project.link}
                desc={project.desc}
                tech={project.tech}
              />
            </FadeUpSection>
          ))}
        </div>
      </FadeUpSection>
    </div>
  );
};

export default Projects;
