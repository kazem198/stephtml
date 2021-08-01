export const changeStayle = (e) => {
  if (e.target.id === "forBuyers") {
    document
      .getElementById("forSeller")
      .parentElement.classList.remove("aciveReal");
    e.target.parentElement.classList.add("aciveReal");
  }
  if (e.target.id === "forSeller") {
    document
      .getElementById("forBuyers")
      .parentElement.classList.remove("aciveReal");
    e.target.parentElement.classList.add("aciveReal");
  }

  //////////////////////////////////////////
  if (e.target.id === "surrounding") {
    document
      .getElementById("evaluated")
      .parentElement.classList.remove("acivesurr");
    e.target.parentElement.classList.add("acivesurr");
  }
  if (e.target.id === "evaluated") {
    document
      .getElementById("surrounding")
      .parentElement.classList.remove("acivesurr");
    e.target.parentElement.classList.add("acivesurr");
  }
  ////////////////////////////////////////////////////////////////////
  if (e.target.id === "Evaluation") {
    document
      .getElementById("Expose")
      .parentElement.classList.remove("acivesurr");
    e.target.parentElement.classList.add("acivesurr");
  }
  if (e.target.id === "Expose") {
    document
      .getElementById("Evaluation")
      .parentElement.classList.remove("acivesurr");
    e.target.parentElement.classList.add("acivesurr");
  }
};
