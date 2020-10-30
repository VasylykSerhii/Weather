import {
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL
} from '../actionTypes';

const initialState = {
  data: {},
  error: true,
  errMsg: "Enter city"
};

const weatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        data: payload,
        error: false,
      };
    case GET_WEATHER_FAIL:
      return {
        ...state,
        error: true,
        errMsg: "City isn't found"
      };
    default:
      return state;
  }
};

export default weatherReducer;
