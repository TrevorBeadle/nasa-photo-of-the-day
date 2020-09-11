import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  width: 45%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;

export default function Photo({ url, copyright }) {
  return (
    <StyledSection>
      <img src={url} alt="APOD" />
      <p>© {copyright}</p>
    </StyledSection>
  );
}
