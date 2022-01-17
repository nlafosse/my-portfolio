import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to={"/"}>
          <h3>Naty</h3>
        </Link>
      </div>

      <div>
        <i></i>
      </div>

      <div>
        <Link to={"#"}>
          <div>Projects</div>
        </Link>
        <Link to={"#"}>
          <div>Contact Me</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
