import React, { useEffect } from "react";
import TopBar from "../components/TopBar";
import Forecast from "../components/Forecast";
import Highlights from "../components/Highlights";

function Search() {
  useEffect(() => {
    document.title = "Search Page";
  }, []);

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <TopBar />
      </header>
      <main className="flex-auto max-w-4xl mx-4 md:mx-auto md:w-full ">
        <Forecast />
        <Highlights />
      </main>
    </div>
  );
}

export default Search;
