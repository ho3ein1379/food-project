import { useState, useEffect } from "react";
import { ForecastApi, WeatherApi } from "@/api/api";
import SearchForm from "@/components/Weather/SearchForm";
import WeatherInfo from "@/components/Weather/WeatherInfo";
import ForecastList from "@/components/Weather/ForecastList";
import type { ForecastResponse } from "@/types/api/ForecastResponse";

interface Props {
    city: string;
}

function Weather({ city }: Props) {
    const [weatherState, setWeatherState] = useState<Weather>({
        city: "",
        humidity: 0,
        wind: 0,
        description: "",
        icon: "",
        daily: []
    });

    const [forecastState, setForecastState] = useState<ForecastResponse | null>(null);

    const CallWeatherApi = async (city: string) => {
        try {
            const response = await WeatherApi({ city });

            const weather: Weather = {
                city: response.name,
                wind: response.wind.speed,
                humidity: response.main.humidity,
                description: response.weather[0].description,
                icon: response.weather[0].icon,
                daily: []
            }
            setWeatherState(weather);

            const getForecastResponse = await ForecastApi({ lat: response.coord.lat, lon: response.coord.lon });
            setForecastState(getForecastResponse);
        } catch (error) {
            console.error("Failed to fetch weather data", error);
        }
    }

    useEffect(() => {
        if (weatherState.city.length === 0) {
            CallWeatherApi(city);
        }
    }, [city, weatherState.city.length]);

    return (
        <div className="bg-white shadow mt-4 rounded-2xl p-8 py-16">
            <SearchForm city={city} CallWeatherApi={CallWeatherApi} />
            <WeatherInfo weather={weatherState} />
            {forecastState && <ForecastList forecastState={forecastState}/>}
        </div>
    );
}

export default Weather;
