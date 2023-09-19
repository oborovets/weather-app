import { useEffect, useState } from "react";
import axios from "../services/api.tsx";

export type ForecastType = "current.json" | "forecast.json";

interface Properties {
  q: string;
  forecastType: ForecastType;
  days: number;
}

interface Response {
  current: any;
  forecast?: any;
  location: any;
}

const initialState: Response = {
  current: {},
  forecast: {},
  location: {},
};

const useFetchWeather = ({ q, days, forecastType }: Properties) => {
  const [data, setData] = useState<Response>(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(forecastType, { params: { q, days } });
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
  }, [q, days, forecastType]);

  return { data, loading, error };
};

export default useFetchWeather;
