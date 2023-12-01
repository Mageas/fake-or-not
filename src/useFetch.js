import { useState, useCallback } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  // 'useCallback' to avoid infinite loop
  const customFetch = useCallback((url) => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then(response => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);
  
  return [data, error, isLoading, customFetch];
}

export default useFetch;
