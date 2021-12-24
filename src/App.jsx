import './App.css';
import React from "react";
// import { Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "components/common/theme";
import Intro from "components/Intro";
import Footer from "components/footer/Footer";
// import Signup from "./components/Signup";

// import axios from "axios";

const Container = styled.div`
  ${({ theme }) => theme.defaultSpace};
  width: 100vw;
  height: 100vh;
  line-height: 40px;
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  font-family: ${({ theme }) => theme.fontFamilies.fontFamily};
  color: ${({ theme }) => theme.colors.brown};
`;

// const getBookList = () => {
//     axios.get()
//         .then()
//         .catch()
// }

const App = () => {
  return (
    <ThemeProvider theme={ theme }>
      <Container>
        <Intro />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;