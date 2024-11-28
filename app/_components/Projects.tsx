import Card from "@/components/Card";
import Heading from "@/components/Heading";

const Projects = () => {
  return (
    <div>
      <Heading>/ projects</Heading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Projects;
