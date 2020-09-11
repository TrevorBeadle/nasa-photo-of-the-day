import styled from "styled-components";
import React from "react";

const StyledHeader = styled.header`
  width: 100%;
  grid-column: 2 / span 6;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-bottom: 0;
  }
  h1 {
    margin-top: 0;
    font-size: 2.5rem;
    font-weight: bold;
  }
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
