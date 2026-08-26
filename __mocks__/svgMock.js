import React from "react";

// Returns a valid dummy tag so Jest treats it as a rendered element
const FakeSvg = React.forwardRef((props, ref) => {
  return React.createElement("svg", { ...props, ref });
});

export default FakeSvg;
