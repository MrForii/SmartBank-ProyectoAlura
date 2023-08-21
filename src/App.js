import React, { useState } from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { ThemeProvider } from "styled-components";
import Footer from "./Components/Footer";

function App() {
  const [selectedTema, setselectedTema] = useState(
    JSON.parse(localStorage.getItem("tema")) ? temaOscuro : temaClaro
  );
  const handleSelectedTema = (tema) => {
    tema ? setselectedTema(temaOscuro) : setselectedTema(temaClaro);
  };
  return (
    <>
      <ThemeProvider theme={selectedTema}>
        <GlobalStyle />
        <Header handleSelectedTema={handleSelectedTema} />
        <Container />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
