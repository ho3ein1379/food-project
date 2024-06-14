import type { ForecastResponse } from "@/types/api/ForecastResponse";
import type { WeatherResponse } from "@/types/api/WeatherResponse";

const token = "3dce9b1c66837262a25b3f448d354a76";
const baseUrl = "https://api.openweathermap.org/data/2.5/";

interface WeatherProps {
    city: string;
}

interface LatLonProps {
    lat: number;
    lon: number;
}

export async function WeatherApi({ city }: WeatherProps): Promise<WeatherResponse> {
    const response = await fetch(baseUrl + `weather?q=${city}&appid=${token}&units=metric`);
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    return await response.json();
}

export async function ForecastApi({ lat, lon }: LatLonProps): Promise<ForecastResponse> {
    const response = await fetch(baseUrl + `onecall?lat=${lat}&lon=${lon}&appid=${token}&units=metric`);
    if (!response.ok) {
        throw new Error('Failed to fetch forecast data');
    }
    return await response.json();
}



/*Api Token:
    3dce9b1c66837262a25b3f448d354a76

Base Url:

    https://api.openweathermap.org/data/2.5/

        Weather Api:
    https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=3dce9b1c66837262a25b3f448d354a76&units=metric

        Forecast Api:
    https://api.openweathermap.org/data/2.5/onecall?lat=35.6944&lon=51.4215&appid=3dce9b1c66837262a25b3f448d354a76&units=metric

 */