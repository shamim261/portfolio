"use client";
import { Mail } from "lucide-react";
import Link from "next/link";
import Typing from "./Typing";

const Intro = () => {
  return (
    <div className="h-[70vh] flex justify-center items-center flex-col space-y-2 text-center sm:h-screen sm:max-w-xl sm:mx-auto">
      <Typing />
      <h2 className="text-slate-200">I create stuff sometimes.</h2>
      <p>
        I'm a software engineer from Toronto, Canada. I'm fascinated by
        large-scale, high-impact products and contributed to major feature
        launches in industry-leading services as well as apps that have 100M+
        installs.
      </p>
      <Link href="mailto:mdshamimreza5552@gmail.com">
        <div className="flex gap-2 justify-center  border border-green py-3 px-7 text-green font-bold text-lg rounded hover:bg-navy-100 my-2">
          <Mail className="" /> Say hi!
        </div>
      </Link>
    </div>
  );
};

export default Intro;
