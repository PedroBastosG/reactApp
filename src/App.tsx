import styled from 'styled-components'
import { Deshboard } from './components/Deshboard';
import { Header } from './components/header';
import { GlobalStyle } from './styles/global';



//preciso criar um novo componente 
/*
const Title = styled.h1`
color:brown;
font-size: 70px;
font-weight:bold;
`
*/
export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Deshboard />
    </>
  );
}


