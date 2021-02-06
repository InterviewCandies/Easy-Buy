import NotFound from "../../asset/img/not-found.svg";
import styled from "styled-components";

const CardTitle = styled.h3`
  font-size: 18px;
  text-transform: uppercase,
  font-size: 1.5rem,
  line-height: 1.5,
  letter-spacing: 2;
`;

function NoResult() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <img
        src={NotFound}
        style={{
          maxWidth: "200px",
          objectFit: "contain",
          margin: "20px 0",
        }}
      ></img>
      <CardTitle>Sorry! We couldn't find any result</CardTitle>
    </div>
  );
}
export default NoResult;
