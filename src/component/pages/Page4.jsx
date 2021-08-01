import React from "react";
import { changeStayle } from "../../utils/page1";
import Step from "./Step";
import Progress from "./Progress";

const Page4 = ({ show, onclick }) => {
  return (
    <div className={show ? "container-fluid d-block" : "d-none"}>
      <div className="row no-gutters">
        <div className="col-12 col-md-4 p-0 ">
          <div className=" btn-group-toggle text-center">
            <label
              className="btn tabmenu rounded-0 py-3 w-50"
              htmlFor="surrounding"
            >
              <input
                type="radio"
                name="options"
                id="surrounding"
                autoComplete="off"
                onChange={(e) => {
                  changeStayle(e);
                }}
              />{" "}
              Object in the surroundings
            </label>
            <label
              className="btn tabmenu rounded-0 py-3 w-50"
              htmlFor="evaluated"
            >
              <input
                type="radio"
                name="options"
                id="evaluated"
                autoComplete="off"
                onChange={(e) => {
                  changeStayle(e);
                }}
              />{" "}
              How Was it Evaluated?
            </label>
            <i className="far fa-chevron-up arrow-add-estate text-white"></i>
          </div>
          {/* /////////////////////card/////////////////////////// */}
          <div className="card m-4">
            <img
              className="card-img-top rounded-lg"
              src="./img/6.jpg"
              alt="Card  cap"
            />
            <div className="card-body text-left ">
              <p className="kindEstate">Private Villa</p>
              <h5 className="font-weight-bold">€12,000 / month</h5>
              <span className="mr-3 text-black-50">
                <i class="fas fa-bed"></i> 3 beds
              </span>
              <span className="mr-3 text-black-50">
                <i class="fas fa-bath"></i> 3 baths
              </span>
              <span className="text-black-50">
                <i class="fas fa-arrows-alt"></i> 1800sqfit
              </span>
              <p className="mt-3 text-black-50">
                <i class="fas fa-map-marker-alt"></i>
                5004 West Walks Borertown,AK 85547
              </p>
            </div>
          </div>
          <div className="card m-4">
            <img
              className="card-img-top rounded-lg"
              src="./img/7.jpg"
              alt="Card  cap"
            />
            <div className="card-body text-left ">
              <p className="kindEstate">Private Villa</p>
              <h5 className="font-weight-bold">€12,000 / month</h5>
              <span className="mr-3 text-black-50">
                <i class="fas fa-bed"></i> 3 beds
              </span>
              <span className="mr-3 text-black-50">
                <i class="fas fa-bath"></i> 3 baths
              </span>
              <span className="text-black-50">
                <i class="fas fa-arrows-alt"></i> 1800sqfit
              </span>
              <p className="mt-3 text-black-50">
                <i class="fas fa-map-marker-alt"></i>
                5004 West Walks Borertown,AK 85547
              </p>
            </div>
          </div>
          <div className="card m-4">
            <img
              className="card-img-top rounded-lg"
              src="./img/5.jpg"
              alt="Card  cap"
            />
            <div className="card-body text-left ">
              <p className="kindEstate">Private Villa</p>
              <h5 className="font-weight-bold">€12,000 / month</h5>
              <span className="mr-3 text-black-50">
                <i class="fas fa-bed"></i> 3 beds
              </span>
              <span className="mr-3 text-black-50">
                <i class="fas fa-bath"></i> 3 baths
              </span>
              <span className="text-black-50">
                <i class="fas fa-arrows-alt"></i> 1800sqfit
              </span>
              <p className="mt-3 text-black-50">
                <i class="fas fa-map-marker-alt"></i>
                5004 West Walks Borertown,AK 85547
              </p>
            </div>
          </div>
        </div>
        {/* ////////////////////////////////////////////////////// */}
        <div className="col-12 col-md-8">
          <div className="row bg-white justify-content-center align-items-center p-4">
            <div className="col-6 col-md-3  text-center border-right">
              <span className="Accuracy">76%</span>
              <p className="text-black-50">
                Evaluation Accuracy{" "}
                <button
                  id="tooltip"
                  type="button"
                  class="btn btn-outline-light"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="the more data you enter,the more accurate your rating will be."
                >
                  <i className="fas fa-info-circle text-black-50"></i>
                </button>
              </p>
            </div>
            <div className="col-6 col-md-3 text-danger text-center font-weight-bold">
              <p className="range">€258.000 - €421.000</p>
              <p>Result in a price range</p>
            </div>
            <div className="col-12 col-md-6   text-center">
              <div className=" btn-group-toggle ">
                <label
                  className="btn Evaluation mr-2 px-3 py-2"
                  htmlFor="Evaluation"
                >
                  <input
                    type="radio"
                    name="options"
                    id="Evaluation"
                    autoComplete="off"
                    onChange={(e) => {
                      changeStayle(e);
                    }}
                  />{" "}
                  Save Evaluation
                </label>
                <label className="btn Evaluation px-3 py-2 " htmlFor="Expose">
                  <input
                    type="radio"
                    name="options"
                    id="Expose"
                    autoComplete="off"
                    onChange={(e) => {
                      changeStayle(e);
                    }}
                  />{" "}
                  Create A Free Expose
                </label>
                <i className="far fa-chevron-up arrow-add-estate text-white"></i>
              </div>
            </div>
          </div>
          <div style={{ height: "100vh" }}>
            <img
              src="./img/google-map.png"
              alt="slm"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
      <Step step={4} />
      <Progress value={100} onclick={onclick} />
    </div>
  );
};

export default Page4;
