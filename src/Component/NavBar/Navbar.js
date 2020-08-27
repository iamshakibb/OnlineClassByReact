import React from "react";
import "./Navbar.css";
import logo from "../../images/reading.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = (props) => {
  return (
    <div className="nav_banner">
      <header className="container">
        <nav className="navbar fixed-top navbar-expand-md">
          {/* logo */}
          <Link className="navbar-brand link" to="hero_section" smooth={true} duration={2000}>
            <img src={logo} alt="" className="logo" />
            <span>Online Class</span>
          </Link>

          {/* mobile icon / shopping cart and handbarger icon */}
          <div className="mobile_btn">
            <span className="shopping_cart mobile">
              <Link className="link" to="cart_section" smooth={true} duration={2000}>
                <FontAwesomeIcon icon={faShoppingBag} className="icon shopping_bar" />
                <span>{props.cart.length}</span>
              </Link>
            </span>
            <button className="navbar-toggler faBars" type="button" data-toggle="collapse" data-target="#mynav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
                <FontAwesomeIcon icon={faBars} className="icon" />
              </span>
            </button>
          </div>
          {/* nav menu */}
          <div className="collapse navbar-collapse" id="mynav">
            <ul className="navbar-nav ml-auto text-center">
              <li className="nav-item active">
                <Link className="nav-link home_btn link" to="hero_section" smooth={true} duration={2000}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link courses_btn link" to="courses" smooth={true} duration={2000}>
                  Courses
                </Link>
              </li>
            </ul>
          </div>
          {/* shopping cart icon */}
          <span className="shopping_cart desktop">
            <Link className="link" to="cart_section" smooth={true} duration={2000}>
              <FontAwesomeIcon icon={faShoppingBag} className="icon shopping_bag" />
              <span>{props.cart.length}</span>
            </Link>
          </span>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
