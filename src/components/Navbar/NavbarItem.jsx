import React from "react";

const NavbarItem = (props) => {
  return (
    <li className="nav-item">
      <p className="nav-link active" aria-current="page">
        {props.texto}
      </p>
    </li>
  );
};

export default NavbarItem;
