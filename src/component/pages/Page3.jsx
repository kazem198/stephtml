import React from "react";
import Step from "./Step";
import Progress from "./Progress";

const Page3 = ({ show, onclick }) => {
  return (
    <div className={show ? "container d-block" : "d-none"}>
      <div className="row mt-4 p-3">
        <div className="w-100 p-2">
          <h2>Interior and Exterior</h2>
          <p className="mt-3">
            Next step, information related to interior & exterior
          </p>
        </div>

        <form className="w-100">
          <div className="row">
            <div className="col-12 col-md-6 ">
              <div className="m-1 bg-white p-3">
                <div class="form-row">
                  <div class="form-group col-md-6 position-relative">
                    <label for="inputPassword4" className="sup">
                      strong room in m²
                    </label>
                    <input
                      type="text"
                      className="form-control  "
                      id="inputPassword4"
                      placeholder="150"
                    />
                  </div>

                  <div class="form-group col-md-6 position-relative">
                    <label for="inputEmail4" className="sup">
                      Cellar size in m²
                    </label>
                    <input
                      type="text"
                      className="form-control  "
                      id="inputPassword4"
                      placeholder="1500"
                    />
                  </div>
                  <div class="form-group col-md-6 position-relative">
                    <label for="inputPassword4" className="sup">
                      Fitted kitchen in m²
                    </label>
                    <input
                      type="text"
                      className="form-control  "
                      id="inputPassword4"
                      placeholder="enter size"
                    />
                  </div>
                  <div class="form-group col-md-6 position-relative">
                    <label for="inputAddress" className="sup">
                      Balcony in m²
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
                      Terrace in m²
                    </label>
                    <input
                      type="text"
                      className="form-control position-relative sup"
                      id="inputPassword4"
                      placeholder="Enter Size"
                    />
                  </div>

                  <div class="form-group col-md-6 position-relative">
                    <label for="inputAddress2" className="sup">
                      Loggia in m²
                    </label>
                    <input
                      type="text"
                      className="form-control position-relative sup"
                      id="inputPassword4"
                      placeholder="Enter Size"
                    />
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
                    <label for="inputState">Pool</label>
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
                  <div class="form-group col-md-6 position-relative">
                    <label for="inputAddress2" className="sup">
                      Garden in m²
                    </label>
                    <input
                      type="text"
                      className="form-control position-relative sup"
                      id="inputPassword4"
                      placeholder="Enter Size"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputAddress">Give a title here </label>
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
                  <div class="form-group col-md-12">
                    <label for="inputAddress">Number of garage spaces </label>
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
                    <label for="inputAddress2"> Number of carport spaces</label>
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
                  {/* </div>
              <div class="form-row"> */}
                  <div class="form-group col-md-6">
                    <label for="inputCity">Number of parking spaces</label>
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
                    <label for="inputState">Number of surfaces</label>
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
                    <label for="inputState">Air conditioning </label>
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
      <Step step={3} />
      <Progress value={75} onclick={onclick} />
    </div>
  );
};

export default Page3;
