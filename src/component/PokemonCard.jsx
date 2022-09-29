import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const PokemonCard = ({ url }) => {

  const [pokemon, setPokemon] = useState({})
  const [type, setType] = useState("")
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url).then(res => setPokemon(res.data))
    .finally(setIsLoading(false))

  }, []);


  const changeBK = (type) => {
    let color = [
      "rgb(241, 134, 63)",
      "rgb(182, 78, 8)",
      "rgb(96, 96, 99)",
      "rgb(191, 43, 211)",
      "rgb(90, 41, 13)",
      "rgb(133, 109, 44)",
      "rgb(110, 175, 36)",
      "rgb(81, 43, 168)",
      "rgb(98, 98, 102)",
      "rgb(255, 0, 0)",
      "rgb(2, 2, 245)",
      "rgb(0, 255, 21)",
      "rgb(255, 251, 0)",
      "rgb(169, 3, 202)",
      "rgb(0, 193, 252)",
      "rgb(121, 78, 240)",
      "rgb(0, 0, 0)",
      "rgb(255, 87, 227)",
      "rgb(42, 13, 80)"
    ];
    let types = [
      "normal",
      "fighting",
      "flying",
      "poison",
      "ground",
      "rock",
      "bug",
      "ghost",
      "steel",
      "fire",
      "water",
      "grass",
      "electric",
      "psychic",
      "ice",
      "dragon",
      "dark",
      "fairy",
      "shadow"
    ];

    let array = [];
    types.map((type, index) => {
      if (type === pokemon.types?.[0].type.name) {
        array.push(color[index])
      }
    })
    return array

  }

  return (
    <>
      <div className="box-card" >

        <div className={`pokemon-card`} style={{ border: `4px solid ${changeBK()}` }} onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
          <div className="circle-pokemon">

            {
              isLoading && <Loading />
            }

            <img src={pokemon.sprites?.other.dream_world?.front_default} alt="" className="img" />

          </div>
          <h1>{pokemon.name}</h1>
          <div className="stats-card">
            <p>Type: {pokemon.types?.[0].type.name}/{pokemon.types?.[1]?.type.name ? pokemon.types?.[1]?.type.name : ""}</p>
            <p>Hp:{pokemon.stats?.[0].base_stat}</p>
            <p>Attack:{pokemon.stats?.[1].base_stat}</p>
            <p>Defense:{pokemon.stats?.[2].base_stat}</p>
            <p>Speed:{pokemon.stats?.[5].base_stat}</p>

          </div>
        </div>


      </div>
    </>
  );
}

export default PokemonCard;