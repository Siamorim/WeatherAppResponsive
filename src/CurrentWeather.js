import React from "react";
import "./CurrentWeather.css";
import WeatherIcon from "./WeatherIcon.js";
import WeatherUnits from "./WeatherUnits.js";

export default function CurrentWeather(props) {
  if (props.unit === "celsius") {
    return (
      <div className="WeatherAppBody">
        <div className="TempToday">
          <div className="row">
            <div className="col-6">
              <div className="float-left">
                <WeatherIcon imag={props.info.icon} />
              </div>
              <ul>
                <li>
                  <div className="text-capitalize">
                    {props.info.description}
                  </div>
                </li>
                <li>
                  <WeatherUnits
                    celsius={props.info.temperature}
                    celsiusFeelsLike={props.info.feelsLike}
                    unit={props.unit}
                    setUnit={props.setUnit}
                  />
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="WeatherConditions">
                <ul>
                  <li>🌡Feels like: {Math.round(props.info.feelsLike)}º</li>
                  <li>🌢 Humidity: {Math.round(props.info.humidity)}%</li>
                  <li>💨Wind: {Math.round(props.info.wind)} km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherAppBody">
        <div className="TempToday">
          <div className="row">
            <div className="col-6">
              <div className="float-left">
                <WeatherIcon imag={props.info.icon} />
              </div>
              <ul>
                <li>
                  <div className="text-capitalize">
                    {props.info.description}
                  </div>
                </li>
                <li>
                  <WeatherUnits
                    celsius={props.info.temperature}
                    celsiusFeelsLike={props.info.feelsLike}
                    unit={props.unit}
                    setUnit={props.setUnit}
                  />
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="WeatherConditions">
                <ul>
                  <li>
                    🌡Feels like:{" "}
                    {Math.round((props.info.feelsLike * 9) / 5 + 32)}º
                  </li>
                  <li>🌢 Humidity: {Math.round(props.info.humidity)}%</li>
                  <li>💨Wind: {Math.round(props.info.wind)} km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
