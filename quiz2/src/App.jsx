import React, { useState, useEffect } from 'react';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล Pokemon:', error);
      }
    };

    fetchPokemonData();
  }, []);

  const [hpStats, setHpStats] = useState({});

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

    const fetchHpStats = async () => {
      const newHpStats = {};
      await Promise.all(pokemonList.map(async (pokemon) => {
        const hpBaseStat = await fetchHpBaseStat(pokemon.url);
        newHpStats[pokemon.name] = hpBaseStat;
      }));
      setHpStats(newHpStats);
    };

    fetchHpStats();
  }, [pokemonList]);

  return (
    <div>
      <h1>Pokemon Base Stats</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <strong>Name:</strong> {pokemon.name} <br></br>
            <strong>HP:</strong> {hpStats[pokemon.name]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
