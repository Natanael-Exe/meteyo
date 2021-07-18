import { useContext, useState, FC } from "react";
import { globalContext } from "../../Context/GloablContext";

const Search: FC = () => {
  const [city, setCity] = useState<string>("");
  const { fetchCityWeather, state } = useContext(globalContext);
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.status !== "loading" && city) fetchCityWeather(city);
  };
  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="search__input"
      />
      <button type="submit" className="search__button">
        {state.status === "loading" ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default Search;
