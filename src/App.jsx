import { useState } from 'react'
import './App.css'
import styled, { createGlobalStyle } from 'styled-components';

import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Contact } from "./components/Contact"

const GlobalStyle = createGlobalStyle`
  :root {
    --navy: #241f54;
    --medium-purple: #2e266c;
    --gold: #f0ca17;
    --gold-hover: #c8ad38;
    --white: #ffffff;
    --text-dark: #1a1a1a;
    --text-light: #ffffff;
    --bg-light: #f9f9f9;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--white);
    color: var(--text-dark);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Georgia', serif;
    color: var(--navy);
    font-weight: normal;
  }
    
  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: 'Inter', sans-serif;
  }
`;

const Main = styled.main`
  min-height: 100vh;
  background-color: var(--white);
`;

function App() {

  return (
    <>
      <GlobalStyle />
      <Main>
        <Navbar />
        <Hero />
        <Services />  
        <Contact />
      </Main>
    </>
  )
}

export default App
