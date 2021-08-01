import React from "react";

const Step = ({ step = 4 }) => {
  return (
    <div className="row justify-content-center mt-4">
      <div
        className={
          step === 1
            ? "step m-1 rounded-pill  activeStep"
            : "step m-1 rounded-pill"
        }
      ></div>
      <div
        className={
          step === 2
            ? "step m-1 rounded-pill  activeStep"
            : "step m-1 rounded-pill"
        }
      ></div>
      <div
        className={
          step === 3
            ? "step m-1 rounded-pill  activeStep"
            : "step m-1 rounded-pill"
        }
      ></div>
      <div
        className={
          step === 4
            ? "step m-1 rounded-pill  activeStep"
            : "step m-1 rounded-pill"
        }
      ></div>
    </div>
  );
};

export default Step;
