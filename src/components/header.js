import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import logo from "./images/hamburger.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function header() {
  return (
    <div>
      <Router>
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              <img
                src={logo}
                alt=""
                width="30"
                height="24"
                class="d-inline-block align-text-top"
              />
              <span class="brandName">Burger Store</span>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/menu">
                    Menu
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Page
                  </Link>
                  <ul class="dropdown-menu">
                    <li>
                      <Link class="dropdown-item" to="#">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="#">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="#">
                        Our Mission
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
    </div>
  );
}
