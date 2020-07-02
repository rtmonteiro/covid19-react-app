import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Head from 'next/head'
import Stats from '../components/Stats'
import CountrySelector from '../components/CountrySelector'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  html {
    font-family: sans-serif;
  }
  body {
    text-align: center;
  }
  h2 {
    margin-bottom: 10px;
  }
`;

const Container = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  justify-content: center;
  align-items: center;
  @media (min-width: 500px) {
    margin-top: 2rem;
  }
`;

const CovidApp = styled.div`
  background: azure;
  padding: 20px;
  border-radius: 20px;
  border: turquoise 1px solid;
  @media (max-width: 748px) {
    border-radius: 0px;
  }
`;

const Footer = styled.div`
  margin-top: 15px;
  padding: 10px;
  background: #99ffff;
  border-radius: 5px;
  font-weight: bold;
  a {
    color: inherit;
  }
`;

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="COVID-19 Dashboard with numbers of confirmed, recovered and death cases related with the virus around the world"/>
        <title>Covid-19 React App</title>
      </Head>
      <GlobalStyle />
      <Container>
        <CovidApp>
          <h1>Covid-19 React App</h1>
          <br />
          <h2>World 🌎</h2>
          <Stats url="https://api.covid19api.com/summary" local="Global"></Stats>
          <br />
          <CountrySelector></CountrySelector>
          <Footer>
            Made with ❤ by <a href="https://github.com/rtmonteiro/covid19-react-app">Ryan Monteiro</a>
          </Footer>
        </CovidApp>
      </Container>
    </>
  )
}
