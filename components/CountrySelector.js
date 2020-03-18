import { useState } from "react";
import useStats from "../utils/useStats";
import Stats from "./Stats";
import styled from "styled-components";

const CountrySelected = styled.div`
  select {
    margin-bottom: 10px;
    font-size: 1.2rem;
    width: 30%;
    border-radius: 5px;
  }
`;

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats('https://covid19.mathdro.id/api/countries');
  const [selectedCountry, setSelectedCountry] = useState('BRA');
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  
  return (
    <CountrySelected>
      <h2>Currently Showing {selectedCountry}</h2>
      <select
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {Object.entries(countries.countries).map(([country, code]) => (
          <option 
            selected={selectedCountry === countries.iso3[code]} 
            key={`${code}-${country}`} 
            value={countries.iso3[code]}
          >
            {country}
          </option>
        ))}
      </select>
      <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
      {/* <Stats url={`https://covid19.mathdro.id/api/countries/BRA`}></Stats> */}
    </CountrySelected>
  );
}
