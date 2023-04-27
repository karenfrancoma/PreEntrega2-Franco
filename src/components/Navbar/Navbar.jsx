import React from "react";
import NavbarItem from "./NavbarItem";
import CartWidget from "./CartWidget";

const Navbar = () => {
  const items = ["Inicio", "Productos", "Sobre Nosotros", "Contacto"];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <p className="navbar-brand" href="#">
          DE LA USA
        </p>
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
            {items.map?.((texto) => (
              <NavbarItem key={texto} texto={texto} />
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
