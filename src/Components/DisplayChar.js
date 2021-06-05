import React, { useContext } from "react";
import { CharacterContext } from "../Context/CharacterContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Title = styled.p`
  display: flex;
  justify-content: center;
  font-size: 36px;
  margin: 30px;
`;

const CharName = styled.p`
  font-size: 24px;
  margin: 15px 0;

  ::first-letter {
    text-transform: capitalize;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled(Link)`
  width: 15rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  border-radius: 15px;
  cursor: pointer;
  outline: none;
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  text-decoration: none;
`;

function DisplayChar() {
  const { char, select } = useContext(CharacterContext);

  const URL = "https://api.genshin.dev/characters";

  const [characList, setCharacList] = char;

  const [selectChar, setSelectChar] = select;

  const handleClick = (e) => {
    setSelectChar(e.target.textContent || e.target.alt);
  };

  return (
    <>
      <Navbar />
      <Title>Characters</Title>
      <Wrapper>
        {characList.map((charac, idx) => (
          <Card to={`/characters/${charac}`} key={idx} onClick={handleClick}>
            <img
              style={{ marginTop: "15px" }}
              src={`${URL}/${charac}/icon.png`}
              alt={charac}
            />
            <CharName>{charac}</CharName>
          </Card>
        ))}
      </Wrapper>
    </>
  );
}

export default DisplayChar;
