import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-light bg-white border-bottom "
      style={{ height: "100px", flexWrap: "nowrap" }}
    >
      <div>
        <img
          src="./img/1.jpg"
          className="nav-img rounded-lg mr-2"
          alt="hello"
        />
        <span>
          IR<strong className="text-success">EEN</strong>
        </span>
      </div>
      <div className="mx-md-4 flex-grow-1">
        <form className="w-100">
          <div className="form-group ml-2 position-relative mb-0">
            <i className="fas fa-search  search-icon"></i>
            <input
              type="text"
              className="form-control px-5 rounded-lg"
              id="formGroupExampleInput"
              placeholder="Search Here"
            />
          </div>
        </form>
      </div>

      <div className="media" dir="rtl">
        <img
          className="d-flex align-self-center  ml-md-3 rounded-lg nav-img"
          src="./img/1.jpg"
          alt="Generic placeholder"
        />
        <div className="media-body ">
          <p className="m-0">welcome</p>
          <h6>Cheristeen Lee</h6>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
