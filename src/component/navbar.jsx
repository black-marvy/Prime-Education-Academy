import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/image/BMTlogo.png";
import "./nav.css";
import { cartContext } from "../context/CartContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const { cart } = useContext(cartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const navbarScroll = () => {
      setScrolling(window.scrollY > 100);
    };
    window.addEventListener("scroll", navbarScroll);

    return () => {
      window.removeEventListener("scroll", navbarScroll);
    };
  }, []);

  const handleSponsorship = (e) => {
    e.preventDefault();

    if (location.pathname === "/sponsorship") {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
    } else {
      navigate("/sponsorship");
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  };

  const handleCart = () => {
    if (location.pathname === "/sponsorship") {
      setTimeout(() => {
        document.getElementById("cart")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      navigate("/sponsorship#cart");
      setTimeout(() => {
        document.getElementById("cart")?.scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  };
  return (
    <div>
      <nav className={scrolling ? "scroll" : "nav"}>
        <div>
          <img src={logo} alt="" />
          <span> Prime Education </span>
        </div>
        <button
          className="toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <ImCancelCircle /> : <GiHamburgerMenu />}
        </button>
        <ul
          className={menuOpen ? "nav-links open" : "nav-links"}>
          <li onClick={ () => setMenuOpen(!menuOpen)}>
            <Link to="/"> Home </Link>
          </li>
          <li onClick={ () => setMenuOpen(!menuOpen)}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={ () => setMenuOpen(!menuOpen)}>
            <Link to="/activities">Activities</Link>
          </li>
          <li onClick={ () => setMenuOpen(!menuOpen)}>
            <Link to="/registration"> Registration</Link>
          </li>
          <li onClick={ () => setMenuOpen(!menuOpen)}>
            <Link to="/sponsorship" onClick={handleSponsorship}>
              Sponsorship
            </Link>
          </li>
          <li onClick={ () => setMenuOpen(!menuOpen)}>
            <Link to="/sponsorship#cart" onClick={handleCart}>
              <i className="fa-solid fa-cart-arrow-down"></i> {cart.length}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
