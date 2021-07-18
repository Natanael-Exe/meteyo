import "./cityCard.css";
import { useContext } from "react";
import { globalContext } from "../../Context/GloablContext";

function Index({ city }: { city: {} | any }) {
  const { removeFromList } = useContext(globalContext);
  return (
    <div className="card">
      <div className="card__row">
        <div className="card__col">
          {/* Weather icon */}
          <img
            src={
              city
                ? `http://openweathermap.org/img/w/${city?.weather[0]?.icon}.png`
                : ""
            }
            alt="icon code"
            className="card__col--icon"
          />
          {/* current Temperature */}
          <p className="card__col--temp ">{city.main.temp}&deg;C</p>
        </div>
        {/* vertical divider */}
        {/* <div className="h-8 w-0.5 bg-gray-200" /> */}
        {/* country and city */}
        <div>
          <h4 className="text-lg font-medium truncate">{city?.name}</h4>
          <p className="text-gray-400 -mt-1">{city?.sys?.country}</p>
        </div>
      </div>
      <div className="card__footer">
        {/* city humidity */}
        <div>
          <p className="text-gray-800">humidity</p>
          <p>{city?.main?.humidity}%</p>
        </div>
        {/* vertical divider */}
        <div className="h-8 w-0.5 bg-gray-200" />
        {/* city max temperature */}
        <div>
          <p className="text-gray-800">max temp</p>
          <p className="text-center">{city?.main?.temp_max}&deg;C</p>
        </div>
        {/* vertical divider */}
        <div className="h-8 w-0.5 bg-gray-200" />
        {/* city max temperature */}
        <div>
          <p className="text-gray-800">min temp</p>
          <p>{city?.main?.temp_min}&deg;C</p>
        </div>
      </div>
      <button className="card__btn" onClick={() => removeFromList(city?.id)}>
        Remove from list
      </button>
    </div>
  );
}

export default Index;
