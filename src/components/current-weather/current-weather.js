import "./current-weather.css";
import React from "react";

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather-box">
            <div className="top-box">
                <div>
                    <p className="city">{data.city.toUpperCase()}</p>
                </div>
            </div>
            <div className="weather-details">
                <img alt="weather" className="weather-icons" src={`weather-icons/${data.weather[0].icon}.png`} />
                <p className="weather-description">{data.weather[0].description.toUpperCase()}</p>
            </div>
            <div className="bottom-box">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label-details">Details:</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like </span>
                        <span className="parameter-label">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind </span>
                        <span className="parameter-label">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity </span>
                        <span className="parameter-label">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure </span>
                        <span className="parameter-label">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CurrentWeather;