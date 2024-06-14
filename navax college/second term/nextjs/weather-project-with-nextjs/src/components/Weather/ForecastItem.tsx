import type {Daily} from "@/types/api/ForecastResponse";
import WeatherIcon from "@/components/Weather/WeatherIcon";

interface Props {
    item: Daily
}

function ForecastItem({item}: Props) {

    let weatherDate = new Date(item.dt * 1000).toLocaleString("en-US", {weekday: "long"});

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="mb-3">{weatherDate}</div>
            <WeatherIcon icon={item.weather[0].icon} size={36}/>
            <div className="mt-3">
                <span className="text-primary">{item.temp.min}</span>
                -
                <span className="text-primary">{item.temp.max}</span>
            </div>
        </div>
    );
}

export default ForecastItem;