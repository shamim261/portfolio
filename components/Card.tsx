import { SiGithub } from "@icons-pack/react-simple-icons";
import { Folder, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export interface CardType {
  github?: string;
  link?: string;
  name: string;
  desc: string;
  tech: string[];
}

const Card = ({ name, desc, github, link, tech }: CardType) => {
  return (
    <div className="bg-navy-200 min-h-60 sm:min-h-96 rounded-2xl p-5 hover:bg-navy-100 hover:-translate-y-1  transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <Folder className="text-green w-8 h-8" />
        <div className="flex gap-3">
          {github && (
            <Link href={github}>
              <SiGithub className="w-6 h-6" />
            </Link>
          )}
          {link && (
            <Link href={link}>
              <SquareArrowOutUpRight className="w-6 h-6" />
            </Link>
          )}
        </div>
      </div>
      <h3 className="text-2xl font-bold my-3 ">{name}</h3>
      <p className="sm:text-[18px] min-h-32">{desc}</p>
      <p className="mt-8 text-[16px]">
        {tech.map((t, i) => (i === tech.length - 1 ? t : `${t}, `))}
      </p>
    </div>
  );
};

export default Card;
