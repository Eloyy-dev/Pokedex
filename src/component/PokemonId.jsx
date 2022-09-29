import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const PokemonId = () => {

  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(res => setPokemon(res.data))
  }, []);

  console.log(pokemon)

  const chargePower = (cant) => {


    let porcent = (cant * 100) / 200
    console.log(porcent)
    return porcent
  }

  const changeIMG = () => {
    let color = [
      "radial-gradient(circle, #f1863f, #c96e31, #a25624, #7d4017, #5a2b0b)",
      "radial-gradient(circle, #b64e08, #a54708, #944008, #843a07, #743307)",
      "radial-gradient(circle, #606063, #58585b, #4f4f53, #47474c, #3f3f44)",
      "radial-gradient(circle, #bf2bd3, #ae27c1, #9d23ae, #8d1f9c, #7d1b8b)",
      "radial-gradient(circle, #5a290d, #52280f, #4a2611, #432513, #3b2315)",
      "radial-gradient(circle, #856d2c, #7a6428, #6f5b24, #645221, #59491d)",
      "radial-gradient(circle, #6eaf24, #649f21, #5a8f1d, #50801a, #477117)",
      "radial-gradient(circle, #512ba8, #482696, #3f2084, #361b73, #2d1662)",
      "radial-gradient(circle, #626266, #56565c, #4a4a52, #3f3f48, #34343f)",
      "radial-gradient(circle, #dc0909, #c20508, #a80307, #8e0205, #760101)",
      "radial-gradient(circle, #0202f5, #0005cb, #0005a3, #02057c, #030357)",
      "radial-gradient(circle, #00ff15, #00df14, #00c013, #02a211, #03850e)",
      "radial-gradient(circle, #fffb00, #eae601, #d6d201, #c2be02, #aeab02)",
      "radial-gradient(circle, #a903ca, #9505b1, #800699, #6d0682, #5a066b)",
      "radial-gradient(circle, #00c1fc, #00a8db, #0290bb, #04789c, #05617e)",
      "radial-gradient(circle, #794ef0, #6b45d5, #5e3cbb, #5133a2, #442b89)",
      "radial-gradient(circle, #3a3a42, #2f2c32, #221f22, #151314, #000000)",
      "radial-gradient(circle, #ff57e3, #df49c6, #c03caa, #a22f8f, #852275)",
      "radial-gradient(circle, #431481, #37126c, #2c1057, #220d43, #190730)"
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
      if (type === pokemon?.types[0].type.name) {
        array.push(color[index])
      }
    })
    return array

  }

  const changeColor = (typesss) => {
    let color = [
      "radial-gradient(circle, #f1863f, #c96e31, #a25624, #7d4017, #5a2b0b)",
      "radial-gradient(circle, #b64e08, #a54708, #944008, #843a07, #743307)",
      "radial-gradient(circle, #606063, #58585b, #4f4f53, #47474c, #3f3f44)",
      "radial-gradient(circle, #bf2bd3, #ae27c1, #9d23ae, #8d1f9c, #7d1b8b)",
      "radial-gradient(circle, #5a290d, #52280f, #4a2611, #432513, #3b2315)",
      "radial-gradient(circle, #856d2c, #7a6428, #6f5b24, #645221, #59491d)",
      "radial-gradient(circle, #6eaf24, #649f21, #5a8f1d, #50801a, #477117)",
      "radial-gradient(circle, #512ba8, #482696, #3f2084, #361b73, #2d1662)",
      "radial-gradient(circle, #626266, #56565c, #4a4a52, #3f3f48, #34343f)",
      "radial-gradient(circle, #dc0909, #c20508, #a80307, #8e0205, #760101)",
      "radial-gradient(circle, #0202f5, #0005cb, #0005a3, #02057c, #030357)",
      "radial-gradient(circle, #00ff15, #00df14, #00c013, #02a211, #03850e)",
      "radial-gradient(circle, #fffb00, #eae601, #d6d201, #c2be02, #aeab02)",
      "radial-gradient(circle, #a903ca, #9505b1, #800699, #6d0682, #5a066b)",
      "radial-gradient(circle, #00c1fc, #00a8db, #0290bb, #04789c, #05617e)",
      "radial-gradient(circle, #794ef0, #6b45d5, #5e3cbb, #5133a2, #442b89)",
      "radial-gradient(circle, #3a3a42, #2f2c32, #221f22, #151314, #000000)",
      "radial-gradient(circle, #ff57e3, #df49c6, #c03caa, #a22f8f, #852275)",
      "radial-gradient(circle, #431481, #37126c, #2c1057, #220d43, #190730)"
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
      if (type === typesss) {
        array.push(color[index])
      }
    })
    return array
  }


  return (
    <>
      <div className="background-details">
        <div className="container-details">
          <div className="container-img" style={{ background: changeIMG() }}>
            <img src={pokemon?.sprites.other.dream_world?.front_default} alt="" className="Info-img" />
          </div>
          <p className="Info-order">#{pokemon?.order}</p>
          <h1>{pokemon?.name}</h1>
          <div className="Info-fisic">
            <div>
              <h2>Height</h2>
              <p>{pokemon?.height}</p>
            </div>
            <div>
              <h2>weight</h2>
              <p>{pokemon?.weight}</p>
            </div>
          </div>

          <div className="Info-type">
            <h1>Type</h1>
            <div className="Info-type-box">
              {
                pokemon?.types.map(type => (
                  <p style={{ background: changeColor(type.type.name) }} className="box">{type.type.name}</p>
                ))
              }

            </div>
          </div>

          <div className="tittle-stats">
            <h1 >Stats</h1>
          </div>
          <div className="Info-Stats">
            <ul>
              {
                pokemon?.stats.map(stat => (
                  <div className="container-stat">
                    <h3>{stat.stat.name}</h3>
                    <li>{stat.base_stat}/200</li>
                    <div className="power">
                      <div className="charge" style={{ width: `${chargePower(stat.base_stat)}%` }}></div>
                    </div>
                  </div>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      <div>
              
      </div>
    </>
  );
}

export default PokemonId;