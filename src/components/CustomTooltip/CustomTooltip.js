import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { PRIMARY_COLOR } from "../../common";

const CustomTooltip = withStyles({
  tooltip: {
    color: "#fff",
    backgroundColor: PRIMARY_COLOR,
    padding: "10px",
    fontSize: "1rem",
  },
  arrow: {
    color: PRIMARY_COLOR,
  },
})(Tooltip);

export default CustomTooltip;
