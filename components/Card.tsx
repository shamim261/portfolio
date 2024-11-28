import { SiGithub } from "@icons-pack/react-simple-icons";
import { Folder, SquareArrowOutUpRight } from "lucide-react";

export interface CardType {
  github?: string;
  link?: string;
  name: string;
  desc: string;
  tech: string[];
}

const Card = () => {
  return (
    <div className="bg-navy-200 min-h-60 sm:min-h-96 rounded-2xl p-5 hover:bg-navy-100  transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <Folder className="text-green w-8 h-8" />
        <div className="flex gap-3">
          <SiGithub className="w-6 h-6" />
          <SquareArrowOutUpRight className="w-6 h-6" />
        </div>
      </div>
      <h3 className="text-2xl font-bold my-3 ">TakaFlow</h3>
      <p className="sm:text-[18px] ">
        If you need to use a one-off grid-template-rows value that doesn’t make
        sense to If you need to use a one-off grid-template-rows value that
        doesn’t make sense to
      </p>
      <p className="mt-8 text-[16px]">TypeScript, NextJS, MongoDB</p>
    </div>
  );
};

export default Card;
