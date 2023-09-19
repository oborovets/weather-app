export const mapTodayWeather = (obj: any) => ({
  place: `${obj?.location?.country} - ${obj?.location?.name}`,
  timezone: obj?.location?.tz_id,
  localtime: obj?.location?.localtime,
  condition: obj?.current?.condition?.text,
  temperature: obj?.current?.feelslike_c,
});

export const mapForecastWeather2 = (obj: any) => ({
  averageTemp: obj?.day?.avgtemp_c,
  condition: obj?.day?.condtion?.text,
  chanceToRain: obj?.day?.daily_chance_of_rain,
  date: obj?.date,
});
