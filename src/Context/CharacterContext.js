import axios from "axios";
import React, { useState, useEffect, createContext } from "react";

export const CharacterContext = createContext();

export const CharacterProvider = (props) => {
  const URL = "https://api.genshin.dev/characters";

  const [characList, setCharacList] = useState([]);

  const [selectChar, setSelectChar] = useState("");

  const fetchCharacters = async () => {
    const { data } = await axios.get(URL).catch((err) => {
      console.log("Err", err);
    });
    setCharacList(data);
  };

  useEffect(() => {
    fetchCharacters();
  });

  return (
    <CharacterContext.Provider
      value={
        (URL,
        {
          char: [characList, setCharacList],
          select: [selectChar, setSelectChar],
        })
      }
    >
      {props.children}
    </CharacterContext.Provider>
  );
};
