import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center h-14 backdrop-blur-[6px] justify-between fixed top-0 left-0 right-0 sm:mx-44 mx-5 z-50">
      <div className=" sm:flex space-x-4 font-bold items-end ">
        <Link href="#">
          <h2 className="text-2xl ">Shamim Reza</h2>
        </Link>
        <nav className="hidden sm:block">
          <ul className="flex gap-5 items-center justify-center">
            <Link href="#intro">
              <li>Home</li>
            </Link>
            <Link href="#about">
              <li>About</li>
            </Link>
            <Link href="#projects">
              <li>Projects</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="flex gap-5">
        <Link
          className="hover:text-green"
          href="mailto:mdshamimreza5552@gmail.com"
        >
          <Mail />
        </Link>
        <Link
          target="_blank"
          className="hover:text-green"
          href="https://github.com/shamim261"
        >
          <SiGithub />
        </Link>
        <Link
          target="_blank"
          className="hover:text-green"
          href="https://linkedlin.com/"
        >
          <SiLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
