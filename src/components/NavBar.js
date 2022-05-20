import React, { useState } from "react";
import Logo from "../image/logo.png";
import SearchIcon from "../image/search.png";

const NavBar = () => {
  const [searchItem, setSearchItem] = useState("");

  return (
      <div className="nav-bar">
        <img src={Logo} height="30px" className="logo"/>
        <div className="input-area">
          <img src={SearchIcon} height="20px" />
          <input type="text" className="search-box" onChange={(event) => setSearchItem(event.target.value)} />
        </div>
        <span className="nav-button">커뮤니티</span>
        <span className="nav-button">카테고리</span>
        <span className="nav-button">로그인</span>
      </div>
  );
};

export default NavBar;
