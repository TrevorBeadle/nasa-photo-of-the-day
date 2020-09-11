import React from "react";
import styled from "styled-components";

const StyledArticle = styled.article`
  display: flex;
  width: 45%;
  flex-direction: column;
  align-items: flex-start;
  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

export default function Info(props) {
  const { title, explanation } = props;

  return (
    <StyledArticle>
      <h3>{title}</h3>
      <p>{explanation}</p>
    </StyledArticle>
  );
}
