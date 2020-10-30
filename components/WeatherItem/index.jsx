import React from 'react'
import css from './style.module.scss'
import moment from 'moment';

function WeatherItem({ data }) {
  return (
    <div className={css.weatherItem}>
      <h3 className={css.title}>
        <span className={css.day}>{moment(data.dt_txt).format('dddd')}</span>
        <span className={css.date}>{moment(data.dt_txt).format("MMM Do YY")}</span>
      </h3>
      <img 
        className={css.img} 
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
      />
      <p className={css.temp}>{`${(data.main.temp - 273.15).toFixed(1)}°C`}</p>
      <p className={css.status}>{data.weather[0].main}</p>
    </div>
  )
}

export default WeatherItem