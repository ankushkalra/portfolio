const React = require("react");

// Returns a valid dummy tag so Jest treats it as a rendered element
module.exports = React.forwardRef((props, ref) => {
  return React.createElement("svg", { ...props, ref });
});
