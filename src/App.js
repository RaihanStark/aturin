import React from "react";
import Theme from "./Theme";

import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import Header from "./components/Header/Header";

const Container = styled.div`
  width: 100%;
  text-align: center;

  display: flex;
  justify-content: center;

  margin-top: 5em;
`;

const App = () => {
  const props = useSpring({
    transform: "translateY(0px)",
    from: { transform: "translateY(-10em)" },
    delay: 500,
  });

  return (
    <Theme>
      <Container>
        <animated.div style={props}>
          <Header />
        </animated.div>
      </Container>
    </Theme>
  );
};
export default App;
