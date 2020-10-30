import React from 'react'
import Search from '../Search'
import WeatherItem from '../WeatherItem'
import css from './style.module.scss'
import { useSelector } from 'react-redux';
import selectWeather from '../../redux/selectors/weatherSelectors'


function WeatherPage() {
  const weatherData = useSelector(selectWeather);
  return (
    <div className={css.weatherPage}>
      <Search id={0} />

      {weatherData.error 
      ? <p className={css.error}>{weatherData.errMsg}</p>
      : <div className={css.weatherWrap}>
        {
          weatherData.data && 
          weatherData.data.map((item,idx) => (
            <WeatherItem key={idx} data={item}/>
          ))
        }
      </div>
      }
    </div>
  )
}

export default WeatherPage