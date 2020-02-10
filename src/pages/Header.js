import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h1 className="my-0 mr-md-auto">Bookmark Manager</h1>
        </div>
      </Link>
    </header>
  );
};

export default Header;
