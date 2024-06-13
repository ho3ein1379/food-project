import SearchForm from "@/components/SearchForm";
import WeatherInfo from "@/components/WeatherInfo";
import ForecastList from "@/components/ForecastList";
import {useState} from "react";

interface Props {
    city: string;
}

function Weather({city}: Props) {
    const [weatherState, setWeatherState] = useState<Weather>({
        city: city,
        humidity: 0,
        wind: 0,
        description: "",
        icon: "",
        daily: []
    });

    // const CallWeatherApi = () => {
    //
    // }

    return (
        <>
            <SearchForm/>
            <WeatherInfo/>
            <ForecastList/>
        </>
    );
}

export default Weather;