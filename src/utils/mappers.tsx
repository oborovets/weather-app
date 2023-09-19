export const mapWeather = (obj: any) => ({
  place: `${obj?.location?.country} - ${obj?.location?.name}`,
  timezone: obj?.location?.tz_id,
  localtime: obj?.location?.localtime,
  condition: obj?.current?.condition?.text,
  temperature: obj?.current?.feelslike_c,
});
