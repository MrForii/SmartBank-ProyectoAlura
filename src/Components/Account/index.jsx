import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";
import { ImageIcon, ButtonEye, Box, Saldo, Detalle } from "../UI";

import styled from "styled-components";

const IconoMarginTop = styled(ImageIcon)`
  margin-top: 2px;
`;

const IconoMarginLeft = styled(ImageIcon)`
  margin-left: 10px;
  filter: ${({ theme }) => theme.filter};
`;

const TituloAccount = styled.h2`
  text-align: center;
`;

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <TituloAccount>Cuenta</TituloAccount>
      <div style={{ fontSize: "26px", padding: "20px 0", textAlign: "center" }}>
        Saldo disponible
        <span>
          <IconoMarginLeft src={dinero} alt="Icono de saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalle>CLP</Detalle> 8.000.000
          </Saldo>
        ) : null}
      </div>

      <ButtonEye onClick={toggleHandler}>
        <IconoMarginTop
          src={toggleState ? privado : ojo}
          alt="Privacidad de saldo"
          title={toggleState ? "Ocultar Saldo" : "Mostrar Saldo"}
        />
      </ButtonEye>
    </Box>
  );
};

export default Account;
