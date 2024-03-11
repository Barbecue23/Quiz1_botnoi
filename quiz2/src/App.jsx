import React, { useState, useEffect } from 'react';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [hpStats, setHpStats] = useState({});
  const [attackStats, setAttackStats] = useState({});
  const [defenseStats, setDefenseStats] = useState({});
  const [specialattack, setSpecialattack] = useState({});
  const [specialdefense, setSpecialdefense] = useState({});

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
        const data = await response.json();
        const details = {};
        await Promise.all(data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          const pokemonData = await pokemonResponse.json();
          details[pokemon.name] = {
            type1: pokemonData.types[0].type.name,
            type2: pokemonData.types[1] ? pokemonData.types[1].type.name : null
          };
        }));
        setPokemonDetails(details);
        setPokemonList(data.results);
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล Pokemon:', error);
      }
    };

    fetchPokemonData();
  }, []);

  useEffect(() => {
    const fetchHpBaseStat = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const hpStat = data.stats.find(stat => stat.stat.name === 'hp');
        if (hpStat) {
          return hpStat.base_stat;
        }
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล Pokemon:', error);
      }
      return null;
    };

    const fetchAttackBaseStat = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const attackStat = data.stats.find(stat => stat.stat.name === 'attack');
        if (attackStat) {
          return attackStat.base_stat;
        }
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล Pokemon:', error);
      }
      return null;
    };

    const fetchDefenseBaseStat = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const defenseStat = data.stats.find(stat => stat.stat.name === 'defense');
        if (defenseStat) {
          return defenseStat.base_stat;
        }
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล Pokemon:', error);
      }
      return null;
    };

    const fetchSpecialattack = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const specialattack = data.stats.find(stat => stat.stat.name === 'special-attack');
        if (specialattack) {
          return specialattack.base_stat;
        }
      }
      catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล Pokemon:', error);
      }
      return null;
    }
    const fetchPokemonStats = async () => {
      const newHpStats = {};
      const newAttackStats = {};
      const newDefenseStats = {};
      const newSpecialattack = {};
      await Promise.all(pokemonList.map(async (pokemon) => {
        const hpBaseStat = await fetchHpBaseStat(pokemon.url);
        const attackBaseStat = await fetchAttackBaseStat(pokemon.url);
        const defenseBaseStat = await fetchDefenseBaseStat(pokemon.url);
        const specialattack = await fetchSpecialattack(pokemon.url);
        newHpStats[pokemon.name] = hpBaseStat;
        newAttackStats[pokemon.name] = attackBaseStat;
        newDefenseStats[pokemon.name] = defenseBaseStat;
        newSpecialattack[pokemon.name] = specialattack;
      }));
      setHpStats(newHpStats);
      setAttackStats(newAttackStats);
      setDefenseStats(newDefenseStats);
      setSpecialattack(newSpecialattack);
    };

    fetchPokemonStats();
  }, [pokemonList]);

  return (
    <div>
      <h1>Pokemon Base Stats</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <dir key={index}>
            <strong>Name:</strong> {pokemon.name} <br />
            <strong>Type 1:</strong> {pokemonDetails[pokemon.name]?.type1} <br />
            <strong>Type 2:</strong> {pokemonDetails[pokemon.name]?.type2} <br />
            <strong>Base Stats:</strong><br />
            <>HP = {hpStats[pokemon.name]}</><br />
            <>Attack = {attackStats[pokemon.name]}</><br />
            <>Defense = {defenseStats[pokemon.name]}</><br/>
            <>Specialattack = {specialattack[pokemon.name]}</><br/>
          </dir>
        ))}
      </ul>
    </div>
  );
}

export default App;
