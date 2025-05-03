import React from "react";
import Typewriter from "typewriter-effect";
import useFetch from "./useFetch";

function Type() {
  const { data: input, isPending, error } = useFetch(
    'https://api.sheetbest.com/sheets/0717022e-8757-4c3b-818e-ddef7828fe1d'
  );

  const typeData = input
    ? input
        .filter(item => item.typeWriters != null && item.typeWriters.trim() !== "")
        .map(item => item.typeWriters)
    : [];
  return (
    <h1 className="type-writer">
      {isPending && ""}
      {error && ""}
      {!isPending && !error && typeData.length > 0 && (
        <Typewriter
          options={{
            strings: typeData,
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )}
    </h1>
  );
}

export default Type;
