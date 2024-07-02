import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div className="search">
      <FontAwesomeIcon icon={faSearch} className="fa-search" />
      <input
        type="text"
        className="form-control search__input"
        placeholder="Search"
      />
    </div>
  );
}

export default Search;
