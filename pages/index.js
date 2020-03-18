import styled, { createGlobalStyle } from "styled-components";
import Stats from "../components/Stats";
import CountrySelector from "../components/CountrySelector";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  html {
    font-family: sans-serif;
  }
  body {
    // margin: 20px;
    // display: flex;
    // align-content: center;
    text-align: center;
  }
  h2 {
    margin-bottom: 10px;
  }
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CovidApp = styled.div`
  width: 60%;
  min-width: 350px;
  height: 35vh;
  background: azure;
  padding: 20px;
  border-radius: 20px;
  border: turquoise 1px solid;
`;

export default function IndexPage() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <CovidApp>
          <h1>Covid-19 React App</h1>
          <br/>
          <h2>World</h2>
          <Stats url="https://covid19.mathdro.id/api"></Stats>
          <br />
          <CountrySelector></CountrySelector>
        </CovidApp>
      </Container>
    </>
  );
}
