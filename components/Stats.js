import useStats from "../utils/useStats";
import styled from "styled-components";

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;
const StatBlock = styled.div`
  background: #f2f2f2;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 10px;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  console.log(stats, loading, error);
  if (loading) return <p>Loading...</p>;
  if (stats.error) {
    return (
      <>
        <p>Sorry, that country is not yet in our database</p>
        <p>Please, try another country</p>
      </>
    )
  }
  return (
    <StatGrid>
      <StatBlock>
        <h3>Confirmed:</h3>
        <span>{stats.confirmed.value}</span>
      </StatBlock>
      <StatBlock>
        <h3>Deaths:</h3>
        <span>{stats.deaths.value}</span>
      </StatBlock>
      <StatBlock>
        <h3>Recovered:</h3>
        <span>{stats.recovered.value}</span>
      </StatBlock>
    </StatGrid>
  );
}
