
import ForecastItem from "@/components/Weather/ForecastItem";
import type {Daily, ForecastResponse} from "@/types/api/ForecastResponse";

interface Props {
    forecastState: ForecastResponse
}

function ForecastList({forecastState}: Props) {
    return (
        <div className="grid grid-cols-8">
            {
                forecastState.daily.map((item: Daily) => {
                    return <ForecastItem item={item}/>
                })

            }
        </div>
    );
}

export default ForecastList;

