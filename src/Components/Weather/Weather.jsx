import {useCallback, useState} from "react";
import Input from "./Input";

export default function Weather () {
    const [icon, setIcon] = useState('02d');
    const [q, setQ] = useState('London');
    const [weatherData, setWeatherData] = useState(null);

    const APPID = 'f953a91cfb30c44995dd52bb97a21548';
    const API_ROOT = `https://api.openweathermap.org/data/2.5/weather`;
    const ICON_URL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

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

        makeApiRequest(`${API_ROOT}`, {q, APPID}).then(data => {
            if (!data) {
                return;
            }

            setWeatherData(data);
            setIcon(data.weather[0].icon);
        })
    }, [q, makeApiRequest])

    return (
        <div className="weather-body">
            <Input value={q} onEnter={loadWeather} onChange={setQ}/>
            <div className="weather">
                <img src={ICON_URL}/>
            </div>
        </div>
    )
}