import React from "react";

export default function WeatherUnits(props) {
  function convertToFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  if (props.unit === "celsius") {
    return (
      <div>
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="units">
          {" "}
          ºC |
          <a href="/" onClick={convertToFahrenheit}>
            {" "}
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="temp">{Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={convertToCelsius}>
            {" "}
            ºC
          </a>{" "}
          | ºF
        </span>
      </div>
    );
  }
}
