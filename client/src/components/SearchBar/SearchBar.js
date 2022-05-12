import { useState } from "react";
import classes from "./SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState(null);
  return (
    <div className="container m-auto">
      <div className="flex ml-16 mr-16 rounded overflow-hidden">
        <div className="flex-1">
          <input
            className="w-full pt-2 pb-2 pl-4 pr-4 border-none outline-0"
            type="text"
            placeholder="Bạn muốn tìm phim gì"
            name="search"
            onChange={(e) => {
              setSearch(e.target.value.trim());
            }}
          ></input>
        </div>
        <div>
          <Link to={`/search/${search}`}>
            <button
              className={`${classes.searchBarButton} pt-2 pb-2 pl-4 pr-4 text-white w-full bg-red-600 border-none outline-0 font-bold`}
            >
              Tìm kiếm
            </button>
            <div
              className={`${classes.searchBarIcon} bg-red-600 h-full pl-2 pr-2 items-center justify-center`}
            >
              <AiOutlineSearch className="text-white font-bold text-2xl"></AiOutlineSearch>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
