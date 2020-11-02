import Layout from "../components/Layout";
import WeatherPage from "../components/WeatherPage";
import axios from "axios";

axios.interceptors.request.use((config) => {
  config.baseURL = process.env.NEXT_PUBLIC_WEATHER_API;
  config.params = config.params || {};
  config.params["APPID"] = process.env.NEXT_PUBLIC_WEATHER_KEY;
  return config;
});

export default function Home() {
  return (
    <Layout title="Home">
      <WeatherPage />
    </Layout>
  );
}
