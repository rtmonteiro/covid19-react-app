import { useState } from "react";
import styled from "styled-components";
import countryFlagEmoji from 'country-flag-emoji';

import Stats from "./Stats";

import useStats from "../utils/useStats";


const CountrySelected = styled.div`
  select {
    margin-bottom: 10px;
    font-size: 1.2rem;
    width: 80%;
    max-width: 350px;
    border-radius: 5px;
  }
  option {
    width: 100%;
  }
  h2 {
    margin: 10px;
  }
`;

export default function CountrySelector() {
  const { stats: data, loading, error } = useStats('https://api.covid19api.com/countries');
  const [selectedCountry, setSelectedCountry] = useState({
    Country: 'Brazil',
    Slug: 'brazil',
    ISO2: 'BR'
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const titleText = countryFlagEmoji.get(selectedCountry.ISO2) ? countryFlagEmoji.get(selectedCountry.ISO2).emoji : ''; 

  function handleChange (event) {
    const index = data.findIndex(x => x.ISO2 == event.target.value)
    setSelectedCountry(data[index]);
  }

  return (
    <CountrySelected>
      <h3>Currently Showing:</h3>
      <h2> {selectedCountry.Country} {titleText}</h2>
      <select
        onChange={handleChange}
        value={selectedCountry.ISO2}
      >
        {data.map((item, index) => {
          // console.log(item);

          return (
            <option
              key={index}
              value={item.ISO2}
            >
              {item.Country}
            </option>
          );
        })}
      </select>
      <Stats url={`https://api.covid19api.com/live/country/${selectedCountry.Slug}`} local={selectedCountry.Country}></Stats>
    </CountrySelected>
  );
  // return (
  //   <CountrySelected>
  //     <h3>Currently Showing:</h3>
  //     <h2> {countriesObj[selectedCountry].name} {countryFlagEmoji.get(countriesObj[selectedCountry].code).emoji}</h2>
  //     <select
  //       onChange={e => {
  //         setSelectedCountry(e.target.value);
  //       }}
  //     >
  //       {data.countries.forEach(country => {
  //         // if (country.iso3 == undefined) {
  //         //   return;
  //         // } else {
  //         //   return (
  //         //     <option
  //         //       selected={selectedCountry === country.iso3[code]}
  //         //       key={country}
  //         //       value={country.iso3[code]}
  //         //     >
  //         //       {country}
  //         //     </option>
  //         //   );
  //         // }
  //       }
  //       )}
  //     </select>
  //     <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
  //   </CountrySelected>
  // );
}
