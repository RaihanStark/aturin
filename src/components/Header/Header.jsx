import React from "react";
import Card from "../CardComponent/CardComponent";
import Icon from "../Icon/Icon";
import styled from "styled-components";

const CardFlex = styled(Card)`
  display: flex !important;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  padding: 0.75em 1.25em;

  border-right: ${(props) =>
    props.withBorder ? "1px solid rgba(59, 59, 59, 0.699)" : ""};
  border-left: ${(props) =>
    props.withBorder ? "1px solid rgba(59, 59, 59, 0.699)" : ""};

  border-top-left-radius: ${(props) => (props.first ? "25px" : "")};
  border-bottom-left-radius: ${(props) => (props.first ? "25px" : "")};

  border-top-right-radius: ${(props) => (props.last ? "25px" : "")};
  border-bottom-right-radius: ${(props) => (props.last ? "25px" : "")};

  transition: all 200ms ease-in-out;
  &:hover {
    background-color: #424552;
  }

  &:active {
    background-color: #30323b;
  }

  cursor: pointer;
`;

const MenuTitle = styled.span`
  margin: 0 1em;
`;

function Header() {
  return (
    <CardFlex>
      <Menu first>
        <Icon icon="download" />
        <MenuTitle>Investment Calculator</MenuTitle>
      </Menu>
      <Menu withBorder>
        <Icon icon="download" />
        <MenuTitle>Income Budgeting</MenuTitle>
      </Menu>
      <Menu last>
        <Icon icon="download" />
        <MenuTitle>Money Management</MenuTitle>
      </Menu>
    </CardFlex>
  );
}

export default Header;
