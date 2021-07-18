import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CityCard from "../components/CityCard/index";

import { globalContext } from "../Context/GloablContext";

function Favorites() {
  const { state } = useContext(globalContext);

  useEffect(() => {
    document.title = "Favorites Page";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 ">
      <div className="bg-white shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <h1 className=" md:text-2xl text-xl ">Weather App</h1>
            <h2 className=" text-lg">My favorite list</h2>
            <Link to="/" className="topbar__menu--link hover:underline">
              Search
            </Link>
          </div>
        </div>
      </div>
      <main className="flex-1 container my-6">
        {state.favorites.length ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {state.favorites.map((city: any) => (
              <CityCard city={city} key={city.id} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-80vh">
            <h4>Your list is empty</h4>
          </div>
        )}
      </main>
    </div>
  );
}

export default Favorites;
