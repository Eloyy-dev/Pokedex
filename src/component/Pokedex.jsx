import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import Loading from "./Loading";
const Pokedex = () => {
  const navigate = useNavigate();
  const name = useSelector(state => state.userName)

  const [pokemonList, setPokemonList] = useState([])
  const [nameInput, setNameInput] = useState("")
  const [typeList, setTypeList] = useState([])
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then(res => setPokemonList(res.data.results))
  }, []);


  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/type/")
      .then(res => setTypeList(res.data.results))
  }, []);


  const searchName = () => {
    navigate(`/pokemon/${nameInput}`)
  }

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      searchName()
    }
  }
  const searchByType = (typeUrl) => {
    axios.get(typeUrl)
      .then(res => setPokemonList(res.data.pokemon))
    console.log(pokemonList)
  }

  const [page, setPage] = useState(1);
  const pokemonXPage = 16;
  const lastPokemonIndex = page * pokemonXPage;
  const firstPokemonIndex = lastPokemonIndex - pokemonXPage;
  const pokemonListPaginated = pokemonList.slice(
    firstPokemonIndex,
    lastPokemonIndex
  )
  const totalPage = Math.ceil(pokemonList.length / pokemonXPage)
  const numbers = [];
  for (let i = 1; i < totalPage; i++) {
    numbers.push(i);

  }
  return (
    <>
      <div className="background-pokedex">

        <div className="body-pokedex"></div>
        <div className="circle-white"></div>
        <div className="head-pokedex">
          <div className="title">
            <h1>Pokedex</h1>
          </div>
          <p className="subtitle"><b>Welcome </b>{name} here you cand find you favorite pokemon</p>
          <div className="container-search">
            <div className="Search-pokemon">
              <input
                type="text"
                placeholder="search by name"
                value={nameInput}
                onChange={e => setNameInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button onClick={searchName} className="btn-search"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="selector">
              <select onChange={e => searchByType(e.target.value)}>
                {
                  typeList.map(type => (
                    <option value={type.url} key={type.url}>{type.name}</option>
                  ))
                }
              </select>
            </div>
          </div>
        </div>
        {/* =========================================== */}
        <div className="container-cards">
          {
            pokemonListPaginated.map(pokemon => (
              <PokemonCard
                url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                key={pokemon.url ? pokemon.url : pokemon.pokemon.url} />
            ))

          }
        </div>
        {/* =========================================== */}
        <div className="navigation">

          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="btn-pagination"
          >

            <i class="fa-solid fa-arrow-left"></i>
          </button>

          <button className="btn-page">{page}</button>
        
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPage}
            className="btn-pagination"
            
          >
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      
    </>
  );
}
export default Pokedex;