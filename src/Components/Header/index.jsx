import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import styled from "styled-components";
import { colorPrimario } from "../UI/variables";
import { BotonTema } from "../UI";
import AmpolletaIcon from "../SwitchTema";

const StyleHeader = styled.nav`
  background-color: ${colorPrimario};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 5vw;
  row-gap: 5px;
  align-items: center;
  position: relative;
  @media (min-width: 550px) {
    padding: 15px 15vw;
    flex-direction: row;
  }
`;

export const LogoHeader = styled.img`
  height: 50px;
  width: 50px;
  cursor: pointer;
`;

const ButtonHeader = styled.button`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  cursor: pointer;
  color: ${({ primary }) => (primary ? "white" : colorPrimario)};
  background: ${({ primary }) => (primary ? "transparent" : "white")};
`;

export const ContenedorLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const TituloLogo = styled.span`
  color: white;
  font-weight: 700;
  cursor: pointer;
`;

const Header = ({ handleSelectedTema }) => {
  const [tema, setTema] = useState(
    JSON.parse(localStorage.getItem("tema")) || false
  );

  const handleSwitchTheme = () => {
    setTema(!tema);
    handleSelectedTema(!tema);
    localStorage.setItem("tema", !tema);
  };
  return (
    <StyleHeader>
      <ContenedorLogo>
        <LogoHeader
          src={logo}
          alt="Logo Smart Bank"
          title="Aplicación Smart Bank"
          href="/"
        />
        <TituloLogo title="Aplicación Smart Bank">
          <a href="/" style={{ color: "white" }}>
            Smart Bank App
          </a>
        </TituloLogo>
      </ContenedorLogo>

      <div>
        <ButtonHeader $primary="true" href="https://google.com" title="Ayuda">
          Ayuda
        </ButtonHeader>
        <ButtonHeader $primary="" href="https://google.com" title="Salir">
          Salir
        </ButtonHeader>
      </div>
      <BotonTema>
        <AmpolletaIcon handleSwitchTheme={handleSwitchTheme} tema={tema} />
      </BotonTema>
    </StyleHeader>
  );
};

export default Header;
