import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <h1 className="type-writer">
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "FrontEnd Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </h1>
  );
}

export default Type;