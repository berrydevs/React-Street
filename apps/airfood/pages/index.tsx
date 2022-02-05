import styled from 'styled-components';
import Header from '../components/header/header';
import Hero from '../components/hero/hero';
import Navbar from '../components/navbar/navbar';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  return (
    <>
    <Header></Header>
    <Hero></Hero>
    </>
  );
}

export default Index;
