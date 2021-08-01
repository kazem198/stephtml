import React, { useState } from "react";
import Navbar from "./component/header/Header";
import Page1 from "./component/pages/Page1";
import Start from "./component/pages/Start";
import Page2 from "./component/pages/Page2";
import Page3 from "./component/pages/Page3";
import Page4 from "./component/pages/Page4";
import Step from "./component/pages/Step";
import Progress from "./component/pages/Progress";

const App = () => {
  const [showStart, setShowStart] = useState(true);
  const [showPage1, setShowPage1] = useState(false);
  const [showPage2, setShowPage2] = useState(false);
  const [showPage3, setShowPage3] = useState(false);
  const [showPage4, setShowPage4] = useState(false);

  const onclickStart = () => {
    setShowStart(false);
    setShowPage1(true);
  };
  const onclickPage1 = () => {
    setShowPage1(false);
    setShowPage2(true);
  };
  const onclickPage2 = () => {
    setShowPage2(false);
    setShowPage3(true);
  };
  const onclickPage3 = () => {
    setShowPage3(false);
    setShowPage4(true);
  };
  const onclickPage4 = () => {
    // setShowPage4(false);
    // setShowPage4(true);
  };

  return (
    <div className="container-fluid p-0 m-0">
      <Navbar />
      <Start onclick={onclickStart} show={showStart} />
      <Page1 show={showPage1} onclick={onclickPage1} />
      <Page2 show={showPage2} onclick={onclickPage2} />
      <Page3 show={showPage3} onclick={onclickPage3} />
      <Page4 show={showPage4} onclick={onclickPage4} />
      {/* <Step /> */}
      {/* <Progress /> */}
    </div>
  );
};

export default App;
