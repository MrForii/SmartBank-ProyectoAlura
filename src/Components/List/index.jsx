import React from "react";
import { Box, ButtonEye } from "../UI";
import { lista } from "../../info";
import Tarjeta from "../Card";

const List = () => {
  return (
    <>
      <Box>
        {lista.cargos.map((cargo, index) => {
          return <Tarjeta key={index} cargo={cargo} />;
        })}
        <ButtonEye>Ver más</ButtonEye>
      </Box>
    </>
  );
};

export default List;
