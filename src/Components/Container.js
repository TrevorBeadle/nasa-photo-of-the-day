import React, { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-image: ${({ theme }) => theme.backgroundGradient};
  width: 100%;
  height: 100vh;
`;

export default function Container() {
  return (
    <StyledContainer>
      <div className="container"></div>
    </StyledContainer>
  );
}
