import React from "react";
import CartWidget from "./CartWidget";
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {

  const {navbar_items} = props

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <NavLink to='/' className={"navbar-brand nav-link"} href="#">
          DE LA USA
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navbar_items.map?.(({path,name}, index) => (
              <li key={index}>
                <NavLink className={'nav-link'} to={path}>{name}</NavLink>
              </li>
            ))}
            <CartWidget />
            <li className="nav-item">
              <p className="nav-link active" aria-current="page">
                1
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
