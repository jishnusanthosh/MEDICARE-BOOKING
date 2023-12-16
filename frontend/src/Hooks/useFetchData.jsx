import { useEffect, useState } from "react";
import { token } from "../config";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, {
          headers: { authorization: `Bearer ${token}` },
        });
        const result = await res.json();
        if (!res.ok) {
          throw new Error(result.message);
        }
        setData(result.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.toString());
      }
    };
    FetchData();
  }, [url]);
  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
