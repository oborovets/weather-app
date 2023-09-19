import { useState } from "react";
import TextField from "../components/TextField.tsx";
import WeatherCard from "../components/WeatherCard.tsx";
import useFetchWeather from "../hooks/useFetchWeather.tsx";
import { mapWeather } from "../utils/mappers.tsx";
import Select from "../components/Select.tsx";
import forecastOptions from "../constants/forecastOptions.ts";
import { Card } from "@mui/material";

export default function Home() {
  const [fieldValue, setFieldValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const { data, loading, error } = useFetchWeather({ q: fieldValue });

  // if (error) {
  //   return <Typography variant="h5">Error</Typography>;
  // }

  const mappedObj = mapWeather(data || {});
  const isDataExist = !loading && data && !error;
  return (
    <>
      <Card sx={{ display: "flex", flexGrow: 1, m: 1 }} variant="outlined">
        <TextField
          label="Weather query"
          value={fieldValue}
          handleChange={(e) => setFieldValue(e.target.value)}
        />
        <Select
          options={forecastOptions}
          label="Type of forecaset"
          value={selectValue}
          handleChange={(e) => setSelectValue(e.target.value)}
        />
      </Card>
      {isDataExist && <WeatherCard {...mappedObj} />}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
