import React from "react";
import { changeStayle } from "../../utils/page1";

const Start = ({ onclick, show }) => {
  console.log(show);
  return (
    <div className={show ? "container d-block" : "d-none"}>
      <div className="row bg-white mt-4 p-2" dir="rtl">
        <div className="col-md-6 col-12">
          <img
            className="d-flex align-self-center ml-5"
            src="/img/house.png"
            alt="Generic placeholder "
            style={{ height: "200px", width: "100%" }}
          />
        </div>
        <div className="media-body mt-4 col-md-6 col-12">
          <h3 className="mt-0">About Us</h3>

          <p className="mb-0 mt-4 p-4">
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. leo. Cum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>
      <div className="mt-3 bg-white">
        <div className=" btn-group-toggle ">
          <label
            className="btn font-weight-bold  mr-5 forBuyers aciveReal"
            htmlFor="forBuyers"
          >
            <input
              type="radio"
              name="options"
              id="forBuyers"
              autoComplete="off"
              onChange={(e) => {
                changeStayle(e);
              }}
            />{" "}
            for Buyers
          </label>
          <label className="btn font-weight-bold forSeller" htmlFor="forSeller">
            <input
              type="radio"
              name="options"
              id="forSeller"
              autoComplete="off"
              className="p-2"
              onChange={(e) => {
                changeStayle(e);
              }}
            />{" "}
            for Seller
          </label>
          <i className="far fa-chevron-up arrow-add-estate text-white"></i>
        </div>
      </div>
      <div className="allstep">
        <p>
          <strong className="strongp">01.</strong> Donec sed odio dui. Nullam
          quis risus eget urna mol
        </p>
        <p>
          <strong className="strongp">02.</strong> Donec sed odio dui. Nullam
          quis
        </p>
        <p>
          <strong className="strongp">03.</strong> Donec sed odio dui.
        </p>
        <p>
          <strong className="strongp">04.</strong> Donec sed odio dui. Nullam
          quis risus eget urna mol
        </p>
        <p className="mt-5">
          Donec sed odio dui. Nullam quis risus eget urna mol Donec sed odio
          dui. Nullam quis risus eget urna mol
        </p>
      </div>

      <form className="mt-5">
        <div class="form-group">
          <label for="formGroupExampleInput">Example label</label>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder=""
              aria-label=""
              aria-describedby="basic-addon1"
            />
            <div class="input-group-append">
              <button
                class="btn btn-success"
                type="button"
                onClick={() => onclick()}
              >
                Go
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Start;
