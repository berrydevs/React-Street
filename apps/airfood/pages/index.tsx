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
import Cta from '../components/cta/cta';
import Footer from '../components/footer/footer';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': IonIcon;
    }
  }
}

interface IonIcon
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  name: string;
}

export function Index() {
  return (
    <>
      <Script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></Script>
      <Header></Header>
      <main>
        <Hero></Hero>
        <FeaturedIn></FeaturedIn>
        <HowItWorks></HowItWorks>
        <Meals></Meals>
        <Testimonials></Testimonials>
        <PricingTable></PricingTable>
        <Features></Features>
        <Cta></Cta>
      </main>

      <Footer></Footer>
    </>
  );
}

export default Index;
