import React from "react";
import WeatherInformation from "../components/WeatherInformation";
import SearchBar from "../components/SearchBar";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import thunderstorm from "../assets/images/thunderstorm.jpg";
import rain from "../assets/images/rain.jpg";
import snow from "../assets/images/snow.jpg";
import clear from "../assets/images/clear.jpg";
import cloud from "../assets/images/cloud.jpg";
import defaultImg from "../assets/images/default-background.jpg";
import humidityIcon from "../assets/images/humidity.png";
import windIcon from "../assets/images/wind.png";
import "../assets/css/weather.css";

const WeatherData = () => {
  const { weatherData, loading, setSearch } = WeatherInformation();

  let icon = weatherData.weather && weatherData.weather[0]?.icon;

  let weatherId = weatherData.weather && weatherData.weather[0]?.id;

  let weatherIcon = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

  const weatherBackground = (weatherId) => {
    let firstDigitStr = String(weatherId)[0];
    let firstDigit = Number(firstDigitStr);
    let background = defaultImg;

    if (weatherId !== undefined) {
      if (firstDigit === 2) {
        background = thunderstorm;
      } else if (firstDigit === 3 || firstDigit === 5) {
        background = rain;
      } else if (firstDigit === 6) {
        background = snow;
      } else if (firstDigit === 7 || weatherId !== 800) {
        background = cloud;
      } else if (weatherId === 800) {
        background = clear;
      }
    }

    return background;
  };

  const backgroundStyle = {
    minHeight: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition: "0.4 ease-out",
  };

  return (
    <React.Fragment>
      <div
        style={{
          ...backgroundStyle,
          backgroundImage: `url("${weatherBackground(weatherId)}")`,
        }}
      >
        <div>
          <Col md={12}>
            <h3 className="weather-title">Weather App</h3>
          </Col>

          <SearchBar
            placeholder={"Search city"}
            searchCity={(city) => setSearch(city)}
          />
        </div>

        {loading ? (
          <div className="d-flex justify-content-center mt-4">
            <Spinner variant="primary" />
          </div>
        ) : weatherData.response?.status === 404 ? (
          <div className="d-flex justify-content-center mt-4">
            <p className="weather-error-info">
              City not found, please try again
            </p>
          </div>
        ) : weatherData.response?.status === 400 ? (
          <div className="d-flex justify-content-center mt-4">
            <p className="weather-error-info">
              Nothing to geocode, please try again
            </p>
          </div>
        ) : (
          <div className="container mt-4">
            <div className="row justify-content-center mb-8">
              <div className="col-12 col-md-12 col-lg-8 mb-0 mb-lg-0">
                <Card
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    border: "none",
                  }}
                >
                  <Card.Body className="weather-card">
                    {weatherData && (
                      <div>
                        <div style={{ marginBottom: "40px" }}>
                          <h4>{weatherData.name}</h4>
                          <p
                            style={{
                              textTransform: "capitalize",
                            }}
                          >
                            {weatherData.weather &&
                              weatherData.weather[0].description}
                          </p>
                        </div>
                        <Row className="mb-4">
                          <Col>
                            <h2>
                              {Math.round(
                                weatherData.main && weatherData.main.temp
                              )}
                              °C
                            </h2>
                            <p>
                              Feels like{" "}
                              {Math.round(
                                weatherData.main && weatherData.main.feels_like
                              )}
                              °C
                            </p>
                          </Col>
                          <Col>
                            <img
                              src={weatherIcon}
                              className="weather-icon"
                              alt="weather-icon"
                            />
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            <Row>
                              <Col sm={4}>
                                <img
                                  src={humidityIcon}
                                  alt="humidity-icon"
                                  className="weather-details-icon"
                                />
                              </Col>
                              <Col>
                                <div className="weather-humidity">
                                  <p>
                                    {weatherData.main &&
                                      weatherData.main.humidity}
                                    %
                                  </p>
                                  <p>Humidity</p>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                          <Col>
                            <Row>
                              <Col sm={4}>
                                <img
                                  src={windIcon}
                                  alt="wind-icon"
                                  className="weather-details-icon"
                                />
                              </Col>
                              <Col>
                                <div className="weather-wind">
                                  <p>
                                    {weatherData.wind && weatherData.wind.speed}{" "}
                                    m/s
                                  </p>
                                  <p>Wind Speed</p>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default WeatherData;
