import React from "react";

const Progress = ({ value = 25, onclick }) => {
  return (
    <div className="row  no-gutters justify-content-center mt-2 p-3 bg-white">
      <div className="col-11">
        <div className="progress rounded-lg" style={{ height: "40px" }}>
          <div
            className="progress-bar bg-info"
            role="progressbar"
            //     style={{ width: "25%" }}
            style={{ width: value + "%" }}
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Accuracy BaroMeter {value + "%"}
          </div>
        </div>
      </div>
      <div className="col-1 ">
        <button
          type="button"
          className="btn btn-info ml-2"
          onClick={() => {
            onclick();
          }}
        >
          Countinue
        </button>
      </div>
    </div>
  );
};

export default Progress;
