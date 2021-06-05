import React from "react";
import styled from "styled-components";
import bg1 from "../Assets/bg1.jpg";
import Logo from "../Assets/Logo.png";
import charImg from "../Assets/Characters.jpg";
import { Link } from "react-router-dom";

const Landing = styled.section`
  background-image: url(${bg1});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GameLogo = styled.div`
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: contain;
  width: 40rem;
  height: 100%;
`;

const GameDesc = styled.p`
  font-size: 60px;
  margin-bottom: 50px;
  color: blueviolet;
  font-weight: bold;
`;

const CharWrapper = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  margin: 50px;
`;

const Characters = styled.div`
  background-size: cover;
  margin: 50px;
  background-image: url(${charImg});
  height: 95%;
  background-repeat: no-repeat;
  width: 60rem;
  border-radius: 20px;
`;

const CharTitle = styled(Link)`
  font-size: 50px;
  text-decoration: none;
  margin-left: 60px;
`;

function HeroSection() {
  return (
    <>
      <Landing>
        <GameLogo></GameLogo>
        <GameDesc>Step Into a Vast Magical World of Adventure</GameDesc>
      </Landing>

      <CharWrapper>
        <Characters></Characters>
        <CharTitle to="/characters">Characters</CharTitle>
      </CharWrapper>
    </>
  );
}

export default HeroSection;
