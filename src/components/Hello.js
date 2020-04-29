import React from "react";

const Hello = () => {
  // With JSX .............

  //  return(
  //    <div className="dummyClass">
  //      <h1> Hello Ashutosh </h1>
  //    </div>
  //  )

  //..........

  // Without JSX.....

  return React.createElement(
    "div",
    { id: "hello" },
    React.createElement("h1", null, "Hello Ashutosh")
  );
};

export default Hello;
