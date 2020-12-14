import React from "react";
import Theme from "./Theme";
import styled from "styled-components";

import Header from "./components/Header/Header";
const Container = styled.div`
  width: 100%;
  text-align: center;

  display: flex;
  justify-content: center;

  margin-top: 5em;
`;

const App = () => {
  return (
    <Theme>
      <Container>
        <Header />
      </Container>
    </Theme>
  );
};
export default App;
