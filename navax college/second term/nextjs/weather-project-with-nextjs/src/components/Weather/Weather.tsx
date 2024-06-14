
import SearchForm from "@/components/Weather/SearchForm";
import ForecastList from "@/components/Weather/ForecastList";
import WeatherInfo from "@/components/Weather/WeatherInfo";
import {useState} from "react";
import {WeatherApi} from "@/api/api";

interface Props {
    city: string;
}

function Weather({city}: Props) {
    const [weatherState, setWeatherState] = useState<Weather>({
        city: "",
        humidity: 0,
        wind: 0,
        description: "",
        icon: "",
        daily: []
    });

     const CallWeatherApi = async (city: string) => {
         const response = await WeatherApi({city});

         const weather: Weather = {
             city: response.name,
             wind: response.wind.speed,
             humidity: response.main.humidity,
             description: response.weather[0].description,
             icon: response.weather[0].icon,
             daily: []
         }
         setWeatherState(weather);
     }

     if (weatherState.city.length === 0){
         CallWeatherApi(city)
     }

    return (
        <div className="bg-white shadow mt-4 rounded-2xl p-8 py-16">
            <SearchForm city={city} CallWeatherApi={CallWeatherApi}/>
            <WeatherInfo weather={weatherState}/>
            <ForecastList/>
        </div>
    );
}

export default Weather;