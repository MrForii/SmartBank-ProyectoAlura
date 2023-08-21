import React from "react";
import styled from "styled-components";
import ImageCard from "../../imageFilter";

const Card = styled.div`
  border-radius: 10px;
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.2);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  .text {
    font-weight: 700;
  }
`;

const Tarjeta = (props) => {
  const { cargo } = props;
  const { id, type, value, date, from } = cargo;

  return (
    <Card>
      <ImageCard type={type} />
      <Info>
        <span className="text">{type}</span>
        <span>{from}</span>
        <span>{value}</span>
      </Info>
      <span>{date}</span>
    </Card>
  );
};

export default Tarjeta;
