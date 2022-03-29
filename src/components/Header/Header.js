import React from "react";
import logo from "../../images/10mslogo-svg.svg";
import { FaBars, FaSignInAlt } from "react-icons/fa";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed w-full flex flex-wrap items-center justify-between px-8 py-3 bg-green-200 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full  flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img
              style={{ width: "130px" }}
              className="img-fluid p-1"
              src={logo}
              alt=""
            />
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a className="" href="#pablo">
                  <button class="bg-gray-600  flex gap-2 items-center hover:bg-white hover:text-red-400 hover:outline-green-600	 text-white font-bold py-2 px-4 rounded">
                    <FaSignInAlt /> Log in
                  </button>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
