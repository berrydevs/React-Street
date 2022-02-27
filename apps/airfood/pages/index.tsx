import styled from 'styled-components';
import FeaturedIn from '../components/featured-in/featured-in';
import Header from '../components/header/header';
import Hero from '../components/hero/hero';
import HowItWorks from '../components/how-it-works/how-it-works';
import Navbar from '../components/navbar/navbar';
import Script from 'next/script';
import Meals from '../components/meals/meals';
import Testimonials from '../components/testimonials/testimonials';
import PricingTable from '../components/pricing-table/pricing-table';
import Features from '../components/features/features';
const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  return (
    <>
      <Script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></Script>
      <Header></Header>
      <Hero></Hero>
      <FeaturedIn></FeaturedIn>
      <HowItWorks></HowItWorks>
      <Meals></Meals>
      <Testimonials></Testimonials>
      <PricingTable></PricingTable>
      <Features></Features>
    </>
  );
}

export default Index;
