import { useEffect, useState } from "react";
import axios from "../services/api.tsx";

interface Properties {
  q: string;
}

const useFetchWeather = ({ q }: Properties) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(q);
        setData(response.data);
        setLoading(false);
        setError(null);
      } catch (error) {
        // @ts-ignore
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [q]);

  return { data, loading, error };
};

export default useFetchWeather;
