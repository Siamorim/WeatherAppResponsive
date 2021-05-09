import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WeatherApp.css";
import Weather from "./Weather.js";

export default function weatherApp() {
  return (
    <div className="container-fluid">
      <div className="card">
        <Weather defaultCity="Lisbon" />
        <div className="title">
          The
          <div className="titleSpace">Weather</div>
        </div>
      </div>
      <footer className="code">
        <span> Open-source code by Sílvia Amorim, on </span>
        <a
          href="https://github.com/Siamorim/reactshecodesproject"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <span> and hosted on </span>
        <a
          href="https://angry-poincare-168aad.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
