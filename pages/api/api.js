import axios from 'axios';

const api = {
  getWeather: country => axios.get(`/data/2.5/forecast?q=${country}`)
};

export default api;