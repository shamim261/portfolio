import Card from "@/components/Card";
import FadeUpSection from "@/components/FadeUpSection";
import Heading from "@/components/Heading";

const Projects = () => {
  return (
    <div id="projects" className={`my-5 `}>
      <FadeUpSection>
        <Heading>/ projects</Heading>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <FadeUpSection key={i} delay={i * 0.3}>
              <Card />
            </FadeUpSection>
          ))}
        </div>
      </FadeUpSection>
    </div>
  );
};

export default Projects;
