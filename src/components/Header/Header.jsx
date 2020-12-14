import React, { useContext } from "react";
import Card from "../CardComponent/CardComponent";
import Icon from "../Icon/Icon";
import styled, { ThemeContext } from "styled-components";

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

  border-top-left-radius: ${(props) =>
    props.first ? props.theme.sizes.borderRadius : ""};
  border-bottom-left-radius: ${(props) =>
    props.first ? props.theme.sizes.borderRadius : ""};

  border-top-right-radius: ${(props) =>
    props.last ? props.theme.sizes.borderRadius : ""};
  border-bottom-right-radius: ${(props) =>
    props.last ? props.theme.sizes.borderRadius : ""};

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

function Header(props) {
  const themeContext = useContext(ThemeContext);
  return (
    <CardFlex>
      <Menu first>
        <Icon icon="work" boxColor={themeContext.colors.purple} />
        <MenuTitle>Investment Calculator</MenuTitle>
      </Menu>
      <Menu withBorder>
        <Icon icon="download" />
        <MenuTitle>Income Budgeting</MenuTitle>
      </Menu>
      <Menu last>
        <Icon icon="money" boxColor={themeContext.colors.green} />
        <MenuTitle>Money Management</MenuTitle>
      </Menu>
    </CardFlex>
  );
}

export default Header;
