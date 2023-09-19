export enum Forecast {
  current = "current.json",
  forecast = "forecast.json",
}

export default [
  {
    value: Forecast.current,
    label: "Current Weather",
  },
  {
    value: Forecast.forecast,
    label: "Forecast Weather",
  },
];
