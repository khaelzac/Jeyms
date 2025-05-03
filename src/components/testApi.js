import useFecth from "./useFetch";
function TestApi() { 

  const {data : rows, isPending, error} = useFecth('https://api.sheetbest.com/sheets/0717022e-8757-4c3b-818e-ddef7828fe1d');
  return (
    <>
    <section className='content'>
      { isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {rows &&
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
      }
    </section>

    </>
  );
}

export default TestApi;