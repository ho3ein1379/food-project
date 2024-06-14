import {useState} from "react";
import type {ChangeEvent, FormEvent} from "react";

interface Props {
    city: string,
    CallWeatherApi: Function
}

function SearchForm({city, CallWeatherApi}: Props) {

    const [nameState, setNameState] = useState<string>(city)

    const cityNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNameState(e.target.value);
    }

    const FormSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        CallWeatherApi(nameState);
    }

    return (
        <form onSubmit={FormSubmitHandler}>
            <input className="border rounded py-2 px-4" name="cityName" type="text" placeholder="cityName" onChange={cityNameHandler} value={nameState}/>
            <input className="bg-primary py-2 px-4 ml-3 text-white rounded" name="search" type="submit" value="Submit"/>
        </form>
    );
}

export default SearchForm;