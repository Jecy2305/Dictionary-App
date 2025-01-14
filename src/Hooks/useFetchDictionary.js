import { useState, useEffect } from 'react';

export const useFetchDictionary = (word = "play") => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!res.ok) {
        throw new Error(`Error al obtener resultados para la palabra: ${word}`);
      }
      const data = await res.json();
      setResponse(data[0]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (word) {
      fetchData();
    }
  }, [word]);

  return { response, loading, error, fetchData };
};
