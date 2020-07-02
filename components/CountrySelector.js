import { useState } from "react";
import styled from "styled-components";
import countryFlagEmoji from 'country-flag-emoji';

import Stats from "./Stats";

import useStats from "../utils/useStats";
import countriesObj from '../utils/countries-obj';


const CountrySelected = styled.div`
  select {
    margin-bottom: 10px;
    font-size: 1.2rem;
    width: 30%;
    border-radius: 5px;
  }
  h2 {
    margin: 10px;
  }
`;

export default function CountrySelector() {
  const { stats, loading, error } = useStats('https://covid19.mathdro.id/api/countries');
  const [selectedCountry, setSelectedCountry] = useState('BRA');
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <CountrySelected>
      <h3>Currently Showing:</h3>
      <h2> {countriesObj[selectedCountry].name} {countryFlagEmoji.get(countriesObj[selectedCountry].code).emoji}</h2>
      <select
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {stats.countries.forEach(country => {
          // if (country.iso3 == undefined) {
          //   return;
          // } else {
          //   return (
          //     <option
          //       selected={selectedCountry === country.iso3[code]}
          //       key={country}
          //       value={country.iso3[code]}
          //     >
          //       {country}
          //     </option>
          //   );
          // }
        }
        )}
      </select>
      <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
    </CountrySelected>
  );
}
