import React from "react";
import Style from "./Style";
import { Link } from "react-router-dom";
import Twitter from "../../assets/icons/Twitter.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import Pinterest from "../../assets/icons/Pinterest.svg";
import Reddit from "../../assets/icons/Reddit.svg";
import Youtube from "../../assets/icons/Youtube.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import Logo from "../../assets/icons/Icon.svg";
import MagnifyingGlass from "../../assets/icons/MagnifyingGlass.svg";
import ShoppingCartSimple from "../../assets/icons/ShoppingCartSimple.svg";
import Heart from "../../assets/icons/Heart.svg";
import User from "../../assets/icons/User.svg";

const Header = () => {
  return (
    <Style>
      <div className="container">
        <div className="content_header">
          <div className="header-top df justify-content-space-between">
            <span className="welcome">
              Welcome to Clicon online eCommerce store.
            </span>
            <div className="header_top-item df">
              <ul className="list--top df ">
                <li>Follow us:</li>
                <li>
                  <Link>
                    <img src={Twitter} alt="" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src={Facebook} alt="" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src={Pinterest} alt="" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src={Reddit} alt="" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src={Youtube} alt="" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src={Instagram} alt="" />
                  </Link>
                </li>
              </ul>
              <div className="select df">
                <section>
                  <option value="">Eng</option>
                </section>
                <section>
                  <option value="">USD</option>
                </section>
              </div>
            </div>
          </div>
          <div className="header_main">
            <h1>
              <Link className="logo">
                <img src={Logo} alt="" />
                CLICON
              </Link>
            </h1>
            <div className="search">
              <input type="text" placeholder="Search for anything..." />
              <button>
                <img src={MagnifyingGlass} alt="" />
              </button>
            </div>
            <div className="handle">
              <ul>
                <li>
                  <a href="">
                    <img src={ShoppingCartSimple} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={Heart} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={User} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
};

export default Header;
