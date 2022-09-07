import { Component, useState, useEffect } from "react";
import style from "./PokeCard.module.scss";

const axios = require("axios");

function PokeCard(props) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((resp) => {
        console.log(resp.data);
        setPokemon(resp.data);
      })
      .catch((err) => {});
  }, []);

  const navigation = <div className={style.card}>Ditto</div>;

  return navigation;
}

export default PokeCard;
