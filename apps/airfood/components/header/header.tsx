import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
/* eslint-disable-next-line */
export interface HeaderProps {}

const Wrapper = styled.div`
  color: pink;
`;

export function Header(props: HeaderProps) {
  return (
    <Wrapper>
      <Hero>
        <TextContainer>
          <Heading>
            A healthy meal delivered to your door, every single day
          </Heading>
          <Description>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs. We have delivered 250,000+ meals last year!
          </Description>
          <LinkStyles href="/">Lets Eat Well!</LinkStyles>
          <LinkStyles href="/">Learn more</LinkStyles>
        </TextContainer>
        <ImageContainer>
          <ImageStyles
            src={'/static/img/hero.png'}
            width={1479}
            height={1459}
            alt="Airfood, different people eating healthy food."
          />
        </ImageContainer>
      </Hero>
    </Wrapper>
  );
}
const Hero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 130rem;
  margin: 0 auto;
`;
const TextContainer = styled.div``;
const Heading = styled.h1``;
const Description = styled.p``;

const ImageContainer = styled.div``;
const ImageStyles = styled(Image)`
  width: 100%;
`;
const LinkStyles = styled(Link)``;

export default Header;
