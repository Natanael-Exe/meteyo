import { useContext } from "react";
import { globalContext } from "../../Context/GloablContext";
import './highlights.css'
import { formatTime } from "../../helpers";
import Clouds from "./Clouds";
import Humidity from "./Humidity";
import MinAndMaxTemp from "./MinAndMaxTemp";
import SunsetAndSunrise from "./SunsetAndSunrise";
import Visibility from "./Visibility";
import WindStatus from "./WindStatus";

function Index() {
  const { state } = useContext(globalContext);

  const minTemp: number | undefined = state.cityWeather?.main?.temp_min;
  const maxTemp: number | undefined = state.cityWeather?.main?.temp_max;
  const humidity: number = state.cityWeather?.main?.humidity;
  const visibility: number  = state.cityWeather?.visibility;
  const wind: number | undefined = state.cityWeather?.wind?.speed;

  const sunrise: string = formatTime(
    state.cityWeather?.sys?.sunrise,
    state.cityWeather?.timezone,
    "AM"
  );
  const sunset: string = formatTime(
    state.cityWeather?.sys?.sunset,
    state.cityWeather?.timezone,
    "PM"
  );
  const clouds: number = state.cityWeather?.clouds?.all;

  return (
    <div className="mb-10">
      <h3 className="text-lg font-semibold mt-8 mb-6">Today’s Highlights</h3>
      <div className="cardGrid">
        <MinAndMaxTemp minTemp={minTemp} maxTemp={maxTemp} />
        <WindStatus wind={wind} />
        <SunsetAndSunrise sunset={sunset} sunrise={sunrise} />
        <Humidity humidity={humidity} />
        <Visibility visibility={visibility} />
        <Clouds clouds={clouds} />
      </div>
    </div>
  );
}

export default Index;
