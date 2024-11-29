import FadeUpSection from "@/components/FadeUpSection";
import Heading from "@/components/Heading";
import Image from "next/image";

const About = () => {
  const technologies: string[] = [
    "JavaScript",
    "TypeScript (Familier)",
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
  ];
  return (
    <div
      id="about"
      className={`${"animate-fade-up"} flex justify-between items-center gap-2 mx-auto`}
    >
      <div className="sm:w-3/5">
        <Heading>/ about me</Heading>
        <p className="pb-2">
          I am currently a Software Development Engineer at Amazon, working in
          the AWS sector under team Route 53. At the same time, I am undertaking
          a part-time Master's of Science in Software Engineering at University
          of Oxford.
        </p>
        <p>Here are some technologies I have been working with:</p>
        <ul className="tech-list relative grid grid-cols-2 my-5 mx-3">
          {technologies.map((item, i) => (
            <FadeUpSection key={i} delay={i}>
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
          Outside of work, I'm interested in following the developments of
          science. I also play a lot of video games. And make TikToks.
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
