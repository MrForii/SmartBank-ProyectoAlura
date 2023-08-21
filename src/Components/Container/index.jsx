import React from "react";

import Title from "../Title";
import Account from "../Account";
import styled from "styled-components";
import List from "../List";

const StyleContainer = styled.div`
  background-color: ${(props) => {
    const { theme } = props;
    return theme.body;
  }};
  min-height: 78vh;
  padding: 0px 15vw;
`;

const StyleSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Container = () => {
  return (
    <StyleContainer>
      <Title>Smart Bank</Title>
      <StyleSection>
        <Account />
        <List />
      </StyleSection>
    </StyleContainer>
  );
};

export default Container;
