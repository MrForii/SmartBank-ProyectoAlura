import React from "react";
import moon from "../../assets/images/moon.svg";
import sun from "../../assets/images/sun.svg";
import { ImageIcon } from "../UI";

const AmpolletaIcon = ({ tema, handleSwitchTheme }) => {
  const claro = (
    <ImageIcon
      src={moon}
      alt="Tema Claro"
      onClick={handleSwitchTheme}
      title="Apagar la Luz"
    />
  );
  const oscuro = (
    <ImageIcon
      src={sun}
      alt="Tema Oscuro"
      onClick={handleSwitchTheme}
      title="Encender la Luz"
    />
  );
  return <>{tema ? oscuro : claro}</>;
};

export default AmpolletaIcon;
