import React, { useContext, useState, useEffect } from "react";
import { CharacterContext } from "../Context/CharacterContext";
import axios from "axios";
import styled from "styled-components";
import Navbar from "./Navbar";

const CharContainer = styled.div`
  margin: 0px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CharWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-image: linear-gradient(
    to top,
    #fdcbf1 0%,
    #fdcbf1 1%,
    #e6dee9 100%
  );
  border-radius: 30px;
`;

const CharList = styled.ul`
  margin-left: 20px;
  word-spacing: 5px;
`;
const CharDetails = styled.li`
  list-style: none;
  font-size: 24px;
  margin-top: 30px;
  margin-right: 30px;
`;

const CharSpan = styled.span`
  color: purple;
`;

function Character() {
  const URL = "https://api.genshin.dev/characters";

  const { select } = useContext(CharacterContext);

  const [selectChar, setSelectChar] = select;

  const [charData, setCharData] = useState([]);

  const fetchCharacter = async () => {
    const { data } = await axios.get(`${URL}/${selectChar}`).catch((err) => {
      console.log("Err", err);
    });
    setCharData(data);
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  return (
    <>
      <Navbar />
      <CharContainer>
        <CharWrapper>
          <img
            src={`${URL}/${selectChar}/portrait.png`}
            style={{ width: "20rem", margin: "20px" }}
          />
          <CharList>
            <CharDetails>
              Name: <CharSpan>{charData.name}</CharSpan>
            </CharDetails>
            <CharDetails>
              Vision: <CharSpan>{charData.vision}</CharSpan>
            </CharDetails>
            <CharDetails>
              Weapon: <CharSpan>{charData.weapon}</CharSpan>
            </CharDetails>
            <CharDetails>
              Nation: <CharSpan>{charData.nation}</CharSpan>
            </CharDetails>
            <CharDetails>
              Affiliation: <CharSpan>{charData.affiliation}</CharSpan>
            </CharDetails>
            <CharDetails>
              Constellation: <CharSpan>{charData.constellation}</CharSpan>
            </CharDetails>
            <CharDetails>
              Description: <CharSpan>{charData.description}</CharSpan>
            </CharDetails>
          </CharList>
        </CharWrapper>
      </CharContainer>
    </>
  );
}

export default Character;
