import styled from "styled-components";
import { colorPrimario } from "./variables";

export const ImageIcon = styled.img`
  height: 25px;
  width: 25px;
`;

export const EstilizadoImageIcon = styled(ImageIcon)`
  filter: ${({ theme }) => theme.filter};
`;

export const ButtonEye = styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: ${colorPrimario};
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.inside};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;
  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;

export const Saldo = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

export const Detalle = styled.span`
  color: ${colorPrimario};
  font-size: 24px;
`;

export const BotonTema = styled.div`
  position: absolute;
  top: 30%;
  right: 4vw;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: 550px) {
    top: 25%;
  }
`;
