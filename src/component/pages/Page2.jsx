import React from "react";
import Step from "./Step";
import Progress from "./Progress";

const Page2 = ({ show, onclick }) => {
  return (
    <div className={show ? "container d-block" : "d-none"}>
      <div className="row mt-4 p-3">
        <div className="w-100 p-2">
          <h2>General Features</h2>
          <p className="mt-3">Now We Need The Hard Facts</p>
        </div>

        <form className="w-100">
          <div className="row">
            <div className="col-12 col-md-6 ">
              <div className="m-1 bg-white p-3">
                <div className="form-group ">
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

                <div class="form-row">
                  <div class="form-group col-md-6 ">
                    <label for="inputEmail4">Buliding Type</label>
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
                        Select Buliding Type
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
                  <div class="form-group col-md-6 position-relative">
                    <label for="inputPassword4" className="sup">
                      Living Space Size
                    </label>
                    <input
                      type="text"
                      className="form-control  "
                      id="inputPassword4"
                      placeholder="150"
                    />
                  </div>
                  <div class="form-group col-md-6 position-relative">
                    <label for="inputAddress" className="sup">
                      Floor space size
                    </label>
                    <input
                      type="text"
                      className="form-control position-relative "
                      id="inputPassword4"
                      placeholder="Enter Size"
                    />
                  </div>
                  <div class="form-group col-md-6 position-relative">
                    <label for="inputAddress2" className="sup">
                      Effective living space size
                    </label>
                    <input
                      type="text"
                      className="form-control position-relative sup"
                      id="inputPassword4"
                      placeholder="Enter Size"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">Currently avalible</label>
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
                        Select
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
                  <div class="form-group col-md-6">
                    <label for="inputState">First occupancy</label>
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
                        Select
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
              </div>
            </div>
            {/* ////////////////////////////////2 */}

            <div className="col-12 col-md-6 ">
              <div className="m-1 bg-white p-3">
                <div class="form-row">
                  <div class="form-group col-md-6 ">
                    <label for="inputEmail4">Number of rooms</label>
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
                        Select Number
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
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">HWB(kwh/m²/jahr)</label>
                    <input
                      type="text"
                      className="form-control position-relative sup"
                      id="inputPassword4"
                      placeholder="350"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputAddress">Your Floor </label>
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
                        Select Your Floor
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
                  <div class="form-group col-md-6">
                    <label for="inputAddress2">Total Number of Floor</label>
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
                        Select Number
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
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">Number of bathroom</label>
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
                        Select Number
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
                  <div class="form-group col-md-6">
                    <label for="inputState">Number of toiletts</label>
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
                        Select Number
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

                  <div class="form-group col-md-6">
                    <label for="inputState">Heating type</label>
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
                        Select type
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

                  <div class="form-group col-md-6">
                    <label for="inputState">Elevator</label>
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
                        Select Number
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
              </div>
            </div>
          </div>
        </form>
      </div>
      <Step step={2} />
      <Progress value={50} onclick={onclick} />
    </div>
  );
};

export default Page2;
