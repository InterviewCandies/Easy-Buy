import React from "react";
import { BeatLoader } from "react-spinners";
import { PRIMARY_COLOR } from "../../common";

function Loader() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <BeatLoader color={PRIMARY_COLOR}></BeatLoader>
    </div>
  );
}

export default Loader;
