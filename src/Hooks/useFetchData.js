import { useEffect, useState } from "react";

export default function useFetchData(endpoint) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (endpoint === "") return;

    let ignore = false;

    const fetchData = async () => {
      setError(null);
      try {
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/${endpoint}`);
        const products = await res.json();
        if (!ignore) {
          setData(products);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      ignore = true;
    };
  }, [endpoint]);

  return { data, loading, error };
}
