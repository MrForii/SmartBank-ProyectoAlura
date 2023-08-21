import React from "react";
import styled from "styled-components";
import { colorPrimario } from "../UI/variables";
import { ContenedorLogo, LogoHeader, TituloLogo } from "../Header";
import logo from "../../assets/images/logo.svg";
import linkedin from "../../assets/images/linkedin.svg";
import github from "../../assets/images/github.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";

import { EstilizadoImageIcon } from "../../Components/UI";

const FooterEstilos = styled.footer`
  background-color: ${colorPrimario};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;
  row-gap: 5px;
  @media (min-width: 550px) {
    padding-top: 15px;
    padding-bottom: 0px;
  }
`;

const LiEstilos = styled.li`
  display: flex;
  align-items: center;
  transition: .3s;
  margin-left: 20px;
  &:hover {
    transform: scale(1.1);
  }
`;

const ContenedorRedesSociales = () => {
  return (
    <>
      <div>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <LiEstilos>
            <a
              href="https://www.linkedin.com/in/rodrigo-valdez-259520169/"
              target="_blank"
              rel="noreferrer"
            >
              <EstilizadoImageIcon
                width="40"
                height="40"
                src={linkedin}
                alt="linkedin"
                title="LinkedIn"
              />
            </a>
          </LiEstilos>
          <LiEstilos>
            <a
              href="https://github.com/MrForii"
              target="_blank"
              rel="noreferrer"
            >
              <EstilizadoImageIcon
                width="50"
                height="50"
                src= {github}
                alt="github"
                title="GitHub"
              />
            </a>
          </LiEstilos>
          <LiEstilos>
            <a
              href="https://www.instagram.com/forii_ok/"
              target="_blank"
              rel="noreferrer"
            >
              <EstilizadoImageIcon
                width="50"
                height="50"
                src={instagram}
                alt="instagram"
                title="Instagram"
              />
            </a>
          </LiEstilos>
          <LiEstilos>
            <a
              href="https://twitter.com/Forii_ok"
              target="_blank"
              rel="noreferrer"
            >
              <EstilizadoImageIcon
                width="50"
                height="50"
                src={twitter}
                alt="twitter"
                title="Twitter"
              />
            </a>
          </LiEstilos>
        </ul>
      </div>
    </>
  );
};

const ContenedorDatosDesarrollador = styled.div`
  text-align: center;
  color: white;
  padding: 15px 5vw;
  border-top: 2px solid #212121;
  background-color: #421158;
  @media (min-width: 550px) {
    padding-top: 20px;
    padding-right: 30vw;
    padding-left: 30vw;
    padding-bottom: 20px;
  }
`;

const DatosDesarrollador = () => {
  return (
    <>
      <ContenedorDatosDesarrollador>
        Página Web desarrollada por Rodrigo Valdez
      </ContenedorDatosDesarrollador>
    </>
  );
};

const ContenedorLogoRedesSociales = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15;
  @media (min-width: 550px) {
    padding-right: 15vw;
    padding-left: 15vw;
    flex-direction: row;
  }
`;

const Footer = () => {
  return (
    <FooterEstilos>
      <ContenedorLogoRedesSociales>
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
        <ContenedorRedesSociales />
      </ContenedorLogoRedesSociales>
      <DatosDesarrollador />
    </FooterEstilos>
  );
};

export default Footer;
