import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [hpStats, setHpStats] = useState({});
  const [attackStats, setAttackStats] = useState({});
  const [defenseStats, setDefenseStats] = useState({});
  const [specialAttackStats, setSpecialAttackStats] = useState({});
  const [specialDefenseStats, setSpecialDefenseStats] = useState({});
  const [speedStats, setSpeedStats] = useState({});
  const [loading, setLoading] = useState(false); // เพิ่ม state loading

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
            type2: pokemonData.types[1] ? pokemonData.types[1].type.name : null,
            sprites: pokemonData.sprites // เพิ่ม sprites เข้าไปใน details
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

  const fetchPokemonStats = async () => {
    setLoading(true); // เริ่มการโหลดข้อมูล
    const fetchStats = async (url, statName) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const stat = data.stats.find(stat => stat.stat.name === statName);
        if (stat) {
          return stat.base_stat;
        }
      } catch (error) {
        console.error(`เกิดข้อผิดพลาดในการดึงข้อมูล ${statName} ของ Pokemon:`, error);
      }
      return null;
    };

    const newHpStats = {};
    const newAttackStats = {};
    const newDefenseStats = {};
    const newSpecialAttackStats = {};
    const newSpecialDefenseStats = {};
    const newSpeedStats = {};
    await Promise.all(pokemonList.map(async (pokemon) => {
      const hpStat = await fetchStats(pokemon.url, 'hp');
      const attackStat = await fetchStats(pokemon.url, 'attack');
      const defenseStat = await fetchStats(pokemon.url, 'defense');
      const specialAttackStat = await fetchStats(pokemon.url, 'special-attack');
      const specialDefenseStat = await fetchStats(pokemon.url, 'special-defense');
      const speedStat = await fetchStats(pokemon.url, 'speed');
      newHpStats[pokemon.name] = hpStat;
      newAttackStats[pokemon.name] = attackStat;
      newDefenseStats[pokemon.name] = defenseStat;
      newSpecialAttackStats[pokemon.name] = specialAttackStat;
      newSpecialDefenseStats[pokemon.name] = specialDefenseStat;
      newSpeedStats[pokemon.name] = speedStat;
    }));
    setHpStats(newHpStats);
    setAttackStats(newAttackStats);
    setDefenseStats(newDefenseStats);
    setSpecialAttackStats(newSpecialAttackStats);
    setSpecialDefenseStats(newSpecialDefenseStats);
    setSpeedStats(newSpeedStats);
    setLoading(false); // สิ้นสุดการโหลดข้อมูล
  };

  return (
    <div className="container">
      <h1>API <br/>Pokemon</h1>
      <button className="api button" onClick={fetchPokemonStats}>Get Pokemon dex</button><br/>
      {loading && <p>Loading...</p>} {/* แสดง Loading... เมื่อกำลังโหลดข้อมูล */}
      <ul>
        {pokemonList.map((pokemon, index) => (
          <div key={index} className="pokemon-card">
            {pokemonDetails[pokemon.name] && (
              <div>
                <img src={pokemonDetails[pokemon.name].sprites.front_default} alt={`Front ${pokemon.name}`} />
                <img src={pokemonDetails[pokemon.name].sprites.back_default} alt={`Back ${pokemon.name}`} />
              </div>
            )}
            <strong>Name: {pokemon.name}</strong><br />
            <strong>Type 1:</strong> {pokemonDetails[pokemon.name]?.type1} <br />
            <strong>Type 2:</strong> {pokemonDetails[pokemon.name]?.type2} <br />
            <strong>Base Stats:</strong><br />
            <>HP = {hpStats[pokemon.name]}</><br />
            <>Attack = {attackStats[pokemon.name]}</><br />
            <>Defense = {defenseStats[pokemon.name]}</><br />
            <>Special-attack = {specialAttackStats[pokemon.name]}</><br />
            <>Special-defense = {specialDefenseStats[pokemon.name]}</><br />
            <>Speed = {speedStats[pokemon.name]}</><br />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
