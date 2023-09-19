import { Dispatch, SetStateAction } from "react";
import { Card } from "@mui/material";
import TextField from "../../components/TextField.tsx";
import Select from "../../components/Select.tsx";
import { ForecastType } from "../../hooks/useFetchWeather.ts";
import forecastOptions, { Forecast } from "../../constants/forecastOptions.ts";
import daysConstant from "../../constants/days.ts";

interface Props {
  fieldValue: string;
  setFieldValue: Dispatch<SetStateAction<string>>;
  forecastTypeValue: ForecastType;
  setForecastTypeValue: Dispatch<SetStateAction<ForecastType>>;
  days: number;
  setDays: Dispatch<SetStateAction<number>>;
}

export default function HomeForm({
  fieldValue,
  setFieldValue,
  forecastTypeValue,
  setForecastTypeValue,
  days,
  setDays,
}: Props) {
  const showDaysField = forecastTypeValue === Forecast.forecast;

  return (
    <Card sx={{ display: "flex", flexGrow: 1, m: 1, p: 1 }} variant="outlined">
      <TextField
        label="Weather query"
        value={fieldValue}
        handleChange={(e) => setFieldValue(e.target.value)}
      />
      <Select
        options={forecastOptions}
        label="Type of forecaset"
        value={forecastTypeValue}
        handleChange={(e) =>
          setForecastTypeValue(e.target.value as ForecastType)
        }
      />
      {showDaysField && (
        <Select
          options={daysConstant}
          label="Type of forecaset"
          value={days}
          handleChange={(e) => setDays(e.target.value as number)}
        />
      )}
    </Card>
  );
}
