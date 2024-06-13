import SearchForm from "@/components/SearchForm";
import WeatherInfo from "@/components/WeatherInfo";
import ForecastList from "@/components/ForecastList";

function Weather() {
    return (
        <>
            <SearchForm/>
            <WeatherInfo/>
            <ForecastList/>
        </>
    );
}

export default Weather;