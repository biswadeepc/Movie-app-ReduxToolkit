import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setSearchText(e.target.value);
  };
  const onClickHandler = (e) => {
    if (searchText.trim().length === 0) {
      alert("Please provide a search text to search..");
      return;
    }
    navigate(`/${searchText}`);
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="search-input">
        <input
          type="text"
          placeholder="Search with a movie name"
          id="movieName"
          name="movieName"
          value={searchText}
          onChange={onChangeHandler}
        ></input>
        <button className="search-btn" onClick={onClickHandler}>
          Search
        </button>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
