import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

// let arr = [
//   { id: "home", home: "HOME" },
//   { id: "about", home: "ABOUT" },
//   { id: "services", home: "SERVICES" },
//   { id: "work", home: "WORK" },
//   { id: "contact", home: "Contact" },
// ];

export const Header = () => {
  const [transition, setTransition] = useState(false);

  const onClickTransition = () => {
    setTransition(!transition);
  };

  const gyada = () => {
    setTransition(false);
  };

  return (
    <>
      <div className="header">
        <div className="header_one">
          <Link to="/">{/* <img src={logo} alt="" /> */}</Link>
        </div>

        <div className="header_two">
          <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            {/* <Link to={"/services"}>Services</Link> */}
            <Link to={"/work"}>Works</Link>
            <Link to={"/contact"}>Contact</Link>
          </nav>
        </div>

        <div className={transition ? "transform" : "responsive_navbar"}>
          <span onClick={onClickTransition} className="first"></span>
          <span onClick={onClickTransition} className="second"></span>
          <span onClick={onClickTransition} className="thrtee"></span>
        </div>
      </div>
      {transition && (
        <div className="header_responsive">
          <nav>
            <Link to={"/"} onClick={gyada}>
              Home
            </Link>
            <Link to={"/about"} onClick={gyada}>
              About
            </Link>
            {/* <Link to={"/services"} onClick={gyada}>Services</Link> */}
            <Link to={"/work"} onClick={gyada}>
              Works
            </Link>
            <Link to={"/contact"} onClick={gyada}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <>
      <Link to={to} {...props} className={isActive ? "active" : ""}>
        {children}
      </Link>
    </>
  );
}
