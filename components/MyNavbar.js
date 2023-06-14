import Link from "next/link";
import React from "react";

const MyNavbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary fw-bold sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Next.Js
          </a>
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
            <ul class="navbar-nav m-auto mb-2 mb-lg-0 px-5 fw-bold ">
              <li class="nav-item">
                <Link href="/" class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="projects">
                  Projects
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="contact">
                  Contact Us
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
              <button class="btn btn-outline-success fw-bold" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNavbar;
