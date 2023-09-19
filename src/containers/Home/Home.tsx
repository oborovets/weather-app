import { useEffect, useState } from "react";
import { Card } from "@mui/material";
import HomeForm from "./HomeForm.tsx";
import WeatherCard from "../../components/WeatherCard.tsx";
import LocationCard from "../../components/LocationCard.tsx";
import useFetchWeather from "../../hooks/useFetchWeather.ts";
import { ForecastType } from "../../hooks/useFetchWeather.ts";
import { mapTodayWeather, mapForecastWeather2 } from "../../utils/mappers.ts";
import { Forecast } from "../../constants/forecastOptions.ts";
import useFetchGeolocation from "../../hooks/useFetchGeolocation.ts";

export default function Home() {
  const [fieldValue, setFieldValue] = useState("");
  const [forecastTypeValue, setForecastTypeValue] = useState<ForecastType>(
    Forecast.current,
  );
  const [days, setDays] = useState(1);

  const { data, loading, error } = useFetchWeather({
    q: fieldValue,
    forecastType: forecastTypeValue,
    days,
  });
  const position = useFetchGeolocation();

  useEffect(() => {
    if (position.latitude && position.longitude) {
      setFieldValue(`${position.latitude}, ${position.longitude}`);
    }
  }, [position.latitude, position.longitude]);

  const mappedObj = mapTodayWeather(data || {});
  const isDataExist = !loading && data && !error;

  return (
    <>
      <HomeForm
        fieldValue={fieldValue}
        setFieldValue={setFieldValue}
        forecastTypeValue={forecastTypeValue}
        setForecastTypeValue={setForecastTypeValue}
        days={days}
        setDays={setDays}
      />
      {isDataExist && (
        <LocationCard
          place={`${data?.location?.country} - ${data?.location?.name}`}
          timezone={data?.location?.tz_id}
          localtime={data?.location.localtime}
        />
      )}
      <Card sx={{ display: "flex", m: 1, p: 1 }}>
        {isDataExist && (
          <>
            <WeatherCard {...mappedObj} />
            {data?.forecast?.forecastday.map((f: any) => {
              const mappedObject = mapForecastWeather2(f);

              return <WeatherCard {...mappedObject} />;
            })}
          </>
        )}
      </Card>
    </>
  );
}
