import React, { useEffect, useRef, useState } from 'react';
import './Weather.css';
import search_Icon from '../../assets/search.png';
import clear_icon from '../../assets/clear.png';
import cloud_icon from '../../assets/cloud.png';
import drizzle_icon from '../../assets/drizzle.png';
import humidity from '../../assets/humidity.png';
import rain_icon from '../../assets/rain.png';
import snow_icon from '../../assets/snow.png';
import wind from '../../assets/wind.png';

const Weather = () => {
    const [weatherData, setWeatherData] = useState({});
    const inputReferance = useRef(null);
    const isUndefined = (city) => {
        city === 'undefined' ? true : false;
 }
    const search = async (city) => {
        if (city === '') {
            alert('Enter City Name');
            return;
        }
        try {
            const apiKey = '5b34b5f813189ece09b56aab6dfb2fa0'; 
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
            const response = await fetch(apiUrl); 
            const data = await response.json();
                if (!response.ok) {
                alert(data.message);
            }
            console.log(data);

            const icon = () => {
                if (data.weather[0].main === 'Clear') {
                    return clear_icon;
                } else if (data.weather[0].main === 'Rain') {
                    return rain_icon; 
                } else if (data.weather[0].main === 'Snow') {
                    return snow_icon;
                } else if (data.weather[0].main === 'Clouds') {  // Note: 'Clouds' instead of 'Cloud'
                    return cloud_icon;
                } else if (data.weather[0].main === 'Drizzle') {
                    return drizzle_icon;
                } else {
                    return clear_icon;
                }
            };

            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.round(data.main.temp),
                location: data.name, 
                theIcon: icon()
            });

             
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };
    useEffect(() => {
        search("Antarctica");
    }, []);
    const counter = useRef(null);
    return (
        <div className='weather-container'>
            <div className="search-bar">
                <input type="text" placeholder='Search...' ref={inputReferance} />
                <img src={search_Icon} alt="" onClick={() => search(inputReferance.current.value)}/>
            </div>
            {weatherData.theIcon && (
                <img src={weatherData.theIcon} alt="" className="weather-state" />
            )}
            <div className="weather-informations">
                <div className="city">
                    <p className='degrees'>{weatherData.temperature}°C</p>
                    <p className='city-Name'>{weatherData.location}</p>
                </div>
                <div className="advanced-Informations">
                    <div className="column1">
                        <img src={humidity} alt="" />
                        <div>
                            <p>{weatherData.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className="column2">
                        <img src={wind} alt="" />
                        <div>
                            <p>{weatherData.windSpeed} km/h</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
            <span>Incorect city name</span>
           
        </div>
    );
}

export default Weather;
