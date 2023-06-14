import axios from "axios";

const apiKey = "310582609f57b0ac7cc1acdc949bcac5";

const getData = async (url, onSuccess, onFailure) => {
  try {
    const response = await axios.get(url);
    onSuccess(response);
  } catch (error) {
    console.log("error = ", error);
    onFailure(error);
  }
};

export const getWeather = (cityName, onSuccess, onFailure) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  getData(url, onSuccess, onFailure);
};
