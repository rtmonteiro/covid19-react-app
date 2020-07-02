import useStats from "../utils/useStats";
import styled from "styled-components";

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  @media screen and (max-width: 748px) {
    justify-content: center;
    grid-template-columns: 60%;
    grid-template-rows: repeat(3, 1fr);
  }
`;

const StatBlock = styled.div`
  background: teal;
  color: white;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 10px;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  transition: background 0.2s;
  cursor: default;
  &:hover {
    background: #00646a;
  }
`;

export default function Stats({ url, local }) {
  let { stats, loading, error } = useStats(url);
  // console.log(stats, loading, error);
  if (loading) return <p>Loading...</p>;

  if (local === 'Global') {
    stats = stats.Global;
    return (
      <StatGrid>
        <StatBlock>
          <h3>Confirmed:</h3>
          <span>{stats.TotalConfirmed}</span>
        </StatBlock>
        <StatBlock>
          <h3>Deaths:</h3>
          <span>{stats.TotalDeaths}</span>
        </StatBlock>
        <StatBlock>
          <h3>Recovered:</h3>
          <span>{stats.TotalRecovered}</span>
        </StatBlock>
      </StatGrid>
    );
  }

  if (stats.length === 0 ) {
    return (
      <>
        <p>Sorry, that country is not yet in our database</p>
        <p>Please, try another country</p>
      </>
    )
  }
  stats = stats[stats.length - 1];
  return (
    <StatGrid>
      <StatBlock>
        <h3>Confirmed:</h3>
        <span>{stats.Confirmed}</span>
      </StatBlock>
      <StatBlock>
        <h3>Deaths:</h3>
        <span>{stats.Deaths}</span>
      </StatBlock>
      <StatBlock>
        <h3>Recovered:</h3>
        <span>{stats.Recovered}</span>
      </StatBlock>
    </StatGrid>
  );
}
