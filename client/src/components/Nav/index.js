import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">React Reading List Powered by Google Books</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className={"nav-link" + ((pathname === "/search" || pathname === "/") ? " active" : "")} href="/search">Search</a>
        </li>
        <li className="nav-item">
          <a className={"nav-link" + ((pathname === "/books") ? " active":"")} href="/books">Saved Books</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
