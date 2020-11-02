import React, { useMemo } from "react";
import css from "./style.module.scss";
import moment from "moment";

function WeatherItem({ data }) {
  const [day, date] = useMemo(
    () => [
      moment(data.dt_txt).format("dddd"),
      moment(data.dt_txt).format("MMM Do YY"),
    ],
    [data.dt_txt]
  );

  const temp = useMemo(() => `${(data.main.temp - 273.15).toFixed(1)}°C`, [
    data.main.temp,
  ]);

  return (
    <div className={css.weatherItem}>
      <h3 className={css.title}>
        <span className={css.day}>{day}</span>
        <span className={css.date}>{date}</span>
      </h3>
      <img
        className={css.img}
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
      />
      <p className={css.temp}>{temp}</p>
      <p className={css.status}>{data.weather[0].main}</p>
    </div>
  );
}

export default WeatherItem;
