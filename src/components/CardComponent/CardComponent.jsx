import React from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";

const CardContainer = styled.div`
  background-color: ${(props) => props.theme.colors.lightDark};
  /* max-width: 350px; */

  /* padding: 1em 1.5em; */
  border-radius: 25px;
  color: white;
`;

function Card(props) {
  return (
    <CardContainer className={props.className}>{props.children}</CardContainer>
  );
}

export default Card;
