import React, { useState } from "react";
import styled from "styled-components";
import { PRIMARY_COLOR, DEFAULT_COLOR } from "../../common";
const CustomButton = styled.button`
  outline: none;
  padding: 8px 10px;
  font-weight: 600;
  border: none;
  color: ${PRIMARY_COLOR};
  &:hover {
    background-color: ${DEFAULT_COLOR};
    color: #000;
    box-shadow: -1px -1px 3px #ffffff, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4);
  }
  ${(props) => props.disabled && `color: black; pointer-events: none;`}
  ${(props) =>
    props.active &&
    `  
    background-color: ${PRIMARY_COLOR};
    pointer-events: none;
    color: #fff;`}
`;
const Container = styled.div`
  border-radius: 5px;
  display: inline;
`;

function Pagination({ datasetSize, onChange, itemsPerPage, currentPage }) {
  const displayPages = (pages) => {
    let arr = [];
    if (currentPage > 1)
      arr.push(<CustomButton onClick={() => onChange(1)}>1</CustomButton>);

    if (currentPage >= 3) arr.push(<CustomButton disabled>...</CustomButton>);

    for (let i = currentPage; i <= Math.min(pages, currentPage + 4); i++)
      arr.push(
        <CustomButton onClick={() => onChange(i)} active={currentPage == i}>
          {i}
        </CustomButton>
      );

    if (currentPage + 4 < pages) {
      arr.push(<CustomButton disabled>...</CustomButton>);
      arr.push(
        <CustomButton onClick={() => onChange(pages)}>{pages}</CustomButton>
      );
    }
    return arr;
  };
  const numberOfPages = Math.ceil(datasetSize / itemsPerPage);
  return (
    <Container>
      <CustomButton
        disabled={currentPage == 1}
        onClick={() => onChange(currentPage - 1)}
      >
        Prev
      </CustomButton>
      {displayPages(numberOfPages)}
      <CustomButton
        disabled={currentPage == numberOfPages}
        onClick={() => onChange(currentPage + 1)}
      >
        Next
      </CustomButton>
    </Container>
  );
}

export default Pagination;
