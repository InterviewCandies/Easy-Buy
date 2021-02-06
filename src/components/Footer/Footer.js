import React from "react";
import styled from "styled-components";

const Info = styled.p`
  font-size: 12px;
`;
const Link = styled.a`
  text-decoration: none;
  color: #0f56b3;
`;
function Footer() {
  return (
    <div>
      <Info>
        Copyright &copy; 2020 | Power by{" "}
        <Link href="https://github.com/InterviewCandies" target="_blank">
          Interview Candies
        </Link>
      </Info>
    </div>
  );
}

export default Footer;
