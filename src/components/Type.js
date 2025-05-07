import React from "react";
import Typewriter from "typewriter-effect";
import useFetch from "./useFetch";

function Type() {
  const sheetID = process.env.REACT_APP_SHEET_ID;
  const sheetRange = 'Sheet1';
  const apiKey = process.env.REACT_APP_API_KEY;;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${sheetRange}?key=${apiKey}`;
  const { data: input, isPending, error } = useFetch(url);

  const typeData = input
    ? input
      // .values.filter(item => item[0] != null && item[0].trim() !== "")
      .values.map(item => item[0])
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
