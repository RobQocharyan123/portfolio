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

  return (
    <>
      <div className="header">
        <div className="header_one">
          <Link to="/">{/* <img src={logo} alt="" /> */}</Link>
        </div>

        <div className="header_two">
          <nav>
            <CustomLink to={"/"}>Home</CustomLink>
            <CustomLink to={"/about"}>About</CustomLink>
            <CustomLink to={"/services"}>Services</CustomLink>
            <CustomLink to={"/work"}>Works</CustomLink>
            <CustomLink to={"/contact"}>Contact</CustomLink>
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
              <CustomLink to={"/"}>Home</CustomLink>
              <CustomLink to={"/about"}>About</CustomLink>
              <CustomLink to={"/services"}>Services</CustomLink>
              <CustomLink to={"/work"}>Workd</CustomLink>
              <CustomLink to={"/contact"}>Contact</CustomLink>
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
