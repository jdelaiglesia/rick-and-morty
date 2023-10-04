import SearchBar from "./SearchBar";
import RandomCharacter from "./RandomCharacter";
import { Link, NavLink } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav>
      <NavLink
        to="/"
        className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover px-2"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover px-2"
      >
        About
      </NavLink>
      <div class="d-flex justify-content-center">
        <SearchBar onSearch={props.onSearch} />
        <RandomCharacter addRandomCharacter={props.addRandomCharacter} />
      </div>
    </nav>
  );
}
