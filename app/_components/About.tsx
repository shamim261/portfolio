import FadeUpSection from "@/components/FadeUpSection";
import Heading from "@/components/Heading";
import Image from "next/image";

const About = () => {
  const technologies: string[] = [
    "JavaScript",
    "TypeScript (Familier)",
    "React.js",
    "Tailwind CSS",
    "Next.js",
    "Node.js",
    "Express.js",
    "RESTful API",
    "JWT",
    "MongoDB",
  ];
  return (
    <div
      id="about"
      className={`${"animate-fade-up"} flex justify-between items-center gap-2 mx-auto`}
    >
      <div className="sm:w-3/5">
        <Heading>/ about me</Heading>
        <p className="pb-2 text-justify">
          I hold a diploma degree in Computer Engineering, which has equipped me
          with a strong foundation in areas like software development,
          networking, and hardware design, which has really helped me tackle
          complex technical challenges and come up with creative solutions.
        </p>
        <p>Here are some technologies I have been working with:</p>
        <ul className="tech-list relative grid grid-cols-2 my-5 mx-3">
          {technologies.map((item, i) => (
            <FadeUpSection key={i} delay={i * 0.4}>
              <li
                className={`text-xl text-slate-300`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {item}
              </li>
            </FadeUpSection>
          ))}
        </ul>
        <p className="my-2">
          Outside of work, I'm interested in exploring the new technologies.
        </p>
      </div>
      <div className="hidden sm:block">
        <Image
          className="rounded-xl shadow-md "
          src="/image.JPG"
          alt="my-image"
          height={350}
          width={350}
        />
      </div>
    </div>
  );
};

export default About;
