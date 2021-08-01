import React from "react";
import Progress from "./Progress";
import Step from "./Step";

const Page1 = ({ show, onclick }) => {
  return (
    <div className={show ? "container d-block" : "d-none"}>
      <div className="row bg-white mt-4 p-2" dir="rtl">
        <div className="col-12 col-md-6">
          <img
            className="d-flex align-self-center ml-5"
            src="/img/house.png"
            alt="Generic placeholder "
            style={{ height: "200px", width: "100%" }}
          />
        </div>
        <div className="media-body mt-4 col-12 col-md-6">
          <h2 className="mt-0">Address</h2>

          <p className="mb-0 mt-3 p-1">
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
          </p>
          <p className="mt-4">
            {" "}
            <strong className="strongp1">PRO Tip:</strong> ridiculus mus. leo.
            Cum sociis montes, nascetur ridiculus mus.
          </p>
          <h4 className="mt-4">Let's start with the most important quesion</h4>

          <form>
            <div className="row mt-4" dir="ltr">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label for="formGroupExampleInput">Real estate Type</label>
                  <br />
                  <div className="btn-group w-100">
                    <button
                      id="formGroupExampleInput"
                      type="button"
                      className="btn dropdown-toggle px-0 py-2 dropdown-togglem btn-block text-left"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Select real estate type
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <button className="dropdown-item" type="button">
                        Action
                      </button>
                      <button className="dropdown-item" type="button">
                        Another action
                      </button>
                      <button className="dropdown-item" type="button">
                        Something else here
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label for="formGroupExampleInput1">Building Type</label>
                  <br />
                  <div className="btn-group w-100">
                    <button
                      type="button"
                      className="btn  dropdown-toggle  px-0 py-2 dropdown-togglem btn-block text-left"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Select building type
                    </button>
                    <div className="dropdown-menu dropdown-menu-right ">
                      <button className="dropdown-item" type="button">
                        Action
                      </button>
                      <button className="dropdown-item" type="button">
                        Another action
                      </button>
                      <button className="dropdown-item" type="button">
                        Something else here
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="row mt-2">
        <img
          src="./img/google-map.png"
          alt="google map"
          style={{ width: "100%", height: "500px" }}
          className="m-3"
        />
      </div>
      <Step step={1} />
      <Progress value={25} onclick={onclick} />
    </div>
  );
};

export default Page1;
