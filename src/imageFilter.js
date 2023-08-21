import alimentacion from "./assets/images/alimentacion.svg";
import utilidades from "./assets/images/utilidades.svg";
import salud from "./assets/images/salud.svg";
import transporte from "./assets/images/transporte.svg";
import otros from "./assets/images/otros.svg";

import { EstilizadoImageIcon } from "./Components/UI";
import React from "react";

const images = {
  Restaurante: <EstilizadoImageIcon src={alimentacion} alt="Restaurant" />,
  Utilidades: <EstilizadoImageIcon src={utilidades} alt="Utilidades" />,
  Salud: <EstilizadoImageIcon src={salud} alt="Salud" />,
  Transporte: <EstilizadoImageIcon src={transporte} alt="YTransporte" />,
  Otros: <EstilizadoImageIcon src={otros} alt="Otros" />,
};

const Image = (props) => {
  const { type } = props;
  return images[type];
};

export default Image;
