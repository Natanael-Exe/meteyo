import { createContext, useReducer, FC } from "react";
import axios, { AxiosResponse } from "axios";
import { WeatherType } from "../models/weather.interface";

// the type of the context state
export type State = {
  status: "idle" | "loading" | "success" | "error";
  errorMessage: string;
  cityWeather: WeatherType;
  favorites: WeatherType[];
};

// the initial state
const initialState: State | any = {
  status: "idle",
  errorMessage: "",
  cityWeather: {},
  favorites: [],
};

// the type of each action
type ACTIONTYPE =
  | { type: "addToList"; payload: WeatherType }
  | { type: "removeFromList"; payload: number }
  | { type: "loading" }
  | { type: "error"; payload: string }
  | { type: "success"; payload: {} };

export const globalContext = createContext(initialState);

// the reducer that handle the business logic of the application
const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    // if action type is loading change the status to loading in the state
    case "loading":
      return { ...state, status: "loading" };
    // if action type is error change the status to error in the state
    case "error":
      return {
        ...state,
        status: "error",
        errorMessage: action.payload,
        cityWeather: {},
      };
    case "success":
      // if action type is sucess change the status to sucess and add the data fetched in the state
      return { ...state, status: "success", cityWeather: action.payload };
    // add a single city in the favorites list
    case "addToList":
      if (
        state.favorites.filter(
          (city: WeatherType) => city.id === action.payload.id
        ).length > 0
      ) {
        return state;
      } else {
        return { ...state, favorites: [action.payload, ...state.favorites] };
      }

    // remove a specific city from the list
    case "removeFromList":
      const newFavorites = state.favorites.filter(
        // check if the city id provided exist in the list, if yes return all city different of this id
        (city: WeatherType) => !(city.id === action.payload)
      );
      //return the state with the modified list
      return { ...state, favorites: newFavorites };
    default:
      return state;
  }
};

const GlobalContextProvider: FC = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // fetch weather from API
  const fetchCityWeather = (city: string) => {
    dispatch({ type: "error", payload: "" });
    dispatch({ type: "loading" });
    axios
      .get<AxiosResponse<WeatherType>>(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then(({ data }) => dispatch({ type: "success", payload: data }))
      .catch((err) =>
        dispatch({ type: "error", payload: err.response?.data?.message })
      );
  };

  // City and his weather in the favorites list
  const addToList = (cityWeather: WeatherType) => {
    dispatch({ type: "addToList", payload: cityWeather });
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  };

  // remove city from the list
  const removeFromList = (id: number) => {
    dispatch({ type: "removeFromList", payload: id });
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  };

  return (
    <globalContext.Provider
      value={{ state, addToList, fetchCityWeather, removeFromList }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContextProvider;