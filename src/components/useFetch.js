import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    const data = async () => {
      try {
        const response = await fetch(url, { signal: abortCont.signal });
        if (!response.ok) {
          throw Error('Failed to Fetch the Data');
        }
        else if (response.ok) {
          const datas = await response.json();
          setData(datas);
          setError(null);
          setIsPending(false);
        }
      } catch (error) {
        setIsPending(false);
        setData(null);
        setError(error.message);
      }
      return () => abortCont.abort();
    };
    data();
    //   fetch(url, { signal: abortCont.signal })
    //   .then(res => {
    //     if (!res.ok) { 
    //         throw Error('could not fetch the data for that resource');
    //     } 
    //     return res.json();
    //   })
    //   .then(data => {
    //     setIsPending(false);
    //     setData(data);
    //     setError(null);
    //   })
    //   .catch(err => {
    //     if (err.name === 'AbortError') {
    //       // console.log('fetch aborted')
    //     } else {
    //       setData(null);
    //       setIsPending(false);
    //       setError(err.message);
    //     }
    //   })

  }, [url])

  return { data, isPending, error };
}

export default useFetch;