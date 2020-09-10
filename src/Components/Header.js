import styled from "styled-components";
import React from "react";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 3px;
`;

export default function Header(props) {
  const { url } = props;

  return (
    <StyledHeader>
      <img src={url} alt="NASA Logo" />
      <h1>NASA PHOTO OF THE DAY</h1>
    </StyledHeader>
  );
}
