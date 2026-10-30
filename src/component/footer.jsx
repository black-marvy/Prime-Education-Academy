import React from "react";
import "./footer.css";
import logo from "../assets/image/BMTLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <img src={logo} alt="" />
          <h3>Prime Education Academy</h3>
        </div>
        <h5>faith, intelligence, and love</h5>
        <h6> &copy; 2023 Prime Education Academy. All rights reserved.</h6>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link to="/"> Home </Link>{" "}
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/activities"> Activities </Link>
          </li>

          <li>
            {" "}
            <Link to="/registration"> Registration </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/sponsorship"> Sponsorship </Link>{" "}
          </li>
        </ul>
      </div>
      <div>
        <h4>Contact us</h4>

        <ul>
          <li>123 Education Street,</li>
          <li>Knowledge City</li>
          <li>+234 8144 3630 77</li>
        </ul>
      </div>

      <div className="footer-links">
        <h4>Follow us</h4>

        <ul className="me">
          <li className="mes">
            <a
              href="https://www.facebook.com/share/19pLLhjh4w/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer">
               <i className="fa-brands fa-facebook">  
              </i>
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://x.com/bla_marvy?s=11"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fa-brands fa-twitter"> </i>
              <span>Twitter</span> 
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/black.marvy?srtk=Nnl0cW5kOTRnbnB3&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"> </i>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/emmanuel-marvel-6b49353b5?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fa-brands fa-linkedin"> </i>
              <span>Linkedin</span>
            </a>
          </li>
        </ul>
      </div>
      <h6>&copy; 2023 Prime Education Academy. All rights reserved.</h6>
    </footer>
  );
};

export default Footer;
