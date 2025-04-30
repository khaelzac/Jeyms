import React, { useEffect, useState } from 'react';

function TestApi() { 
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch('https://api.sheetbest.com/sheets/0717022e-8757-4c3b-818e-ddef7828fe1d')
      .then(res => res.json())
      .then(data => setRows(data));

  }, []);

  return (
    <>
    <section className='content'>
      <div className='content-container'>
        <h1>Data from Google Sheet</h1>
        <div>
        {rows.map((row, index) => (
          <p key={index}>
            {row.name} {row.lastName}
          </p>
        ))}
        </div>
      </div>
    </section>

    </>
  );
}

export default TestApi;