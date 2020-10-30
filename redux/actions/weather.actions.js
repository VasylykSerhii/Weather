import Api from '../../pages/api/api.js';
import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL,
} from '../actionTypes';

const getWeather = country => async (dispatch) => {
  dispatch({
    type: GET_WEATHER_REQUEST,
  });
  try {
    const weather = await Api.getWeather(country).then(
      res => res.data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      )
    dispatch({
      type: GET_WEATHER_SUCCESS,
      payload: weather,
    });
  } catch (err) {
    dispatch({
      type: GET_WEATHER_FAIL,
      payload: err,
      error: true,
    });
  }
};

export default getWeather;
