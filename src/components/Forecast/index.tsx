import "./forecast.css"
import { PlusCircleIcon, CloudIcon, MapIcon } from "@heroicons/react/solid";
import { useContext, useEffect, useState } from "react";
import { globalContext } from "../../Context/GloablContext";

const Index = () => {
  const { state, addToList } = useContext(globalContext);
  const [error, setError] = useState<string>("");
  const isFetched = Object.keys(state?.cityWeather).length > 0;
  const currentTemperature: string | undefined = state.cityWeather?.main?.temp;

  //if this city is allready in the list
  const isAlreadyAdded: boolean =
    state.favorites.filter((city: any) => city.id === state.cityWeather.id)
      .length > 0;

  let date = new Date().toISOString().slice(0, 10);
  // let tm = new Date().getTime()-7200;
  // console.log(new Date(tm).toUTCString());
  //console.log(state);

  const mainWeather: string | undefined =
    Object.keys(state.cityWeather).length && state.cityWeather.weather[0].main;

  const weatherDescription: string | undefined =
    Object.keys(state.cityWeather).length &&
    state.cityWeather.weather[0].description;

  const weatherIcon: string | undefined =
    Object.keys(state.cityWeather).length && state.cityWeather.weather[0]?.icon;

  const cityName: string | undefined = state.cityWeather?.name;

  const countryName: string | undefined = state.cityWeather?.sys?.country;
  const timezone: number | undefined = state.cityWeather?.timezone / 3600;
  const cityMapImg:
    | string
    | undefined = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${state.cityWeather?.coord?.lon},${state.cityWeather?.coord?.lat},12,0,60/400x400?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`;

  useEffect(() => {
    setError(state.errorMessage);
    setTimeout(() => setError(""), 3000);
  }, [state.errorMessage]);

  return (
    <div>
      {error && (
        <p className="error">
          {error}
        </p>
      )}
      <div className="forecast__section">
        {/* section title  */}
        <h2 className="text-lg font-semibold">Weather Forecast</h2>
        {/* add to list button */}
        {isFetched && !isAlreadyAdded && (
          <button
            className="add_btn"
            onClick={() => addToList(state.cityWeather)}
          >
            <span className="flex-shrink-0 mr-2">Add to list</span>{" "}
            <PlusCircleIcon className="flex-shrink-0 w-4 h-4" />
          </button>
        )}
      </div>
      <div className="cardForecast">
        {/* current temperature and date */}
        <div className="cardForecast__row">
          <div className="text-left">
            <h4 className="font-medium">Today</h4>
            <p className="cardForecast__date">{date}</p>
            <div className="flex items-center my-3">
              {currentTemperature ? (
                <img
                  src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
                  alt="icon code"
                  className="w-14"
                />
              ) : (
                <CloudIcon className="cardForecast--cloudIcon" />
              )}
              <p className="cardForecast__tempRow">
                {currentTemperature ? (
                  <span className="mx-2">{currentTemperature}</span>
                ) : (
                  <span className="mx-2">-</span>
                )}
                <sup className="text-gray-500 text-xl">&deg;C</sup>
              </p>
            </div>
            <p className="text-lg">{mainWeather ? mainWeather : "--"}</p>
            <p className="text-sm text-gray-400">
              {weatherDescription ? weatherDescription : "--"}
            </p>
          </div>
          {/* city,country and timezone */}
          <div className="md:text-left text-right">
            <div>
              <p className="font-medium">Country</p>
              <p className="cityInfo">
                {countryName ? countryName : "--"}
              </p>
            </div>

            <div className="my-4">
              <p className="font-medium">City</p>
              <p className="cityInfo">
                {cityName ? cityName : "--"}
              </p>
            </div>

            <div>
              <p className="font-medium">Timezone</p>
              <p className="cityInfo">
                {timezone
                  ? `UTC/GMT  ${
                      Math.sign(timezone) === 1 ? "+" : ""
                    }${timezone} hours`
                  : "--"}
              </p>
            </div>
          </div>
        </div>
        {/* map display the city location */}
        <div className="mt-6 md:mt-0">
          {cityName ? (
            <img
              src={cityMapImg}
              className="cityMap"
              alt="city img"
            />
          ) : (
            <div className="imagePlaceholder">
              <MapIcon className="text-white md:w-24 w-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
