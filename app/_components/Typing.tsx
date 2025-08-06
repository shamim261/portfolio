"use client";
import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
class Typing extends React.Component {
  render(): React.ReactNode {
    return (
      <Typist>
        <span className="text-5xl sm:text-7xl">
          hi, <span className="text-green font-bold">shamim</span> here.
        </span>
      </Typist>
    );
  }
}

export default Typing;
