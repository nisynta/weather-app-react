import { useEffect, useState } from "react";
import { getWeather } from "../api/api";

const WeatherInformation = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [search, setSearch] = useState("Jakarta");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getWeatherInformation();
  }, [search]);

  const getWeatherInformation = () => {
    setLoading(true);
    const onSuccess = (res) => {
      setLoading(false);
      setWeatherData(res.data);
    };

    const onFailure = (error) => {
      setLoading(false);
      console.log("error ", error);
      setWeatherData(error);
    };

    getWeather(search, onSuccess, onFailure);
  };

  return { weatherData, search, loading, setSearch };
};

export default WeatherInformation;
