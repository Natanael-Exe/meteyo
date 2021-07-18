import { Link } from "react-router-dom";
import "./topbar.css";
import Search from "./Search";

function index() {
  return (
    <div className="topbar container">
      <div className="topbar__menu">
        <h1 className="topbar__menu--logo">Weather App</h1>
        <Link to="/favorites" className="topbar__menu--link hover:underline">
          Favorites
        </Link>
      </div>
      <div className="topbar__search">
        <Search />
      </div>
    </div>
  );
}

export default index;
