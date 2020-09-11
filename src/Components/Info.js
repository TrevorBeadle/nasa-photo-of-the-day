import React from "react";
import styled from "styled-components";
import DatePicker from "./DatePicker";

const StyledArticle = styled.article`
  display: flex;
  width: 45%;
  flex-direction: column;
  align-items: flex-start;
  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  p {
    margin-bottom: 3rem;
  }
`;

export default function Info(props) {
  const { title, explanation, date, setDate } = props;

  return (
    <StyledArticle>
      <h3>{title}</h3>
      <p>{explanation}</p>
      <h4>See Another Photo Of the Day</h4>
      <DatePicker date={date} setDate={setDate} />
    </StyledArticle>
  );
}
