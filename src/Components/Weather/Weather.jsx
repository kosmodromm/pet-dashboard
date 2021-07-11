import {useCallback, useMemo, useState} from "react";
import Input from "./Input";
import morningSky from './img/sky_morning.jpg';
import daySky from './img/sky_day.jpg';
import eveningSky from './img/sky_evening.jpg';
import nightSky from './img/sky_night.jpg';

const APPID = 'f953a91cfb30c44995dd52bb97a21548';
const API_ROOT = `https://api.openweathermap.org/data/2.5/weather`;

export default function Weather () {
    const [icon, setIcon] = useState('02d');
    const [q, setQ] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const iconUrl = useMemo(() => `http://openweathermap.org/img/wn/${icon}@2x.png`, [icon]);

    const makeApiRequest = useCallback((url, params) => {
        const query = new URLSearchParams(params);

        return fetch(`${url}?${query}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Not 2xx response")
                } else {
                    return response.json()
                }
            })
            .catch( err => console.log(err.message))
    }, [])

    const loadWeather = useCallback(() => {
        if (!q) {
            return;
        }

        makeApiRequest(`${API_ROOT}`, {q, APPID})
            .then(data => {

            if (!data) {
                return;
            }

            setWeatherData(data);
            setIcon(data.weather[0].icon);
        })
    }, [q, makeApiRequest])

    const getIconAlt = useMemo(() => {
        if (!weatherData) {
            return "no available info";
        } else {
            return weatherData.weather[0].description
        }
    }, [weatherData])

    const getCityName = useMemo(() => {
        if (!weatherData) {
            return "";
        } else {
            return weatherData.name;
        }
    }, [weatherData])

    const addZero = (value) => {
       return value < 10 ? `0${value}` : value;
    }

    const getCurrentTimeUTC = useMemo(() =>
    {
        let tmLoc = new Date();
        return tmLoc.getTime() + tmLoc.getTimezoneOffset() * 60000;
    }, [])

    const setBackground = useMemo(() => {
        if (!weatherData) {
            return daySky;
        }

        let hour = new Date(getCurrentTimeUTC + weatherData.timezone * 1000).getHours();
        if (hour > 0 && hour < 5) {
            return nightSky;
        } else if (hour < 12) {
            return morningSky;
        } else if (hour < 18) {
            return daySky;
        } else {
            return eveningSky;
        }
    }, [getCurrentTimeUTC, weatherData])

    const getDate = useMemo(() => {
        if (!weatherData) {
            return "";
        } else {
            let date = new Date(getCurrentTimeUTC + weatherData.timezone * 1000);
            return `${addZero(date.getHours())}:${addZero(date.getMinutes())} • ${addZero(date.getDate())}/${addZero(date.getMonth())}`;
        }
    }, [weatherData, getCurrentTimeUTC])

    const getTemp = useMemo(() => {
        if (!weatherData) {
            return "";
        } else {
            return `${Math.round(weatherData.main.temp - 273.15)}°C`;
        }
    }, [weatherData])

console.log(weatherData);
    return (
        <div className="weather-body" style={{background:`url(${setBackground})`}}>
            <Input value={q} onEnter={loadWeather} onChange={setQ}/>
            <div className="weather">
                <div className='weather-info'>
                    <p className='weather-city'>{getCityName}</p>
                    <p className='weather-date'>{getDate}</p>
                    <p className='weather-temp'>{getTemp}</p>
                </div>
                <div className='weather-icon'>
                    <img src={iconUrl} alt={getIconAlt}/>
                </div>
            </div>
        </div>
    )
}