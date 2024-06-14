import WeatherIcon from "@/components/Weather/WeatherIcon";


interface Props {
    weather: Weather
}

function WeatherInfo({weather}: Props) {
    return (
        <div className="grid grid-cols-2 mb-12">
            <div>
                <h1 className="text-2xl">{weather.city}</h1>
                <p>{weather.description}</p>
                <p>Humidity: <span className="text-primary">{weather.humidity}</span>, Wind: <span className="text-primary">{weather.wind}</span></p>
            </div>
            <div>
                <WeatherIcon icon={weather.icon} size={56}/>
            </div>
        </div>
    );
}

export default WeatherInfo;